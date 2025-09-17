// Script de copie d'email avec attributs personnalisés uniquement
// Compatible avec BarbaJS

// Nettoyer les anciens event listeners
if (window.copyCleanup) {
  window.copyCleanup();
}

(function () {
  function handleCopyClick(e) {
    // Vérifie si l'élément cliqué a l'attribut data-copy-trigger
    const copyElement = e.target.closest("[data-copy-trigger]");
    if (!copyElement) return;

    // Récupère le sélecteur de l'élément source contenant l'email
    const sourceSelector = copyElement.getAttribute("data-copy-trigger");
    const sourceElement = document.querySelector(sourceSelector);

    if (!sourceElement) {
      console.error("Élément source non trouvé:", sourceSelector);
      return;
    }

    // Récupère le texte de l'email (supprime les espaces)
    const emailText = sourceElement.textContent.trim();

    // Récupère le message de succès personnalisé
    const successMessage =
      copyElement.getAttribute("data-copy-success") || "Copied!";

    // Copie dans le presse-papiers
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(emailText)
        .then(() => {
          updateCopyText(copyElement, successMessage);
        })
        .catch((err) => {
          console.error("Erreur de copie:", err);
          fallbackCopy(emailText, copyElement, successMessage);
        });
    } else {
      // Fallback pour les anciens navigateurs
      fallbackCopy(emailText, copyElement, successMessage);
    }
  }

  // Ajouter l'event listener
  document.addEventListener("click", handleCopyClick);

  // Fonction de nettoyage globale pour BarbaJS
  window.copyCleanup = function () {
    document.removeEventListener("click", handleCopyClick);
  };

  function updateCopyText(element, successMessage) {
    const originalText = element.textContent;
    element.textContent = successMessage;

    // Remet le texte original après 2 secondes
    setTimeout(() => {
      element.textContent = originalText;
    }, 2000);
  }

  function fallbackCopy(text, element, successMessage) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      updateCopyText(element, successMessage);
    } catch (err) {
      console.error("Erreur de copie fallback:", err);
    }

    document.body.removeChild(textArea);
  }
})();
