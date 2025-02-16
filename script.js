const body = document.body;

const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');

// Define a modern, professional theme
const themes = {
  light: {
    background: '#ffffff',
    text: '#1a1a1a',
    accent: '#0056b3' // Professional deep blue accent
  },
  dark: {
    background: '#181818',
    text: '#f5f5f5',
    accent: '#00aaff' // Subtle blue accent for a sleek look
  }
};

// Set initial theme preference based on system settings
const themePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
const btnClassPreference = themePreference ? 'fa-sun' : 'fa-moon';

const applyTheme = (mode) => {
  body.classList.remove('light', 'dark');
  body.classList.add(mode);
  body.style.backgroundColor = themes[mode].background;
  body.style.color = themes[mode].text;
  document.querySelectorAll('.accent').forEach(el => el.style.color = themes[mode].accent);
};

const theme = themePreference ? 'dark' : 'light';
applyTheme(theme);

localStorage.setItem('portfolio-theme', theme);
localStorage.setItem('portfolio-btn-theme', btnClassPreference);

const isDark = () => body.classList.contains('dark');

const setTheme = (mode) => {
  applyTheme(mode);
  localStorage.setItem('portfolio-theme', mode);
  btnTheme.classList.toggle('fa-sun', mode === 'dark');
  btnTheme.classList.toggle('fa-moon', mode === 'light');
};

const toggleTheme = () => setTheme(isDark() ? 'light' : 'dark');
btnTheme.addEventListener('click', toggleTheme);

// Enhance menu display for a sleek and elegant effect
const displayList = () => {
  const navUl = document.querySelector('.nav__list');
  btnHamburger.classList.toggle('fa-bars');
  btnHamburger.classList.toggle('fa-times');
  navUl.classList.toggle('display-nav-list');
};

btnHamburger.addEventListener('click', displayList);

// Smooth scroll-up effect
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');
  btnScrollTop.style.display =
    body.scrollTop > 500 || document.documentElement.scrollTop > 500
      ? 'block'
      : 'none';
};

document.addEventListener('scroll', scrollUp);

// Function to handle email click with a polished effect
function sendEmail() {
  const user = "maria.schoinaki";
  const domain = "gmail";
  const tld = "com";
  const email = `${user}@${domain}.${tld}`;
  window.location.href = `mailto:${email}`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("email-icon").addEventListener("click", sendEmail);
});
