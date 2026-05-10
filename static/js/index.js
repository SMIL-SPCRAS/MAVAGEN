document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("btt-button");
  const modal = document.getElementById("reference-modal");
  const modalImage = modal ? modal.querySelector("img") : null;
  const modalClose = modal ? modal.querySelector(".image-modal-close") : null;

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      backToTopButton.classList.toggle("show", window.scrollY > 160);
    });

    backToTopButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (modal && modalImage && modalClose) {
    const closeModal = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      modalImage.src = "";
      modalImage.alt = "";
      document.body.classList.remove("modal-open");
    };

    document.querySelectorAll(".reference-lightbox-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        const image = link.querySelector("img");

        event.preventDefault();
        modalImage.src = link.getAttribute("href");
        modalImage.alt = image ? image.alt : "Reference image";
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
      });
    });

    modalClose.addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }
});
