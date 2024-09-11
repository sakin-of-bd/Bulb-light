document.addEventListener('DOMContentLoaded', () => {
    const lightBulb = document.getElementById('lightBulb');
    const toggleButton = document.getElementById('toggleButton');

    let isOn = false;

    toggleButton.addEventListener('click', () => {
        isOn = !isOn;
        if (isOn) {
            lightBulb.style.backgroundImage = "url('lighton.png')";
            toggleButton.textContent = 'Turn Light Off';
        } else {
            lightBulb.style.backgroundImage = "url('lightoff.png')";
            toggleButton.textContent = 'Turn Light On';
        }
    });
});
