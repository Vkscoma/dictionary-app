const themeToggle = document.getElementById('theme--toggle');

// Check if user preference is dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Initialize toggle based on user preference
themeToggle.checked = prefersDarkMode;
updateDarkMode(prefersDarkMode);

// Listen for toggle change event
themeToggle.addEventListener('change', () => {
    updateDarkMode(themeToggle.checked);
});

// Function to update dark mode based on toggle state
function updateDarkMode(isDarkMode) {
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        // toggleIcon.classList.add('translate-x-4');
    } else {
        document.documentElement.classList.remove('dark');
        //toggleIcon.classList.remove('translate-x-4');
    }
}
