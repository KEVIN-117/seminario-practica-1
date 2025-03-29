document.getElementById("current-year").textContent = new Date().getFullYear();

// Typing effect for the hero section
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".typing-text");
  const content = text.textContent;
  text.textContent = "";

  let i = 0;
  function typeWriter() {
    if (i < content.length) {
      text.textContent += content.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  setTimeout(typeWriter, 1000);
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

// Scroll reveal animation
window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".card-hover");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate-float");
    }
  }
});

