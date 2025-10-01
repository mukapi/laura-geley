// Animation curseur projets - Style Laura Geley
// Compatible avec BarbaJS - PAS de DOMContentLoaded !

// Fonction principale d'initialisation (globale pour Barba)
window.initProjectCursorAnimation = function () {
  // Fonction de nettoyage globale
  if (window.projectCursorCleanup) {
    window.projectCursorCleanup();
  }
  // Vérifier que GSAP est disponible
  if (typeof gsap === "undefined") {
    return;
  }

  // Sélecteurs pour votre structure HTML
  const cursorContainer = document.querySelector(".past_projects_cursor_list");
  const cursorItems = document.querySelectorAll(
    ".past_projects_cursor_list_item"
  );
  const projectsWrapper = document.querySelector(".past_projects_list_wrap");
  const projectItems = document.querySelectorAll(".past_project_item");

  // Vérifications de sécurité
  if (
    !cursorContainer ||
    !projectsWrapper ||
    !cursorItems.length ||
    !projectItems.length
  ) {
    return;
  }

  // Variables d'état
  let currentImageIndex = -1;
  let isActive = false;

  // Configuration initiale du curseur (comme dans le code original)
  gsap.set(cursorContainer, {
    opacity: 0,
    scale: 0,
    rotation: -45,
  });

  // Configuration initiale des items du curseur (décalés vers le bas)
  gsap.set(cursorItems, {
    yPercent: 100,
  });

  // Fonction de suivi de la souris
  function followMouse(event) {
    if (!cursorContainer) return;

    gsap.to(cursorContainer, {
      x: event.clientX,
      y: event.clientY,
      duration: 1,
      ease: "power1.out",
    });
  }

  // Fonction d'apparition du curseur
  function showCursor() {
    if (!cursorContainer || isActive) return;

    isActive = true;
    gsap.to(cursorContainer, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }

  // Fonction de disparition du curseur
  function hideCursor() {
    if (!cursorContainer) return;

    isActive = false;
    gsap.to(cursorContainer, {
      opacity: 0,
      scale: 0,
      rotation: -45,
      duration: 0.4,
      ease: "power2.inOut",
    });

    currentImageIndex = -1;
  }

  // Fonction de changement d'image (animation principale)
  function switchToImage(index) {
    if (!cursorItems || !cursorItems[index]) return;

    const direction = index > currentImageIndex ? 1 : -1;
    const newItem = cursorItems[index];
    const timeline = gsap.timeline({
      defaults: {
        duration: 1.6,
        ease: "expo.out",
      },
    });

    if (currentImageIndex >= 0 && cursorItems[currentImageIndex]) {
      // Animation de transition entre deux images
      const currentItem = cursorItems[currentImageIndex];

      gsap.set(newItem, { yPercent: 100 * direction });
      timeline
        .to(currentItem, { yPercent: -100 * direction })
        .to(newItem, { yPercent: 0 }, "<");
    } else {
      // Première apparition d'image
      timeline.fromTo(newItem, { yPercent: 100 * direction }, { yPercent: 0 });
    }

    currentImageIndex = index;
  }

  // Event listeners

  // Suivi de la souris sur tout le document
  document.addEventListener("mousemove", followMouse);

  // Apparition/disparition sur la zone des projets
  if (projectsWrapper) {
    projectsWrapper.addEventListener("mouseenter", showCursor);
    projectsWrapper.addEventListener("mouseleave", hideCursor);
  }

  // Changement d'image au hover de chaque projet
  projectItems.forEach((projectItem, index) => {
    if (projectItem) {
      const projectTitle = projectItem.querySelector(".past_project_title");

      const hoverHandler = () => {
        switchToImage(index);
        // Changement de couleur du titre en orange
        if (projectTitle) {
          projectTitle.style.color = "#ff641e";
        }
      };

      const leaveHandler = () => {
        // Retour à la couleur originale
        if (projectTitle) {
          projectTitle.style.color = "";
        }
      };

      projectItem.addEventListener("mouseenter", hoverHandler);
      projectItem.addEventListener("mouseleave", leaveHandler);

      // Stockage des références pour le cleanup
      projectItem._hoverHandler = hoverHandler;
      projectItem._leaveHandler = leaveHandler;
    }
  });

  // Fonction de nettoyage (cleanup)
  function cleanup() {
    document.removeEventListener("mousemove", followMouse);

    if (projectsWrapper) {
      projectsWrapper.removeEventListener("mouseenter", showCursor);
      projectsWrapper.removeEventListener("mouseleave", hideCursor);
    }

    projectItems.forEach((projectItem) => {
      if (projectItem && projectItem._hoverHandler) {
        projectItem.removeEventListener(
          "mouseenter",
          projectItem._hoverHandler
        );
        delete projectItem._hoverHandler;
      }
      if (projectItem && projectItem._leaveHandler) {
        projectItem.removeEventListener(
          "mouseleave",
          projectItem._leaveHandler
        );
        delete projectItem._leaveHandler;
      }
    });

    // Réinitialiser le curseur
    if (document.body) {
      document.body.style.cursor = "auto";
    }
  }

  // Stocker la fonction de cleanup globalement pour BarbaJS
  window.projectCursorCleanup = cleanup;

  // Retourner la fonction de cleanup pour pouvoir l'utiliser si nécessaire
  return cleanup;
};

// ========================================
// 🔄 INITIALISATION AUTOMATIQUE
// ========================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (typeof window.initProjectCursorAnimation === "function") {
        window.initProjectCursorAnimation();
      }
    }, 200);
  });
} else {
  setTimeout(() => {
    if (typeof window.initProjectCursorAnimation === "function") {
      window.initProjectCursorAnimation();
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
        if (typeof window.initProjectCursorAnimation === "function") {
          window.initProjectCursorAnimation();
        }
      }, 100);
    });
  }
}, 500);
