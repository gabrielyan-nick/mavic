"use strict";

// Slider

const slides = document.querySelectorAll(".products__slider-item"),
  sliderField = document.querySelector(".products__slider"),
  sliderWrapper = document.querySelector(".products__slider-box"),
  width = window.getComputedStyle(sliderWrapper).width,
  nextBtn = document.querySelector(".next-btn"),
  prevBtn = document.querySelector(".prev-btn"),
  nextArrow = document.querySelector(".next-btn svg"),
  prevArrow = document.querySelector(".prev-btn svg");

let offset = 0;

sliderField.style.width = slides.length * 100 + "%";
sliderField.style.display = "flex";
sliderWrapper.style.overflow = "hidden";
sliderField.style.transition = "all 1s";

slides.forEach((slide) => {
  slide.width = width;
});

function getNum(str) {
  return +str.replace(/\D/g, "");
}

nextBtn.addEventListener("click", () => {
  if (offset == getNum(width) * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += getNum(width);
  }

  sliderField.style.transform = `translateX(-${offset}px)`;
  hideNotActiveBtn();
});

prevBtn.addEventListener("click", () => {
  if (offset == 0) {
    offset = getNum(width) * (slides.length - 1);
  } else {
    offset -= getNum(width);
  }

  sliderField.style.transform = `translateX(-${offset}px)`;
  hideNotActiveBtn();
});

function hideNotActiveBtn() {
  if (offset == 0) {
    prevArrow.classList.add("hide");
  } else {
    prevArrow.classList.remove("hide");
  }
  if (offset == getNum(width) * (slides.length - 1)) {
    nextArrow.classList.add("hide");
  } else {
    nextArrow.classList.remove("hide");
  }
}

hideNotActiveBtn();
