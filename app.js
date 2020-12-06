let header = document.getElementById('header');
const mailLink = document.getElementById('mailLink');
const notification = document.getElementById('notification');

const myScrollFunc = function () {
  let y = window.scrollY;
  if (y >= 60) {
    header.classList.add('border-b-2');
    header.classList.add('border-default');
  } else if (y <= 60) {
    header.classList.remove('border-b-2');
    header.classList.remove('border-default');
  }
};

window.addEventListener('scroll', myScrollFunc);

let d = document.documentElement,
  t = document.querySelectorAll('.theme-btn')[0],
  m = localStorage.getItem('theme');

if (m == 'dark') {
  d.classList.add('theme-dark');
  t.textContent = 'Dark';
} else {
  t.textContent = 'Light';
}

t.addEventListener('click', function () {
  if (d.classList.contains('theme-dark')) {
    d.classList.remove('theme-dark');
    t.textContent = 'Light';
    localStorage.removeItem('theme');
  } else {
    d.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
    t.textContent = 'Dark';
  }
});

mailLink.addEventListener('click', function (e) {
  e.preventDefault();

  navigator.clipboard.writeText('kishorejohnsan.s@gmail.com').then(
    function () {
      notification.classList.remove('alert');
      setTimeout(() => {
        notification.classList.add('alert');
      }, 1000);
    },
    function () {
      alert('Error in copying Mail ID');
    }
  );
});
