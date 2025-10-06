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

  // 🔥 Configuration globale de ScrollTrigger pour Lenis (une seule fois)
  let lenisIntegrated = false;

  function integrateLenis() {
    if (lenisIntegrated || !window.lenis) return;
    
    console.log("🔗 Intégration Lenis + ScrollTrigger");
    
    // Méthode recommandée par Lenis pour ScrollTrigger
    window.lenis.on("scroll", ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      window.lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);
    
    lenisIntegrated = true;
  }

  // 1️⃣ FONCTION PRINCIPALE D'INITIALISATION
  window.initRevealAnimations = function () {
    console.log("🎯 initRevealAnimations called");

    // Intégrer Lenis si pas encore fait
    integrateLenis();

    // Kill toutes les anciennes instances ScrollTrigger de ce script
    const oldTriggers = ScrollTrigger.getAll().filter((st) => 
      st.vars && st.vars.id && st.vars.id.startsWith("reveal-")
    );
    console.log(`🗑️ Suppression de ${oldTriggers.length} anciens ScrollTriggers`);
    oldTriggers.forEach((st) => st.kill());

    // Sélectionner tous les éléments avec l'attribut data-reveal
    const revealElements = document.querySelectorAll("[data-reveal]");

    if (revealElements.length === 0) {
      console.log("ℹ️ Aucun élément [data-reveal] trouvé");
      return;
    }

    console.log(`✅ ${revealElements.length} éléments [data-reveal] trouvés`);

    revealElements.forEach((element, index) => {
      // État initial : toujours invisible au départ
      gsap.set(element, {
        opacity: 0,
        y: 50,
      });

      // Animation d'apparition avec ScrollTrigger
      const animation = gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        paused: true, // On démarre en pause
      });

      // ScrollTrigger qui lance l'animation
      ScrollTrigger.create({
        id: `reveal-${index}`,
        trigger: element,
        start: "top 85%", // Un peu plus tard pour être sûr
        onEnter: () => {
          console.log(`🎬 Animation reveal-${index} déclenchée`);
          animation.play();
        },
        once: true, // Une seule fois
        markers: false,
      });
    });

    // Rafraîchir ScrollTrigger après création
    console.log("🔄 Refresh ScrollTrigger...");
    ScrollTrigger.refresh();
    
    // Double refresh après un court délai (important avec Lenis)
    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("✅ Reveal animations prêtes");
    }, 200);
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
