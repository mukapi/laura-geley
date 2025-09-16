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

// Initialiser les cursors
document.querySelectorAll(".project_single_card").forEach((card) => {
  const cursor = card.querySelector(".project_cursor");
  let hideTimeout;

  if (cursor) {
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
      const rect = card.getBoundingClientRect();
      gsap.to(cursor, {
        left: e.clientX - rect.left,
        top: e.clientY - rect.top,
        duration: 0.05,
        ease: "none",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mousemove", handleMouseMove);
  }
});
