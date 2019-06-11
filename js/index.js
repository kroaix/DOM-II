// Your code goes here

// #1 Mouseenter 
// #2 Mouseleave
// preventDefault
const nav = document.querySelector('.main-navigation');
nav.style.zIndex = "1";

const navBar = document.querySelector('nav a').addEventListener("click", (event) => {
  event.preventDefault();
});

const headerImg = document.querySelector('.intro img');

function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
wrap(headerImg, document.createElement('div'));
wrap(document.querySelector(".content-destination img"), document.createElement('div'));

const imgWrapper = document.querySelectorAll(".intro div, .content-destination div");
imgWrapper.forEach((item) =>{
  item.classList.add("img-content");
});

const zoomImg = document.querySelectorAll('img');
zoomImg.forEach((img) => {
  img.style.opacity = "0.7";
  img.style.transition = "transform .5s, opacity .5s";
  img.style.zIndex = "0";
  img.addEventListener("mouseenter", (event) => {
    event.target.style.transform = "scale(1.3)";
    event.target.style.opacity = "1";
  })
  img.addEventListener("mouseleave", (event) => {
    event.target.style.transform = "scale(1)";
    event.target.style.opacity = "0.7";
  });
});

const properties = document.querySelectorAll(".img-content");
properties.forEach((imgDiv) => {
  imgDiv.style.maxWidth = "100%";
  imgDiv.style.overflow = "hidden";
  imgDiv.style.borderRadius = "10px";
});

const noBorderRadius = document.querySelector(".intro div");
noBorderRadius.style.borderRadius = "0px";

// #3 Mouseover 
// #4 click

const buttons = document.querySelectorAll(".content-pick .btn")

buttons.forEach((btn) => {
  btn.addEventListener("mouseover", (event) => {
    event.target.style.transition = "all 0.5s ease 0s";
    event.target.style.border = "none";
    event.target.style.backgroundColor = "#148EA1";
    event.target.style.color = "#FFF";
    setTimeout(() => {
      event.target.style.backgroundColor = "#17A2B8";
    }, 500)
  }, false);

  btn.addEventListener("click", (event) => {
    event.target.style.border = "2px inset #17A2B8";
    setTimeout(() => {
      event.target.style.border = "";
    }, 500)
  }, false);
});


// #5 dblclick

const headers = document.querySelectorAll("h1, h2, h3");

headers.forEach((header) => {
  header.addEventListener("dblclick", (event) => {
    if (event.target.style.display === "none") {
      event.target.style.display = "inline";
    } else {
      event.target.style.display = "none";
    }
  })
});

// #6 mousedown // stopPropagation

const content = document.querySelector(".content-section");
content.addEventListener("mousedown", (event) => {
  event.target.style.backgroundColor = "black";
});

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("mousedown", (event) => {
    event.target.style.color = "#17A2B8";
    event.stopPropagation()
  })
});

// #7 



// #8



// #9 



// #10 
