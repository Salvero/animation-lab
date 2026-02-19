const card = document.querySelector('.card');
const replayBtn = document.getElementById('replay-btn');
const shimmerElements = document.querySelectorAll('.skeleton-shimmer');

card.classList.add('entrance');

replayBtn.addEventListener('click', () => {
  card.classList.remove('entrance');
  shimmerElements.forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });
  void card.offsetWidth;
  card.classList.add('entrance');
});
