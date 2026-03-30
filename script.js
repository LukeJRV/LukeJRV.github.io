// Dark mode toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Scrolling terminal text (marquee effect)
const el = document.getElementById('scrollingText');
let pos = 0;
const text = '  Welcome to My Portfolio!  ';
setInterval(() => {
  pos = (pos + 1) % text.length;
  el.textContent = text.slice(pos) + text.slice(0, pos);
}, 120);
