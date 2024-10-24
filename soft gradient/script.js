// Function to dynamically change button text on hover
document.querySelectorAll('.gradient-button').forEach(button => {
    const defaultText = button.getAttribute('data-default');
    const hoverText = button.getAttribute('data-hover');

    button.addEventListener('mouseover', function() {
        this.textContent = hoverText;
    });

    button.addEventListener('mouseout', function() {
        this.textContent = defaultText;
    });
});

// Ensure the color pickers display the correct initial colors on page load
window.addEventListener('load', function() {
    const color1Picker = document.getElementById('color1');
    const color2Picker = document.getElementById('color2');

    // Set the color pickers' values to match the default gradient
    color1Picker.value = '#ff7eb9';
    color2Picker.value = '#7afcff';

    // Also apply the initial gradient to the page elements (body, buttons, etc.)
    document.body.style.background = `linear-gradient(135deg, #ff7eb9, #7afcff)`;

    document.querySelectorAll('.gradient-button').forEach(button => {
        button.style.background = `linear-gradient(135deg, #ff7eb9, #7afcff)`;
    });

    const header = document.querySelector('.gradient-header');
    header.style.backgroundImage = `linear-gradient(90deg, #ff7eb9, #7afcff)`;
    header.style.webkitBackgroundClip = 'text'; // For Safari support
    header.style.color = 'transparent'; // Ensure text gradient visibility
});

// Apply gradient when the button is clicked
document.getElementById('apply-gradient').addEventListener('click', function() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;

    // Apply the selected gradient to the body
    document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;

    // Update the buttons' background gradient
    document.querySelectorAll('.gradient-button').forEach(button => {
        button.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    });

    // Update the header's text gradient
    const header = document.querySelector('.gradient-header');
    header.style.backgroundImage = `linear-gradient(90deg, ${color1}, ${color2})`;
    header.style.webkitBackgroundClip = 'text';
    header.style.color = 'transparent'; // Ensure the gradient text is visible

    // Apply the gradient to the custom scrollbar as well
    document.documentElement.style.setProperty('--scrollbar-gradient', `linear-gradient(135deg, ${color1}, ${color2})`);
});





