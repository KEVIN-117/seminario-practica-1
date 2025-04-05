document.addEventListener("DOMContentLoaded", function () {
  const particlesContainer = document.getElementById("particles");

  const particleCount = 200;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    // Random size
    const size = Math.random() * 5 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation duration
    const duration = Math.random() * 30 + 10;
    particle.style.animationDuration = `${duration}s`;

    // Random delay
    const delay = Math.random() * 5;
    particle.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(particle);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const particlesProjects = document.getElementById("particlesProjects");

  const particleCount = 200;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    // Random size
    const size = Math.random() * 5 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation duration
    const duration = Math.random() * 30 + 10;
    particle.style.animationDuration = `${duration}s`;

    // Random delay
    const delay = Math.random() * 5;
    particle.style.animationDelay = `${delay}s`;

    particlesProjects.appendChild(particle);
  }
});

document.getElementById("current-year").textContent = new Date().getFullYear();

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

function buildTag(tag, tagStyle) {
  let data = ``;
  Array.from(tag).map((item) => {
    data += `<span class="${tagStyle}">${item}</span>`;
  });
  return data;
}
