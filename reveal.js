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
    if (lenisIntegrated) return;

    console.log("🔗 Intégration Lenis + ScrollTrigger");

    if (window.lenis) {
      // Lier Lenis à ScrollTrigger
      window.lenis.on("scroll", ScrollTrigger.update);
      console.log("✅ Lenis connecté à ScrollTrigger");
    }

    lenisIntegrated = true;
  }

  // 1️⃣ FONCTION PRINCIPALE D'INITIALISATION
  window.initRevealAnimations = function () {
    console.log("🎯 initRevealAnimations called");

    // Intégrer Lenis si pas encore fait
    integrateLenis();

    // Kill toutes les anciennes instances ScrollTrigger de ce script
    const oldTriggers = ScrollTrigger.getAll().filter(
      (st) => st.vars && st.vars.id && st.vars.id.startsWith("reveal-")
    );
    console.log(
      `🗑️ Suppression de ${oldTriggers.length} anciens ScrollTriggers`
    );
    oldTriggers.forEach((st) => st.kill());

    // Sélectionner tous les éléments avec l'attribut data-reveal
    const revealElements = document.querySelectorAll("[data-reveal]");

    if (revealElements.length === 0) {
      console.log("ℹ️ Aucun élément [data-reveal] trouvé");
      return;
    }

    console.log(`✅ ${revealElements.length} éléments [data-reveal] trouvés`);

    revealElements.forEach((element, index) => {
      // 🔥 VÉRIFIER si l'élément a déjà été animé (important pour Barba)
      const alreadyAnimated = element.dataset.revealAnimated === "true";
      
      if (alreadyAnimated) {
        console.log(`⏭️ reveal-${index} déjà animé, on skip`);
        // Forcer l'état final visible
        gsap.set(element, { opacity: 1, y: 0 });
        return; // Skip cet élément
      }

      // État initial : invisible
      gsap.set(element, {
        opacity: 0,
        y: 50,
      });

      // Animation d'apparition
      const animation = gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        paused: true,
      });

      // ScrollTrigger qui lance l'animation
      const st = ScrollTrigger.create({
        id: `reveal-${index}`,
        trigger: element,
        start: "top 85%",
        onEnter: () => {
          // Marquer comme animé pour éviter de re-animer
          element.dataset.revealAnimated = "true";
          console.log(`🎬 Animation reveal-${index} déclenchée`);
          animation.play();
        },
        once: false, // 🔥 Important : ne pas détruire le trigger
        markers: false,
      });

      // Log de debug
      const rect = element.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const elementTop = rect.top + scrollY;
      
      console.log(
        `📍 reveal-${index}: top=${elementTop.toFixed(0)}px, trigger=${st.start}px, currentScroll=${scrollY.toFixed(0)}px`
      );
    });

    // Rafraîchir ScrollTrigger après création
    console.log("🔄 Refresh ScrollTrigger...");
    ScrollTrigger.refresh();

    // Multiple refresh pour être sûr que tout est synchro (important avec Lenis + Barba)
    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("🔄 Refresh 2/3");
    }, 100);

    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("🔄 Refresh 3/3");
    }, 300);

    setTimeout(() => {
      const allTriggers = ScrollTrigger.getAll();
      const revealTriggers = allTriggers.filter(st => st.vars?.id?.startsWith("reveal-"));
      console.log(`✅ Reveal animations prêtes (${revealTriggers.length} triggers actifs)`);
    }, 500);
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
