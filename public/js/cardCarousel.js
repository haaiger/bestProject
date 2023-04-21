const sliders1 = document.querySelectorAll(".carousel-mini img");
let slideIndex1 = 0;

function carouselSlide() {
  for (let i = 0; i < sliders1.length; i++) {
    sliders1[i].classList.remove("active");
  }
  slideIndex1 = (slideIndex1 + 1) % sliders1.length;
  sliders1[slideIndex1].classList.add("active");
}

const carouselInterval = setInterval(carouselSlide, 5000);

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
