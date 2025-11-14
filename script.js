// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking on links
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = target.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Contact Form Handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (!data.name || !data.email || !data.message) {
      alert("Please fill in all required fields");
      return;
    }

    // Here you would typically send the form data to a server
    console.log("Form submitted:", data);
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });
}

// Update current year in footer
const currentYearElement = document.getElementById("currentYear");
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all animated elements
document
  .querySelectorAll(
    ".about-content, .about-cards, .service-card, .product-card, .contact-info, .contact-form-wrapper"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
  }

  lastScroll = currentScroll;
});
