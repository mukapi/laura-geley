// ========================================
// 🎭 TEXT ANIMATIONS - COMPATIBLE BARBA.JS v2.1
// ========================================
// Animation des titres H1 et H2 avec SplitText - mots qui montent du bas

// Version identifier pour debug
const TEXT_ANIMATIONS_VERSION = "3.8";

// ========================================
// 🚨 MASQUAGE IMMÉDIAT DES TITRES HERO
// ========================================
// Masquer immédiatement les titres Hero pour éviter le flash de visibilité
function hideHeroTitlesImmediately() {
  const heroTitles = document.querySelectorAll(
    '[data-text-animate-type="hero"]'
  );

  if (heroTitles.length > 0) {
    heroTitles.forEach((title) => {
      // Masquer directement avec CSS pour une réactivité instantanée
      title.style.opacity = "0";
      title.style.visibility = "hidden";
    });

    // Attendre que GSAP soit disponible pour un masquage plus précis
    setTimeout(() => {
      if (typeof gsap !== "undefined") {
        heroTitles.forEach((title) => {
          gsap.set(title, {
            opacity: 0,
            visibility: "hidden",
          });
        });
      }
    }, 50);
  }
}

// Exécuter le masquage immédiatement
hideHeroTitlesImmediately();

// Fonction principale d'initialisation
window.initTextAnimations = function () {
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
    }, 200);
    return;
  }

  // Nettoyer les anciennes instances pour éviter les conflits
  if (window.textAnimationsCleanup) {
    window.textAnimationsCleanup();
  }

  // Enregistrer les plugins
  gsap.registerPlugin(ScrollTrigger, SplitText);

  // CORRECTION: Sur un refresh, on doit nettoyer tous les éléments d'abord
  // Vérifier s'il y a des éléments avec l'attribut mais sans instance SplitText (état corrompu)
  const allHeadings = document.querySelectorAll("h1, h2");
  const corruptedHeadings = Array.from(allHeadings).filter(
    (heading) =>
      heading.hasAttribute("data-split-text-processed") &&
      !heading._splitTextInstance
  );

  if (corruptedHeadings.length > 0) {
    corruptedHeadings.forEach((heading) => {
      heading.removeAttribute("data-split-text-processed");
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
  }

  if (headings.length === 0) {
    return;
  }

  headings.forEach((heading, index) => {
    // Marquer comme traité pour éviter les doubles initialisations
    heading.setAttribute("data-split-text-processed", "true");

    // Nettoyer toute instance SplitText précédente sur cet élément
    if (heading._splitTextInstance) {
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

    if (words.length === 0) {
      return;
    }

    // Configuration initiale : mots cachés et positionnés en bas
    gsap.set(words, {
      opacity: 0,
      y: 30,
      rotationX: -45,
    });

    // Détecter le type d'animation via les attributs Webflow
    const animateType =
      heading.getAttribute("data-text-animate-type") ||
      (heading.tagName === "H1" ? "hero" : "scroll");
    const animateDelay =
      parseInt(heading.getAttribute("data-text-animate-delay")) ||
      (animateType === "hero" ? 200 : 0);

    if (animateType === "hero") {
      // CRUCIAL: Remettre la visibilité du titre principal maintenant que SplitText est prêt
      gsap.set(heading, {
        opacity: 1,
        visibility: "visible",
      });

      // Pour les Hero, créer la timeline mais ne pas la jouer immédiatement
      const tl = gsap.timeline({ paused: true });
      tl.to(words, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
      });

      // Stocker la timeline pour la déclencher depuis Barba
      heading._animationTimeline = tl;
      heading._animateType = animateType;
      heading._animateDelay = animateDelay;
    } else {
      // Pour les autres titres, utiliser la même approche que les Heroes
      // Créer une timeline pausée qui sera déclenchée manuellement
      const tl = gsap.timeline({ paused: true });

      // Animation des mots avec un délai échelonné (stagger) et easing
      tl.to(words, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
      });

      // Stocker la timeline pour déclenchement manuel (comme les Heroes)
      heading._animationTimeline = tl;
      heading._animateType = animateType;
      heading._animateDelay = animateDelay;
      heading._hasAnimated = false; // Flag pour éviter les re-déclenchements
    }

    // Stocker la référence SplitText
    heading._splitTextInstance = splitText;
  });
};

