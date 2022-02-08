//tabs

const tabs = document.querySelectorAll(".info__tab");
const tabsContainer = document.querySelector(".info__tab-container");
const tabsContent = document.querySelectorAll(".info__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".info__tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("info__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("info__content--active"));

  clicked.classList.add("info__tab--active");
  document
    .querySelector(`.info__content--${clicked.dataset.tab}`)
    .classList.add("info__content--active");
});

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();
  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
//scrolling

document.querySelector(".buttons").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("button__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//cards for iphone
// const cards = document.querySelectorAll(".card");
// const cardsContainer = document.querySelector(".cards-container");
// const cardsBack = document.querySelectorAll(".card__side");

// cardsContainer.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".card");

//   if (!clicked) return;

//   cards.forEach((t) => t.classList.remove("info__tab--active"));
//   tabsContent.forEach((c) => c.classList.remove("info__content--active"));

//   clicked.classList.add("info__tab--active");
//   document
//     .querySelector(`.info__content--${clicked.dataset.tab}`)
//     .classList.add("info__content--active");
// });
