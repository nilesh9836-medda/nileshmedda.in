const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const savedTheme = localStorage.getItem("nilesh-theme");
if (savedTheme === "light") document.body.classList.add("light");

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "nilesh-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

document.getElementById("year").textContent = new Date().getFullYear();
