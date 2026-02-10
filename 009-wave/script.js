const dots = document.querySelectorAll('.wave-dot');
const replayBtn = document.getElementById('replay-btn');

function playWave() {
  dots.forEach(dot => {
    dot.classList.remove('animate');
    void dot.offsetWidth;
    dot.classList.add('animate');
  });
}

// Start on load
playWave();

replayBtn.addEventListener('click', () => {
  playWave();
});
