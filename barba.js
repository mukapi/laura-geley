(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // Overlay orange
    const overlay = document.createElement("div");
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background-color: #ff641e; z-index: 9999; opacity: 0; pointer-events: none;
      `;
    document.body.appendChild(overlay);

    // Lenis
    let lenis = null;
    try {
      lenis = new Lenis({ duration: 1.2, smoothWheel: true, autoRaf: true });

      // Listener pour les changements de taille de fenêtre
      window.addEventListener("resize", () => {
        if (lenis) {
          lenis.resize();
        }
      });
    } catch (e) {}
    const stopLenis = () => {
      try {
        lenis && lenis.stop();
      } catch (e) {}
    };
    const startLenis = () => {
      try {
        lenis && lenis.start();
      } catch (e) {}
    };
    const refreshLenis = () => {
      try {
        if (lenis) {
          lenis.resize();
          lenis.scrollTo(0, { immediate: true });
        }
      } catch (e) {}
    };

    barba.init({
      preventRunning: true,
      debug: true, // Pour voir les logs et diagnostiquer
      transitions: [
        {
          name: "fade-transition",

          // Inspiré de l'exemple qui fonctionne : Promise.all approach
          async leave(data) {
            stopLenis();

            // Créer une promesse pour l'overlay qui apparaît
            const overlayPromise = new Promise((resolve) => {
              gsap.to(overlay, {
                opacity: 1,
                duration: 0.3,
                onComplete: resolve,
              });
            });

            return overlayPromise;
          },

          beforeEnter(data) {
            window.scrollTo(0, 0);
            // Préparer le nouveau container (invisible pour l'instant)
            gsap.set(data.next.container, {
              visibility: "visible",
              opacity: 0,
            });
          },

          async enter(data) {
            // Cacher l'ancien container (comme dans l'exemple)
            gsap.set(data.current.container, { display: "none" });

            // Fade in pur, sans mouvement
            gsap.set(data.next.container, {
              opacity: 0,
            });

            // Promise.all approach : attendre que tout soit prêt
            const fadeInPromise = new Promise((resolve) => {
              // Timeline qui fait tout en même temps
              const tl = gsap.timeline({ onComplete: resolve });

              // 1. L'overlay disparaît
              tl.to(
                overlay,
                {
                  opacity: 0,
                  duration: 0.4,
                  ease: "power2.out",
                },
                0
              )
                // 2. En même temps, le container fait son fade in pur
                .to(
                  data.next.container,
                  {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                  },
                  0.1 // Légère avance pour le contenu
                );
            });

            await fadeInPromise;
            startLenis();
            // Forcer un refresh de Lenis après la transition
            setTimeout(() => {
              refreshLenis();
            }, 100);
          },
        },
      ],
    });

    // Hooks pour résoudre le problème de double-clic
    barba.hooks.before((data) => {
      // S'assurer que Lenis est arrêté avant toute transition
      stopLenis();
    });

    barba.hooks.beforeEnter((data) => {
      // Forcer la mise à jour des liens après chaque page
      setTimeout(() => {
        // Réinitialiser les event listeners sur les liens
        document.querySelectorAll("a[href]").forEach((link) => {
          // Vérifier que le lien est interne et devrait être géré par Barba
          if (
            link.hostname === window.location.hostname &&
            !link.hasAttribute("target") &&
            !link.hasAttribute("download") &&
            !link.href.includes("#") &&
            !link.href.includes("mailto:") &&
            !link.href.includes("tel:")
          ) {
            // Forcer l'attribut data-barba si nécessaire
            if (!link.hasAttribute("data-barba")) {
              link.setAttribute("data-barba", "link");
            }
          }
        });
      }, 100);
    });

    // Webflow + Custom Scripts (méthode qui MARCHE selon la communauté)
    barba.hooks.enter((data) => {
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(data.next.html, "text/html");
      const bodyClasses = newDoc.documentElement.getAttribute("data-wf-page");
      if (bodyClasses) {
        document.documentElement.setAttribute("data-wf-page", bodyClasses);
      }

      // 1. Réinitialiser Webflow
      if (window.Webflow) {
        window.Webflow.destroy();
        window.Webflow.ready();
        if (window.Webflow.require) window.Webflow.require("ix2").init();
      }
    });

    // Hook AVANT l'affichage - cacher, mettre à jour et montrer les horloges
    barba.hooks.beforeEnter((data) => {
      // Cacher immédiatement les horloges de la NOUVELLE page
      const newContainer = data.next.container;
      newContainer.querySelectorAll(".js-clock").forEach((el) => {
        el.style.visibility = "hidden";
      });

      // Fonction d'initialisation de l'horloge avec affichage
      function initClockAndShow() {
        function updateClocks() {
          newContainer.querySelectorAll(".js-clock").forEach((el) => {
            const tz = el.dataset.tz;
            const now = new Date();
            const formatter = new Intl.DateTimeFormat("en-US", {
              timeZone: tz,
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            });
            el.textContent = formatter.format(now);
            // Montrer l'horloge maintenant qu'elle a la bonne heure
            el.style.visibility = "visible";
          });
        }

        // Mise à jour immédiate
        updateClocks();

        // Nettoyer l'ancien interval s'il existe
        if (window.clockInterval) {
          clearInterval(window.clockInterval);
        }

        // Nouveau interval (sur toutes les horloges du site)
        window.clockInterval = setInterval(() => {
          document.querySelectorAll(".js-clock").forEach((el) => {
            const tz = el.dataset.tz;
            const now = new Date();
            const formatter = new Intl.DateTimeFormat("en-US", {
              timeZone: tz,
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            });
            el.textContent = formatter.format(now);
          });
        }, 1000);
      }

      // Petit délai pour s'assurer que le DOM est prêt
      setTimeout(initClockAndShow, 50);
    });

    // Solution communautaire : hooks séparés pour les scripts custom
    barba.hooks.afterEnter((data) => {
      // Fonction d'initialisation des cursors (appelée à chaque page)
      function initCursor() {
        // Nettoyer les anciens event listeners
        if (window.cursorCleanup) {
          window.cursorCleanup();
        }

        // Fonction de nettoyage globale
        window.cursorCleanup = () => {
          document.querySelectorAll(".project_single_card").forEach((card) => {
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
          });
        };

        // Initialiser les cursors
        document.querySelectorAll(".project_single_card").forEach((card) => {
          const cursor = card.querySelector(".project_cursor");
          let hideTimeout;

          if (cursor) {
            gsap.set(cursor, { opacity: 0, scale: 0.8 });

            const handleMouseEnter = () => {
              if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
              }
              gsap.killTweensOf(cursor);
              gsap.to(cursor, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.2)",
              });
            };

            const handleMouseLeave = () => {
              hideTimeout = setTimeout(() => {
                gsap.killTweensOf(cursor);
                gsap.to(cursor, {
                  opacity: 0,
                  scale: 0.8,
                  duration: 0.2,
                  ease: "power2.out",
                });
              }, 50);
            };

            const handleMouseMove = (e) => {
              const rect = card.getBoundingClientRect();
              gsap.to(cursor, {
                left: e.clientX - rect.left,
                top: e.clientY - rect.top,
                duration: 0.05,
                ease: "none",
              });
            };

            card.addEventListener("mouseenter", handleMouseEnter);
            card.addEventListener("mouseleave", handleMouseLeave);
            card.addEventListener("mousemove", handleMouseMove);
          }
        });
      }

      // Fonction d'initialisation du parallax
      function initParallax() {
        gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll(".project_visual").forEach((container) => {
          const image = container.querySelector(".project_image");

          if (image) {
            gsap.fromTo(
              image,
              {
                objectPosition: "50% 10%",
              },
              {
                objectPosition: "50% 90%",
                ease: "none",
                scrollTrigger: {
                  trigger: container,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            );
          }
        });
      }

      // Fonction d'initialisation des projets cursor
      function initProjectCursor() {
        // Nettoyer les anciens event listeners
        if (window.projectCursorCleanup) {
          window.projectCursorCleanup();
        }

        // Vérifier que GSAP est disponible
        if (typeof gsap === "undefined") {
          return;
        }

        // Sélecteurs pour votre structure HTML
        const cursorContainer = document.querySelector(
          ".past_projects_cursor_list"
        );
        const cursorItems = document.querySelectorAll(
          ".past_projects_cursor_list_item"
        );
        const projectsWrapper = document.querySelector(
          ".past_projects_list_wrap"
        );
        const projectItems = document.querySelectorAll(".past_project_item");

        // Vérifications de sécurité
        if (
          !cursorContainer ||
          !projectsWrapper ||
          !cursorItems.length ||
          !projectItems.length
        ) {
          return;
        }

        // Variables d'état
        let currentImageIndex = -1;
        let isActive = false;

        // Configuration initiale du curseur
        gsap.set(cursorContainer, {
          opacity: 0,
          scale: 0,
          rotation: -45,
        });

        // Configuration initiale des items du curseur
        gsap.set(cursorItems, {
          yPercent: 100,
        });

        // Fonction de suivi de la souris
        function followMouse(event) {
          if (!cursorContainer) return;
          gsap.to(cursorContainer, {
            x: event.clientX,
            y: event.clientY,
            duration: 1,
            ease: "power1.out",
          });
        }

        // Fonction d'apparition du curseur
        function showCursor() {
          if (!cursorContainer || isActive) return;
          isActive = true;
          gsap.to(cursorContainer, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
        }

        // Fonction de disparition du curseur
        function hideCursor() {
          if (!cursorContainer) return;
          isActive = false;
          gsap.to(cursorContainer, {
            opacity: 0,
            scale: 0,
            rotation: -45,
            duration: 0.4,
            ease: "power2.inOut",
          });
          currentImageIndex = -1;
        }

        // Fonction de changement d'image
        function switchToImage(index) {
          if (!cursorItems || !cursorItems[index]) return;
          const direction = index > currentImageIndex ? 1 : -1;
          const newItem = cursorItems[index];
          const timeline = gsap.timeline({
            defaults: {
              duration: 1.6,
              ease: "expo.out",
            },
          });

          if (currentImageIndex >= 0 && cursorItems[currentImageIndex]) {
            const currentItem = cursorItems[currentImageIndex];
            gsap.set(newItem, { yPercent: 100 * direction });
            timeline
              .to(currentItem, { yPercent: -100 * direction })
              .to(newItem, { yPercent: 0 }, "<");
          } else {
            timeline.fromTo(
              newItem,
              { yPercent: 100 * direction },
              { yPercent: 0 }
            );
          }
          currentImageIndex = index;
        }

        // Event listeners
        document.addEventListener("mousemove", followMouse);

        if (projectsWrapper) {
          projectsWrapper.addEventListener("mouseenter", showCursor);
          projectsWrapper.addEventListener("mouseleave", hideCursor);
        }

        projectItems.forEach((projectItem, index) => {
          if (projectItem) {
            const projectTitle = projectItem.querySelector(
              ".past_project_title"
            );

            const hoverHandler = () => {
              switchToImage(index);
              if (projectTitle) {
                projectTitle.style.color = "#ff641e";
              }
            };

            const leaveHandler = () => {
              if (projectTitle) {
                projectTitle.style.color = "";
              }
            };

            projectItem.addEventListener("mouseenter", hoverHandler);
            projectItem.addEventListener("mouseleave", leaveHandler);

            projectItem._hoverHandler = hoverHandler;
            projectItem._leaveHandler = leaveHandler;
          }
        });

        // Fonction de nettoyage
        function cleanup() {
          document.removeEventListener("mousemove", followMouse);

          if (projectsWrapper) {
            projectsWrapper.removeEventListener("mouseenter", showCursor);
            projectsWrapper.removeEventListener("mouseleave", hideCursor);
          }

          projectItems.forEach((projectItem) => {
            if (projectItem && projectItem._hoverHandler) {
              projectItem.removeEventListener(
                "mouseenter",
                projectItem._hoverHandler
              );
              delete projectItem._hoverHandler;
            }
            if (projectItem && projectItem._leaveHandler) {
              projectItem.removeEventListener(
                "mouseleave",
                projectItem._leaveHandler
              );
              delete projectItem._leaveHandler;
            }
          });

          if (document.body) {
            document.body.style.cursor = "auto";
          }
        }

        // Stocker la fonction de cleanup globalement
        window.projectCursorCleanup = cleanup;
      }

      // Fonction d'initialisation de la copie d'email
      function initCopy() {
        // Nettoyer les anciens event listeners
        if (window.copyCleanup) {
          window.copyCleanup();
        }

        function handleCopyClick(e) {
          const copyElement = e.target.closest("[data-copy-trigger]");
          if (!copyElement) return;

          const sourceSelector = copyElement.getAttribute("data-copy-trigger");
          const sourceElement = document.querySelector(sourceSelector);

          if (!sourceElement) {
            return;
          }

          const emailText = sourceElement.textContent.trim();
          const successMessage =
            copyElement.getAttribute("data-copy-success") || "Copied!";

          if (navigator.clipboard) {
            navigator.clipboard
              .writeText(emailText)
              .then(() => {
                updateCopyText(copyElement, successMessage);
              })
              .catch((err) => {
                fallbackCopy(emailText, copyElement, successMessage);
              });
          } else {
            fallbackCopy(emailText, copyElement, successMessage);
          }
        }

        function updateCopyText(element, successMessage) {
          const originalText = element.textContent;
          element.textContent = successMessage;
          setTimeout(() => {
            element.textContent = originalText;
          }, 2000);
        }

        function fallbackCopy(text, element, successMessage) {
          const textArea = document.createElement("textarea");
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();

          try {
            document.execCommand("copy");
            updateCopyText(element, successMessage);
          } catch (err) {
            // Échec silencieux
          }

          document.body.removeChild(textArea);
        }

        document.addEventListener("click", handleCopyClick);
        window.copyCleanup = function () {
          document.removeEventListener("click", handleCopyClick);
        };
      }

      // Fonction d'initialisation des Swipers
      function initSwiper() {
        // Nettoyer les anciennes instances
        if (window.swiperInstances) {
          window.swiperInstances.forEach((swiper) => {
            if (swiper && swiper.destroy) {
              swiper.destroy(true, true);
            }
          });
          window.swiperInstances = [];
        }

        window.swiperInstances = [];

        const swiperElements = document.querySelectorAll(".swiper");
        swiperElements.forEach(function (swiperEl) {
          let config = {
            slidesPerView: "auto",
            spaceBetween: 0,
            loop: false,
            allowTouchMove: true,
            grabCursor: true,
          };

          if (swiperEl.querySelector(".challenges_grid")) {
            config.mousewheel = true;
          }

          const swiperInstance = new Swiper(swiperEl, config);
          window.swiperInstances.push(swiperInstance);
        });
      }

      // Fonction d'initialisation du scroll horizontal (délégué au script séparé)
      function initHorizontalScroll() {
        // Le script horizontal-scroll.js gère tout
        if (typeof initHorizontalScrollExternal === "function") {
          initHorizontalScrollExternal();
        }
      }

      // Exécuter les initialisations (clock maintenant géré dans beforeEnter)
      initCursor();
      initParallax();
      initProjectCursor();
      initCopy();
      initSwiper();
      initHorizontalScroll();

      // Refresh final de Lenis après toutes les initialisations
      setTimeout(() => {
        refreshLenis();
      }, 200);
    });
  });
})();
