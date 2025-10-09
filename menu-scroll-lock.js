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
// 🎪 COMPATIBILITÉ BARBA.JS (SYSTÈME UNIFIÉ)
// ========================================

// Système de hooks optimisé selon la doc officielle Barba.js
setTimeout(() => {
  if (typeof barba !== "undefined") {
    console.log(
      "🎯 menu-scroll-lock.js - Barba detected, setting up optimized hooks"
    );

    // Hook beforeLeave : Nettoyer avant de quitter la page
    barba.hooks.beforeLeave((data) => {
      console.log(
        "🎯 menu-scroll-lock.js - beforeLeave: cleaning up menu scroll lock"
      );
      if (window.menuScrollObserver) {
        window.menuScrollObserver.disconnect();
        window.menuScrollObserver = null;
      }
      // Réactiver le scroll avant de quitter
      if (window.startLenis) {
        window.startLenis();
      }
      document.body.style.overflow = "";
    });

    // Hook afterEnter : Réinitialiser après l'entrée (PRINCIPAL)
    barba.hooks.afterEnter((data) => {
      console.log(
        "🎯 menu-scroll-lock.js - afterEnter: reinitializing menu scroll lock"
      );
      setTimeout(() => {
        if (typeof window.initMenuScrollLock === "function") {
          try {
            window.initMenuScrollLock();
            console.log("✅ menu-scroll-lock.js - Successfully reinitialized");
          } catch (error) {
            console.error(
              "❌ menu-scroll-lock.js - Error during reinitialization:",
              error
            );
          }
        }
      }, 150); // Timing optimisé
    });

    console.log(
      "✅ menu-scroll-lock.js - All Barba hooks registered successfully"
    );
  } else {
    console.log(
      "⚠️ menu-scroll-lock.js - Barba not found, using fallback only"
    );
  }
}, 500);
