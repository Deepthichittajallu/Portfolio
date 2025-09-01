const btn = document.querySelector(".Header-Button");
const hdr = document.querySelector(".main-header-wrapper");
btn.addEventListener('click',() =>{   
        hdr.style.display = 'block';
});
hdr.addEventListener("mouseleave", () => {
    hdr.style.display = "none";
    });