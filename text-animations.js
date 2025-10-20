// ========================================
// 🎭 TEXT ANIMATIONS - COMPATIBLE BARBA.JS v2.1
// ========================================
// Animation des titres H1 et H2 avec SplitText - mots qui montent du bas

// Version identifier pour debug
const TEXT_ANIMATIONS_VERSION = "2.3";
console.log(`🎭 TEXT ANIMATIONS v${TEXT_ANIMATIONS_VERSION} - Starting...`);

// ========================================
// 🚨 MASQUAGE IMMÉDIAT DES TITRES HERO
// ========================================
// Masquer immédiatement les titres Hero pour éviter le flash de visibilité
function hideHeroTitlesImmediately() {
  console.log("🚫 Hiding hero titles immediately on script load");
  const heroTitles = document.querySelectorAll(
    '[data-text-animate-type="hero"]'
  );

  if (heroTitles.length > 0) {
    console.log(
      `🎯 Found ${heroTitles.length} hero titles to hide immediately`
    );
    heroTitles.forEach((title) => {
      // Masquer directement avec CSS pour une réactivité instantanée
      title.style.opacity = "0";
      title.style.visibility = "hidden";
      console.log("🚫 Hero title hidden immediately:", title);
    });

    // Attendre que GSAP soit disponible pour un masquage plus précis
    setTimeout(() => {
      if (typeof gsap !== "undefined") {
        console.log("🎨 GSAP available, applying precise hiding");
        heroTitles.forEach((title) => {
          gsap.set(title, {
            opacity: 0,
            visibility: "hidden",
          });
        });
      }
    }, 50);
  } else {
    console.log("⚠️ No hero titles found to hide");
  }
}

// Exécuter le masquage immédiatement
hideHeroTitlesImmediately();

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

  // CORRECTION: Sur un refresh, on doit nettoyer tous les éléments d'abord
  // Vérifier s'il y a des éléments avec l'attribut mais sans instance SplitText (état corrompu)
  const allHeadings = document.querySelectorAll("h1, h2");
  const corruptedHeadings = Array.from(allHeadings).filter(
    (heading) =>
      heading.hasAttribute("data-split-text-processed") &&
      !heading._splitTextInstance
  );

  if (corruptedHeadings.length > 0) {
    console.log(
      `🔧 Found ${corruptedHeadings.length} corrupted headings, cleaning up...`
    );
    corruptedHeadings.forEach((heading) => {
      heading.removeAttribute("data-split-text-processed");
      console.log("🧹 Removed corrupted attribute from:", heading);
    });
  }

  // Sélectionner uniquement les titres avec l'attribut data-text-animate (plus précis)
  // Fallback: tous les H1 et H2 si l'attribut n'est pas utilisé
  let headings = document.querySelectorAll(
    "[data-text-animate]:not([data-split-text-processed])"
  );

  // Si aucun attribut data-text-animate, utiliser H1/H2 (compatibilité)
  if (headings.length === 0) {
    headings = document.querySelectorAll(
      "h1:not([data-split-text-processed]), h2:not([data-split-text-processed])"
    );
    console.log("⚠️ No data-text-animate found, using H1/H2 fallback");
  }

  console.log(`🔍 Found ${headings.length} headings to process:`, headings);

  if (headings.length === 0) {
    console.log("❌ No headings found to animate");
    return;
  }

  headings.forEach((heading, index) => {
    console.log(
      `🎬 Processing heading ${index + 1}/${headings.length}:`,
      heading
    );

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
    console.log(
      `📝 SplitText created ${words.length} words for heading:`,
      words
    );

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

    // Détecter le type d'animation via les attributs Webflow
    const animateType =
      heading.getAttribute("data-text-animate-type") ||
      (heading.tagName === "H1" ? "hero" : "scroll");
    const animateDelay =
      parseInt(heading.getAttribute("data-text-animate-delay")) ||
      (animateType === "hero" ? 200 : 0);

    console.log(
      `🎭 Animation type detected: ${animateType}, delay: ${animateDelay}ms`
    );

    if (animateType === "hero") {
      console.log("🎬 Hero title detected - setting up animation");

      // CRUCIAL: Remettre la visibilité du titre principal maintenant que SplitText est prêt
      gsap.set(heading, {
        opacity: 1,
        visibility: "visible",
      });
      console.log("👁️ Hero title visibility restored for animation");

      // Pour les Hero, créer la timeline mais ne pas la jouer immédiatement
      const tl = gsap.timeline({ paused: true });
      tl.to(words, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
        onComplete: () =>
          console.log("✅ Hero Animation completed for:", heading),
      });

      // Stocker la timeline pour la déclencher depuis Barba
      heading._animationTimeline = tl;
      heading._animateType = animateType;
      heading._animateDelay = animateDelay;

      console.log(`🎭 Hero animation ready, will be triggered by Barba hook`);
    } else {
      console.log("🎬 Non-H1 detected - using ScrollTrigger");

      // Pour les autres titres, utiliser ScrollTrigger normal
      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none none",
          once: true,
          markers: false, // Définir à true pour debug visuel
          onEnter: () => {
            console.log(
              "🚀 ScrollTrigger activated for:",
              heading.tagName,
              heading.className
            );
          },
          onUpdate: (self) => {
            console.log(
              "📊 ScrollTrigger progress:",
              self.progress.toFixed(2),
              "for",
              heading.tagName
            );
          },
          onComplete: () => {
            console.log(
              "✅ ScrollTrigger animation completed for:",
              heading.tagName
            );
          },
          onToggle: (self) => {
            console.log(
              "🔄 ScrollTrigger toggled:",
              self.isActive,
              "for",
              heading.tagName
            );
          },
        },
      });

      // Animation des mots avec un délai échelonné (stagger)
      tl.to(words, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
        onStart: () =>
          console.log("🎬 Animation started for:", heading.tagName),
        onComplete: () =>
          console.log("🎯 Animation finished for:", heading.tagName),
      });

      // Stocker les références pour le cleanup
      window.textAnimationsScrollTriggers.push(tl.scrollTrigger);
      heading._animationTimeline = tl;

      console.log(
        `📌 ScrollTrigger created for ${heading.tagName}, trigger element:`,
        heading
      );
    }

    // Stocker la référence SplitText
    heading._splitTextInstance = splitText;

    console.log(
      `🎭 Text animation setup for: ${heading.tagName} with ${words.length} words`
    );
  });
};

