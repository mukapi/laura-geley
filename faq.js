// ========================================
// 📋 FAQ - COMPATIBLE BARBA.JS
// ========================================

// Fonction qui tente d'initialiser le FAQ avec retry
function attemptFAQInit(retries = 3) {
  // Trouver le PREMIER DROPDOWN VISIBLE (pas juste first-child)
  const allDropdowns = document.querySelectorAll(
    ".cs_sticky_menu .cs_sticky_dropdown:not(.w-condition-invisible)"
  );

  if (allDropdowns.length === 0) {
    // Aucun dropdown visible, pas de problème
    return;
  }

  const firstVisibleDropdown = allDropdowns[0];
  const firstToggle = firstVisibleDropdown.querySelector(".cs_sticky_toggle");
  const parentDropdown = firstToggle?.closest(".w-dropdown");

  if (!firstToggle || !parentDropdown) {
    // Si les éléments n'existent pas, pas de problème
    return;
  }

  try {
    // Vérifier que Webflow est disponible et initialisé
    if (!window.Webflow || !window.Webflow.require) {
      if (retries > 0) {
        setTimeout(() => attemptFAQInit(retries - 1), 200);
      }
      return;
    }

    // Récupérer le module dropdown de Webflow
    const dropdown = window.Webflow.require("dropdown");

    if (dropdown) {
      // Réinitialiser Webflow dropdowns
      if (dropdown.ready) {
        dropdown.ready();
      }
      if (dropdown.design) {
        dropdown.design();
      }
      if (dropdown.preview) {
        dropdown.preview();
        dropdown.preview();
      }

      // Petit délai supplémentaire pour s'assurer que tout est prêt
      setTimeout(() => {
        // Simuler mousedown + mouseup en séquence
        firstToggle.dispatchEvent(
          new MouseEvent("mousedown", {
            view: window,
            bubbles: true,
            cancelable: true,
            button: 0,
            buttons: 1,
          })
        );

        setTimeout(() => {
          firstToggle.dispatchEvent(
            new MouseEvent("mouseup", {
              view: window,
              bubbles: true,
              cancelable: true,
              button: 0,
              buttons: 0,
            })
          );

          // Force l'ouverture en manipulant directement le DOM comme Webflow le fait
          setTimeout(() => {
            const dropdown_list = document.querySelector("#w-dropdown-list-0");
            if (dropdown_list) {
              firstToggle.setAttribute("aria-expanded", "true");
              dropdown_list.style.height = "auto";
              dropdown_list.style.display = "block";
              parentDropdown.classList.add("w--open");
            }
          }, 50);
        }, 10);
      }, 100);
    } else if (retries > 0) {
      // Si dropdown n'est pas encore disponible, réessayer
      setTimeout(() => attemptFAQInit(retries - 1), 200);
    }
  } catch (e) {
    // En cas d'erreur, réessayer si possible
    if (retries > 0) {
      setTimeout(() => attemptFAQInit(retries - 1), 200);
    }
  }
}

// Fonction pour gérer le dernier dropdown visible
function updateLastVisibleDropdown() {
  const menu = document.querySelector(".cs_sticky_menu");
  if (!menu) return;

  const allDropdowns = menu.querySelectorAll(".cs_sticky_dropdown");
  if (allDropdowns.length === 0) return;

  // Enlever la classe is-last de tous les dropdowns visibles
  menu
    .querySelectorAll(".cs_sticky_dropdown:not(.w-condition-invisible)")
    .forEach((dropdown) => {
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
  if (!menu) return;

  // Nettoyer l'ancien observer si existe
  if (window.faqObserver) {
    window.faqObserver.disconnect();
  }

  // NE PAS exécuter immédiatement pour éviter interférences avec l'ouverture du dropdown
  // L'update sera fait uniquement quand w-condition-invisible change vraiment

  // Observer les changements de classes avec protection contre les boucles
  let isUpdating = false;
  const observer = new MutationObserver((mutations) => {
    if (isUpdating) return;

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
        return hadInvisible !== hasInvisible;
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
    attributeOldValue: true, // Pour comparer l'ancienne valeur
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
  console.log("🎯 initFAQ called");

  // Démarrer l'initialisation avec retry
  attemptFAQInit();

  // Initialiser l'observateur APRÈS l'ouverture du dropdown (éviter interférences)
  setTimeout(() => {
    initLastVisibleObserver();
  }, 500);
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
    console.log("🔄 FAQ - Barba detected, setting up hooks");
    barba.hooks.afterEnter((data) => {
      setTimeout(() => {
        if (typeof window.initFAQ === "function") {
          window.initFAQ();
        }
      }, 100);
    });
  }
}, 500);
