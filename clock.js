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
// 🎪 COMPATIBILITÉ BARBA.JS (AUTO-DÉTECTION)
// ========================================

setTimeout(() => {
  if (typeof barba !== "undefined") {
    barba.hooks.beforeEnter((data) => {
      setTimeout(() => {
        if (typeof window.initClock === "function") {
          window.initClock();
        }
      }, 50);
    });
  }
}, 500);
