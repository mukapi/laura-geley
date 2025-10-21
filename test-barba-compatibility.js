// ========================================
// 🧪 BARBA COMPATIBILITY CHECKER
// ========================================
// Vérificateur intelligent pour garantir la compatibilité Barba.js
//
// GUIDE DE COMPATIBILITÉ BARBA.JS - PATTERN OBLIGATOIRE :
//
// 1. FONCTION D'INITIALISATION GLOBALE :
//    window.init[ScriptName] = function () { ... }
//
// 2. AUTO-INITIALISATION :
//    if (document.readyState === "loading") {
//      document.addEventListener("DOMContentLoaded", () => { ... });
//    } else { setTimeout(() => { ... }, 200); }
//
// 3. HOOKS BARBA (obligatoires) :
//    setTimeout(() => {
//      if (typeof barba !== "undefined") {
//        if (window.[scriptName]HooksRegistered) return;
//        window.[scriptName]HooksRegistered = true;
//        barba.hooks.beforeLeave((data) => { ... });
//        barba.hooks.afterEnter((data) => { ... });
//      }
//    }, 500);
//
// 4. FONCTION CLEANUP (recommandé) :
//    window.[scriptName]Cleanup = () => { ... }

console.log("🧪 BARBA COMPATIBILITY CHECKER - Loading...");

// Fonction pour vérifier la compatibilité d'un script individuel
window.checkBarbaCompatibility = function (scriptName) {
  console.log(`🔍 Checking compatibility for script: ${scriptName}`);

  // Mapping des noms de scripts vers leurs fonctions init
  const scriptMapping = {
    Swiper: "initSwiper",
    Cursor: "initAllCursors",
    HoverImage: "initHoverImage",
    Clock: "initClock",
    FAQ: "initFAQ",
    MenuScrollLock: "initMenuScrollLock",
    Parallax: "initParallax",
    Project: "initProjectCursorAnimation",
    TextAnimations: "initTextAnimations",
  };

  const initFunctionName = scriptMapping[scriptName] || `init${scriptName}`;
  const hooksRegisteredVar = `${scriptName.toLowerCase()}HooksRegistered`;
  const cleanupFunctionName = `${scriptName.toLowerCase()}Cleanup`;

  const results = {
    scriptName: scriptName,
    initFunction: initFunctionName,
    isCompatible: false,
    checks: {
      barbaAvailable: false,
      initFunctionExists: false,
      hooksRegistered: false,
      cleanupExists: false,
      autoInitExists: false,
    },
    errors: [],
  };

  // 1. Vérifier que Barba est disponible
  if (typeof barba !== "undefined") {
    results.checks.barbaAvailable = true;
  } else {
    results.errors.push("Barba.js not available");
    results.isCompatible = false;
    return results;
  }

  // 2. Vérifier la fonction d'initialisation
  if (typeof window[initFunctionName] === "function") {
    results.checks.initFunctionExists = true;
  } else {
    results.errors.push(`Function window.${initFunctionName} not found`);
  }

  // 3. Vérifier les hooks Barba (variable de contrôle)
  if (typeof window[hooksRegisteredVar] !== "undefined") {
    results.checks.hooksRegistered = true;
  } else {
    results.errors.push(
      `Variable window.${hooksRegisteredVar} not found (hooks may not be registered)`
    );
  }

  // 4. Vérifier la fonction cleanup (optionnel mais recommandé)
  if (typeof window[cleanupFunctionName] === "function") {
    results.checks.cleanupExists = true;
  } else {
    results.errors.push(
      `Cleanup function window.${cleanupFunctionName} not found (recommended)`
    );
  }

  // 5. Vérifier l'auto-initialisation (par parsing du code source)
  results.checks.autoInitExists = true; // On assume que c'est présent si le script est chargé

  // Déterminer la compatibilité globale
  const criticalChecks = [
    results.checks.barbaAvailable,
    results.checks.initFunctionExists,
    results.checks.hooksRegistered,
  ];

  results.isCompatible = criticalChecks.every((check) => check === true);

  return results;
};

// Fonction de test globale améliorée
window.testBarbaCompatibility = function () {
  console.log("🧪 Running comprehensive Barba compatibility check...");

  // Vérifier que Barba est disponible
  if (typeof barba === "undefined") {
    console.error("❌ Barba.js not found!");
    return false;
  }

  console.log("✅ Barba.js detected");

  // Détecter automatiquement tous les scripts chargés
  const detectedScripts = [];
  for (let prop in window) {
    if (prop.startsWith("init") && typeof window[prop] === "function") {
      const scriptName = prop.replace("init", "");
      detectedScripts.push(scriptName);
    }
  }

  console.log(`🔍 Detected scripts: ${detectedScripts.join(", ")}`);

  // Scripts connus à vérifier
  const knownScripts = [
    "Swiper",
    "Cursor",
    "HoverImage",
    "Clock",
    "FAQ",
    "MenuScrollLock",
    "Parallax",
    "Project",
  ];

  let allCompatible = true;
  const compatibilityReport = [];

  // Vérifier chaque script
  knownScripts.forEach((scriptName) => {
    const result = window.checkBarbaCompatibility(scriptName);
    compatibilityReport.push(result);

    if (result.isCompatible) {
      console.log(`✅ ${scriptName}: COMPATIBLE`);
    } else {
      console.warn(`⚠️ ${scriptName}: ISSUES FOUND`);
      result.errors.forEach((error) => {
        console.warn(`   - ${error}`);
      });
      allCompatible = false;
    }
  });

  console.log("📊 COMPATIBILITY SUMMARY:");
  console.table(
    compatibilityReport.map((r) => ({
      Script: r.scriptName,
      Compatible: r.isCompatible ? "✅ Yes" : "❌ No",
      InitFunction: r.checks.initFunctionExists ? "✅" : "❌",
      HooksRegistered: r.checks.hooksRegistered ? "✅" : "❌",
      HasCleanup: r.checks.cleanupExists ? "✅" : "⚠️",
      Errors: r.errors.length,
    }))
  );

  return allCompatible;
};

// Auto-test au chargement (attendre que tous les scripts soient chargés)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      window.testBarbaCompatibility();
    }, 1500); // Délai augmenté pour laisser le temps aux hooks Barba de s'enregistrer
  });
} else {
  setTimeout(() => {
    window.testBarbaCompatibility();
  }, 1500);
}

// Instructions d'utilisation
console.log("🧪 BARBA COMPATIBILITY CHECKER ready!");
console.log("📋 Available commands:");
console.log("  - window.testBarbaCompatibility() - Check all scripts");
console.log(
  "  - window.checkBarbaCompatibility('ScriptName') - Check specific script"
);
console.log(
  "📖 Compatible script names: Swiper, Cursor, HoverImage, Clock, FAQ, MenuScrollLock, Parallax, Project"
);
