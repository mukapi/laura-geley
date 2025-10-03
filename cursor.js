// Nettoyer les anciens event listeners et timeouts
if (window.cursorCleanup) {
  window.cursorCleanup();
}

// Fonction d'initialisation globale pour Barba.js
window.initAllCursors = function () {
  // Vérifier que GSAP est disponible
  if (typeof gsap === "undefined") {
    setTimeout(() => {
      if (typeof gsap !== "undefined") {
        window.initAllCursors();
      }
    }, 100);
    return;
  }

  try {
    initProjectSingleCardCursors();
  } catch (e) {
    // Erreur silencieuse
  }

  try {
    initTestimonialsGridCursor();
  } catch (e) {
    // Erreur silencieuse
  }

  try {
    initScopeListCursors();
  } catch (e) {
    // Erreur silencieuse
  }

  try {
    initChallengesGridCursors();
  } catch (e) {
    // Erreur silencieuse
  }
};

// Fonction d'initialisation des project single cards
function initProjectSingleCardCursors() {
  const cards = document.querySelectorAll(".project_single_card");

  cards.forEach((card) => {
    const cursor = card.querySelector(".project_cursor");
    if (cursor) {
      initializeCursor(card, cursor);
    }
  });
}

// Fonction d'initialisation du testimonials grid
function initTestimonialsGridCursor() {
  const testimonialsGrid = document.querySelector(".testimonials_grid");

  if (testimonialsGrid) {
    let cursor = testimonialsGrid.querySelector(".project_cursor");

    if (!cursor) {
      const swiperContainer = testimonialsGrid.closest(".swiper");
      if (swiperContainer) {
        cursor = swiperContainer.querySelector(".project_cursor");
      }
    }

    if (cursor) {
      initializeCursor(testimonialsGrid, cursor);
    }
  }
}

// Fonction d'initialisation des scope list cursors
function initScopeListCursors() {
  const scopeListWrappers = document.querySelectorAll(
    ".scope_list.swiper-wrapper"
  );

  scopeListWrappers.forEach((scopeListWrapper) => {
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

    // Gérer le hover de la dernière challenge_card
    const challengeCards = scopeListWrapper.querySelectorAll(".challenge_card");

    if (challengeCards.length > 0) {
      const lastCard = challengeCards[challengeCards.length - 1];
      const customCursor = lastCard.querySelector(".project_cursor");

      // Variable de contrôle pour désactiver le curseur drag
      let isDragCursorDisabled = false;

      // Initialiser le curseur drag pour le wrapper
      if (dragCursor) {
        // Forcer le reset du curseur drag (override les styles inline)
        dragCursor.removeAttribute("style");

        // Attendre un peu puis réinitialiser
        setTimeout(() => {
          gsap.set(dragCursor, {
            opacity: 0,
            scale: 0.8,
          });

          // Gérer manuellement les événements du curseur drag avec contrôle
          let hideTimeout;

          const handleDragMouseEnter = () => {
            if (isDragCursorDisabled) return;
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
            if (isDragCursorDisabled) return;
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
            if (isDragCursorDisabled) return;
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
        customCursor.removeAttribute("style");

        setTimeout(() => {
          gsap.set(customCursor, { opacity: 0, scale: 0.8 });
        }, 100);
      }

      // Fonction pour gérer la classe is-highlight selon la taille d'écran
      function updateHighlightClass() {
        if (window.innerWidth <= 991) {
          // Sur tablette/mobile : toujours ajouter is-highlight
          lastCard.classList.add("is-highlight");
        } else {
          // Sur desktop : enlever is-highlight (sera géré par hover)
          lastCard.classList.remove("is-highlight");
        }
      }

      // Appliquer au chargement
      updateHighlightClass();

      // Appliquer au redimensionnement
      window.addEventListener("resize", updateHighlightClass);

      // Gérer le hover de la dernière carte (seulement sur desktop)
      lastCard.addEventListener("mouseenter", (e) => {
        if (window.innerWidth <= 991) return; // Pas de hover sur mobile/tablette

        e.stopPropagation(); // Empêcher l'événement de remonter au wrapper
        lastCard.classList.add("is-highlight");

        // Désactiver le curseur drag et montrer le curseur custom
        if (dragCursor) {
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

        e.stopPropagation(); // Empêcher l'événement de remonter au wrapper
        lastCard.classList.remove("is-highlight");

        // Réactiver le curseur drag et cacher le curseur custom
        if (dragCursor) {
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
}

// Fonction d'initialisation des challenges grid cursors
function initChallengesGridCursors() {
  const challengesGridWrappers = document.querySelectorAll(
    ".challenges_grid.swiper-wrapper"
  );

  console.log(
    "🔍 Challenges grid wrappers trouvés:",
    challengesGridWrappers.length
  );

  challengesGridWrappers.forEach((challengesGridWrapper) => {
    // Chercher le curseur drag dans le parent swiper
    const swiperContainer = challengesGridWrapper.closest(".swiper");
    let dragCursor = null;

    if (swiperContainer) {
      // Chercher le curseur dans le wrapper
      dragCursor = challengesGridWrapper.querySelector(".project_cursor");
    }

    console.log("🎯 Curseur trouvé:", dragCursor);

    if (dragCursor) {
      // Forcer le reset du curseur drag
      dragCursor.removeAttribute("style");

      setTimeout(() => {
        gsap.set(dragCursor, {
          opacity: 0,
          scale: 0.8,
        });

        let hideTimeout;

        const handleDragMouseEnter = () => {
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
          const rect = challengesGridWrapper.getBoundingClientRect();
          gsap.to(dragCursor, {
            left: e.clientX - rect.left,
            top: e.clientY - rect.top,
            duration: 0.05,
            ease: "none",
          });
        };

        challengesGridWrapper.addEventListener(
          "mouseenter",
          handleDragMouseEnter
        );
        challengesGridWrapper.addEventListener(
          "mouseleave",
          handleDragMouseLeave
        );
        challengesGridWrapper.addEventListener(
          "mousemove",
          handleDragMouseMove
        );
      }, 100);
    }
  });
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

// Initialisation automatique si barba.js ne fonctionne pas
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (typeof window.initAllCursors === "function") {
        window.initAllCursors();
      }
    }, 200);
  });
} else {
  // DOM déjà prêt
  setTimeout(() => {
    if (typeof window.initAllCursors === "function") {
      window.initAllCursors();
    }
  }, 200);
}

// ========================================
// COMPATIBILITÉ BARBA.JS (si barba existe)
// ========================================

// Attendre que Barba soit disponible
setTimeout(() => {
  if (typeof barba !== "undefined") {
    // Hook pour réinitialiser les curseurs après chaque transition
    barba.hooks.afterEnter((data) => {
      setTimeout(() => {
        if (typeof window.initAllCursors === "function") {
          window.initAllCursors();
        }
      }, 100);
    });
  }
}, 500);
