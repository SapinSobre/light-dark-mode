const toggle = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Switch images dynamically
function imageMode(color) {
    image1.src = `img/undraw_conceptual_idea_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_proud_coder_${color}.svg`;    
}

// Set the light theme
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = "Light mode";
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
    localStorage.setItem('theme', 'light');
}

// Set the dark theme
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = "Dark mode";
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
    localStorage.setItem('theme', 'dark');
}

// change dynamically the theme
function toggleTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

toggle.addEventListener('change', toggleTheme);

const currentMode = localStorage.getItem('theme');
if(currentMode) {
    if(currentMode === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}