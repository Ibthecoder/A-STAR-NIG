   document.addEventListener("DOMContentLoaded", function () {
        const mobileMenuBtn = document.getElementById("mobileMenuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        const mobileLinks = document.querySelectorAll(".mobile-link");
        const menuIcon = mobileMenuBtn.querySelector("i");

        // Toggle mobile menu
        mobileMenuBtn.addEventListener("click", function () {
          mobileMenu.classList.toggle("active");

          // Change icon based on menu state
          if (mobileMenu.classList.contains("active")) {
            menuIcon.className = "fa-solid fa-xmark";
          } else {
            menuIcon.className = "fa-solid fa-bars";
          }
        });

        // Close mobile menu when a link is clicked
        mobileLinks.forEach((link) => {
          link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            menuIcon.className = "fa-solid fa-bars";
          });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
              });
            }
          });
        });
      });