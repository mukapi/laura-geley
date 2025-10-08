// ========================================
// 🖼️ HOVER IMAGE - COMPATIBLE BARBA.JS
// ========================================
// Fait apparaître une image au hover d'un texte + effet magnetic (suit la souris)

console.log("📁 hover-image.js loaded");

// Fonction principale d'initialisation
window.initHoverImage = function () {
  console.log("🎯 initHoverImage called");

  // Désactiver sur les appareils tactiles (mobile/tablette)
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    console.log("📱 Touch device detected - hover-image disabled");
    return; // Ne pas initialiser le script sur tactile
  }

  // Vérifier que GSAP est disponible
  if (typeof gsap === "undefined") {
    console.warn("⚠️ GSAP not loaded yet, retrying in 100ms...");
    setTimeout(() => {
      if (typeof gsap !== "undefined") {
        window.initHoverImage();
      } else {
        console.error("❌ GSAP still not available after retry");
      }
    }, 100);
    return;
  }

  // Nettoyer les anciens event listeners
  if (window.hoverImageCleanup) {
    window.hoverImageCleanup();
  }

  // Réinitialiser le tableau des handlers
  const handlers = [];

  // Sélectionner tous les triggers (spans avec attribut data-hover-image)
  const triggers = document.querySelectorAll("[data-hover-image]");

  if (triggers.length === 0) {
    console.log("⚠️ No hover-image triggers found on page");
    return;
  }

  console.log(`✅ Found ${triggers.length} hover-image trigger(s)`);

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
      xPercent: -50, // Centré horizontalement
      yPercent: 0, // Pas de centrage vertical = l'image démarre du haut
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

      // Vérifier si on veut l'image au-dessus ou en dessous
      const position = trigger.getAttribute("data-hover-position") || "below";
      let topPosition;

      if (position === "above") {
        // Au-dessus du texte
        const imageHeight = image.offsetHeight || image.clientHeight || 300; // Hauteur estimée plus large
        topPosition = rect.top - imageHeight - 10;
      } else {
        // En dessous du texte (par défaut)
        topPosition = rect.bottom + 10;
      }

      gsap.to(image, {
        left: e.clientX,
        top: topPosition,
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
    console.log("🧹 Cleaning up hover-image listeners");
    handlers.forEach(
      ({ trigger, handleMouseEnter, handleMouseLeave, handleMouseMove }) => {
        trigger.removeEventListener("mouseenter", handleMouseEnter);
        trigger.removeEventListener("mouseleave", handleMouseLeave);
        trigger.removeEventListener("mousemove", handleMouseMove);
      }
    );
  };

  console.log("🎯 initHoverImage finished");
};

// ========================================
// 🔄 INITIALISATION AUTOMATIQUE
// ========================================

console.log("🔄 hover-image - Setting up fallback initialization");

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("🔄 hover-image - DOMContentLoaded fallback");
    setTimeout(() => {
      console.log("🔄 hover-image - Calling initHoverImage as fallback");
      if (typeof window.initHoverImage === "function") {
        window.initHoverImage();
      }
    }, 200);
  });
} else {
  // DOM déjà prêt
  console.log("🔄 hover-image - DOM already ready, calling initHoverImage");
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
    console.log("🔄 hover-image - Barba detected, setting up hooks");

    // Hook pour réinitialiser après chaque transition
    barba.hooks.afterEnter((data) => {
      console.log("🔄 hover-image - Barba afterEnter hook triggered");
      setTimeout(() => {
        console.log("🔄 hover-image - Reinitializing after Barba transition");
        if (typeof window.initHoverImage === "function") {
          window.initHoverImage();
        }
      }, 100);
    });

    console.log("✅ hover-image - Barba hooks registered successfully");
  } else {
    console.log("⚠️ hover-image - Barba not found, using fallback only");
  }
}, 500);
