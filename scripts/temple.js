const time = new Date();

document.getElementById('currentyear').innerHTML = `${time.getFullYear()}`;

document.getElementById('lastModified').innerHTML = `${document.lastModified}`;

// Hamburger menu functionality for mobile view
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');

function toggleMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    // Toggle hamburger icon between ☰ and ✖
    if (hamburger.classList.contains('active')) {
        hamburgerIcon.textContent = '✖'; // X symbol
    } else {
        hamburgerIcon.textContent = '☰'; // Hamburger symbol
    }
}

hamburger.addEventListener('click', toggleMenu);

// Optional: Close menu when clicking a nav link (for better UX)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburgerIcon.textContent = '☰';
    });
});