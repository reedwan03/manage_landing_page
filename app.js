const slidePar = document.querySelector(".feedbacks");
const par = document.querySelector(".feedbacks ul");
const slider = document.querySelectorAll(".feedbacks ul li");

const circles = document.querySelectorAll(".circles div");
const size = slider[0].clientWidth;

let def = 0;

// slidePar.style.transform = `translateX(${-size * 1}px)`;

for (i = 0; i <= circles.length; i++) {
  if (circles[i]) {
    circles[i].addEventListener("click", (e) => {
      movement(parseFloat(e.target.dataset.pos));
    });
  }
}

const movement = (pos) => {
  for (l of circles) {
    l.classList.remove("active");
  }
  def = pos;
  slidePar.style.transition = "transform 0.4s ease-in-out";
  slidePar.style.transform = `translateX(${-size * parseFloat(pos)}px)`;
  circles[def].classList.add("active");
};

let touchStart, touchend, touchMove, change, sliderWidth;

slidePar.addEventListener("touchstart", function (e) {
  touchStart = e.touches[0].clientX;
});

slidePar.addEventListener("touchmove", function (e) {
  touchMove = e.touches[0].clientX;
});

slidePar.addEventListener("touchend", function (e) {
  sliderWidth = slidePar.clientWidth / 4;
  change = touchStart - touchMove;
  if (sliderWidth <= (change < 0 ? change * -1 : change)) {
    if (change > 0) {
      movement(def === 3 ? 0 : def + 1);
    } else {
      movement(def === 0 ? 3 : def - 1);
    }
  }
});

// let touchStartX, touchMoveX, sliderWidth, change;

// slidePar.addEventListener("touchstart", function (e) {
//   touchStartX = e.touches[0].clientX;
//   sliderWidth = slidePar.clientWidth / slider.length;
// });

// slidePar.addEventListener("touchmove", function (e) {
//   e.preventDefault();

//   touchMoveX = e.touches[0].clientX;

//   change = touchStartX - touchMoveX;

// });

// const mobile = function (e) {
//   if (change > sliderWidth / 4) {
//     slidePar.style.transition = "transform 1s ease-in-out";
//     slidePar.style.transform = `translateX(${-size * change}px)`;
//   } else if (change * -1 < sliderWidth / 4) {
//     slidePar.style.transition = "transform 1s ease-in-out";
//     slidePar.style.transform = `translateX(${size * change}px)`;
//   } else {
//     null;
//   }
//   [touchStartX, touchMoveX, change, sliderWidth] = [0, 0, 0, 0];
// };

// slidePar.addEventListener("touchend", mobile);

const hamburg = document.querySelector(".ham");
const menu = document.querySelector(".nav-options");
const contr = document.querySelector(".hamburger img");

const close = document.querySelector(".cls");

hamburg.addEventListener("click", () => {
  menu.style.display = "block";
});

close.addEventListener("click", () => {
  menu.style.display = "none";
});
