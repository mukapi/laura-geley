// 🎯 TEMPLATE BARBA.JS + WEBFLOW - MÉTHODE QUI MARCHE
// Copier ce template pour tous vos futurs projets

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // ========================================
    // 1. CONFIGURATION BARBA
    // ========================================

    // Overlay de transition (optionnel)
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background-color: #ff641e; z-index: 9999; opacity: 0; pointer-events: none;
    `;
    document.body.appendChild(overlay);

    // Lenis Smooth Scroll (optionnel)
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

    // ========================================
    // 2. INITIALISATION BARBA
    // ========================================

    barba.init({
      preventRunning: true,
      debug: true, // Voir les logs
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
            gsap.set(data.next.container, { opacity: 0 });
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

    // Fix des liens (optionnel mais recommandé)
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
    // 4. VOS SCRIPTS CUSTOM (LA CLÉ!)
    // ========================================

    barba.hooks.afterEnter((data) => {
      // 🎯 SCRIPT 1 : Cursors personnalisés
      function initCursor() {
        console.log("🔄 Initialisation cursors...");

        // Nettoyer les anciens event listeners
        if (window.cursorCleanup) window.cursorCleanup();

        window.cursorCleanup = () => {
          document.querySelectorAll(".project_single_card").forEach((card) => {
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
          });
        };

        // Votre logique de cursor ici
        document.querySelectorAll(".project_single_card").forEach((card) => {
          const cursor = card.querySelector(".project_cursor");
          if (cursor) {
            // ... votre code cursor
          }
        });

        console.log("✅ Cursors initialisés !");
      }

      // 🎯 SCRIPT 2 : Parallax
      function initParallax() {
        console.log("🔄 Initialisation parallax...");

        gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll(".project_visual").forEach((container) => {
          const image = container.querySelector(".project_image");
          if (image) {
            // ... votre code parallax
          }
        });

        console.log("✅ Parallax initialisé !");
      }

      // 🎯 SCRIPT 3 : Ajoutez vos autres scripts ici
      function initAutreScript() {
        console.log("🔄 Initialisation autre script...");

        // Nettoyer si nécessaire
        if (window.autreCleanup) window.autreCleanup();

        // Votre logique

        console.log("✅ Autre script initialisé !");
      }

      // ========================================
      // 5. EXÉCUTION (OBLIGATOIRE)
      // ========================================

      initCursor();
      initParallax();
      // initAutreScript();
    });
  });
})();

// ========================================
// 📋 CHECKLIST POUR NOUVEAUX PROJETS :
// ========================================
//
// ✅ Copier ce template
// ✅ Remplacer les fonctions init* par vos scripts
// ✅ Tester avec console.log pour voir les exécutions
// ✅ NE PAS utiliser data-barba-script dans Webflow
// ✅ NE PAS utiliser DOMContentLoaded dans vos scripts
// ✅ Toujours nettoyer les event listeners
// ✅ Garder debug: true pendant le développement
//
// 🎯 RÉSULTAT : Scripts qui marchent à tous les coups !
