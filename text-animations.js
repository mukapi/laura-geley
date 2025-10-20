// ========================================
// 🎭 TEXT ANIMATIONS - COMPATIBLE BARBA.JS v2.1
// ========================================
// Animation des titres H1 et H2 avec SplitText - mots qui montent du bas

// Version identifier pour debug
const TEXT_ANIMATIONS_VERSION = "3.5";
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
      console.log("🎬 Scroll title detected - using manual trigger approach");

      // Pour les autres titres, utiliser la même approche que les Heroes
      // Créer une timeline pausée qui sera déclenchée manuellement
      const tl = gsap.timeline({ paused: true });

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

      // Stocker la timeline pour déclenchement manuel (comme les Heroes)
      heading._animationTimeline = tl;
      heading._animateType = animateType;
      heading._animateDelay = animateDelay;
      heading._hasAnimated = false; // Flag pour éviter les re-déclenchements

      console.log(
        `📌 Manual trigger timeline created for ${heading.tagName}, will be triggered on scroll`
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

  // Nettoyer les animations de paragraphes
  const paragraphElements = document.querySelectorAll(
    "[data-text-color-animate]"
  );
  paragraphElements.forEach((element) => {
    if (element._paragraphAnimationTimeline) {
      element._paragraphAnimationTimeline.kill();
      delete element._paragraphAnimationTimeline;
    }
    if (element._paragraphSplitTextInstance) {
      element._paragraphSplitTextInstance.revert();
      delete element._paragraphSplitTextInstance;
    }
    element.removeAttribute("data-paragraph-animated");
    delete element._paragraphAnimationProcessed;
  });
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

      // Initialiser les animations de paragraphes
      initParagraphAnimations();
      
      // Re-vérifier les paragraphes après un délai plus long pour s'assurer que tout est chargé
      setTimeout(() => {
        console.log("🔄 REFRESH: Re-checking paragraph elements after delay");
        initParagraphAnimations();
      }, 500);

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

        // CRUCIAL: Sur refresh, initialiser aussi le système de détection de scroll
        setTimeout(() => {
          // Utiliser la fonction initScrollDetection si elle existe (après que Barba soit chargé)
          if (typeof window.initScrollDetection === "function") {
            console.log("🔄 REFRESH: Initializing scroll detection system");
            window.initScrollDetection();
          }
        }, 200);
      }, 150); // Délai pour laisser SplitText se préparer
    }
  }, 200); // Délai augmenté pour les refreshes
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      initTextAnimationsWithCleanup();
      // Initialiser aussi le système de détection de scroll pour les cas sans Barba
      setTimeout(() => {
        if (typeof window.initScrollDetection === "function") {
          window.initScrollDetection();
        }
      }, 400);
    }, 200);
  });
} else {
  setTimeout(() => {
    initTextAnimationsWithCleanup();
    // Initialiser aussi le système de détection de scroll pour les cas sans Barba
    setTimeout(() => {
      if (typeof window.initScrollDetection === "function") {
        window.initScrollDetection();
      }
    }, 400);
  }, 200);
}

// ========================================
// 🎪 COMPATIBILITÉ BARBA.JS (SYSTÈME UNIFIÉ)
// ========================================

// ========================================
// 🎯 SYSTÈME DE DÉTECTION DE SCROLL MANUEL (GLOBAL)
// ========================================
// Remplacer ScrollTrigger par une détection manuelle plus fiable
let scrollEventAdded = false;
let userHasScrolled = false; // Flag global pour détecter si l'utilisateur a vraiment scrollé
let lastParagraphCheck = 0; // Throttle les vérifications de paragraphes

