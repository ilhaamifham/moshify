// Bnaner Navigation

const collapsibleButton = document.querySelector("#collapsibleButton");
collapsibleButton.addEventListener("click", function () {
  this.classList.toggle("collapsible-expanded");
});

// Contentinfo Navigation

const collapsibleSection = document.querySelectorAll(".collapsibleSection");
collapsibleSection.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible-expanded");
  })
);
