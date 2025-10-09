// ========================================
// 🎢 PARALLAX - COMPATIBLE BARBA.JS
// ========================================
// Parallax sur toutes les images dans .project_visual

// Fonction principale d'initialisation
window.initParallax = function () {
  // Vérifier que GSAP et ScrollTrigger sont disponibles
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    setTimeout(() => {
      if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        window.initParallax();
      }
    }, 100);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Nettoyer les anciennes instances ScrollTrigger
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  // Parallax sur toutes les images dans .project_visual
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
};

// ========================================
// 🔄 INITIALISATION AUTOMATIQUE
// ========================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (typeof window.initParallax === "function") {
        window.initParallax();
      }
    }, 200);
  });
} else {
  setTimeout(() => {
    if (typeof window.initParallax === "function") {
      window.initParallax();
    }
  }, 200);
}

// ========================================
// 🎪 COMPATIBILITÉ BARBA.JS (SYSTÈME UNIFIÉ)
// ========================================

// Système de hooks optimisé selon la doc officielle Barba.js
setTimeout(() => {
  if (typeof barba !== "undefined") {
    console.log("🎯 parallax.js - Barba detected, setting up optimized hooks");
    
    // Nettoyer les anciens hooks pour éviter les doublons
    if (window.parallaxHooksRegistered) {
      console.log("🎯 parallax.js - Cleaning up old hooks");
      return; // Éviter les hooks multiples
    }
    
    window.parallaxHooksRegistered = true;

    // Hook beforeLeave : Nettoyer avant de quitter la page
    barba.hooks.beforeLeave((data) => {
      console.log("🎯 parallax.js - beforeLeave: cleaning up parallax");
      // Nettoyer toutes les instances ScrollTrigger
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    });

    // Hook afterLeave : Nettoyer après avoir quitté la page
    barba.hooks.afterLeave((data) => {
      console.log("🎯 parallax.js - afterLeave: final cleanup");
      // S'assurer que ScrollTrigger est bien nettoyé
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    });

    // Hook beforeEnter : Préparer la nouvelle page
    barba.hooks.beforeEnter((data) => {
      console.log("🎯 parallax.js - beforeEnter: preparing new page");
      // S'assurer que les images sont dans leur état initial
      document
        .querySelectorAll(".project_visual .project_image")
        .forEach((image) => {
          gsap.set(image, { objectPosition: "50% 10%" });
        });
    });

    // Hook afterEnter : Réinitialiser après l'entrée (PRINCIPAL)
    barba.hooks.afterEnter((data) => {
      console.log("🎯 parallax.js - afterEnter: reinitializing parallax");
      setTimeout(() => {
        if (typeof window.initParallax === "function") {
          try {
            window.initParallax();
            console.log("✅ parallax.js - Successfully reinitialized");
          } catch (error) {
            console.error(
              "❌ parallax.js - Error during reinitialization:",
              error
            );
          }
        }
      }, 200); // Timing optimisé pour ScrollTrigger
    });

    console.log("✅ parallax.js - All Barba hooks registered successfully");
  } else {
    console.log("⚠️ parallax.js - Barba not found, using fallback only");
  }
}, 500);
