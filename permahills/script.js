// Toggle between light and dark mode
const toggleSwitch = document.getElementById('mode-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleSwitch.checked = true;
}

// Listen for toggle changes
toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Function to create a star and place it randomly
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Randomize size between 2px and 5px for variation
    const starSize = Math.random() * 3 + 2; // Random size between 2px and 5px
    star.style.width = `${starSize}px`;
    star.style.height = `${starSize}px`;

    star.style.top = `${Math.random() * 33}vh`; // Random position in the top third of the screen
    star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random twinkle duration
    document.body.appendChild(star);
}

// Function to generate a set number of stars on page load
function generateStars(numStars) {
    for (let i = 0; i < numStars; i++) {
        createStar();
    }
}

// Generate stars once on page load
window.onload = function() {
    generateStars(30); // Adjust the number of stars here
};

