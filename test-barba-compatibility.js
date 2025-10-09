// ========================================
// 🧪 TEST BARBA COMPATIBILITY
// ========================================
// Script de test pour vérifier la compatibilité Barba.js

console.log("🧪 BARBA COMPATIBILITY TEST - Starting...");

// Fonction de test globale
window.testBarbaCompatibility = function () {
  console.log("🧪 Testing Barba compatibility...");

  // Vérifier que Barba est disponible
  if (typeof barba === "undefined") {
    console.error("❌ Barba.js not found!");
    return false;
  }

  console.log("✅ Barba.js detected");

  // Vérifier que tous les scripts sont disponibles
  const requiredScripts = [
    "initAllCursors",
    "initHoverImage",
    "initClock",
    "initFAQ",
    "initMenuScrollLock",
    "initParallax",
    "initProjectCursorAnimation",
    "initSwiper",
  ];

  const missingScripts = requiredScripts.filter(
    (script) => typeof window[script] !== "function"
  );

  if (missingScripts.length > 0) {
    console.error("❌ Missing scripts:", missingScripts);
    return false;
  }

  console.log("✅ All required scripts found");

  // Test des hooks Barba
  console.log("🧪 Testing Barba hooks...");

  // Simuler une transition
  const testData = {
    current: { container: document.body },
    next: { container: document.body },
  };

  // Test beforeLeave
  console.log("🧪 Testing beforeLeave hooks...");
  barba.hooks.do("beforeLeave", testData);

  // Test afterLeave
  console.log("🧪 Testing afterLeave hooks...");
  barba.hooks.do("afterLeave", testData);

  // Test beforeEnter
  console.log("🧪 Testing beforeEnter hooks...");
  barba.hooks.do("beforeEnter", testData);

  // Test afterEnter
  console.log("🧪 Testing afterEnter hooks...");
  barba.hooks.do("afterEnter", testData);

  console.log("✅ All Barba hooks tested successfully");

  return true;
};

// Auto-test au chargement
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      window.testBarbaCompatibility();
    }, 1000);
  });
} else {
  setTimeout(() => {
    window.testBarbaCompatibility();
  }, 1000);
}

// Test manuel via console
console.log("🧪 To test manually, run: window.testBarbaCompatibility()");
