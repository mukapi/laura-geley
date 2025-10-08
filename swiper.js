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
// 🎪 COMPATIBILITÉ BARBA.JS (AUTO-DÉTECTION)
// ========================================

setTimeout(() => {
  if (typeof barba !== "undefined") {
    barba.hooks.afterEnter((data) => {
      setTimeout(() => {
        if (typeof window.initSwiper === "function") {
          window.initSwiper();
        }
      }, 100);
    });
  }
}, 500);
