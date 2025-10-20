// ========================================
// 🎭 TEXT ANIMATIONS - COMPATIBLE BARBA.JS
// ========================================
// Animation des titres H1 et H2 avec SplitText - mots qui montent du bas

// Fonction principale d'initialisation
window.initTextAnimations = function () {
  // Vérifier que GSAP, ScrollTrigger et SplitText sont disponibles
  if (
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined" ||
    typeof SplitText === "undefined"
  ) {
    setTimeout(() => {
      if (
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined" &&
        typeof SplitText !== "undefined"
      ) {
        window.initTextAnimations();
      }
    }, 100);
    return;
  }

  // Nettoyer les anciennes instances ScrollTrigger pour éviter les conflits
  if (window.textAnimationsScrollTriggers) {
    window.textAnimationsScrollTriggers.forEach((trigger) => trigger.kill());
    window.textAnimationsScrollTriggers = [];
  } else {
    window.textAnimationsScrollTriggers = [];
  }

  // Enregistrer les plugins
  gsap.registerPlugin(ScrollTrigger, SplitText);

  // Sélectionner tous les titres H1 et H2
  const headings = document.querySelectorAll("h1, h2");

  if (headings.length === 0) {
    return;
  }

  headings.forEach((heading) => {
    // Créer une instance SplitText pour séparer les mots
    const splitText = new SplitText(heading, {
      type: "words",
      wordsClass: "word-animation", // Classe CSS optionnelle
    });

    // Récupérer les mots
    const words = splitText.words;

    if (words.length === 0) {
      return;
    }

    // Configuration initiale : mots cachés et positionnés en bas
    gsap.set(words, {
      opacity: 0,
      y: 30,
      rotationX: -45,
    });

    // Créer l'animation avec ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: "top 85%", // Démarre quand le haut de l'élément atteint 85% de la viewport
        end: "bottom 15%",
        toggleActions: "play none none reverse", // Joue à l'entrée, reverse au sortir
        markers: false, // Définir à true pour debug
      },
    });

    // Animation des mots avec un délai échelonné (stagger)
    tl.to(words, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.08, // Délai de 80ms entre chaque mot
    });

    // Stocker la référence du trigger pour le cleanup
    window.textAnimationsScrollTriggers.push(tl.scrollTrigger);

    // Stocker la référence SplitText pour le cleanup
    if (!heading._splitTextInstance) {
      heading._splitTextInstance = splitText;
    }
  });
};

// Fonction de nettoyage globale
window.textAnimationsCleanup = () => {
  // Tuer tous les ScrollTriggers
  if (window.textAnimationsScrollTriggers) {
    window.textAnimationsScrollTriggers.forEach((trigger) => trigger.kill());
    window.textAnimationsScrollTriggers = [];
  }

  // Réinitialiser les SplitText instances
  const headings = document.querySelectorAll("h1, h2");
  headings.forEach((heading) => {
    if (heading._splitTextInstance) {
      heading._splitTextInstance.revert();
      delete heading._splitTextInstance;
    }
  });

  // Tuer toutes les animations GSAP en cours sur les mots
  const words = document.querySelectorAll(".word-animation");
  if (words.length > 0) {
    gsap.killTweensOf(words);
  }
};

// ========================================
// 🔄 INITIALISATION AUTOMATIQUE
// ========================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (typeof window.initTextAnimations === "function") {
        window.initTextAnimations();
      }
    }, 200);
  });
} else {
  setTimeout(() => {
    if (typeof window.initTextAnimations === "function") {
      window.initTextAnimations();
    }
  }, 200);
}

// ========================================
// 🎪 COMPATIBILITÉ BARBA.JS (SYSTÈME UNIFIÉ)
// ========================================

// Auto-détection et connexion à Barba.js selon le pattern validé
setTimeout(() => {
  if (typeof barba !== "undefined") {
    console.log("🔄 text-animations.js - Barba detected, setting up hooks");

    // Hook beforeLeave : Nettoyer avant de quitter la page
    barba.hooks.beforeLeave((data) => {
      if (window.textAnimationsCleanup) {
        window.textAnimationsCleanup();
      }
    });

    // Hook afterLeave : Nettoyer après avoir quitté la page
    barba.hooks.afterLeave((data) => {
      // Nettoyer les animations GSAP en cours
      const words = document.querySelectorAll(".word-animation");
      if (words.length > 0) {
        gsap.killTweensOf(words);
      }
    });

    // Hook beforeEnter : Préparer la nouvelle page
    barba.hooks.beforeEnter((data) => {
      // S'assurer que les mots sont cachés au début
      const words = document.querySelectorAll(".word-animation");
      if (words.length > 0) {
        gsap.set(words, {
          opacity: 0,
          y: 30,
          rotationX: -45,
        });
      }
    });

    // Hook afterEnter : Réinitialiser après l'entrée (PRINCIPAL)
    barba.hooks.afterEnter((data) => {
      setTimeout(() => {
        if (typeof window.initTextAnimations === "function") {
          window.initTextAnimations();
        }
      }, 100);
    });
  }
}, 500);
