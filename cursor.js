// Nettoyer les anciens event listeners et timeouts
if (window.cursorCleanup) {
  window.cursorCleanup();
}

// Fonction de nettoyage globale
window.cursorCleanup = () => {
  document.querySelectorAll(".project_single_card").forEach((card) => {
    // Cloner et remplacer pour supprimer tous les event listeners
    const newCard = card.cloneNode(true);
    card.parentNode.replaceChild(newCard, card);
  });
};

// Fonction pour initialiser un curseur sur un élément
const initializeCursor = (container, cursor) => {
  let hideTimeout;

  // Reset initial du cursor
  gsap.set(cursor, { opacity: 0, scale: 0.8 });

  const handleMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }

    gsap.killTweensOf(cursor);
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.2)",
    });
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      gsap.killTweensOf(cursor);
      gsap.to(cursor, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "power2.out",
      });
    }, 50);
  };

  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    gsap.to(cursor, {
      left: e.clientX - rect.left,
      top: e.clientY - rect.top,
      duration: 0.05,
      ease: "none",
    });
  };

  container.addEventListener("mouseenter", handleMouseEnter);
  container.addEventListener("mouseleave", handleMouseLeave);
  container.addEventListener("mousemove", handleMouseMove);
};

// Initialiser les cursors pour les project cards
document.querySelectorAll(".project_single_card").forEach((card) => {
  const cursor = card.querySelector(".project_cursor");
  if (cursor) {
    initializeCursor(card, cursor);
  }
});

// Initialiser le curseur pour le slider testimonials
const testimonialsGrid = document.querySelector(".testimonials_grid");
if (testimonialsGrid) {
  // Chercher le curseur dans le parent (swiper) ou dans testimonials_grid
  let cursor = testimonialsGrid.querySelector(".project_cursor");
  if (!cursor) {
    // Si pas trouvé dans testimonials_grid, chercher dans le parent swiper
    const swiperContainer = testimonialsGrid.closest(".swiper");
    if (swiperContainer) {
      cursor = swiperContainer.querySelector(".project_cursor");
    }
  }

  if (cursor) {
    initializeCursor(testimonialsGrid, cursor);
  }
}
