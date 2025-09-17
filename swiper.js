// Script Swiper universel pour tous les sliders de la page
// Compatible avec BarbaJS - PAS de DOMContentLoaded !

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

(function () {
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

    // Initialiser le Swiper et le stocker
    const swiperInstance = new Swiper(swiperEl, config);
    window.swiperInstances.push(swiperInstance);
  });
})();
