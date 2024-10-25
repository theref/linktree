// Add a coin sound effect on hover
const coinSound = new Audio('arcade-click.wav'); // Make sure to have the coin-insert.mp3 file

document.querySelectorAll('.arcade-button').forEach(button => {
    button.addEventListener('click', () => {
        coinSound.play();
    });

    button.addEventListener('click', () => {
        document.body.style.transition = 'background-color 0.5s ease-in-out';
        document.body.style.backgroundColor = '#ff00ff'; // Flash background to neon pink
        setTimeout(() => {
            document.body.style.backgroundColor = '#001f3f'; // Return to original
        }, 500);
    });
});

let score = 0;
document.querySelectorAll('.arcade-button').forEach(button => {
    button.addEventListener('click', () => {
        score += 100; // Increase score
        document.getElementById('score').textContent = score;
    });
});

// Function to generate falling pixels
function createFallingPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');

    // Random horizontal position
    pixel.style.left = `${Math.random() * 100}vw`;

    // Random animation duration to make the pixels fall at different speeds
    pixel.style.animationDuration = `${Math.random() * 3 + 2}s`;

    document.querySelector('.falling-pixels').appendChild(pixel);

    // Remove the pixel after it's done falling to keep the DOM clean
    setTimeout(() => {
        pixel.remove();
    }, 10000); // Adjust time if needed
}

// Generate multiple falling pixels at random intervals
setInterval(createFallingPixel, 100);

