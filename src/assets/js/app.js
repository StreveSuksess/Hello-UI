//slider

let sliderTrack = document.getElementById("sliderTrack");
let sliderOffsetWidth = sliderTrack.offsetWidth;
let sliderScrollWidth;
const sliderIndicators = document.querySelectorAll(".slider__indicator");
let activeIndicator = sliderIndicators[0];

sliderIndicators.forEach((sliderIndicator) => {
  sliderIndicator.addEventListener("click", () => {
    sliderScrollWidth = sliderTrack.scrollWidth;
    activeIndicator.classList.remove("active");
    activeIndicator = sliderIndicator;
    activeIndicator.classList.add("active");
  });
});

sliderIndicators[0].addEventListener("click", () => {
  sliderTrack.style.transform = `translateX(0px)`;
});

sliderIndicators[1].addEventListener("click", () => {
  sliderTrack.style.transform = `translateX(${-((sliderScrollWidth - sliderOffsetWidth) / 2)}px)`;
});
sliderIndicators[2].addEventListener("click", () => {
  sliderTrack.style.transform = `translateX(${-(sliderScrollWidth - sliderOffsetWidth)}px)`;
});

//burger-menu

const burger = document.getElementById("burger");

burger.onclick = () => document.body.classList.toggle("active-nav");

if (window.innerWidth < 992) {
  let nav = document.querySelector(".nav");

  nav.onclick = () => document.body.classList.remove("active-nav");
}
