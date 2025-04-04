function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const words = ["Desenvolvedor Full Stack", "Cibersecurity", "Data analytics", "Cloud"]; // Words to typeF
const typingElement = document.getElementById("typing-effect");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayedText = currentWord.slice(0, charIndex);

  typingElement.textContent = displayedText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 150); // Typing speed
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100); // Deleting speed
  } else {
    isDeleting = !isDeleting;

    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length; // Move to next word
    }
    setTimeout(typeEffect, 1000); // Pause between words
  }
}

typeEffect(); // Start the typing effect

function toggleInfo() {
  const box = document.getElementById("infoBox");
  box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}
