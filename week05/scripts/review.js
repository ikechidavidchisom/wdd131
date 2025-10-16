let count = localStorage.getItem('reviewCount') || 0;
count++;
localStorage.setItem('reviewCount', count);
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('counter').textContent = `Reviews submitted: ${count}`;
});
