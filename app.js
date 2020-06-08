var d = document.documentElement,
  t = document.querySelectorAll('.theme-btn')[0],
  m = localStorage.getItem('theme');

if (m == 'dark') {
  d.classList.add('theme-dark');
  t.textContent='Dark';
}
else{
  t.textContent='Light';
}


t.addEventListener('click', function () {
  if (d.classList.contains('theme-dark')) {
    d.classList.remove('theme-dark');
    t.textContent='Light';
    localStorage.removeItem('theme');
  } else {
    d.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
    t.textContent='Dark';
  }
});