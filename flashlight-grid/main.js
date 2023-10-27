const cards = document.querySelectorAll(".card");
const wrapper = document.querySelector(".cards");

wrapper.addEventListener("mousemove", (event) => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--xPos", `${x}px`);
    card.style.setProperty("--yPos", `${y}px`);
  });
});
