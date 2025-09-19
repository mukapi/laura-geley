// 🎯 BARBA.JS SIMPLIFIÉ - COMPATIBLE AVEC CURSOR.JS
(function () {
  "use strict";

  console.log("📁 barba.js loaded (simplified version)");

  document.addEventListener("DOMContentLoaded", () => {
    console.log("🔄 Barba.js - DOMContentLoaded triggered");

    // ========================================
    // 1. CONFIGURATION BARBA
    // ========================================

    // Overlay de transition
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background-color: #ff641e; z-index: 9999; opacity: 0; pointer-events: none;
    `;
    document.body.appendChild(overlay);

    // Lenis Smooth Scroll
    let lenis = null;
    try {
      lenis = new Lenis({ duration: 1.2, smoothWheel: true, autoRaf: true });
      window.addEventListener("resize", () => {
        if (lenis) lenis.resize();
      });
    } catch (e) {}

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

            // Forcer un refresh de Lenis après la transition
            setTimeout(() => {
              refreshLenis();
            }, 100);
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
      console.log("🔄 Barba.js afterEnter - calling scripts");

      // 🎯 CURSORS (depuis cursor.js)
      if (typeof window.initAllCursors === "function") {
        console.log("✅ Calling window.initAllCursors from Barba");
        try {
          window.initAllCursors();
          console.log("✅ window.initAllCursors completed successfully");
        } catch (e) {
          console.error("❌ Error calling window.initAllCursors:", e);
        }
      } else {
        console.log("❌ window.initAllCursors not found");
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
    });

    // ========================================
    // 5. HOOKS POUR LES HORLOGES
    // ========================================

    barba.hooks.beforeEnter((data) => {
      const newContainer = data.next.container;
      newContainer.querySelectorAll(".js-clock").forEach((el) => {
        el.style.visibility = "hidden";
      });

      function initClockAndShow() {
        function updateClocks() {
          newContainer.querySelectorAll(".js-clock").forEach((el) => {
            const tz = el.dataset.tz;
            const now = new Date();
            const formatter = new Intl.DateTimeFormat("en-US", {
              timeZone: tz,
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            });
            el.textContent = formatter.format(now);
            el.style.visibility = "visible";
          });
        }

        updateClocks();

        if (window.clockInterval) {
          clearInterval(window.clockInterval);
        }

        window.clockInterval = setInterval(() => {
          document.querySelectorAll(".js-clock").forEach((el) => {
            const tz = el.dataset.tz;
            const now = new Date();
            const formatter = new Intl.DateTimeFormat("en-US", {
              timeZone: tz,
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            });
            el.textContent = formatter.format(now);
          });
        }, 1000);
      }

      setTimeout(initClockAndShow, 50);
    });

    // Hooks pour résoudre le problème de double-clic
    barba.hooks.before((data) => {
      stopLenis();
    });
  });
})();
