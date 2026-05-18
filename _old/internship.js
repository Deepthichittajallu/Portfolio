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