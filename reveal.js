// 🎯 GSAP ScrollTrigger Reveal - Compatible Barba.js + Lenis
(function () {
  "use strict";

  // Vérifier que GSAP et ScrollTrigger sont chargés
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.error("❌ GSAP ou ScrollTrigger non trouvé");
    return;
  }

  // Enregistrer ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // 🔗 Intégration avec Lenis (obligatoire pour que ScrollTrigger fonctionne avec le smooth scroll)
  if (window.lenis) {
    window.lenis.on("scroll", ScrollTrigger.update);
  }

  // 1️⃣ FONCTION PRINCIPALE D'INITIALISATION
  window.initRevealAnimations = function () {
    console.log("🎯 initRevealAnimations called");

    // Kill toutes les anciennes instances ScrollTrigger de ce script
    ScrollTrigger.getAll().forEach((st) => {
      if (st.vars && st.vars.id && st.vars.id.startsWith("reveal-")) {
        st.kill();
      }
    });

    // Sélectionner tous les éléments avec l'attribut data-reveal
    const revealElements = document.querySelectorAll("[data-reveal]");

    if (revealElements.length === 0) {
      console.log("ℹ️ Aucun élément [data-reveal] trouvé");
      return;
    }

    console.log(`✅ ${revealElements.length} éléments [data-reveal] trouvés`);

    revealElements.forEach((element, index) => {
      // État initial : invisible et décalé vers le bas
      gsap.set(element, {
        opacity: 0,
        y: 50,
      });

      // Animation d'apparition
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false, // Important : ne pas forcer l'état final immédiatement
        scrollTrigger: {
          id: `reveal-${index}`, // ID unique pour pouvoir kill les anciennes instances
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none", // Une seule fois
          markers: false, // Mettre true pour debug si besoin
        },
      });
    });

    // Rafraîchir ScrollTrigger (important avec Lenis)
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  // 2️⃣ INITIALISATION AU CHARGEMENT DE PAGE (FALLBACK)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        if (typeof window.initRevealAnimations === "function") {
          window.initRevealAnimations();
        }
      }, 200);
    });
  } else {
    setTimeout(() => {
      if (typeof window.initRevealAnimations === "function") {
        window.initRevealAnimations();
      }
    }, 200);
  }

  // 3️⃣ AUTO-DÉTECTION ET CONNEXION À BARBA.JS
  setTimeout(() => {
    if (typeof barba !== "undefined") {
      console.log("🔄 reveal.js - Barba detected, setting up hooks");
      barba.hooks.afterEnter((data) => {
        setTimeout(() => {
          if (typeof window.initRevealAnimations === "function") {
            window.initRevealAnimations();
          }
        }, 100);
      });
    }
  }, 500);
})();
