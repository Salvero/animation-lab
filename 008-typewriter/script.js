const typewriterText = document.getElementById('typewriter-text');
const replayBtn = document.getElementById('replay-btn');
const text = 'Typewriter';
let timeoutId = null;

function typeEffect(element, text, speed = 100) {
  // Clear any running animation
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  element.textContent = '';
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      timeoutId = setTimeout(type, speed);
    }
  }

  type();
}

// Start typing on load
typeEffect(typewriterText, text);

replayBtn.addEventListener('click', () => {
  typeEffect(typewriterText, text);
});
