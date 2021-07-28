function menu() {
  let closeIcon = document.querySelector("i.fa-times-circle"),
    barIcon = document.querySelector("i.fa-bars"),
    links = document.querySelector(".links"),
    link = document.querySelectorAll(".links a"),
    mediaQ = window.matchMedia("(max-width: 767px)");

  barIcon.addEventListener("click", () => {
    if (mediaQ.matches) {
      links.style.display = "flex";
      links.style.flexDirection = "column";
      links.style.position = "absolute";
      links.style.top = "100%";
      links.style.left = "0";
      links.style.width = "100%";
      links.style.backgroundColor = "rgb(0 0 0 / 50%)";
      barIcon.style.display = "none";
      closeIcon.style.display = "flex";
      link.forEach((element) => {
        element.style.padding = "15px";
      });
    }
  });
  closeIcon.addEventListener("click", () => {
    if (mediaQ.matches) {
      links.style.display = "none";
      barIcon.style.display = "flex";
      closeIcon.style.display = "none";
    }
  });
}

function slide() {
  let dots = document.querySelectorAll(".bullet"),
    nxt = document.querySelector("i.right"),
    perv = document.querySelector("i.left"),
    landing = document.querySelector(".landing"),
    ims = [
      "Owls_Birds_Snowy_owl_Flight_Front_543052_1920x1080.jpg",
      "landing.jpg",
      "155974.jpg",
    ];

  let index = 1;

  nxt.addEventListener("click", () => {
    index++;
    if (index > dots.length - 1) {
      dots[index - 1].classList.remove("active");
      index = 0;
    }
    dots[index].classList.add(`active`);
    if (index - 1 >= 0) {
      dots[index - 1].classList.remove("active");
    }
    landing.style.backgroundImage = `url("im/${ims[index]}")`;
  });
  perv.addEventListener("click", () => {
    index--;
    if (index < 0) {
      dots[index + 1].classList.remove("active");
      index = dots.length - 1;
    }
    dots[index].classList.add(`active`);
    if (index + 1 <= dots.length - 1) {
      dots[index + 1].classList.remove("active");
    }
    if (index === dots.length - 1) {
      landing.style.backgroundImage = `url("im/Owls_Birds_Snowy_owl_Flight_Front_543052_1920x1080.jpg")`;
    }
    landing.style.backgroundImage = `url("im/${ims[index]}")`;
  });
}
function more() {
  let button = document.querySelector("button.more"),
    hiddenIms = document.querySelectorAll(".box.hidde-box");
  console.log(hiddenIms);
  button.addEventListener("click", () => {
    hiddenIms.forEach((element) => {
      element.classList.remove("hidde-box");
    });
    button.style.display = "none";
  });
}
function filter() {
  let names = document.querySelectorAll("ul.shuffle li"),
    appIms = document.querySelectorAll(".box.App"),
    webIms = document.querySelectorAll(".box.Web"),
    photoIms = document.querySelectorAll(".box.Photo"),
    boxes = document.querySelectorAll(".box");
  printIms = document.querySelectorAll(".box.Print");
  document.addEventListener("click", (event) => {
    names.forEach((element) => {
      if (element.innerHTML === event.target.textContent) {
        element.classList.add("active");
      } else element.classList.remove("active");
    });
    boxes.forEach((element) => {
      if (
        element.classList[1] !== event.target.textContent &&
        event.target.textContent !== "Show More"
      ) {
        element.classList.add("hidde-box");
      } else element.classList.remove("hidde-box");
      if (event.target.textContent === "All") {
        element.classList.remove("hidde-box");
      }
    });
  });
}
menu();
slide();
more();
filter();
