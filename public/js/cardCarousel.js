// let slideIndex = 0;
// const sliders = document.querySelectorAll(".carousel img");
// setInterval(() => {
//   sliders[slideIndex].classList.remove("active");
//   slideIndex = (slideIndex + 1) % sliders.length;
//   sliders[slideIndex].classList.add("active");
// }, 5000);

let slideIndex = 0;
const sliders = document.querySelectorAll(".carousel img");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

const showSlide = () => {
  sliders.forEach((slide) => slide.classList.remove("active"));
  sliders[slideIndex].classList.add("active");
};

prevButton.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliders.length - 1;
  }
  showSlide();
});

nextButton.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex >= sliders.length) {
    slideIndex = 0;
  }
  showSlide();
});

showSlide();
