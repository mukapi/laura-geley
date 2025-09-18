const firstToggle = document.querySelector(
  ".cs_sticky_menu .cs_sticky_dropdown:first-child .cs_sticky_toggle"
);
const parentDropdown = firstToggle?.closest(".w-dropdown");

if (firstToggle && parentDropdown) {
  try {
    // Récupérer le module dropdown de Webflow
    const dropdown = window.Webflow.require("dropdown");

    // Appeler ready() pour initialiser
    if (dropdown.ready) {
      dropdown.ready();
    }

    // Essayer design() et preview()
    if (dropdown.design) {
      dropdown.design();
    }

    if (dropdown.preview) {
      dropdown.preview();
    }

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
    }, 10);

    // Force l'ouverture en manipulant directement le DOM comme Webflow le fait
    const dropdown_list = document.querySelector("#w-dropdown-list-0");
    if (dropdown_list) {
      firstToggle.setAttribute("aria-expanded", "true");
      dropdown_list.style.height = "auto";
      dropdown_list.style.display = "block";
      parentDropdown.classList.add("w--open");
    }
  } catch (e) {
    // Erreur silencieuse
  }
}