// Fonction de nettoyage globale
window.textAnimationsCleanup = () => {
  console.log("🧹 textAnimationsCleanup called");

  // Tuer tous les ScrollTriggers
  if (window.textAnimationsScrollTriggers) {
    console.log(
      `🗑️ Killing ${window.textAnimationsScrollTriggers.length} ScrollTriggers`
    );
    window.textAnimationsScrollTriggers.forEach((trigger) => trigger.kill());
    window.textAnimationsScrollTriggers = [];
  }

  // Réinitialiser les SplitText instances et animations
  const headings = document.querySelectorAll("h1, h2");
  console.log(`🔄 Reverting SplitText for ${headings.length} headings`);
  headings.forEach((heading) => {
    // Tuer l'animation timeline si elle existe
    if (heading._animationTimeline) {
      heading._animationTimeline.kill();
      delete heading._animationTimeline;
    }

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

// Fonction d'initialisation avec nettoyage préalable pour les refreshes
function initTextAnimationsWithCleanup() {
  console.log(
    "🔄 Initializing text animations with cleanup for refresh scenario"
  );

  // Sur un refresh, nettoyer d'abord tous les attributs corrompus
  const allHeadings = document.querySelectorAll(
    "h1[data-split-text-processed], h2[data-split-text-processed]"
  );
  allHeadings.forEach((heading) => {
    if (!heading._splitTextInstance && !heading._animationTimeline) {
      heading.removeAttribute("data-split-text-processed");
      console.log("🧹 Cleaned corrupted heading:", heading);
    }
  });

  // Attendre un peu plus longtemps sur refresh pour s'assurer que tout est prêt
  setTimeout(() => {
    if (typeof window.initTextAnimations === "function") {
      console.log("🚀 Starting initTextAnimations after refresh delay");
      window.initTextAnimations();

      // CRUCIAL: Sur refresh, déclencher aussi les animations hero
      setTimeout(() => {
        console.log("🔄 REFRESH: Triggering hero animations after init");
        const heroHeadings = document.querySelectorAll(
          `[data-text-animate-type="hero"]`
        );
        heroHeadings.forEach((heading) => {
          if (heading._animationTimeline && heading._animateType === "hero") {
            const delay = heading._animateDelay || 200;
            console.log(`🚀 REFRESH: Starting hero animation after ${delay}ms`);
            setTimeout(() => {
              heading._animationTimeline.play();
            }, delay);
          }
        });
      }, 150); // Délai pour laisser SplitText se préparer
    }
  }, 200); // Délai augmenté pour les refreshes
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      initTextAnimationsWithCleanup();
    }, 200);
  });
} else {
  setTimeout(() => {
    initTextAnimationsWithCleanup();
  }, 200);
}

// ========================================
// 🎪 COMPATIBILITÉ BARBA.JS (SYSTÈME UNIFIÉ)
// ========================================

