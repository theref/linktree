// Set initial profile picture based on the current theme
function setProfilePicture() {
    const profilePicture = document.querySelector('.profile-picture');
    const theme = document.body.getAttribute('data-theme');
    const imageUrl = theme === 'dark' ? 'ar-io-logo-light.png' : 'ar-io-logo-dark.png';
    
    // Apply the background image to the profile-picture element
    profilePicture.style.backgroundImage = `url(${imageUrl})`;
}

// Apply profile picture on load and on theme toggle
window.onload = function() {
    const toggleSwitch = document.getElementById('mode-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set the initial theme from localStorage
    document.body.setAttribute('data-theme', currentTheme);
    toggleSwitch.checked = currentTheme === 'dark';

    // Set the initial profile picture
    setProfilePicture();

    // Add event listener for theme toggle
    toggleSwitch.addEventListener('change', function() {
        const theme = this.checked ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        setProfilePicture();
    });
};
