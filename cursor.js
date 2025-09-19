console.log("📁 cursor.js loaded");
console.log("🔍 cursor.js - window object:", typeof window);
console.log("🔍 cursor.js - document ready state:", document.readyState);
console.log("🔍 cursor.js - GSAP available:", typeof gsap !== "undefined");

// Nettoyer les anciens event listeners et timeouts
if (window.cursorCleanup) {
  console.log("🔍 cursor.js - cleaning up previous cursors");
  window.cursorCleanup();
}

// Fonction d'initialisation globale pour Barba.js
window.initAllCursors = function () {
  console.log("🎯 initAllCursors called");
  console.log("🔍 Document ready state:", document.readyState);
  console.log("🔍 GSAP available:", typeof gsap !== "undefined");

  // Vérifier que GSAP est disponible
  if (typeof gsap === "undefined") {
    console.error("❌ GSAP not available, retrying in 100ms");
    setTimeout(() => {
      if (typeof gsap !== "undefined") {
        console.log("✅ GSAP now available, retrying initAllCursors");
        window.initAllCursors();
      } else {
        console.error("❌ GSAP still not available after retry");
      }
    }, 100);
    return;
  }

  try {
    initProjectSingleCardCursors();
    console.log("✅ initProjectSingleCardCursors completed");
  } catch (e) {
    console.error("❌ Error in initProjectSingleCardCursors:", e);
  }

  try {
    initTestimonialsGridCursor();
    console.log("✅ initTestimonialsGridCursor completed");
  } catch (e) {
    console.error("❌ Error in initTestimonialsGridCursor:", e);
  }

  try {
    initScopeListCursors();
    console.log("✅ initScopeListCursors completed");
  } catch (e) {
    console.error("❌ Error in initScopeListCursors:", e);
  }

  console.log("🎯 initAllCursors finished");
};

console.log("✅ window.initAllCursors function created");

// Fonction d'initialisation des project single cards
function initProjectSingleCardCursors() {
  console.log("🔍 Looking for .project_single_card elements");
  const cards = document.querySelectorAll(".project_single_card");
  console.log("🔍 Found", cards.length, "project_single_card elements");

  cards.forEach((card, index) => {
    const cursor = card.querySelector(".project_cursor");
    console.log(`🔍 Card ${index}: cursor found:`, !!cursor);
    if (cursor) {
      initializeCursor(card, cursor);
    }
  });
}

// Fonction d'initialisation du testimonials grid
function initTestimonialsGridCursor() {
  console.log("🔍 Looking for .testimonials_grid element");
  const testimonialsGrid = document.querySelector(".testimonials_grid");
  console.log("🔍 testimonials_grid found:", !!testimonialsGrid);

  if (testimonialsGrid) {
    let cursor = testimonialsGrid.querySelector(".project_cursor");
    console.log("🔍 Direct cursor found:", !!cursor);

    if (!cursor) {
      const swiperContainer = testimonialsGrid.closest(".swiper");
      console.log("🔍 Swiper container found:", !!swiperContainer);
      if (swiperContainer) {
        cursor = swiperContainer.querySelector(".project_cursor");
        console.log("🔍 Swiper cursor found:", !!cursor);
      }
    }

    if (cursor) {
      console.log("🔍 Initializing testimonials cursor");
      initializeCursor(testimonialsGrid, cursor);
    }
  }
}

// Fonction d'initialisation des scope list cursors
function initScopeListCursors() {
  console.log("🔍 Looking for .scope_list.swiper-wrapper elements");
  const scopeListWrappers = document.querySelectorAll(
    ".scope_list.swiper-wrapper"
  );
  console.log(
    "🔍 Found",
    scopeListWrappers.length,
    "scope_list.swiper-wrapper elements"
  );

  scopeListWrappers.forEach((scopeListWrapper, index) => {
    console.log(`🔍 Processing scope list wrapper ${index}`);
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
console.log("🔄 cursor.js - Setting up fallback initialization");

// Attendre que le DOM soit prêt
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("🔄 cursor.js - DOMContentLoaded fallback");
    setTimeout(() => {
      console.log("🔄 cursor.js - Calling initAllCursors as fallback");
      if (typeof window.initAllCursors === "function") {
        window.initAllCursors();
      }
    }, 200);
  });
} else {
  // DOM déjà prêt
  console.log("🔄 cursor.js - DOM already ready, calling initAllCursors");
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
    console.log("🔄 cursor.js - Barba detected, setting up hooks");

    // Hook pour réinitialiser les curseurs après chaque transition
    barba.hooks.afterEnter((data) => {
      console.log("🔄 cursor.js - Barba afterEnter hook triggered");
      setTimeout(() => {
        console.log(
          "🔄 cursor.js - Reinitializing cursors after Barba transition"
        );
        if (typeof window.initAllCursors === "function") {
          window.initAllCursors();
        }
      }, 100);
    });

    console.log("✅ cursor.js - Barba hooks registered successfully");
  } else {
    console.log("⚠️ cursor.js - Barba not found, using fallback only");
  }
}, 500);
