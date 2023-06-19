let skillsSection = document.querySelector(".our-skills");
let theProgressSpan = document.querySelectorAll(".the-progress span");
window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop - 250) {
    theProgressSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

let upBtn = document.querySelector(".up");
window.addEventListener("scroll", () => {
  this.scrollY >= document.documentElement.clientHeight
    ? upBtn.classList.add("show")
    : upBtn.classList.remove("show");
});
upBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
