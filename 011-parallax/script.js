const layerBg = document.querySelector('.layer-bg');
const layerMid = document.querySelector('.layer-mid');
const layerFg = document.querySelector('.layer-fg');
const replayBtn = document.getElementById('replay-btn');

const speeds = { bg: 0.02, mid: 0.05, fg: 0.1 };

document.addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const offsetX = e.clientX - centerX;
  const offsetY = e.clientY - centerY;

  layerBg.style.transform = `translate(${offsetX * speeds.bg}px, ${offsetY * speeds.bg}px)`;
  layerMid.style.transform = `translate(${offsetX * speeds.mid}px, ${offsetY * speeds.mid}px)`;
  layerFg.style.transform = `translate(${offsetX * speeds.fg}px, ${offsetY * speeds.fg}px)`;
});

replayBtn.addEventListener('click', () => {
  layerBg.style.transform = 'translate(0, 0)';
  layerMid.style.transform = 'translate(0, 0)';
  layerFg.style.transform = 'translate(0, 0)';
});
