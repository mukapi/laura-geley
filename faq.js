// Script FAQ compatible avec BarbaJS - PAS de DOMContentLoaded !

// Fonction qui tente d'initialiser le FAQ avec retry (compatible BarbaJS)
function attemptFAQInit(retries = 3) {
  const firstToggle = document.querySelector(
    ".cs_sticky_menu .cs_sticky_dropdown:first-child .cs_sticky_toggle"
  );
  const parentDropdown = firstToggle?.closest(".w-dropdown");

  if (!firstToggle || !parentDropdown) {
    // Si les éléments n'existent pas sur cette page, pas de problème
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

// Démarrer l'initialisation avec retry - compatible BarbaJS
attemptFAQInit();
