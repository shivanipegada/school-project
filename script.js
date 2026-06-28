
const navbar = document.querySelector(".navbar");
const arrowIcon = document.querySelector(".arrowicon");

const defaultSVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
`;

const scrolledSVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
`;

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        arrowIcon.innerHTML = scrolledSVG;
    } else {
        navbar.classList.remove("scrolled");
        arrowIcon.innerHTML = defaultSVG;
    }
});


// what makes this exhibition must visit part buttons for scrolling related js 


const slider = document.querySelector(".must-visit-exhibition-section");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const scrollAmount = slider.clientWidth / 2;

function setActive(button){
    prevBtn.classList.remove("active");
    nextBtn.classList.remove("active");

    button.classList.add("active");
}

nextBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });

    setActive(nextBtn);
});

prevBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });

    setActive(prevBtn);
});