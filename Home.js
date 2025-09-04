document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".Header-Button");
  const hdr = document.querySelector(".main-header-wrapper");

  btn.addEventListener("click", () => {
    if (window.getComputedStyle(hdr).display === "none") {
      hdr.style.display = "block";
    } else {
      hdr.style.display = "none";
    }
  });
});


const typedText = document.querySelector(".typed");
const cursor = document.querySelector(".cursor");
const sentences = [
  "I am a Website Designer",
  "I am a Competitive Coder",
  "I am a Tech Enthusiast"
];

let sentenceIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  if (typing) {
    if (charIndex < sentences[sentenceIndex].length) {
      typedText.textContent += sentences[sentenceIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100); 
    } else {
      typing = false;
      setTimeout(typeEffect, 1500);
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = sentences[sentenceIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50); 
    } else {
      typing = true;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      setTimeout(typeEffect, 500); 
    }
  }
}
typeEffect();
