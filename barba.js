// 🎯 BARBA.JS SIMPLIFIÉ - COMPATIBLE AVEC CURSOR.JS
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // ========================================
    // 1. CONFIGURATION BARBA
    // ========================================

    // Overlay de transition (z-index 9998 pour être sous la navbar)
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background-color: #ff641e; z-index: 9998; opacity: 0; pointer-events: none;
    `;
    document.body.appendChild(overlay);

    // Lenis Smooth Scroll
    let lenis = null;
    try {
      lenis = new Lenis({ duration: 1.2, smoothWheel: true, autoRaf: true });

      // Resize au changement de fenêtre
      window.addEventListener("resize", () => {
        if (lenis) lenis.resize();
      });

      // 🔥 SOLUTION AU PROBLÈME DE SCROLL BLOQUÉ
      // Observer les changements de hauteur du body
      const resizeObserver = new ResizeObserver(() => {
        if (lenis) {
          lenis.resize();
        }
      });
      resizeObserver.observe(document.body);

      // Resize quand les images se chargent
      window.addEventListener("load", () => {
        if (lenis) {
          lenis.resize();
        }
      });

      // Resize périodique pendant les 3 premières secondes (au cas où)
      let resizeCount = 0;
      const resizeInterval = setInterval(() => {
        if (lenis) lenis.resize();
        resizeCount++;
        if (resizeCount >= 6) clearInterval(resizeInterval); // 6 x 500ms = 3s
      }, 500);
    } catch (e) {}

    // 🌍 Exposer Lenis globalement pour permettre le contrôle externe
    window.lenis = lenis;

    const stopLenis = () => {
      try {
        lenis && lenis.stop();
      } catch (e) {}
    };
    const startLenis = () => {
      try {
        lenis && lenis.start();
      } catch (e) {}
    };
    const refreshLenis = () => {
      try {
        if (lenis) {
          lenis.resize();
          lenis.scrollTo(0, { immediate: true });
        }
      } catch (e) {}
    };

    // 🌍 Exposer les fonctions de contrôle globalement
    window.stopLenis = stopLenis;
    window.startLenis = startLenis;
    window.refreshLenis = refreshLenis;

    // ========================================
    // 2. INITIALISATION BARBA
    // ========================================

    barba.init({
      preventRunning: true,
      debug: true,
      transitions: [
        {
          name: "fade-transition",

          async leave(data) {
            stopLenis();

            // ✨ SOLUTION : Isoler la navbar pour qu'elle ne réagisse pas à l'overlay
            const navbar = document.querySelector(".nav_wrap");
            if (navbar) {
              navbar.style.zIndex = "9999";
              navbar.style.isolation = "isolate";
            }

            const overlayPromise = new Promise((resolve) => {
              gsap.to(overlay, {
                opacity: 1,
                duration: 0.3,
                onComplete: resolve,
              });
            });
            return overlayPromise;
          },

          beforeEnter(data) {
            window.scrollTo(0, 0);
            gsap.set(data.next.container, {
              visibility: "visible",
              opacity: 0,
            });
          },

          async enter(data) {
            gsap.set(data.current.container, { display: "none" });

            const fadeInPromise = new Promise((resolve) => {
              const tl = gsap.timeline({ onComplete: resolve });
              tl.to(
                overlay,
                { opacity: 0, duration: 0.4, ease: "power2.out" },
                0
              ).to(
                data.next.container,
                { opacity: 1, duration: 0.5, ease: "power2.out" },
                0.1
              );
            });

            await fadeInPromise;
            startLenis();

            // 🎨 Faire réapparaître la navbar APRÈS que l'overlay soit complètement parti
            setTimeout(() => {
              const navbar = document.querySelector(".nav_wrap");
              if (navbar) {
                navbar.style.visibility = "visible";
                gsap.fromTo(
                  navbar,
                  { opacity: 0 },
                  {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                  }
                );
              }
            }, 600);

            // 🔥 Forcer plusieurs resize de Lenis après la transition
            // (pour être sûr que tout le contenu est chargé)
            setTimeout(() => {
              if (lenis) lenis.resize();
            }, 100);
            setTimeout(() => {
              if (lenis) lenis.resize();
            }, 300);
            setTimeout(() => {
              if (lenis) lenis.resize();
            }, 600);
            setTimeout(() => {
              if (lenis) lenis.resize();
            }, 1000);
          },
        },
      ],
    });

    // ========================================
    // 3. HOOKS WEBFLOW (OBLIGATOIRE)
    // ========================================

    // Réinitialisation Webflow
    barba.hooks.enter((data) => {
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(data.next.html, "text/html");
      const bodyClasses = newDoc.documentElement.getAttribute("data-wf-page");
      if (bodyClasses) {
        document.documentElement.setAttribute("data-wf-page", bodyClasses);
      }

      if (window.Webflow) {
        window.Webflow.destroy();
        window.Webflow.ready();
        if (window.Webflow.require) window.Webflow.require("ix2").init();
      }

      // Resize Lenis après init Webflow (animations peuvent changer la hauteur)
      setTimeout(() => {
        if (lenis) lenis.resize();
      }, 200);
    });

    // Fix des liens
    barba.hooks.beforeEnter((data) => {
      setTimeout(() => {
        document.querySelectorAll("a[href]").forEach((link) => {
          if (
            link.hostname === window.location.hostname &&
            !link.hasAttribute("target") &&
            !link.hasAttribute("download") &&
            !link.href.includes("#") &&
            !link.href.includes("mailto:") &&
            !link.href.includes("tel:")
          ) {
            if (!link.hasAttribute("data-barba")) {
              link.setAttribute("data-barba", "link");
            }
          }
        });
      }, 100);
    });

    // ========================================
    // 4. SCRIPTS CUSTOM (LA CLÉ!)
    // ========================================

    barba.hooks.afterEnter((data) => {
      // 🎯 CURSORS (depuis cursor.js)
      if (typeof window.initAllCursors === "function") {
        try {
          window.initAllCursors();
        } catch (e) {
          // Erreur silencieuse
        }
      }

      // 🎯 FAQ (pour votre dropdown)
      setTimeout(() => {
        const firstToggle = document.querySelector(
          ".cs_sticky_menu .cs_sticky_dropdown:first-child .cs_sticky_toggle"
        );
        const parentDropdown = firstToggle?.closest(".w-dropdown");

        if (firstToggle && parentDropdown) {
          try {
            const dropdown = window.Webflow.require("dropdown");
            if (dropdown && dropdown.ready) {
              dropdown.ready();
            }

            setTimeout(() => {
              firstToggle.dispatchEvent(
                new MouseEvent("mousedown", {
                  view: window,
                  bubbles: true,
                  cancelable: true,
                  button: 0,
                  buttons: 1,
                })
              );

              setTimeout(() => {
                firstToggle.dispatchEvent(
                  new MouseEvent("mouseup", {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    button: 0,
                    buttons: 0,
                  })
                );

                setTimeout(() => {
                  const dropdown_list =
                    document.querySelector("#w-dropdown-list-0");
                  if (dropdown_list) {
                    firstToggle.setAttribute("aria-expanded", "true");
                    dropdown_list.style.height = "auto";
                    dropdown_list.style.display = "block";
                    parentDropdown.classList.add("w--open");
                  }
                }, 20);
              }, 5);
            }, 50);
          } catch (e) {
            // Erreur silencieuse
          }
        }
      }, 100);

      // 🔥 Resize Lenis après tous les scripts custom (FAQ, cursors, etc.)
      setTimeout(() => {
        if (lenis) lenis.resize();
      }, 400);
      setTimeout(() => {
        if (lenis) lenis.resize();
      }, 800);
    });

    // Hooks pour résoudre le problème de double-clic
    barba.hooks.before((data) => {
      stopLenis();
    });
  });
})();
