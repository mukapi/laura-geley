// ========================================
// 🎭 TEXT ANIMATIONS - COMPATIBLE BARBA.JS
// ========================================
// Animation des titres H1 et H2 avec SplitText - mots qui montent du bas

// Fonction principale d'initialisation
window.initTextAnimations = function () {
  console.log("🎭 initTextAnimations called");

  // Vérifier que GSAP, ScrollTrigger et SplitText sont disponibles
  console.log("🔍 Checking dependencies:", {
    gsap: typeof gsap !== "undefined",
    ScrollTrigger: typeof ScrollTrigger !== "undefined",
    SplitText: typeof SplitText !== "undefined",
  });

  if (
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined" ||
    typeof SplitText === "undefined"
  ) {
    console.log("⏳ Dependencies missing, retrying in 200ms...");
    setTimeout(() => {
      if (
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined" &&
        typeof SplitText !== "undefined"
      ) {
        console.log("✅ Dependencies loaded, retrying initTextAnimations");
        window.initTextAnimations();
      }
    }, 200);
    return;
  }

  // Nettoyer les anciennes instances pour éviter les conflits
  if (window.textAnimationsCleanup) {
    console.log("🧹 Cleaning up previous instances...");
    window.textAnimationsCleanup();
  }

  // Initialiser le tableau des triggers s'il n'existe pas
  if (!window.textAnimationsScrollTriggers) {
    window.textAnimationsScrollTriggers = [];
  }

  // Enregistrer les plugins
  gsap.registerPlugin(ScrollTrigger, SplitText);
  console.log("✅ Plugins registered");

  // Sélectionner tous les titres H1 et H2 qui n'ont pas déjà été traités
  const headings = document.querySelectorAll(
    "h1:not([data-split-text-processed]), h2:not([data-split-text-processed])"
  );
  console.log(`🔍 Found ${headings.length} headings to process:`, headings);

  if (headings.length === 0) {
    console.log("❌ No headings found to animate");
    return;
  }

  headings.forEach((heading, index) => {
    console.log(`🎬 Processing heading ${index + 1}/${headings.length}:`, heading);
    
    // Marquer comme traité pour éviter les doubles initialisations
    heading.setAttribute("data-split-text-processed", "true");

    // Nettoyer toute instance SplitText précédente sur cet élément
    if (heading._splitTextInstance) {
      console.log("🧹 Reverting previous SplitText instance");
      heading._splitTextInstance.revert();
      delete heading._splitTextInstance;
    }

    // Créer une nouvelle instance SplitText pour séparer les mots
    const splitText = new SplitText(heading, {
      type: "words",
      wordsClass: "word-animation",
    });

    // Récupérer les mots
    const words = splitText.words;
    console.log(`📝 SplitText created ${words.length} words for heading:`, words);

    if (words.length === 0) {
      console.log("⚠️ No words found, skipping");
      return;
    }

    // Configuration initiale : mots cachés et positionnés en bas
    gsap.set(words, {
      opacity: 0,
      y: 30,
      rotationX: -45,
    });
    console.log("🎯 Initial state set for words");

    // Créer l'animation avec ScrollTrigger - SIMPLIFIÉE
    const tl = gsap.timeline({
      paused: true, // Commence en pause
      scrollTrigger: {
        trigger: heading,
        start: "top 85%", // Démarre quand le haut de l'élément atteint 85% de la viewport
        end: "bottom 15%",
        toggleActions: "play none none none", // Joue SEULEMENT à l'entrée, pas de reverse
        once: true, // Ne se joue qu'une seule fois
        markers: false, // Définir à true pour debug
        onEnter: () => console.log("🚀 ScrollTrigger activated for:", heading),
        onComplete: () => console.log("✅ Animation completed for:", heading),
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

    // Stocker les références pour le cleanup
    window.textAnimationsScrollTriggers.push(tl.scrollTrigger);
    heading._splitTextInstance = splitText;

    console.log(`🎭 Text animation setup for: ${heading.tagName} with ${words.length} words`);
  });
};

// Fonction de nettoyage globale
window.textAnimationsCleanup = () => {
  console.log("🧹 textAnimationsCleanup called");
  
  // Tuer tous les ScrollTriggers
  if (window.textAnimationsScrollTriggers) {
    console.log(`🗑️ Killing ${window.textAnimationsScrollTriggers.length} ScrollTriggers`);
    window.textAnimationsScrollTriggers.forEach((trigger) => trigger.kill());
    window.textAnimationsScrollTriggers = [];
  }

  // Réinitialiser les SplitText instances
  const headings = document.querySelectorAll("h1, h2");
  console.log(`🔄 Reverting SplitText for ${headings.length} headings`);
  headings.forEach((heading) => {
    if (heading._splitTextInstance) {
      heading._splitTextInstance.revert();
      delete heading._splitTextInstance;
      // Retirer l'attribut pour permettre la réinitialisation
      heading.removeAttribute("data-split-text-processed");
    }
  });

  // Tuer toutes les animations GSAP en cours sur les mots
  const words = document.querySelectorAll(".word-animation");
  if (words.length > 0) {
    console.log(`⚡ Killing animations for ${words.length} word elements`);
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
      console.log("🚪 Barba beforeLeave - cleaning text animations");
      if (window.textAnimationsCleanup) {
        window.textAnimationsCleanup();
      }
    });

    // Hook afterLeave : Nettoyer après avoir quitté la page
    barba.hooks.afterLeave((data) => {
      console.log("🚪 Barba afterLeave - killing word animations");
      // Nettoyer les animations GSAP en cours
      const words = document.querySelectorAll(".word-animation");
      if (words.length > 0) {
        console.log(`⚡ Killing animations for ${words.length} words in afterLeave`);
        gsap.killTweensOf(words);
      }
    });

    // Hook beforeEnter : Préparer la nouvelle page
    barba.hooks.beforeEnter((data) => {
      console.log("🚪 Barba beforeEnter - preparing text animations");
      // S'assurer que les mots sont cachés au début
      const words = document.querySelectorAll(".word-animation");
      if (words.length > 0) {
        console.log(`🎯 Setting initial state for ${words.length} words`);
        gsap.set(words, {
          opacity: 0,
          y: 30,
          rotationX: -45,
        });
      }
    });

    // Hook afterEnter : Réinitialiser après l'entrée (PRINCIPAL)
    barba.hooks.afterEnter((data) => {
      console.log("🚪 Barba afterEnter - initializing text animations");
      setTimeout(() => {
        if (typeof window.initTextAnimations === "function") {
          console.log("🎬 Calling initTextAnimations after Barba transition");
          window.initTextAnimations();
        }
      }, 300); // Augmenté à 300ms pour laisser le temps au DOM
    });
  }
}, 500);
