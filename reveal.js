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
  let rafId = null;

  function integrateLenis() {
    if (lenisIntegrated) return;

    console.log("🔗 Intégration Lenis + ScrollTrigger");

    if (window.lenis) {
      // ⚠️ MÉTHODE 1 : Event listener (peut ne pas marcher avec autoRaf)
      let scrollEventCount = 0;
      window.lenis.on("scroll", (e) => {
        ScrollTrigger.update();
        if (scrollEventCount < 3) {
          console.log(
            `🌊 Lenis scroll event ${scrollEventCount + 1}:`,
            e.scroll?.toFixed(0)
          );
          scrollEventCount++;
        }
      });

      // 🔥 MÉTHODE 2 : RAF Loop (backup si les events ne marchent pas)
      let rafCount = 0;
      function updateScrollTrigger() {
        ScrollTrigger.update();
        if (rafCount < 3) {
          console.log(`🔄 RAF update ${rafCount + 1}, scroll:`, window.scrollY);
          rafCount++;
        }
        rafId = requestAnimationFrame(updateScrollTrigger);
      }
      rafId = requestAnimationFrame(updateScrollTrigger);
      console.log("✅ RAF loop démarrée pour ScrollTrigger");
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
      const st = ScrollTrigger.create({
        id: `reveal-${index}`,
        trigger: element,
        start: "top 85%",
        onEnter: () => {
          console.log(`🎬 Animation reveal-${index} déclenchée`);
          animation.play();
        },
        onUpdate: (self) => {
          // Log uniquement la première fois pour debug
          if (!element.dataset.stDebug) {
            console.log(
              `📊 reveal-${index} progress: ${self.progress.toFixed(
                2
              )}, isActive: ${self.isActive}`
            );
            element.dataset.stDebug = "true";
          }
        },
        once: true,
        markers: false, // Mettre true pour voir les markers
      });

      // Log détaillé de la position du trigger
      const rect = element.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const elementTop = rect.top + scrollY;
      const triggerPoint = elementTop - window.innerHeight * 0.85;

      console.log(
        `📍 reveal-${index}: element top=${elementTop.toFixed(
          0
        )}px, trigger à ${triggerPoint.toFixed(0)}px scroll, start=${st.start}`
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
      console.log("✅ Reveal animations prêtes");
      // Log final de debug : position de tous les triggers
      const allTriggers = ScrollTrigger.getAll();
      console.log(`📊 Total ScrollTriggers actifs: ${allTriggers.length}`);

      // 🔥 FIX CRITIQUE : Forcer le déclenchement des éléments déjà dans leur zone
      allTriggers.forEach((st, i) => {
        if (st.vars && st.vars.id && st.vars.id.startsWith("reveal-")) {
          console.log(
            `  - ${st.vars.id}: start=${st.start}, end=${st.end}, trigger=${
              st.trigger ? "OK" : "MISSING"
            }`
          );

          // Vérifier si le trigger est déjà dépassé (élément déjà visible)
          const currentScroll =
            window.pageYOffset || document.documentElement.scrollTop;
          const triggerStart = st.start;

          if (currentScroll >= triggerStart && !st.triggered) {
            console.log(`⚡ ${st.vars.id} déjà visible, déclenchement forcé!`);
            st.triggered = true;
            // Déclencher le callback onEnter manuellement
            if (st.vars.onEnter) {
              st.vars.onEnter(st);
            }
          }
        }
      });
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
