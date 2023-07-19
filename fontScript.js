const fontSelect = document.getElementById('fonts');
let root = document.documentElement;

fontSelect.addEventListener('change', () => {
    const font = fontSelect.value;
    console.log(font);
    root.style.setProperty('--font', font);
});
