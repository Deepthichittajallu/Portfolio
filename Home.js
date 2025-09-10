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
const projects = [
  {
    title: "BookMate",
    desc: `BookMate is a modern and clean web platform designed to help students prepare for interviews, stay on track with semester exam prep<br><br>
           Whether you're aiming to crack campus placements or pass finals stress-free, BookMate is your personal academic sidekick.`,
    link: "https://deepthichittajallu.github.io/BookMate/bookmate.html",
    lottie: "Book.json"
  },
  {
    title: "Careernest",
    desc: `Careernest is a career guidance and resource platform built to help students and professionals discover opportunities, learn essential skills, and prepare for their career paths.`,
    link: "https://careernest-121.vercel.app/",
    lottie: "Careernest.json"
  },
  {
    title: "Find Chico",
    desc: `BookMate is a modern and clean web platform designed to help students prepare for interviews, stay on track with semester exam prep, and boost their confidence.`,
    link: "https://deepthichittajallu.github.io/Chico-game/",
    lottie: "Dogwalking.json"
  }
];
const container = document.getElementById("Proj");
const wrapper = document.createElement("div");
wrapper.classList.add("Projects");
const heading = document.createElement("h1");
heading.textContent = "My Projects";
wrapper.appendChild(heading);
projects.forEach((project, index) => {
  const section = document.createElement("div");
  section.classList.add("Project-section");

  const lottieDiv = document.createElement("div");
  lottieDiv.classList.add("Lottie-anime");
  lottie.loadAnimation({
    container: lottieDiv,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: project.lottie
  });
  const box = document.createElement("div");
  box.classList.add("side-box1");

  const span = document.createElement("span");
  span.classList.add("bookmate-content");
  span.textContent = project.title;

  const para = document.createElement("p");
  para.classList.add("bookmate-para");
  para.innerHTML = project.desc;

  const button = document.createElement("button");
  button.classList.add("bookmate-button");

  const a = document.createElement("a");
  a.href = project.link;
  a.target = "_blank";
  a.textContent = "View Project";

  button.appendChild(a);
  box.appendChild(span);
  box.appendChild(para);
  box.appendChild(button);

  if (index % 2 === 0) {
    section.appendChild(lottieDiv);
    section.appendChild(box);
  } else {
    section.appendChild(box);
    section.appendChild(lottieDiv);
  }

  wrapper.appendChild(section);
});

container.appendChild(wrapper);
function Deepthi()
        {
            console.log("HAi")
            document.getElementsByClassName("mobile-options")[0].style="right:-250px;"
        }
        function Deepu(){
            document.getElementsByClassName("mobile-options")[0].style="right:0px;"
        }
