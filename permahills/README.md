# Monochromatic Permahills Linktree Template

Welcome to the Monochromatic Permahills Linktree Template! This template provides a sleek, elegant, and modern aesthetic with monochromatic light and dark modes, a gentle twinkling star background, and custom scrollbars. It's perfect for creators who want a visually appealing, yet minimal, design for their linktree-style page.

## Key Features

- **Light/Dark Mode Toggle**: Seamlessly switch between light and dark modes with a customizable toggle.
- **Monochromatic Design**: A consistent design aesthetic with subtle gradients and smooth transitions.
- **Twinkling Star Background**: Gently twinkling stars at the top third of the page to give a soft, engaging background effect.
- **Custom Scrollbars**: Both light and dark modes feature custom scrollbars to match the overall aesthetic.
- **Fully Responsive**: This theme is mobile-friendly and adapts beautifully to any screen size.

## Customization Guide

### 1. Replace Profile Image and Favicon

- **Profile Image**: Swap out the default avatar image (`default-avatar.png`) with your own profile image. Ensure the size is appropriate (120px x 120px recommended) for a clean, circular profile display.
- **Favicon**: Replace `favicon.ico` with your own custom favicon to personalize your browser tab icon.

### 2. Change Username and Description

- **Username**: Modify the `<h1>` tag in the HTML with your desired username or brand name.
- **Description**: Update the `<p>` tag to reflect a short description or tagline that represents you or your content.

### 3. Customize Links

- Modify the links section in the HTML to direct users to your social media profiles, personal content, or portfolio:
  ```html
  <div class="links">
    <a href="https://example.com" class="button">Your Link Here</a>
  </div>
  ```
- Update the `href` attributes in the `<a>` tags to point to your desired links.
- You can also customize the button text (e.g., "Twitter", "GitHub", "Portfolio").

### 4. Adjust the Light/Dark Mode Colors

- Customize the light and dark mode colors by editing the CSS variables defined in the `:root` and `[data-theme="dark"]` blocks in `styles.css`.

  ```css
  :root {
    --text-color: #000;
    --button-bg: #888;
    --button-hover-bg: #666;
  }

  [data-theme="dark"] {
    --text-color: #f0f0f0;
    --button-bg: #333;
    --button-hover-bg: #555;
  }
  ```

### 5. Customize the Twinkling Star Background

- The star effect in the background can be controlled in `styles.css`. By adjusting the number of stars created in `script.js`, you can customize how many stars appear and how frequently they twinkle.

  ```javascript
  // Generate stars once on page load
  window.onload = function () {
    generateStars(50); // Adjust the number of stars here
  };
  ```

### 6. Customize Scrollbars

- Modify the custom scrollbars to match your personal style. The colors for the scrollbars are defined in the CSS:

  ```css
  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background-color: var(--scrollbar-track);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb);
    border-radius: 6px;
    border: 2px solid var(--background-light);
  }

  [data-theme="dark"] body::-webkit-scrollbar-thumb {
    border: 2px solid var(--background-dark);
  }
  ```

Happy linking! 🌟
