header = document.getElementById("header");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 60) {
    header.classList.add("border-b-2");
    header.classList.add("border-primary");
  }
  else if(y <= 60){
    header.classList.remove("border-b-2");
    header.classList.remove("border-primary");
  }
};

window.addEventListener("scroll", myScrollFunc);

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

