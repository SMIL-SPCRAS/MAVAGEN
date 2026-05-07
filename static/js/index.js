document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("btt-button");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      backToTopButton.classList.toggle("show", window.scrollY > 160);
    });

    backToTopButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