function checkElementsInViewport(forceCheck = false) {
  const scrollElements = document.querySelectorAll(
    '[data-text-animate-type="scroll"]'
  );

  scrollElements.forEach((heading) => {
    if (heading._animationTimeline && !heading._hasAnimated) {
      const rect = heading.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.85; // Déclenchage à 85% du viewport
      const isInViewport = rect.top < triggerPoint && rect.bottom > 0;

      if (isInViewport) {
        console.log(
          `🎯 Scroll element in viewport, triggering animation:`,
          heading.tagName
        );
        heading._hasAnimated = true;
        heading._animationTimeline.play();
      }
    }
  });

  // Vérifier les animations de paragraphes à chaque scroll pour contrôle progressif (avec throttle)
  if (userHasScrolled) {
    const now = Date.now();
    if (now - lastParagraphCheck > 16) { // Throttle à ~60fps
      lastParagraphCheck = now;
      checkParagraphAnimationsInViewport();
    }
  }
}

// Fonction d'initialisation du système de détection (globale)
window.initScrollDetection = function () {
  console.log("🎯 Initializing manual scroll detection system");

  // Vérifier immédiatement les éléments visibles (sans forcer les paragraphes)
  setTimeout(() => checkElementsInViewport(false), 100);

  // Éviter d'ajouter plusieurs fois le même listener
  if (!scrollEventAdded) {
    // Écouter le scroll pour détecter les nouveaux éléments (avec throttling)
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Marquer que l'utilisateur a vraiment scrollé
          userHasScrolled = true;
          checkElementsInViewport(true);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener(
      "resize",
      gsap.utils.debounce(() => checkElementsInViewport(userHasScrolled), 250)
    );
    scrollEventAdded = true;
    console.log("📡 Scroll event listeners added");
  }
};

// ========================================
// 🎨 ANIMATIONS DE PARAGRAPHES (CHANGEMENT DE COULEUR)
// ========================================
// Animation des paragraphes avec changement de couleur mot par mot ou lettre par lettre
function initParagraphAnimations() {
  console.log("🎨 Initializing paragraph color animations");

  const paragraphElements = document.querySelectorAll(
    "[data-text-color-animate]"
  );

  console.log(`🔍 DEBUG: Found ${paragraphElements.length} elements with [data-text-color-animate]`);
  console.log("🔍 DEBUG: Elements found:", paragraphElements);

  if (paragraphElements.length === 0) {
    console.log("⚠️ No paragraph elements with data-text-color-animate found");
    // Debug: vérifier s'il y a des éléments p avec des attributs
    const allP = document.querySelectorAll('p');
    console.log(`🔍 DEBUG: Found ${allP.length} total <p> elements on page`);
    allP.forEach((p, index) => {
      console.log(`🔍 DEBUG: <p> ${index}:`, {
        id: p.id,
        attributes: Array.from(p.attributes).map(attr => `${attr.name}="${attr.value}"`),
        hasDataTextColorAnimate: p.hasAttribute('data-text-color-animate')
      });
    });
    return;
  }

  paragraphElements.forEach((element) => {
    if (element._paragraphAnimationProcessed) return; // Éviter les doublons

    const animateType =
      element.getAttribute("data-text-color-animate-type") || "words"; // 'words' ou 'chars'
    const originalColor =
      element.style.color || getComputedStyle(element).color;
    const animationColor =
      element.getAttribute("data-text-color-animate") || "#999999";

    console.log(
      `🎨 Processing paragraph element:`,
      element.tagName,
      `Type: ${animateType}`
    );

    try {
      let splitText;
      const splitOptions = {
        absolute: false,
        position: "relative",
      };

      if (animateType === "chars") {
        splitText = new SplitText(element, {
          type: "chars",
          charsClass: "paragraph-char-animation",
          absolute: false,
          position: "relative",
        });
      } else {
        splitText = new SplitText(element, {
          type: "words",
          wordsClass: "paragraph-word-animation",
          absolute: false,
          position: "relative",
        });
      }

      const animatedElements =
        animateType === "chars" ? splitText.chars : splitText.words;

      console.log(
        `🎨 Created ${animatedElements.length} animated elements for paragraph`
      );

      // Éviter de forcer display: inline pour préserver le layout des liens
      gsap.set(animatedElements, {
        color: animationColor,
      });

      // Stocker les éléments pour animation progressive
      element._paragraphAnimatedElements = animatedElements;
      element._paragraphOriginalColor = originalColor;
      element._paragraphAnimationColor = animationColor;
      element._paragraphAnimatedCount = 0;

      // Créer une timeline vide pour compatibilité
      const tl = gsap.timeline({ paused: true });

      // Stocker les références
      element._paragraphAnimationTimeline = tl;
      element._paragraphSplitTextInstance = splitText;
      element._paragraphAnimationProcessed = true;
    } catch (error) {
      console.error("❌ Error creating paragraph animation:", error);
    }
  });
}

