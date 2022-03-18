// Menu Responsive Hamburger
const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");

// Defining a function
function toggleNav() {
 nav.classList.toggle("nav-active");
}

// Calling the function after click event occurs
burger.addEventListener("click", () => {
 toggleNav();
});

//GO TO TOP
// Get the element
const topBtn = document.querySelector(".top-btn");

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// On scroll, Show/Hide the btn with animation
window.onscroll = () => (window.scrollY > 20 ? (topBtn.style.opacity = 1) : (topBtn.style.opacity = 0));


//CURSOS DISPLAYS:
const cursoBasico = document.querySelector('.curso-1-display');
const explosiveJKD = document.querySelector('.curso-2-display');
const atmosphereCombos = document.querySelector('.curso-3-display');
const atmosphereFighting = document.querySelector('.curso-4-display');

function clickCursoBasico() {
    cursoBasico.style.display = 'block';
    explosiveJKD.style.display = 'none';
    atmosphereCombos.style.display = 'none';
    atmosphereFighting.style.display = 'none';
};

function clickExoplosiveFull() {
    cursoBasico.style.display = 'none';
    explosiveJKD.style.display = 'block';
    atmosphereCombos.style.display = 'none';
    atmosphereFighting.style.display = 'none';
};

function clickJKDCombos() {
    cursoBasico.style.display = 'none';
    explosiveJKD.style.display = 'none';
    atmosphereCombos.style.display = 'block';
    atmosphereFighting.style.display = 'none';
};

function clickAtmosphereFighting() {
    cursoBasico.style.display = 'none';
    explosiveJKD.style.display = 'none';
    atmosphereCombos.style.display = 'none';
    atmosphereFighting.style.display = 'block';
};

//TRANSITION FADE
const displayCurso = document.querySelectorAll('.display-curso');
const btns = document.querySelectorAll('.fade-in');
const flow = () => displayCurso.classList.add("fadeInOpacity");
btns.addEventListener("click", flow);