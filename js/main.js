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


//Using fetch() keeps users on your business card page instead of redirecting them to Formspree’s thank-you page
const orderForm = document.getElementById("orderForm");
const submitBtn = document.getElementById("submitBtn");
const formStatus = document.getElementById("formStatus");

if (orderForm) {
  orderForm.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevents page reload/redirect

    const formData = new FormData(orderForm);

    // Set UI to loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;
    formStatus.className = "form-status";
    formStatus.style.display = "none";

    try {
      const response = await fetch(orderForm.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formStatus.textContent = "✓ Order request sent successfully! I'll get back to you shortly.";
        formStatus.classList.add("success");
        orderForm.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
        } else {
          formStatus.textContent = "Oops! There was a problem submitting your form.";
        }
        formStatus.classList.add("error");
      }
    } catch (error) {
      formStatus.textContent = "Oops! Network error. Please try again later.";
      formStatus.classList.add("error");
    } finally {
      // Restore button state
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Order Request`;
    }
  });
}


// Auto-update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth back-to-top scrolling
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}