// Fonction de nettoyage globale
window.textAnimationsCleanup = () => {
  // Réinitialiser les SplitText instances et animations
  const headings = document.querySelectorAll("h1, h2");
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
  // Sur un refresh, nettoyer d'abord tous les attributs corrompus
  const allHeadings = document.querySelectorAll(
    "h1[data-split-text-processed], h2[data-split-text-processed]"
  );
  allHeadings.forEach((heading) => {
    if (!heading._splitTextInstance && !heading._animationTimeline) {
      heading.removeAttribute("data-split-text-processed");
    }
  });

  // Attendre un peu plus longtemps sur refresh pour s'assurer que tout est prêt
  setTimeout(() => {
    if (typeof window.initTextAnimations === "function") {
      window.initTextAnimations();

      // Initialiser les animations de paragraphes avec retry automatique
      let retryCount = 0;
      const maxRetries = 5;

      function tryInitParagraphAnimations() {
        const success = initParagraphAnimations();
        if (!success && retryCount < maxRetries) {
          retryCount++;
          setTimeout(tryInitParagraphAnimations, 500 * retryCount);
        }
      }

      tryInitParagraphAnimations();

      // CRUCIAL: Sur refresh, déclencher aussi les animations hero
      setTimeout(() => {
        const heroHeadings = document.querySelectorAll(
          `[data-text-animate-type="hero"]`
        );
        heroHeadings.forEach((heading) => {
          if (heading._animationTimeline && heading._animateType === "hero") {
            const delay = heading._animateDelay || 200;
            setTimeout(() => {
              heading._animationTimeline.play();
            }, delay);
          }
        });

        // CRUCIAL: Sur refresh, initialiser aussi le système de détection de scroll
        setTimeout(() => {
          // Utiliser la fonction initScrollDetection si elle existe (après que Barba soit chargé)
          if (typeof window.initScrollDetection === "function") {
            window.initScrollDetection();
          }
        }, 200);
      }, 150); // Délai pour laisser SplitText se préparer
    }
  }, 200); // Délai augmenté pour les refreshes
}

// Initialisation directe

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
        heading._hasAnimated = true;
        heading._animationTimeline.play();
      }
    }
  });

  // Vérifier les animations de paragraphes à chaque scroll pour contrôle progressif (avec throttle)
  if (userHasScrolled) {
    const now = Date.now();
    if (now - lastParagraphCheck > 16) {
      // Throttle à ~60fps
      lastParagraphCheck = now;
      checkParagraphAnimationsInViewport();
    }
  }
}

// Fonction d'initialisation du système de détection (globale)
window.initScrollDetection = function () {
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
  }
};

// ========================================
// 🎨 ANIMATIONS DE PARAGRAPHES (CHANGEMENT DE COULEUR)
// ========================================
// Animation des paragraphes avec changement de couleur mot par mot ou lettre par lettre
function initParagraphAnimations() {
  const paragraphElements = document.querySelectorAll(
    "[data-text-color-animate]"
  );

  if (paragraphElements.length === 0) {
    return false;
  }

  // Retourner true si des éléments ont été trouvés
  const processedCount = processParagraphElements(paragraphElements);
  return processedCount > 0;
}

