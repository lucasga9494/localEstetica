// Seleccionamos imágenes y elementos del lightbox
const galleryImages = document.querySelectorAll(".galeria3 img, .galeria10 img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Abrir lightbox
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Cerrar lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Flecha izquierda
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});

// Flecha derecha
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});

// Cerrar con click fuera
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Navegar con teclado
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "block") {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      lightboxImg.src = galleryImages[currentIndex].src;
    } else if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      lightboxImg.src = galleryImages[currentIndex].src;
    }
  }
});
