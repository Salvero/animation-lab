const card = document.querySelector('.card');
const replayBtn = document.getElementById('replay-btn');

card.classList.add('entrance');

replayBtn.addEventListener('click', () => {
  card.classList.remove('entrance');
  void card.offsetWidth;
  card.classList.add('entrance');
});
