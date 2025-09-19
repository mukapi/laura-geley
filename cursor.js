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
  // Chercher le curseur directement dans testimonials_grid
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

// Initialiser les curseurs pour TOUS les sliders scope_list
const scopeListWrappers = document.querySelectorAll(
  ".scope_list.swiper-wrapper"
);
console.log("🔍 scopeListWrappers found:", scopeListWrappers.length);

scopeListWrappers.forEach((scopeListWrapper, index) => {
  console.log(`🔍 Processing scope list ${index + 1}`);

  // Chercher le curseur drag dans le parent swiper (pas dans les cartes)
  const swiperContainer = scopeListWrapper.closest(".swiper");
  let dragCursor = null;

  if (swiperContainer) {
    // Chercher tous les curseurs et prendre celui qui n'est pas dans une carte
    const allCursors = swiperContainer.querySelectorAll(".project_cursor");
    dragCursor = Array.from(allCursors).find(
      (cursor) => !cursor.closest(".challenge_card")
    );
  }
  console.log(`🔍 swiperContainer ${index + 1} found:`, swiperContainer);
  console.log(`🔍 dragCursor ${index + 1} found:`, dragCursor);

  // Gérer le hover de la dernière challenge_card
  const challengeCards = scopeListWrapper.querySelectorAll(".challenge_card");
  console.log(`🔍 challengeCards ${index + 1} found:`, challengeCards.length);

  if (challengeCards.length > 0) {
    const lastCard = challengeCards[challengeCards.length - 1];
    const customCursor = lastCard.querySelector(".project_cursor");
    console.log(`🔍 lastCard ${index + 1} found:`, lastCard);
    console.log(`🔍 customCursor ${index + 1} found:`, customCursor);

    // Variable de contrôle pour désactiver le curseur drag
    let isDragCursorDisabled = false;

    // Initialiser le curseur drag pour le wrapper
    if (dragCursor) {
      console.log("✅ Initializing drag cursor");
      console.log("🔍 Drag cursor initial style:", dragCursor.style.cssText);

      // Forcer le reset du curseur drag (override les styles inline)
      dragCursor.removeAttribute("style"); // Supprimer complètement l'attribut style

      // Attendre un peu puis réinitialiser
      setTimeout(() => {
        gsap.set(dragCursor, {
          opacity: 0,
          scale: 0.8,
        });

        // Gérer manuellement les événements du curseur drag avec contrôle
        let hideTimeout;

        const handleDragMouseEnter = () => {
          if (isDragCursorDisabled) return; // Ne pas afficher si désactivé
          if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
          }
          gsap.killTweensOf(dragCursor);
          gsap.to(dragCursor, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.2)",
          });
        };

        const handleDragMouseLeave = () => {
          if (isDragCursorDisabled) return; // Ne pas gérer si désactivé
          hideTimeout = setTimeout(() => {
            gsap.killTweensOf(dragCursor);
            gsap.to(dragCursor, {
              opacity: 0,
              scale: 0.8,
              duration: 0.2,
              ease: "power2.out",
            });
          }, 50);
        };

        const handleDragMouseMove = (e) => {
          if (isDragCursorDisabled) return; // Ne pas suivre si désactivé
          const rect = scopeListWrapper.getBoundingClientRect();
          gsap.to(dragCursor, {
            left: e.clientX - rect.left,
            top: e.clientY - rect.top,
            duration: 0.05,
            ease: "none",
          });
        };

        scopeListWrapper.addEventListener("mouseenter", handleDragMouseEnter);
        scopeListWrapper.addEventListener("mouseleave", handleDragMouseLeave);
        scopeListWrapper.addEventListener("mousemove", handleDragMouseMove);
      }, 100);
    }

    // Initialiser le curseur custom (caché par défaut)
    if (customCursor) {
      console.log("✅ Initializing custom cursor");
      customCursor.removeAttribute("style"); // Supprimer complètement l'attribut style

      // Attendre un peu puis réinitialiser
      setTimeout(() => {
        gsap.set(customCursor, { opacity: 0, scale: 0.8 });
      }, 100);
    }

    // Fonction pour gérer la classe is-highlight selon la taille d'écran
    function updateHighlightClass() {
      if (window.innerWidth <= 991) {
        // Sur tablette/mobile : toujours ajouter is-highlight
        lastCard.classList.add("is-highlight");
        console.log("📱 Mobile/Tablet: Adding is-highlight automatically");
      } else {
        // Sur desktop : enlever is-highlight (sera géré par hover)
        lastCard.classList.remove("is-highlight");
        console.log("🖥️ Desktop: Removing is-highlight (hover will handle it)");
      }
    }

    // Appliquer au chargement
    updateHighlightClass();

    // Appliquer au redimensionnement
    window.addEventListener("resize", updateHighlightClass);

    // Gérer le hover de la dernière carte (seulement sur desktop)
    lastCard.addEventListener("mouseenter", (e) => {
      if (window.innerWidth <= 991) return; // Pas de hover sur mobile/tablette

      console.log("🖱️ Mouse enter last card");
      e.stopPropagation(); // Empêcher l'événement de remonter au wrapper
      lastCard.classList.add("is-highlight");

      // Désactiver le curseur drag et montrer le curseur custom
      if (dragCursor) {
        console.log("👻 Disabling drag cursor");
        isDragCursorDisabled = true; // Désactiver le curseur drag
        gsap.killTweensOf(dragCursor); // Arrêter toutes les animations en cours
        gsap.to(dragCursor, {
          opacity: 0,
          scale: 0.8,
          duration: 0.2,
          ease: "power2.out",
        });
      }
      if (customCursor) {
        console.log("✨ Showing custom cursor");
        gsap.to(customCursor, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.2)",
        });
      }
    });

    lastCard.addEventListener("mouseleave", (e) => {
      if (window.innerWidth <= 991) return; // Pas de mouseleave sur mobile/tablette

      console.log("🖱️ Mouse leave last card");
      e.stopPropagation(); // Empêcher l'événement de remonter au wrapper
      lastCard.classList.remove("is-highlight");

      // Réactiver le curseur drag et cacher le curseur custom
      if (dragCursor) {
        console.log("🔄 Re-enabling drag cursor");
        isDragCursorDisabled = false; // Réactiver le curseur drag
      }
      if (customCursor) {
        gsap.to(customCursor, {
          opacity: 0,
          scale: 0.8,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    });

    // Faire suivre le curseur custom avec la souris
    if (customCursor) {
      lastCard.addEventListener("mousemove", (e) => {
        const rect = lastCard.getBoundingClientRect();
        gsap.to(customCursor, {
          left: e.clientX - rect.left,
          top: e.clientY - rect.top,
          duration: 0.05,
          ease: "none",
        });
      });
    }
  }
});
