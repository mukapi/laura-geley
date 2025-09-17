// Scroll horizontal niveau Awards - Compatible BarbaJS
// PAS de DOMContentLoaded !

// Nettoyer les anciennes instances
if (window.horizontalScrollCleanup) {
  window.horizontalScrollCleanup();
}

function initHorizontalScroll() {
  // Vérifier que GSAP et ScrollTrigger sont disponibles
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  // Array pour stocker les instances ScrollTrigger
  const scrollTriggerInstances = [];

  // Fonction pour créer un scroll horizontal sur une section
  function createHorizontalScroll(section) {
    // Chercher le container des cartes dans cette section
    const cardsContainer = section.querySelector(".horizontal-cards-container");
    if (!cardsContainer) return;

    // Calculer la distance de scroll dynamiquement
    const getScrollDistance = () => {
      const containerWidth = cardsContainer.scrollWidth;
      const viewportWidth = window.innerWidth;
      return containerWidth - viewportWidth;
    };

    // Créer l'animation ScrollTrigger
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${getScrollDistance()}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Animation du container pendant le scroll
        const progress = self.progress;
        const distance = getScrollDistance();
        gsap.set(cardsContainer, {
          x: -distance * progress,
        });
      },
      onRefresh: () => {
        // Recalculer si le contenu change
        const distance = getScrollDistance();
        if (distance <= 0) {
          // Si pas assez de contenu, désactiver le scroll horizontal
          st.disable();
        } else {
          st.enable();
        }
      },
    });

    scrollTriggerInstances.push(st);
  }

  // Chercher toutes les sections avec scroll horizontal
  const horizontalSections = document.querySelectorAll(
    ".horizontal-scroll-section"
  );

  horizontalSections.forEach((section) => {
    createHorizontalScroll(section);
  });

  // Fonction de nettoyage globale
  window.horizontalScrollCleanup = () => {
    scrollTriggerInstances.forEach((st) => {
      if (st) st.kill();
    });
    scrollTriggerInstances.length = 0;
  };

  // Refresh au resize pour recalculer les distances
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
}

// Exécution immédiate - Compatible avec BarbaJS
initHorizontalScroll();