function processParagraphElements(paragraphElements) {
  let processedCount = 0;

  paragraphElements.forEach((element) => {
    if (element._paragraphAnimationProcessed) return; // Éviter les doublons

    const animateType =
      element.getAttribute("data-text-color-animate-type") || "words"; // 'words' ou 'chars'
    const originalColor =
      element.style.color || getComputedStyle(element).color;
    const targetColor =
      element.getAttribute("data-text-color-animate") || "#999999";

    try {
      let splitText;

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

      // CORRECTION: Initialiser avec la couleur originale (Webflow) - la couleur cible sera appliquée via scroll
      gsap.set(animatedElements, {
        color: originalColor,
      });

      // Stocker les éléments pour animation progressive
      element._paragraphAnimatedElements = animatedElements;
      element._paragraphOriginalColor = originalColor;
      element._paragraphTargetColor = targetColor;
      element._paragraphAnimatedCount = 0;
      element._lastAnimatedCount = -1; // Pour éviter les animations redondantes

      // Initialiser l'état d'animation pour chaque élément
      animatedElements.forEach((el) => {
        el._isAnimated = false;
      });

      // Créer une timeline vide pour compatibilité
      const tl = gsap.timeline({ paused: true });

      // Stocker les références
      element._paragraphAnimationTimeline = tl;
      element._paragraphSplitTextInstance = splitText;
      element._paragraphAnimationProcessed = true;

      processedCount++;
    } catch (error) {
      console.error("❌ Error creating paragraph animation:", error);
    }
  });

  return processedCount;
}

// Fonction pour déclencher les animations de paragraphes selon le scroll
function checkParagraphAnimationsInViewport() {
  const paragraphElements = document.querySelectorAll(
    "[data-text-color-animate]"
  );

  paragraphElements.forEach((element, index) => {
    if (
      element._paragraphAnimatedElements &&
      element._paragraphAnimatedElements.length > 0
    ) {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculer le progress du scroll sur l'élément - SIMPLIFIÉ
      // L'animation commence quand l'élément entre dans le viewport à 80%
      const animationTriggerPoint = viewportHeight * 0.8;

      let scrollProgress = 0;

      // Si l'élément entre dans la zone d'animation
      if (rect.top < animationTriggerPoint && rect.bottom > 0) {
        // DIAGNOSTIC : Ajouter des logs pour comprendre le problème
        const distanceFromTriggerPoint = Math.max(
          0,
          animationTriggerPoint - rect.top
        );

        // SOLUTION : Distancer l'animation plus pour qu'elle progresse vraiment mot par mot
        // Utiliser une distance plus longue pour une progression plus fine
        const animationDuration = Math.min(600, viewportHeight * 0.8); // Distance plus longue

        // Progress qui commence vraiment à 0 et progresse lentement
        scrollProgress = Math.min(
          1,
          distanceFromTriggerPoint / animationDuration
        );

        // CORRECTION : Ne pas limiter le progress à 30% !
        // Laissez le progress aller jusqu'à 1 pour que l'animation se termine complètement
      }

      // Si l'élément est dans le viewport, animer progressivement
      // Commencer l'animation dès que scrollProgress > 0 (même très petit)
      if (scrollProgress > 0 && rect.bottom > 0 && rect.top < viewportHeight) {
        // Marquer comme en cours d'animation si pas déjà fait
        if (!element.hasAttribute("data-paragraph-animated")) {
          element.setAttribute("data-paragraph-animated", "true");
        }

        // Calculer combien d'éléments doivent être animés selon le progress
        const totalElements = element._paragraphAnimatedElements.length;

        // PROBLÈME IDENTIFIÉ : Le scrollProgress est trop élevé dès le début !
        // SOLUTION : Utiliser une progression plus lente et plus précise
        let elementsToAnimate = 0;

        // Si scrollProgress est très petit (< 0.01), animer seulement le premier mot
        if (scrollProgress > 0 && scrollProgress < 0.01 && totalElements > 0) {
          elementsToAnimate = 1;
        } else {
          // Sinon, utiliser un calcul plus conservateur
          elementsToAnimate = Math.floor(scrollProgress * totalElements);

          // Forcer au moins 1 mot si scrollProgress > 0.001
          if (
            scrollProgress > 0.001 &&
            elementsToAnimate === 0 &&
            totalElements > 0
          ) {
            elementsToAnimate = 1;
          }
        }

        // Ne pas dépasser le nombre total d'éléments
        elementsToAnimate = Math.min(elementsToAnimate, totalElements);

        // Éviter les animations redondantes qui causent le clignotement
        if (element._lastAnimatedCount !== elementsToAnimate) {
          const previousAnimatedCount = element._lastAnimatedCount || 0;
          element._lastAnimatedCount = elementsToAnimate;

          // CORRECTION: Animer de la couleur originale (Webflow) vers la couleur cible (attribut)
          // avec easing pour un remplissage fluide au scroll - optimisé pour éviter le clignotement
          element._paragraphAnimatedElements.forEach((el, elIndex) => {
            if (elIndex < elementsToAnimate) {
              // Les éléments qui entrent dans l'animation (nouveau ou déjà animé)
              if (elIndex >= previousAnimatedCount || !el._isAnimated) {
                // Animation avec easing pour les nouveaux éléments
                gsap.to(el, {
                  color: element._paragraphTargetColor,
                  duration: 0.3,
                  ease: "power2.out",
                });
                el._isAnimated = true;
              }
            } else {
              // Les éléments qui sortent de l'animation (scroll vers le haut)
              if (el._isAnimated) {
                gsap.to(el, {
                  color: element._paragraphOriginalColor,
                  duration: 0.3,
                  ease: "power2.out",
                });
                el._isAnimated = false;
              }
            }
          });
        }
      }
    }
  });
}

