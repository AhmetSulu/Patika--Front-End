function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`.drum-key[data-key="${event.code}"]`);
    
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// Keyboard event listener
window.addEventListener('keydown', playSound);

// Click event listeners for buttons
const keys = document.querySelectorAll('.drum-key');
keys.forEach(key => {
    key.addEventListener('click', (event) => {
        const keyCode = key.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    });
});

// Remove playing class after transition
const drumKeys = document.querySelectorAll('.drum-key');
drumKeys.forEach(key => key.addEventListener('transitionend', removeTransition));