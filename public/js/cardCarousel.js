// let slideIndex1 = 0;
// const sliders1 = document.querySelectorAll(".carousel-mini img");
// const carouselInterval = setInterval(() => {
//   sliders1[slideIndex1].classList.remove("active");
//   slideIndex1 = (slideIndex1 + 1) % sliders1.length;
//   sliders1[slideIndex1].classList.add("active");
// }, 2000);

const sliders = document.querySelectorAll(".carousel img");
const prevButton = document.querySelector(".Предыдущая");
const nextButton = document.querySelector(".Следующая");
let slideIndex = 0;

const showSlide = () => {
  sliders.forEach((slide) => slide.classList.remove("active"));
  sliders[slideIndex].classList.add("active");
};

prevButton?.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliders.length - 1;
  }
  showSlide();
});

nextButton?.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex >= sliders.length) {
    slideIndex = 0;
  }
  showSlide();
});

showSlide();
