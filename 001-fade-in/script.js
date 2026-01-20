// Replay Animation Functionality
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');
  const replayBtn = document.getElementById('replay-btn');

  replayBtn.addEventListener('click', () => {
    // Remove animation class
    card.classList.add('replay');
    
    // Force reflow to restart animation
    void card.offsetWidth;
    
    // Re-add animation
    card.classList.remove('replay');
  });
});
