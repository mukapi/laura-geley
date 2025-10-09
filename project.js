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

  // Fonction de suivi de la souris (stockée globalement pour cleanup)
  window.projectFollowMouse = function (event) {
    const container = document.querySelector(".past_projects_cursor_list");
    if (!container) return;

    gsap.to(container, {
      x: event.clientX,
      y: event.clientY - 220,
      duration: 1,
      ease: "power1.out",
    });
  };

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
  document.addEventListener("mousemove", window.projectFollowMouse);

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
    }
  });
};

// Fonction de nettoyage globale (méthode brutale mais efficace)
window.projectCursorCleanup = () => {
  // Supprimer le listener du document (on ne peut pas cloner document)
  if (window.projectFollowMouse) {
    document.removeEventListener("mousemove", window.projectFollowMouse);
  }

  // Cloner et remplacer tous les project items pour supprimer TOUS les event listeners
  document.querySelectorAll(".past_project_item").forEach((item) => {
    const newItem = item.cloneNode(true);
    item.parentNode.replaceChild(newItem, item);
  });

  // Cloner et remplacer le wrapper si il existe
  const projectsWrapper = document.querySelector(".past_projects_list_wrap");
  if (projectsWrapper) {
    const newWrapper = projectsWrapper.cloneNode(true);
    projectsWrapper.parentNode.replaceChild(newWrapper, projectsWrapper);
  }

  // Réinitialiser le curseur et killer les animations GSAP
  const cursorContainer = document.querySelector(".past_projects_cursor_list");
  if (cursorContainer) {
    gsap.killTweensOf(cursorContainer);
    gsap.set(cursorContainer, {
      opacity: 0,
      scale: 0,
      rotation: -45,
    });
  }

  const cursorItems = document.querySelectorAll(
    ".past_projects_cursor_list_item"
  );
  if (cursorItems.length > 0) {
    gsap.killTweensOf(cursorItems);
    gsap.set(cursorItems, {
      yPercent: 100,
    });
  }

  // Réinitialiser le curseur du body
  if (document.body) {
    document.body.style.cursor = "auto";
  }
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
// 🎪 COMPATIBILITÉ BARBA.JS (SYSTÈME UNIFIÉ)
// ========================================

// Système de hooks optimisé selon la doc officielle Barba.js
setTimeout(() => {
  if (typeof barba !== "undefined") {
    console.log("🎯 project.js - Barba detected, setting up optimized hooks");

    // Nettoyer les anciens hooks pour éviter les doublons
    if (window.projectHooksRegistered) {
      console.log("🎯 project.js - Cleaning up old hooks");
      return; // Éviter les hooks multiples
    }

    window.projectHooksRegistered = true;

    // Hook beforeLeave : Nettoyer avant de quitter la page
    barba.hooks.beforeLeave((data) => {
      console.log("🎯 project.js - beforeLeave: cleaning up project cursors");
      if (window.projectCursorCleanup) {
        window.projectCursorCleanup();
      }
    });

    // Hook afterLeave : Nettoyer après avoir quitté la page
    barba.hooks.afterLeave((data) => {
      console.log("🎯 project.js - afterLeave: final cleanup");
      // Nettoyer les animations GSAP en cours
      document
        .querySelectorAll(".past_projects_cursor_list")
        .forEach((cursor) => {
          gsap.killTweensOf(cursor);
        });
      document
        .querySelectorAll(".past_projects_cursor_list_item")
        .forEach((item) => {
          gsap.killTweensOf(item);
        });
    });

    // Hook beforeEnter : Préparer la nouvelle page
    barba.hooks.beforeEnter((data) => {
      console.log("🎯 project.js - beforeEnter: preparing new page");
      // S'assurer que les curseurs sont cachés au début
      document
        .querySelectorAll(".past_projects_cursor_list")
        .forEach((cursor) => {
          gsap.set(cursor, { opacity: 0, scale: 0, rotation: -45 });
        });
      document
        .querySelectorAll(".past_projects_cursor_list_item")
        .forEach((item) => {
          gsap.set(item, { yPercent: 100 });
        });
    });

    // Hook afterEnter : Réinitialiser après l'entrée (PRINCIPAL)
    barba.hooks.afterEnter((data) => {
      console.log("🎯 project.js - afterEnter: reinitializing project cursors");
      setTimeout(() => {
        if (typeof window.initProjectCursorAnimation === "function") {
          try {
            window.initProjectCursorAnimation();
            console.log("✅ project.js - Successfully reinitialized");
          } catch (error) {
            console.error(
              "❌ project.js - Error during reinitialization:",
              error
            );
          }
        }
      }, 150); // Timing optimisé
    });

    console.log("✅ project.js - All Barba hooks registered successfully");
  } else {
    console.log("⚠️ project.js - Barba not found, using fallback only");
  }
}, 500);
