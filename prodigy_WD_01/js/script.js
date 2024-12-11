// Select all navigation links
const navLinks = document.querySelectorAll('nav a');

// Highlight the current page
navLinks.forEach(link => {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page file name
    if (link.getAttribute('href').includes(currentPage)) {
        link.classList.add('active');
        const emoji = link.querySelector('.emoji');
        if (emoji) {
            emoji.style.transform = 'scale(1.3)';
            emoji.style.boxShadow = '0 0 15px #ffd700, 0 0 30px #ffd700';
        }
    }
});

// Emoji hover effects
navLinks.forEach(link => {
    const emoji = link.querySelector('.emoji');
    if (emoji) {
        link.addEventListener('mouseover', () => {
            emoji.style.transform = 'rotate(-15deg) scale(1.2)';
        });

        link.addEventListener('mouseout', () => {
            emoji.style.transform = '';
        });
    }
});

// Theme toggle button logic
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'dark-theme' ? '☀️' : '🌙';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark-theme');
    }
});
