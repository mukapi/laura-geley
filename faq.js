// ========================================
// 📋 FAQ - COMPATIBLE BARBA.JS
// ========================================

// Lock global pour éviter les appels multiples
let isInitializing = false;

// Fonction qui tente d'initialiser le FAQ avec retry
function attemptFAQInit(retries = 3) {
  if (isInitializing) {
    return;
  }

  isInitializing = true;

  // Trouver le PREMIER DROPDOWN VISIBLE (pas juste first-child)
  const allDropdowns = document.querySelectorAll(
    ".cs_sticky_menu .cs_sticky_dropdown:not(.w-condition-invisible)"
  );

  if (allDropdowns.length === 0) {
    isInitializing = false;
    return;
  }

  const firstVisibleDropdown = allDropdowns[0];
  const firstToggle = firstVisibleDropdown.querySelector(".cs_sticky_toggle");
  const parentDropdown = firstToggle?.closest(".w-dropdown");

  if (!firstToggle || !parentDropdown) {
    isInitializing = false;
    return;
  }

  try {
    // Trouver la liste dropdown
    const dropdown_list = parentDropdown.querySelector(".w-dropdown-list");

    if (!dropdown_list) {
      isInitializing = false;
      if (retries > 0) {
        setTimeout(() => attemptFAQInit(retries - 1), 200);
      }
      return;
    }

    // Forcer l'ouverture DIRECTEMENT sans passer par les méthodes Webflow
    firstToggle.setAttribute("aria-expanded", "true");
    firstToggle.classList.add("w--open");
    dropdown_list.style.display = "block";
    dropdown_list.style.opacity = "1";
    dropdown_list.style.transform = "translateY(0)";
    parentDropdown.classList.add("w--open");
    parentDropdown.style.zIndex = "901";

    // Relâcher le lock après l'ouverture
    setTimeout(() => {
      isInitializing = false;
    }, 300);
  } catch (e) {
    isInitializing = false;
    // En cas d'erreur, réessayer si possible
    if (retries > 0) {
      setTimeout(() => attemptFAQInit(retries - 1), 200);
    }
  }
}

// Fonction pour gérer le dernier dropdown visible
function updateLastVisibleDropdown() {
  const menu = document.querySelector(".cs_sticky_menu");
  if (!menu) {
    return;
  }

  const allDropdowns = menu.querySelectorAll(".cs_sticky_dropdown");

  if (allDropdowns.length === 0) return;

  // Enlever la classe is-last de tous les dropdowns visibles
  const visibleBeforeRemove = menu.querySelectorAll(
    ".cs_sticky_dropdown:not(.w-condition-invisible)"
  );

  visibleBeforeRemove.forEach((dropdown) => {
    dropdown.classList.remove("is-last");
  });

  // Trouver le dernier dropdown visible (pas invisible)
  const visibleDropdowns = Array.from(allDropdowns).filter(
    (dropdown) => !dropdown.classList.contains("w-condition-invisible")
  );

  // Ajouter la classe is-last au dernier dropdown visible
  if (visibleDropdowns.length > 0) {
    const lastVisibleDropdown = visibleDropdowns[visibleDropdowns.length - 1];
    lastVisibleDropdown.classList.add("is-last");
  }
}

// Fonction pour observer les changements de classes
function initLastVisibleObserver() {
  const menu = document.querySelector(".cs_sticky_menu");
  if (!menu) {
    return;
  }

  // Nettoyer l'ancien observer si existe
  if (window.faqObserver) {
    window.faqObserver.disconnect();
  }

  // Observer les changements de classes avec protection contre les boucles
  let isUpdating = false;
  const observer = new MutationObserver((mutations) => {
    if (isUpdating) {
      return;
    }

    // Vérifier si c'est VRAIMENT un changement de w-condition-invisible
    const hasRelevantChange = mutations.some((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const target = mutation.target;

        // Seulement si c'est un cs_sticky_dropdown
        if (!target.classList.contains("cs_sticky_dropdown")) {
          return false;
        }

        // Récupérer l'ancienne valeur de la classe
        const oldClasses = mutation.oldValue || "";
        const hadInvisible = oldClasses.includes("w-condition-invisible");
        const hasInvisible = target.classList.contains("w-condition-invisible");

        // On ne s'intéresse QUE si w-condition-invisible a changé
        const changed = hadInvisible !== hasInvisible;
        return changed;
      }
      return false;
    });

    if (hasRelevantChange) {
      isUpdating = true;
      updateLastVisibleDropdown();
      setTimeout(() => {
        isUpdating = false;
      }, 100);
    }
  });

  observer.observe(menu, {
    attributes: true,
    attributeOldValue: true,
    subtree: true,
    attributeFilter: ["class"],
  });

  // Stocker l'observer pour cleanup
  window.faqObserver = observer;
}

// ========================================
// 🎬 FONCTION PRINCIPALE D'INITIALISATION
// ========================================

window.initFAQ = function () {
  // Appliquer is-last AVANT d'ouvrir le dropdown pour éviter les interférences
  updateLastVisibleDropdown();

  // Démarrer l'initialisation avec retry APRÈS avoir appliqué is-last
  setTimeout(() => {
    attemptFAQInit();
  }, 100);

  // Initialiser l'observateur APRÈS l'ouverture du dropdown
  setTimeout(() => {
    initLastVisibleObserver();
  }, 800);
};

// ========================================
// 🔄 INITIALISATION AUTOMATIQUE
// ========================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (typeof window.initFAQ === "function") {
        window.initFAQ();
      }
    }, 200);
  });
} else {
  setTimeout(() => {
    if (typeof window.initFAQ === "function") {
      window.initFAQ();
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
        if (typeof window.initFAQ === "function") {
          window.initFAQ();
        }
      }, 100);
    });
  }
}, 500);
