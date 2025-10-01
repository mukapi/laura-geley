// ========================================
// 🔒 MENU SCROLL LOCK - COMPATIBLE BARBA.JS
// ========================================
// Désactive le scroll Lenis quand le menu mobile Webflow est ouvert

console.log("📁 menu-scroll-lock.js loaded");

// Fonction principale d'initialisation
window.initMenuScrollLock = function () {
  console.log("🎯 initMenuScrollLock called");

  // Vérifier que Lenis est disponible
  if (typeof window.lenis === "undefined" || !window.lenis) {
    console.log("⚠️ Lenis not available yet, retrying in 200ms");
    setTimeout(() => {
      if (typeof window.lenis !== "undefined" && window.lenis) {
        console.log("✅ Lenis now available, retrying initMenuScrollLock");
        window.initMenuScrollLock();
      } else {
        console.warn("❌ Lenis still not available after retry");
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
    console.log("⚠️ No .nav_menu_btn element found on this page");
    return;
  }

  console.log("✅ Found .nav_menu_btn element, setting up observer");

  // Observer les changements de classe sur le nav
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        const target = mutation.target;

        if (target.classList.contains("w--open")) {
          // Menu ouvert → Bloquer le scroll
          console.log("🔒 Menu opened - stopping scroll");
          if (window.stopLenis) {
            window.stopLenis();
          }

          // Bonus : Empêcher aussi le scroll natif (au cas où)
          document.body.style.overflow = "hidden";
        } else {
          // Menu fermé → Réactiver le scroll
          console.log("🔓 Menu closed - starting scroll");
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

  console.log("✅ Menu scroll lock initialized successfully");
};

// ========================================
// 🔄 INITIALISATION AUTOMATIQUE
// ========================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("🔄 menu-scroll-lock - DOMContentLoaded fallback");
    setTimeout(() => {
      if (typeof window.initMenuScrollLock === "function") {
        window.initMenuScrollLock();
      }
    }, 200);
  });
} else {
  // DOM déjà prêt
  console.log("🔄 menu-scroll-lock - DOM already ready");
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
    console.log("🔄 menu-scroll-lock - Barba detected, setting up hooks");

    // Hook pour réinitialiser après chaque transition
    barba.hooks.afterEnter((data) => {
      console.log("🔄 menu-scroll-lock - Barba afterEnter hook triggered");
      setTimeout(() => {
        console.log(
          "🔄 menu-scroll-lock - Reinitializing after Barba transition"
        );
        if (typeof window.initMenuScrollLock === "function") {
          window.initMenuScrollLock();
        }
      }, 100);
    });

    console.log("✅ menu-scroll-lock - Barba hooks registered successfully");
  } else {
    console.log("⚠️ menu-scroll-lock - Barba not found, using fallback only");
  }
}, 500);

