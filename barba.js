(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // Overlay orange
    const overlay = document.createElement("div");
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background-color: #ff641e; z-index: 9999; opacity: 0; pointer-events: none;
      `;
    document.body.appendChild(overlay);

    // Lenis
    let lenis = null;
    try {
      lenis = new Lenis({ duration: 1.2, smoothWheel: true, autoRaf: true });
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

    barba.init({
      preventRunning: true,
      debug: true, // Pour voir les logs et diagnostiquer
      transitions: [
        {
          name: "fade-transition",

          // Inspiré de l'exemple qui fonctionne : Promise.all approach
          async leave(data) {
            stopLenis();

            // Créer une promesse pour l'overlay qui apparaît
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
            // Préparer le nouveau container (invisible pour l'instant)
            gsap.set(data.next.container, {
              visibility: "visible",
              opacity: 0,
            });
          },

          async enter(data) {
            // Cacher l'ancien container (comme dans l'exemple)
            gsap.set(data.current.container, { display: "none" });

            // Fade in pur, sans mouvement
            gsap.set(data.next.container, {
              opacity: 0,
            });

            // Promise.all approach : attendre que tout soit prêt
            const fadeInPromise = new Promise((resolve) => {
              // Timeline qui fait tout en même temps
              const tl = gsap.timeline({ onComplete: resolve });

              // 1. L'overlay disparaît
              tl.to(
                overlay,
                {
                  opacity: 0,
                  duration: 0.4,
                  ease: "power2.out",
                },
                0
              )
                // 2. En même temps, le container fait son fade in pur
                .to(
                  data.next.container,
                  {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                  },
                  0.1 // Légère avance pour le contenu
                );
            });

            await fadeInPromise;
            startLenis();
          },
        },
      ],
    });

    // Hooks pour résoudre le problème de double-clic
    barba.hooks.before((data) => {
      // S'assurer que Lenis est arrêté avant toute transition
      stopLenis();
    });

    barba.hooks.beforeEnter((data) => {
      // Forcer la mise à jour des liens après chaque page
      setTimeout(() => {
        // Réinitialiser les event listeners sur les liens
        document.querySelectorAll("a[href]").forEach((link) => {
          // Vérifier que le lien est interne et devrait être géré par Barba
          if (
            link.hostname === window.location.hostname &&
            !link.hasAttribute("target") &&
            !link.hasAttribute("download") &&
            !link.href.includes("#") &&
            !link.href.includes("mailto:") &&
            !link.href.includes("tel:")
          ) {
            // Forcer l'attribut data-barba si nécessaire
            if (!link.hasAttribute("data-barba")) {
              link.setAttribute("data-barba", "link");
            }
          }
        });
      }, 100);
    });

    // Webflow + Custom Scripts (méthode qui MARCHE selon la communauté)
    barba.hooks.enter((data) => {
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(data.next.html, "text/html");
      const bodyClasses = newDoc.documentElement.getAttribute("data-wf-page");
      if (bodyClasses) {
        document.documentElement.setAttribute("data-wf-page", bodyClasses);
      }

      // 1. Réinitialiser Webflow
      if (window.Webflow) {
        window.Webflow.destroy();
        window.Webflow.ready();
        if (window.Webflow.require) window.Webflow.require("ix2").init();
      }
    });

    // Solution communautaire : hooks séparés pour les scripts custom
    barba.hooks.afterEnter((data) => {
      // Fonction d'initialisation des cursors (appelée à chaque page)
      function initCursor() {
        console.log("🔄 Initialisation cursors...");

        // Nettoyer les anciens event listeners
        if (window.cursorCleanup) {
          window.cursorCleanup();
        }

        // Fonction de nettoyage globale
        window.cursorCleanup = () => {
          document.querySelectorAll(".project_single_card").forEach((card) => {
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
          });
        };

        // Initialiser les cursors
        document.querySelectorAll(".project_single_card").forEach((card) => {
          const cursor = card.querySelector(".project_cursor");
          let hideTimeout;

          if (cursor) {
            gsap.set(cursor, { opacity: 0, scale: 0.8 });

            const handleMouseEnter = () => {
              if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
              }
              gsap.killTweensOf(cursor);
              gsap.to(cursor, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.2)",
              });
            };

            const handleMouseLeave = () => {
              hideTimeout = setTimeout(() => {
                gsap.killTweensOf(cursor);
                gsap.to(cursor, {
                  opacity: 0,
                  scale: 0.8,
                  duration: 0.2,
                  ease: "power2.out",
                });
              }, 50);
            };

            const handleMouseMove = (e) => {
              const rect = card.getBoundingClientRect();
              gsap.to(cursor, {
                left: e.clientX - rect.left,
                top: e.clientY - rect.top,
                duration: 0.05,
                ease: "none",
              });
            };

            card.addEventListener("mouseenter", handleMouseEnter);
            card.addEventListener("mouseleave", handleMouseLeave);
            card.addEventListener("mousemove", handleMouseMove);
          }
        });

        console.log("✅ Cursors initialisés !");
      }

      // Fonction d'initialisation du parallax
      function initParallax() {
        console.log("🔄 Initialisation parallax...");

        gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll(".project_visual").forEach((container) => {
          const image = container.querySelector(".project_image");

          if (image) {
            gsap.fromTo(
              image,
              {
                objectPosition: "50% 10%",
              },
              {
                objectPosition: "50% 90%",
                ease: "none",
                scrollTrigger: {
                  trigger: container,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            );
          }
        });

        console.log("✅ Parallax initialisé !");
      }

      // Exécuter les initialisations
      initCursor();
      initParallax();
    });
  });
})();
