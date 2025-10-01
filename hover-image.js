// ========================================
// 🖼️ HOVER IMAGE - COMPATIBLE BARBA.JS
// ========================================
// Fait apparaître une image au hover d'un texte + effet magnetic (suit la souris)

// Fonction principale d'initialisation
window.initHoverImage = function () {
  // Vérifier que GSAP est disponible
  if (typeof gsap === "undefined") {
    setTimeout(() => {
      if (typeof gsap !== "undefined") {
        window.initHoverImage();
      }
    }, 100);
    return;
  }

  // Nettoyer les anciens event listeners
  if (window.hoverImageCleanup) {
    window.hoverImageCleanup();
  }

  // Sélectionner tous les triggers (spans avec attribut data-hover-image)
  const triggers = document.querySelectorAll("[data-hover-image]");

  if (triggers.length === 0) {
    return;
  }

  // Stocker les handlers pour le cleanup
  const handlers = [];

  triggers.forEach((trigger) => {
    // Récupérer l'ID de l'image cible via l'attribut
    const imageId = trigger.getAttribute("data-hover-image");
    const image = document.querySelector(`[data-hover-image-id="${imageId}"]`);

    if (!image) {
      return;
    }

    // Configuration initiale : image cachée
    gsap.set(image, {
      opacity: 0,
      scale: 0.8,
      xPercent: -50,
      yPercent: -50,
    });

    // Handler mouseenter : faire apparaître l'image
    const handleMouseEnter = () => {
      gsap.to(image, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    // Handler mouseleave : faire disparaître l'image
    const handleMouseLeave = () => {
      gsap.to(image, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    // Handler mousemove : faire suivre la souris (effet magnetic)
    const handleMouseMove = (e) => {
      const rect = trigger.getBoundingClientRect();
      gsap.to(image, {
        left: e.clientX,
        top: rect.bottom + 10, // Juste sous le span + 10px de marge
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Attacher les event listeners
    trigger.addEventListener("mouseenter", handleMouseEnter);
    trigger.addEventListener("mouseleave", handleMouseLeave);
    trigger.addEventListener("mousemove", handleMouseMove);

    // Stocker les handlers pour le cleanup
    handlers.push({
      trigger,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseMove,
    });
  });

  // Fonction de nettoyage globale
  window.hoverImageCleanup = () => {
    handlers.forEach(
      ({ trigger, handleMouseEnter, handleMouseLeave, handleMouseMove }) => {
        trigger.removeEventListener("mouseenter", handleMouseEnter);
        trigger.removeEventListener("mouseleave", handleMouseLeave);
        trigger.removeEventListener("mousemove", handleMouseMove);
      }
    );
  };
};

// ========================================
// 🔄 INITIALISATION AUTOMATIQUE
// ========================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (typeof window.initHoverImage === "function") {
        window.initHoverImage();
      }
    }, 200);
  });
} else {
  setTimeout(() => {
    if (typeof window.initHoverImage === "function") {
      window.initHoverImage();
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
        if (typeof window.initHoverImage === "function") {
          window.initHoverImage();
        }
      }, 100);
    });
  }
}, 500);
