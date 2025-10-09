// ========================================
// ⏰ CLOCK - COMPATIBLE BARBA.JS
// ========================================

// Fonction principale d'initialisation
window.initClock = function () {
  // Cacher les horloges avant mise à jour
  document.querySelectorAll(".js-clock").forEach((el) => {
    el.style.visibility = "hidden";
  });

  function updateClocks() {
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
      el.style.visibility = "visible";
    });
  }

  // Update immédiatement
  updateClocks();

  // Nettoyer l'ancien intervalle si existe
  if (window.clockInterval) {
    clearInterval(window.clockInterval);
  }

  // Puis toutes les secondes
  window.clockInterval = setInterval(updateClocks, 1000);
};

// ========================================
// 🔄 INITIALISATION AUTOMATIQUE
// ========================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (typeof window.initClock === "function") {
        window.initClock();
      }
    }, 50);
  });
} else {
  setTimeout(() => {
    if (typeof window.initClock === "function") {
      window.initClock();
    }
  }, 50);
}

// ========================================
// 🎪 COMPATIBILITÉ BARBA.JS (SYSTÈME UNIFIÉ)
// ========================================

// Système de hooks optimisé selon la doc officielle Barba.js
setTimeout(() => {
  if (typeof barba !== "undefined") {
    console.log("🎯 clock.js - Barba detected, setting up optimized hooks");
    
    // Nettoyer les anciens hooks pour éviter les doublons
    if (window.clockHooksRegistered) {
      console.log("🎯 clock.js - Cleaning up old hooks");
      return; // Éviter les hooks multiples
    }
    
    window.clockHooksRegistered = true;

    // Hook beforeLeave : Nettoyer avant de quitter la page
    barba.hooks.beforeLeave((data) => {
      console.log("🎯 clock.js - beforeLeave: cleaning up clock");
      if (window.clockInterval) {
        clearInterval(window.clockInterval);
        window.clockInterval = null;
      }
    });

    // Hook afterEnter : Réinitialiser après l'entrée (PRINCIPAL)
    barba.hooks.afterEnter((data) => {
      console.log("🎯 clock.js - afterEnter: reinitializing clock");
      setTimeout(() => {
        if (typeof window.initClock === "function") {
          try {
            window.initClock();
            console.log("✅ clock.js - Successfully reinitialized");
          } catch (error) {
            console.error(
              "❌ clock.js - Error during reinitialization:",
              error
            );
          }
        }
      }, 100); // Timing optimisé pour les horloges
    });

    console.log("✅ clock.js - All Barba hooks registered successfully");
  } else {
    console.log("⚠️ clock.js - Barba not found, using fallback only");
  }
}, 500);
