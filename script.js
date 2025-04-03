// Basis-Auflösung
const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

// Function to scale positions based on current screen size
function scalePosition(originalValue, isWidth = true) {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    
    if (isWidth) {
        return (originalValue * currentWidth) / BASE_WIDTH;
    } else {
        return (originalValue * currentHeight) / BASE_HEIGHT;
    }
}

// Function to apply responsive positioning
function applyResponsivePositioning() {
    // Original positions and sizes for 1920x1080
    const positions = {
        hey: { left: 639, top: 363, width: 115, height: 48 },
        handWave: { left: 754, top: 372, width: 40, height: 40 },
        loggeText: { left: 639, top: 421, width: 291 },
        oderText: { left: 950, top: 421, width: 242 },
        loginBg: { left: 607, top: 337, width: 706, height: 406 },
        vector: { width: 1920, height: 1080 }
    };

    // Get elements
    const hey = document.querySelector('.hey');
    const handWave = document.querySelector('.mdi-hand-wave');
    const loggeText = document.querySelector('.logge-dich-in-dein-konto-ein-und-entdecke-was-dich-erwartet');
    const oderText = document.querySelector('.oder-melde-dich-mit-deinem-benutzernamen-an');
    const loginBg = document.querySelector('.Login-bg');
    const vector = document.querySelector('.vector');

    // Apply positions and sizes
    if (hey) {
        hey.style.left = scalePosition(positions.hey.left) + 'px';
        hey.style.top = scalePosition(positions.hey.top, false) + 'px';
        hey.style.width = scalePosition(positions.hey.width) + 'px';
        hey.style.height = scalePosition(positions.hey.height, false) + 'px';
        hey.style.fontSize = scalePosition(48) + 'px'; // Skalierte Schriftgröße
    }

    if (handWave) {
        handWave.style.left = scalePosition(positions.handWave.left) + 'px';
        handWave.style.top = scalePosition(positions.handWave.top, false) + 'px';
        handWave.style.width = scalePosition(positions.handWave.width) + 'px';
        handWave.style.height = scalePosition(positions.handWave.height, false) + 'px';
    }

    if (loggeText) {
        loggeText.style.left = scalePosition(positions.loggeText.left) + 'px';
        loggeText.style.top = scalePosition(positions.loggeText.top, false) + 'px';
        loggeText.style.width = scalePosition(positions.loggeText.width) + 'px';
        loggeText.style.fontSize = scalePosition(14) + 'px'; // Skalierte Schriftgröße
    }

    if (oderText) {
        oderText.style.left = scalePosition(positions.oderText.left) + 'px';
        oderText.style.top = scalePosition(positions.oderText.top, false) + 'px';
        oderText.style.width = scalePosition(positions.oderText.width) + 'px';
        oderText.style.fontSize = scalePosition(14) + 'px'; // Skalierte Schriftgröße
    }

    if (loginBg) {
        loginBg.style.left = scalePosition(positions.loginBg.left) + 'px';
        loginBg.style.top = scalePosition(positions.loginBg.top, false) + 'px';
        loginBg.style.width = scalePosition(positions.loginBg.width) + 'px';
        loginBg.style.height = scalePosition(positions.loginBg.height, false) + 'px';
    }

    if (vector) {
        vector.style.width = '100%';
        vector.style.height = '100%';
    }
}

// Call the function when the page is loaded
window.addEventListener('DOMContentLoaded', applyResponsivePositioning);

// Reapply on window resize
window.addEventListener('resize', applyResponsivePositioning);