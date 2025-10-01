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

    // Si c'est le slider challenges (contient .challenges_grid), ajouter mousewheel
    if (swiperEl.querySelector(".challenges_grid")) {
      config.mousewheel = true;
    }

    // Si c'est le slider avec scope_list (challenge cards), même config de base
    if (swiperEl.querySelector(".scope_list")) {
      // Même configuration que la base, pas de modifications spécifiques nécessaires
      // Le slider fonctionnera avec la config par défaut
    }

    // Initialiser le Swiper et le stocker
    const swiperInstance = new Swiper(swiperEl, config);
    window.swiperInstances.push(swiperInstance);
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
