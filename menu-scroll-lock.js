// ========================================
// 🔒 MENU SCROLL LOCK - COMPATIBLE BARBA.JS
// ========================================
// Désactive le scroll Lenis quand le menu mobile Webflow est ouvert

// Fonction principale d'initialisation
window.initMenuScrollLock = function () {
  // Vérifier que Lenis est disponible
  if (typeof window.lenis === "undefined" || !window.lenis) {
    setTimeout(() => {
      if (typeof window.lenis !== "undefined" && window.lenis) {
        window.initMenuScrollLock();
      }
    }, 200);
    return;
  }

  // Nettoyer les anciens observers
  if (window.menuScrollObserver) {
    window.menuScrollObserver.disconnect();
  }

  // Sélecteurs pour le menu Webflow
  // Webflow ajoute la classe w--open sur .nav_menu_btn quand le menu est ouvert
  const menuButton = document.querySelector(".nav_menu_btn");

  if (!menuButton) {
    return;
  }

  // Observer les changements de classe
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const target = mutation.target;

        if (target.classList.contains("w--open")) {
          // Menu ouvert → Bloquer le scroll
          if (window.stopLenis) {
            window.stopLenis();
          }
          // Empêcher aussi le scroll natif
          document.body.style.overflow = "hidden";
        } else {
          // Menu fermé → Réactiver le scroll
          if (window.startLenis) {
            window.startLenis();
          }
          // Réactiver le scroll natif
          document.body.style.overflow = "";
        }
      }
    });
  });

  // Observer le bouton menu
  observer.observe(menuButton, {
    attributes: true,
    attributeFilter: ["class"],
  });

  // Stocker l'observer pour le cleanup
  window.menuScrollObserver = observer;
};

// ========================================
// 🔄 INITIALISATION AUTOMATIQUE
// ========================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (typeof window.initMenuScrollLock === "function") {
        window.initMenuScrollLock();
      }
    }, 200);
  });
} else {
  // DOM déjà prêt
  setTimeout(() => {
    if (typeof window.initMenuScrollLock === "function") {
      window.initMenuScrollLock();
    }
  }, 200);
}

// ========================================
// 🎪 COMPATIBILITÉ BARBA.JS (AUTO-DÉTECTION)
// ========================================

setTimeout(() => {
  if (typeof barba !== "undefined") {
    // Hook pour réinitialiser après chaque transition
    barba.hooks.afterEnter((data) => {
      setTimeout(() => {
        if (typeof window.initMenuScrollLock === "function") {
          window.initMenuScrollLock();
        }
      }, 100);
    });
  }
}, 500);
