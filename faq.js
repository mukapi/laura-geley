// ========================================
// 📋 FAQ - COMPATIBLE BARBA.JS
// ========================================

// Lock global pour éviter les appels multiples
let isInitializing = false;

// Fonction qui tente d'initialiser le FAQ avec retry
function attemptFAQInit(retries = 3) {
  if (isInitializing) {
    console.log("⏸️ attemptFAQInit déjà en cours, skip");
    return;
  }

  isInitializing = true;
  console.log("🔍 attemptFAQInit - Tentative", 4 - retries, "/", 3);

  // Trouver le PREMIER DROPDOWN VISIBLE (pas juste first-child)
  const allDropdowns = document.querySelectorAll(
    ".cs_sticky_menu .cs_sticky_dropdown:not(.w-condition-invisible)"
  );

  console.log("📊 Dropdowns visibles trouvés:", allDropdowns.length);

  if (allDropdowns.length === 0) {
    console.log("⚠️ Aucun dropdown visible, sortie");
    isInitializing = false;
    return;
  }

  const firstVisibleDropdown = allDropdowns[0];
  const firstToggle = firstVisibleDropdown.querySelector(".cs_sticky_toggle");
  const parentDropdown = firstToggle?.closest(".w-dropdown");

  console.log("🎯 Premier dropdown visible:", firstVisibleDropdown);
  console.log("🔘 Toggle trouvé:", firstToggle);
  console.log("📦 Parent dropdown:", parentDropdown);

  if (!firstToggle || !parentDropdown) {
    console.log("❌ Toggle ou parent manquant, sortie");
    isInitializing = false;
    return;
  }

  try {
    console.log("🎯 Forçage direct de l'ouverture du dropdown...");

    // Trouver la liste dropdown
    const dropdown_list = parentDropdown.querySelector(".w-dropdown-list");
    console.log("🔍 Dropdown list trouvé:", dropdown_list);

    if (!dropdown_list) {
      console.log("❌ Liste dropdown introuvable, retry");
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

    console.log("🎉 Dropdown forcé en ouverture (sans animation Webflow)");

    // Relâcher le lock après l'ouverture
    setTimeout(() => {
      isInitializing = false;
      console.log("🔓 Lock isInitializing relâché");
    }, 300);
  } catch (e) {
    console.error("❌ Erreur dans attemptFAQInit:", e);
    isInitializing = false;
    // En cas d'erreur, réessayer si possible
    if (retries > 0) {
      setTimeout(() => attemptFAQInit(retries - 1), 200);
    }
  }
}

// Fonction pour gérer le dernier dropdown visible
function updateLastVisibleDropdown() {
  console.log("🔄 updateLastVisibleDropdown appelée");

  const menu = document.querySelector(".cs_sticky_menu");
  if (!menu) {
    console.log("❌ Menu .cs_sticky_menu introuvable");
    return;
  }

  const allDropdowns = menu.querySelectorAll(".cs_sticky_dropdown");
  console.log("📊 Total dropdowns:", allDropdowns.length);

  if (allDropdowns.length === 0) return;

  // Enlever la classe is-last de tous les dropdowns visibles
  const visibleBeforeRemove = menu.querySelectorAll(
    ".cs_sticky_dropdown:not(.w-condition-invisible)"
  );
  console.log("🧹 Retrait is-last de", visibleBeforeRemove.length, "dropdowns");

  visibleBeforeRemove.forEach((dropdown) => {
    dropdown.classList.remove("is-last");
  });

  // Trouver le dernier dropdown visible (pas invisible)
  const visibleDropdowns = Array.from(allDropdowns).filter(
    (dropdown) => !dropdown.classList.contains("w-condition-invisible")
  );

  console.log("✅ Dropdowns visibles:", visibleDropdowns.length);

  // Ajouter la classe is-last au dernier dropdown visible
  if (visibleDropdowns.length > 0) {
    const lastVisibleDropdown = visibleDropdowns[visibleDropdowns.length - 1];
    const toggleText = lastVisibleDropdown
      .querySelector(".cs_sticky_text")
      ?.textContent.trim();
    console.log("🎯 Ajout is-last au dernier visible:", toggleText);
    lastVisibleDropdown.classList.add("is-last");
  }
}

// Fonction pour observer les changements de classes
function initLastVisibleObserver() {
  console.log("👀 initLastVisibleObserver démarré");

  const menu = document.querySelector(".cs_sticky_menu");
  if (!menu) {
    console.log("❌ Menu introuvable");
    return;
  }

  // Nettoyer l'ancien observer si existe
  if (window.faqObserver) {
    console.log("🧹 Nettoyage ancien observer");
    window.faqObserver.disconnect();
  }

  // Ne PAS exécuter au démarrage car déjà fait AVANT l'ouverture du dropdown
  // L'update sera fait uniquement quand w-condition-invisible change
  console.log(
    "⏭️ is-last déjà appliqué avant ouverture, observer prêt pour les changements"
  );

  // Observer les changements de classes avec protection contre les boucles
  let isUpdating = false;
  const observer = new MutationObserver((mutations) => {
    if (isUpdating) {
      console.log("⏸️ MutationObserver: déjà en update, skip");
      return;
    }

    console.log("👁️ MutationObserver: mutations détectées:", mutations.length);

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

        console.log(
          "🔍 Dropdown muté:",
          target.querySelector(".cs_sticky_text")?.textContent.trim()
        );
        console.log(
          "   Avant invisible:",
          hadInvisible,
          "/ Maintenant:",
          hasInvisible
        );

        // On ne s'intéresse QUE si w-condition-invisible a changé
        const changed = hadInvisible !== hasInvisible;
        if (changed) {
          console.log("✅ Changement pertinent détecté!");
        }
        return changed;
      }
      return false;
    });

    if (hasRelevantChange) {
      console.log(
        "🔥 MutationObserver: Changement pertinent, appel updateLastVisibleDropdown"
      );
      isUpdating = true;
      updateLastVisibleDropdown();
      setTimeout(() => {
        isUpdating = false;
        console.log("✅ MutationObserver: Lock relâché");
      }, 100);
    } else {
      console.log("⏭️ MutationObserver: Pas de changement pertinent, skip");
    }
  });

  observer.observe(menu, {
    attributes: true,
    attributeOldValue: true, // Pour comparer l'ancienne valeur
    subtree: true,
    attributeFilter: ["class"],
  });

  console.log("✅ Observer activé et stocké dans window.faqObserver");

  // Stocker l'observer pour cleanup
  window.faqObserver = observer;
}

// ========================================
// 🎬 FONCTION PRINCIPALE D'INITIALISATION
// ========================================

window.initFAQ = function () {
  console.log("🎯 initFAQ called");

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
