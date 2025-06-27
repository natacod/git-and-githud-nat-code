document.getElementById("cta-btn").addEventListener("click", () => {
  document.getElementById("message").textContent = "Thanks for getting started! 🚀";
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
