const blocks = document.querySelectorAll("div.block");
z = 0;
blocks.forEach((block) => {
  block.addEventListener("click", (event) => {
    event.target.style.position = "absolute";
    event.target.style.top = "79px";
    event.target.style.zIndex = z++;
  })
});



  