const scroller = document.querySelector(".scroller");
const links = scroller.querySelectorAll(".conthref");

addAnimation();

function addAnimation() {
  scroller.setAttribute("data-animated", true);
}

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    scroller.classList.add("paused");
  });
  link.addEventListener("mouseleave", () => {
    scroller.classList.remove("paused");
  });
});
