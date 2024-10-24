// Brutalist button behavior: random size and position changes on hover
document.querySelectorAll('.brutalist-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        // Randomly change the button's width and height on hover
        button.style.width = `${Math.random() * 300 + 100}px`;
        button.style.height = `${Math.random() * 150 + 50}px`;

        // Randomly rotate and change button position
        button.style.transform = `rotate(${Math.random() * 40 - 20}deg) scale(${Math.random() * 1.5 + 0.5})`;
    });

    // Button randomly disappears and reappears on click
    button.addEventListener('click', () => {
        button.style.display = 'none';
        setTimeout(() => {
            button.style.display = 'block';
            button.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        }, 1000); // Reappear after 1 second
    });
});
