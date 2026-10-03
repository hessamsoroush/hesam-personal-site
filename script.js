document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 280)}ms`;
    observer.observe(item);
  });

  // Subtle parallax for the hero portrait.
  const portrait = document.querySelector(".portrait-frame");
  if (portrait && window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 6;
      const y = (event.clientY / window.innerHeight - 0.5) * 6;
      portrait.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
    });
  }
});
