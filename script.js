const texts = [
    'Profesyonel Web Tasarım',
    'Yaratıcı Çözümler',
    'Mükemmel Deneyim',
    'İnovatif Yaklaşımlar',
    'Dijital Mükemmellik'
];

const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', 
    '#FDCB6E', '#6C5CE7'
];

function typeWriter(element, text, color, speed = 100) {
    element.style.color = color;
    element.innerHTML = '';
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function fadeIn(element, text, color) {
    element.style.color = color;
    element.style.opacity = 0;
    element.innerHTML = text;
    let opacity = 0;
    const fadeEffect = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
}

function slideIn(element, text, color) {
    element.style.color = color;
    element.style.transform = 'translateX(-100%)';
    element.innerHTML = text;
    let position = -100;
    const slideEffect = setInterval(() => {
        if (position < 0) {
            position += 10;
            element.style.transform = `translateX(${position}%)`;
        } else {
            clearInterval(slideEffect);
        }
    }, 30);
}

function textScramble(element, text, color) {
    element.style.color = color;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let iterations = 0;
    const scrambleInterval = setInterval(() => {
        element.innerHTML = text
            .split('')
            .map((char, index) => {
                if (index < iterations) return text[index];
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        if (iterations >= text.length) clearInterval(scrambleInterval);
        iterations += 1/3;
    }, 30);
}

function glitchText(element, text, color) {
    element.style.color = color;
    element.innerHTML = text;
    element.style.animation = 'glitch 1s infinite';
}

function runAnimations() {
    const animationFunctions = [
        typeWriter, fadeIn, slideIn, textScramble, glitchText
    ];

    texts.forEach((text, index) => {
        const element = document.querySelectorAll('.animation-container div')[index];
        const color = colors[index];
        animationFunctions[index](element, text, color);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    runAnimations();
    setInterval(runAnimations, 5000);
});