// Auto-détection et connexion à Barba.js selon le pattern validé
setTimeout(() => {
  if (typeof barba !== "undefined") {
    console.log("🔄 text-animations.js - Barba detected, setting up hooks");

    // Hook beforeLeave : Nettoyer avant de quitter la page ET cacher les hero
    barba.hooks.beforeLeave((data) => {
      console.log("🚪 Barba beforeLeave - cleaning text animations");

      // IMPORTANT: Cacher immédiatement les titres hero de la nouvelle page
      const nextHeroTitles = data.next.container.querySelectorAll(
        `[data-text-animate-type="hero"]`
      );
      const nextHeroWords = data.next.container.querySelectorAll(
        `[data-text-animate-type="hero"] .word-animation`
      );

      // Masquer les titres hero au niveau principal
      if (nextHeroTitles.length > 0) {
        console.log("🚫 Hiding hero titles IMMEDIATELY before transition");
        nextHeroTitles.forEach((title) => {
          gsap.set(title, {
            opacity: 0,
            visibility: "hidden",
          });
        });
      }

      if (nextHeroWords.length > 0) {
        console.log("🚫 Hiding hero words IMMEDIATELY before transition");
        gsap.set(nextHeroWords, {
          opacity: 0,
          y: 30,
          rotationX: -45,
        });
      }

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
        console.log(
          `⚡ Killing animations for ${words.length} words in afterLeave`
        );
        gsap.killTweensOf(words);
      }
    });

    // Fonction pour déclencher les animations hero
    const triggerHeroAnimations = () => {
      console.log("🎯 Triggering hero animations after Barba transition");
      const heroHeadings = document.querySelectorAll(
        `[data-text-animate-type="hero"]`
      );
      heroHeadings.forEach((heading) => {
        if (heading._animationTimeline && heading._animateType === "hero") {
          const delay = heading._animateDelay || 200;
          console.log(
            `🚀 Starting hero animation for: ${heading.tagName} after ${delay}ms`
          );
          setTimeout(() => {
            heading._animationTimeline.play();
          }, delay);
        }
      });
    };

    // Hook beforeEnter : Préparer la nouvelle page
    barba.hooks.beforeEnter((data) => {
      console.log("🚪 Barba beforeEnter - preparing text animations");

      // CIBLER SPÉCIFIQUEMENT les titres hero pour les masquer immédiatement
      const heroTitles = data.next.container.querySelectorAll(
        `[data-text-animate-type="hero"]`
      );
      const heroWords = data.next.container.querySelectorAll(
        `[data-text-animate-type="hero"] .word-animation`
      );
      const allWords = data.next.container.querySelectorAll(".word-animation");

      // Masquer les titres hero au niveau du conteneur principal
      if (heroTitles.length > 0) {
        console.log(
          `🚫 Hiding ${heroTitles.length} hero titles during transition`
        );
        heroTitles.forEach((title) => {
          gsap.set(title, {
            opacity: 0,
            visibility: "hidden",
          });
        });
      }

      if (heroWords.length > 0) {
        console.log(
          `🎯 Forcing hero words to stay hidden during transition: ${heroWords.length} words`
        );
        gsap.set(heroWords, {
          opacity: 0,
          y: 30,
          rotationX: -45,
        });
      }

      if (allWords.length > 0) {
        console.log(`🎯 Setting initial state for ${allWords.length} words`);
        gsap.set(allWords, {
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

          // Déclencher les animations hero APRÈS l'initialisation
          setTimeout(() => {
            triggerHeroAnimations();

            // CRUCIAL: Refresh ScrollTriggers pour détecter les éléments dans le viewport
            if (typeof ScrollTrigger !== "undefined") {
              console.log(
                "🔄 Refreshing ScrollTriggers after Barba transition"
              );
              ScrollTrigger.refresh();

              // Vérifier et déclencher manuellement les animations pour les éléments déjà visibles
              setTimeout(() => {
                const scrollTriggerTimelines = document.querySelectorAll(
                  '[data-text-animate-type="scroll"]'
                );
                console.log(
                  `🔍 Checking ${scrollTriggerTimelines.length} scroll elements already in viewport`
                );

                scrollTriggerTimelines.forEach((heading) => {
                  if (
                    heading._animationTimeline &&
                    heading._animationTimeline.scrollTrigger
                  ) {
                    const st = heading._animationTimeline.scrollTrigger;
                    if (st && st.isActive && st.progress > 0) {
                      console.log(
                        "🎯 Element already in viewport, triggering animation manually:",
                        heading.tagName,
                        "progress:",
                        st.progress
                      );
                      heading._animationTimeline.play();
                    }
                  }
                });
              }, 100);
            }
          }, 50); // Petit délai pour s'assurer que tout est prêt
        }
      }, 100);
    });
  }
}, 500);
