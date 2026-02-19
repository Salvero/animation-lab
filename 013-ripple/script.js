const card = document.querySelector('.ripple-card');
const replayBtn = document.getElementById('replay-btn');

card.classList.add('entrance');

function createRipple(e) {
  const rect = card.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  card.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
}

card.addEventListener('click', createRipple);

replayBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  card.classList.remove('entrance');
  void card.offsetWidth;
  card.classList.add('entrance');
});
