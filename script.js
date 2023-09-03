/// count down
// if (module.hot) {
//   module.hot.accept();
//}
"use strict";

const headingText = document.querySelector(".header__text-box");
const heading1 = document.querySelector(".heading-primary--main ");
const heading2 = document.querySelector(".heading-primary--sub");
const btn = document.querySelector(".btn--animated");
const tourSection = document.querySelector(".section-tours");
window.addEventListener("load", function (e) {
  headingText.style.opacity = 1;
  heading1.style.animation = "moveInLeft 1s ease-out";
  heading2.style.animation = "moveInRight 1s ease-out";
  btn.style.animation = "moveInBottom 0.5s ease-out 0.75s";
  btn.style.animationFillMode = "backwards";
  //animation-fill-mode: backwards
  // animation: moveInLeft 1s ease-out;
  //animation: moveInRight 1s ease-out;
  //animation: moveInBottom 0.5s ease-out 0.75s;
});
btn.addEventListener("click", function (e) {
  e.preventDefault();
  tourSection.scrollIntoView({
    behavior: "smooth",
  });
});

const nav = document.querySelector(".navigation__list");
nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("navigation__link")) {
    const el = e.target;
    document.querySelector(".navigation__checkbox").checked = false;

    const id = el.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sections = document.querySelectorAll(".section-content");
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
sections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});
// let timing = setInterval(function () {
//   const comingDate = new Date("2023/12/31").getTime();
//   const nowDate = new Date().getTime();
//   const distance = comingDate - nowDate;
//   if (distance < 0) {
//     clearInterval(timing);
//   }
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   console.log(
//     `${days} days, ${hours} hours ,${minutes} minutes, ${seconds}second`
//   );
// }, 1000);
