const card = document.querySelector('.card');
const replayBtn = document.getElementById('replay-btn');

replayBtn.addEventListener('click', () => {
  card.classList.remove('zoom-in');

  // Trigger reflow to restart animation
  void card.offsetWidth;

  card.classList.add('zoom-in');
});
