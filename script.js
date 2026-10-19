// --- 1. MUSIC PLAYER ---
document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById('play-btn');
    const audio = document.getElementById('bg-audio');
    const discIcon = document.getElementById('disc-icon');

    if (playBtn && audio) {
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playBtn.classList.remove('fa-play');
                playBtn.classList.add('fa-pause');
                if (discIcon) discIcon.classList.add('spin');
            } else {
                audio.pause();
                playBtn.classList.remove('fa-pause');
                playBtn.classList.add('fa-play');
                if (discIcon) discIcon.classList.remove('spin');
            }
        });
    }
});

// --- 2. AESTHETIC THEME SWITCHER ---
function changeTheme(colorName) {
    const root = document.documentElement;
    let mainColor, glowColor, bgColor;

    if (colorName === 'mint') {
        // Neon Mint Aesthetic
        mainColor = '#00f5d4';
        glowColor = 'rgba(0, 245, 212, 0.35)';
        bgColor = 'rgba(0, 245, 212, 0.15)';
    } else if (colorName === 'lavender') {
        // Vaporwave Lavender
        mainColor = '#bd93f9';
        glowColor = 'rgba(189, 147, 249, 0.35)';
        bgColor = 'rgba(189, 147, 249, 0.15)';
    } else if (colorName === 'coral') {
        // Sunset Coral Pink
        mainColor = '#ff007f';
        glowColor = 'rgba(255, 0, 127, 0.35)';
        bgColor = 'rgba(255, 0, 127, 0.15)';
    } else {
        // Default Emerald Green
        mainColor = '#10b981';
        glowColor = 'rgba(16, 185, 129, 0.35)';
        bgColor = 'rgba(16, 185, 129, 0.15)';
    }

    // Apply variables to CSS root
    root.style.setProperty('--accent', mainColor);
    root.style.setProperty('--accent-glow', glowColor);
    root.style.setProperty('--accent-bg', bgColor);

    // Active Indicator Ring Update
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    const activeDot = document.querySelector(`.dot-${colorName}`);
    if (activeDot) {
        activeDot.classList.add('active');
    }
}