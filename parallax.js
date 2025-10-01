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
// 🎪 COMPATIBILITÉ BARBA.JS (AUTO-DÉTECTION)
// ========================================

setTimeout(() => {
  if (typeof barba !== "undefined") {
    barba.hooks.afterEnter((data) => {
      setTimeout(() => {
        if (typeof window.initParallax === "function") {
          window.initParallax();
        }
      }, 100);
    });
  }
}, 500);
