document.querySelector(".hero-btn-2").addEventListener("click", function (e) {
  e.preventDefault();
  const target = document.querySelector("#pricing");
  const offset = target.getBoundingClientRect().top + window.pageYOffset;

  let current = window.pageYOffset;
  const distance = offset - current;
  const duration = 1000; // scroll duration in ms
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic

    window.scrollTo(0, current + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
});

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
