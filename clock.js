// ⚠️ DÉSACTIVÉ - Maintenant géré par barba.js pour éviter le glitch
// (function () {
//   function updateClocks() {
//     document.querySelectorAll(".js-clock").forEach((el) => {
//       const tz = el.dataset.tz;
//       const now = new Date();
//       const formatter = new Intl.DateTimeFormat("en-US", {
//         timeZone: tz,
//         hour: "numeric",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: true,
//       });
//       el.textContent = formatter.format(now);
//     });
//   }
//   // update immédiatement
//   updateClocks();
//   // puis toutes les secondes pour voir les secondes bouger
//   setInterval(updateClocks, 1000);
// })();
