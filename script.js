// Filter system
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".game-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    cards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
        card.style.opacity = "1";
      } else {
        card.style.opacity = "0";
        setTimeout(() => (card.style.display = "none"), 300);
      }
    });
  });
});
