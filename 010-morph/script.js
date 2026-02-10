const shape = document.querySelector('.morph-shape');
const replayBtn = document.getElementById('replay-btn');

function playMorph() {
  shape.classList.remove('animate');
  void shape.offsetWidth;
  shape.classList.add('animate');
}

// Start on load
playMorph();

replayBtn.addEventListener('click', () => {
  playMorph();
});
