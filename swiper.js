// ========================================
// 🎠 SWIPER - COMPATIBLE BARBA.JS
// ========================================
// Script Swiper universel pour tous les sliders de la page

// Fonction principale d'initialisation
window.initSwiper = function () {
  // Nettoyer les anciennes instances Swiper
  if (window.swiperInstances) {
    window.swiperInstances.forEach((swiper) => {
      if (swiper && swiper.destroy) {
        swiper.destroy(true, true);
      }
    });
    window.swiperInstances = [];
  }

  // Initialiser les instances
  window.swiperInstances = [];

  // Trouver tous les éléments .swiper
  const swiperElements = document.querySelectorAll(".swiper");

  swiperElements.forEach(function (swiperEl) {
    // Configuration de base pour tous
    let config = {
      slidesPerView: "auto",
      spaceBetween: 0,
      loop: false,
      allowTouchMove: true,
      grabCursor: true,
    };

    // Initialiser le Swiper et le stocker
    const swiperInstance = new Swiper(swiperEl, config);
    window.swiperInstances.push(swiperInstance);

    // ========================================
    // NAVIGATION AU CLIC (gauche/droite)
    // ========================================

    // Ajouter la navigation au clic sur desktop uniquement
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
      // Créer un handler de clic
      const handleClick = (e) => {
        // Ignorer si on est en train de dragger
        if (swiperInstance.touchEventsData.isTouched) {
          return;
        }

        // Récupérer la position du clic
        const rect = swiperEl.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const halfWidth = rect.width / 2;

        if (clickX < halfWidth) {
          // Clic sur la moitié gauche → Slide précédente
          swiperInstance.slidePrev();
        } else {
          // Clic sur la moitié droite → Slide suivante
          swiperInstance.slideNext();
        }
      };

      // Attacher l'event listener
      swiperEl.addEventListener("click", handleClick);
    }
  });
};

// ========================================
// 🔄 INITIALISATION AUTOMATIQUE
// ========================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (typeof window.initSwiper === "function") {
        window.initSwiper();
      }
    }, 200);
  });
} else {
  setTimeout(() => {
    if (typeof window.initSwiper === "function") {
      window.initSwiper();
    }
  }, 200);
}

// ========================================
// 🎪 COMPATIBILITÉ BARBA.JS (SYSTÈME UNIFIÉ)
// ========================================

// Système de hooks optimisé selon la doc officielle Barba.js
setTimeout(() => {
  if (typeof barba !== "undefined") {
    console.log("🎯 swiper.js - Barba detected, setting up optimized hooks");
    
    // Nettoyer les anciens hooks pour éviter les doublons
    if (window.swiperHooksRegistered) {
      console.log("🎯 swiper.js - Cleaning up old hooks");
      return; // Éviter les hooks multiples
    }
    
    window.swiperHooksRegistered = true;

    // Hook beforeLeave : Nettoyer avant de quitter la page
    barba.hooks.beforeLeave((data) => {
      console.log("🎯 swiper.js - beforeLeave: cleaning up swipers");
      // Détruire toutes les instances Swiper existantes
      if (window.swiperInstances) {
        window.swiperInstances.forEach((swiper) => {
          if (swiper && swiper.destroy) {
            swiper.destroy(true, true);
          }
        });
        window.swiperInstances = [];
      }
    });

    // Hook afterLeave : Nettoyer après avoir quitté la page
    barba.hooks.afterLeave((data) => {
      console.log("🎯 swiper.js - afterLeave: final cleanup");
      // S'assurer que tous les swipers sont bien détruits
      document.querySelectorAll(".swiper").forEach((swiperEl) => {
        if (swiperEl.swiper) {
          swiperEl.swiper.destroy(true, true);
        }
      });
    });

    // Hook beforeEnter : Préparer la nouvelle page
    barba.hooks.beforeEnter((data) => {
      console.log("🎯 swiper.js - beforeEnter: preparing new page");
      // S'assurer que les swipers sont dans leur état initial
      document.querySelectorAll(".swiper").forEach((swiperEl) => {
        swiperEl.style.transform = "";
        swiperEl.style.transition = "";
      });
    });

    // Hook afterEnter : Réinitialiser après l'entrée (PRINCIPAL)
    barba.hooks.afterEnter((data) => {
      console.log("🎯 swiper.js - afterEnter: reinitializing swipers");
      setTimeout(() => {
        if (typeof window.initSwiper === "function") {
          try {
            window.initSwiper();
            console.log("✅ swiper.js - Successfully reinitialized");
          } catch (error) {
            console.error(
              "❌ swiper.js - Error during reinitialization:",
              error
            );
          }
        }
      }, 200); // Timing optimisé pour Swiper
    });

    console.log("✅ swiper.js - All Barba hooks registered successfully");
  } else {
    console.log("⚠️ swiper.js - Barba not found, using fallback only");
  }
}, 500);
