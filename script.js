document.querySelectorAll(".project_single_card").forEach((card) => {
  const cursor = card.querySelector(".project_cursor");
  let hideTimeout;

  if (cursor) {
    card.addEventListener("mouseenter", () => {
      // Annule le timeout de disparition si on re-entre rapidement
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
    });

    card.addEventListener("mouseleave", () => {
      // Petit délai avant de faire disparaître pour éviter les faux positifs
      hideTimeout = setTimeout(() => {
        gsap.killTweensOf(cursor);
        gsap.to(cursor, {
          opacity: 0,
          scale: 0.8,
          duration: 0.2,
          ease: "power2.out",
        });
      }, 50); // 50ms de délai
    });

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      gsap.to(cursor, {
        left: e.clientX - rect.left,
        top: e.clientY - rect.top,
        duration: 0.05,
        ease: "none",
      });
    });
  }
});
document.querySelectorAll(".project_single_card").forEach((card) => {
  const cursor = card.querySelector(".project_cursor");
  let hideTimeout;

  if (cursor) {
    card.addEventListener("mouseenter", () => {
      // Annule le timeout de disparition si on re-entre rapidement
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
    });

    card.addEventListener("mouseleave", () => {
      // Petit délai avant de faire disparaître pour éviter les faux positifs
      hideTimeout = setTimeout(() => {
        gsap.killTweensOf(cursor);
        gsap.to(cursor, {
          opacity: 0,
          scale: 0.8,
          duration: 0.2,
          ease: "power2.out",
        });
      }, 50); // 50ms de délai
    });

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      gsap.to(cursor, {
        left: e.clientX - rect.left,
        top: e.clientY - rect.top,
        duration: 0.05,
        ease: "none",
      });
    });
  }
});
