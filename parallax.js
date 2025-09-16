// PAS de DOMContentLoaded ! Exécution immédiate
gsap.registerPlugin(ScrollTrigger);

// Parallax sur toutes les images dans .project_visual
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
