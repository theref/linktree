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

document.addEventListener("DOMContentLoaded", function() {
    // Find all elements with the data-subdomain attribute
    const links = document.querySelectorAll('[data-subdomain]');
    
    // Get the current host (could be sandboxed, ARNS, or regular)
    const currentHost = window.location.host;

    // Function to extract the root domain while preserving deeper subdomains (e.g., "another-level-deep.frostor.xyz")
    function getRootDomain(host) {
        const parts = host.split('.');
        if (parts.length > 3) {
            return parts.slice(1).join('.'); // Preserve all levels except the first subdomain part
        } else {
            return parts.slice(-2).join('.'); // Return the last two parts for standard domains
        }
    }

    // Get the root domain of the current host (this works for both sandboxed and regular domains)
    const rootDomain = getRootDomain(currentHost);

    // Loop through each link and dynamically set the href
    links.forEach(link => {
        const subdomain = link.getAttribute('data-subdomain'); // Get the desired subdomain (e.g., "ardrive")
        const path = link.getAttribute('data-path') || ''; // Get the optional path, default to an empty string if not provided

        // Construct the dynamic URL
        const dynamicURL = `https://${subdomain}.${rootDomain}${path ? '/' + path : ''}`; // Add the path only if it exists

        // Set the href attribute dynamically
        link.setAttribute('href', dynamicURL);
    });
});