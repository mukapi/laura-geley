// ========================================
// 🖼️ HOVER IMAGE - COMPATIBLE BARBA.JS
// ========================================
// Fait apparaître une image au hover d'un texte + effet magnetic (suit la souris)

// Fonction principale d'initialisation
window.initHoverImage = function () {
  // Désactiver sur les appareils tactiles (mobile/tablette)
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    return; // Ne pas initialiser le script sur tactile
  }

  // Vérifier que GSAP est disponible
  if (typeof gsap === "undefined") {
    setTimeout(() => {
      if (typeof gsap !== "undefined") {
        window.initHoverImage();
      }
    }, 100);
    return;
  }

  // Nettoyer les anciens event listeners AVANT de créer les nouveaux
  if (window.hoverImageCleanup) {
    window.hoverImageCleanup();
  }

  // Sélectionner tous les triggers (spans avec attribut data-hover-image)
  const triggers = document.querySelectorAll("[data-hover-image]");

  if (triggers.length === 0) {
    return;
  }

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
  });
};

// Fonction de nettoyage globale (méthode brutale mais efficace)
window.hoverImageCleanup = () => {
  // Cloner et remplacer tous les triggers pour supprimer TOUS les event listeners
  document.querySelectorAll("[data-hover-image]").forEach((trigger) => {
    const newTrigger = trigger.cloneNode(true);
    trigger.parentNode.replaceChild(newTrigger, trigger);
  });

  // Réinitialiser toutes les images
  document.querySelectorAll("[data-hover-image-id]").forEach((image) => {
    gsap.killTweensOf(image);
    gsap.set(image, {
      opacity: 0,
      scale: 0.8,
      xPercent: -50,
      yPercent: 0,
    });
  });
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
// 🎪 COMPATIBILITÉ BARBA.JS (SYSTÈME UNIFIÉ)
// ========================================

// Debug : Vérifier que le script se charge
console.log("🔍 hover-image.js - Script loaded");

// Système de hooks optimisé selon la doc officielle Barba.js
setTimeout(() => {
  console.log("🔍 hover-image.js - Timeout executed, checking Barba...");
  if (typeof barba !== "undefined") {
    console.log(
      "🎯 hover-image.js - Barba detected, setting up optimized hooks"
    );

    // Nettoyer les anciens hooks pour éviter les doublons
    if (window.hoverImageHooksRegistered) {
      console.log("🎯 hover-image.js - Cleaning up old hooks");
      return; // Éviter les hooks multiples
    }

    window.hoverImageHooksRegistered = true;

    // Hook beforeLeave : Nettoyer avant de quitter la page
    barba.hooks.beforeLeave((data) => {
      console.log("🎯 hover-image.js - beforeLeave: cleaning up hover images");
      if (window.hoverImageCleanup) {
        window.hoverImageCleanup();
      }
    });

    // Hook afterLeave : Nettoyer après avoir quitté la page
    barba.hooks.afterLeave((data) => {
      console.log("🎯 hover-image.js - afterLeave: final cleanup");
      // Nettoyer les animations GSAP en cours
      document.querySelectorAll("[data-hover-image-id]").forEach((image) => {
        gsap.killTweensOf(image);
      });
    });

    // Hook beforeEnter : Préparer la nouvelle page
    barba.hooks.beforeEnter((data) => {
      console.log("🎯 hover-image.js - beforeEnter: preparing new page");
      // S'assurer que les images sont cachées au début
      document.querySelectorAll("[data-hover-image-id]").forEach((image) => {
        gsap.set(image, {
          opacity: 0,
          scale: 0.8,
          xPercent: -50,
          yPercent: 0,
        });
      });
    });

    // Hook afterEnter : Réinitialiser après l'entrée (PRINCIPAL)
    barba.hooks.afterEnter((data) => {
      console.log(
        "🎯 hover-image.js - afterEnter: reinitializing hover images"
      );
      setTimeout(() => {
        if (typeof window.initHoverImage === "function") {
          try {
            window.initHoverImage();
            console.log("✅ hover-image.js - Successfully reinitialized");
          } catch (error) {
            console.error(
              "❌ hover-image.js - Error during reinitialization:",
              error
            );
          }
        }
      }, 150); // Timing optimisé
    });

    console.log("✅ hover-image.js - All Barba hooks registered successfully");
  } else {
    console.log("⚠️ hover-image.js - Barba not found, using fallback only");
  }
}, 500);