// Fonction pour déclencher les animations de paragraphes selon le scroll
function checkParagraphAnimationsInViewport() {
  console.log(
    `🎨 checkParagraphAnimationsInViewport called, userHasScrolled: ${userHasScrolled}`
  );

  const paragraphElements = document.querySelectorAll(
    "[data-text-color-animate]"
  );

  console.log(
    `🎨 Found ${paragraphElements.length} paragraph elements to check`
  );

  // Debug: vérifier si les éléments ont été initialisés
  if (paragraphElements.length > 0) {
    paragraphElements.forEach((element, index) => {
      console.log(`🔍 DEBUG Element ${index}:`, {
        id: element.id,
        hasAnimatedElements: !!element._paragraphAnimatedElements,
        animatedElementsLength: element._paragraphAnimatedElements?.length,
        isProcessed: !!element._paragraphAnimationProcessed
      });
    });
  }

  paragraphElements.forEach((element, index) => {
    if (
      element._paragraphAnimatedElements &&
      element._paragraphAnimatedElements.length > 0
    ) {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculer le progress du scroll sur l'élément
      const startTrigger = rect.top - viewportHeight;
      const endTrigger = rect.bottom;
      const totalDistance = viewportHeight + (endTrigger - startTrigger);
      const currentDistance = viewportHeight - rect.top;

      // Progress de 0 à 1 basé sur la position de scroll
      let scrollProgress = Math.max(
        0,
        Math.min(1, currentDistance / totalDistance)
      );

      // Si l'élément est dans le viewport, animer progressivement
      if (scrollProgress > 0 && rect.bottom > 0 && rect.top < viewportHeight) {
        // Marquer comme en cours d'animation si pas déjà fait
        if (!element.hasAttribute("data-paragraph-animated")) {
          element.setAttribute("data-paragraph-animated", "true");
          console.log(
            `🎨 Starting scroll-controlled animation for paragraph ${index}`
          );
        }

        // Calculer combien d'éléments doivent être animés selon le progress
        const totalElements = element._paragraphAnimatedElements.length;
        const elementsToAnimate = Math.floor(scrollProgress * totalElements);

        console.log(
          `🎨 Paragraph ${index}: scrollProgress=${scrollProgress.toFixed(
            2
          )}, animating ${elementsToAnimate}/${totalElements} elements`
        );

        // Animer les éléments progressivement
        element._paragraphAnimatedElements.forEach((el, elIndex) => {
          if (elIndex < elementsToAnimate) {
            gsap.set(el, { color: element._paragraphOriginalColor });
          } else {
            gsap.set(el, { color: element._paragraphAnimationColor });
          }
        });
      }
    }
  });
}

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

          // Initialiser les animations de paragraphes
          initParagraphAnimations();
          
          // Re-vérifier les paragraphes après transition Barba
          setTimeout(() => {
            console.log("🔄 BARBA: Re-checking paragraph elements after transition");
            initParagraphAnimations();
          }, 200);

          // Déclencher les animations hero APRÈS l'initialisation
          setTimeout(() => {
            triggerHeroAnimations();

            // Initialiser le système de détection de scroll pour les titres "scroll"
            if (typeof window.initScrollDetection === "function") {
              window.initScrollDetection();
            }
          }, 50); // Petit délai pour s'assurer que tout est prêt
        }
      }, 100);
    });
  }
}, 500);