// Auto-détection et connexion à Barba.js selon le pattern validé
setTimeout(() => {
  if (typeof barba !== "undefined") {
    // Hook beforeLeave : Nettoyer avant de quitter la page ET cacher les hero
    barba.hooks.beforeLeave((data) => {
      // IMPORTANT: Cacher immédiatement les titres hero de la nouvelle page
      const nextHeroTitles = data.next.container.querySelectorAll(
        `[data-text-animate-type="hero"]`
      );
      const nextHeroWords = data.next.container.querySelectorAll(
        `[data-text-animate-type="hero"] .word-animation`
      );

      // Masquer les titres hero au niveau principal
      if (nextHeroTitles.length > 0) {
        nextHeroTitles.forEach((title) => {
          gsap.set(title, {
            opacity: 0,
            visibility: "hidden",
          });
        });
      }

      if (nextHeroWords.length > 0) {
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
      // Nettoyer les animations GSAP en cours
      const words = document.querySelectorAll(".word-animation");
      if (words.length > 0) {
        gsap.killTweensOf(words);
      }
    });

    // Fonction pour déclencher les animations hero
    const triggerHeroAnimations = () => {
      const heroHeadings = document.querySelectorAll(
        `[data-text-animate-type="hero"]`
      );
      heroHeadings.forEach((heading) => {
        if (heading._animationTimeline && heading._animateType === "hero") {
          const delay = heading._animateDelay || 200;
          setTimeout(() => {
            heading._animationTimeline.play();
          }, delay);
        }
      });
    };

    // Hook beforeEnter : Préparer la nouvelle page
    barba.hooks.beforeEnter((data) => {
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
        heroTitles.forEach((title) => {
          gsap.set(title, {
            opacity: 0,
            visibility: "hidden",
          });
        });
      }

      if (heroWords.length > 0) {
        gsap.set(heroWords, {
          opacity: 0,
          y: 30,
          rotationX: -45,
        });
      }

      if (allWords.length > 0) {
        gsap.set(allWords, {
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

          // Initialiser les animations de paragraphes avec retry automatique
          let retryCount = 0;
          const maxRetries = 5;

          function tryInitParagraphAnimationsBarba() {
            const success = initParagraphAnimations();
            if (!success && retryCount < maxRetries) {
              retryCount++;
              setTimeout(tryInitParagraphAnimationsBarba, 300 * retryCount);
            }
          }

          tryInitParagraphAnimationsBarba();

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
