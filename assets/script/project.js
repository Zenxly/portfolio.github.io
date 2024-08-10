// Mendapatkan elemen parallax-background
const parallaxBackground = document.querySelector('.parallax-background');

// Mendapatkan nilai scroll saat ini
let scrollPosition = window.scrollY;

// Fungsi untuk mengupdate posisi background
function updateBackgroundPosition() {
  const newPosition = scrollPosition * 0.5;
  parallaxBackground.style.transform = `translateZ(-1px) scale(1.5) translateY(${newPosition}px)`;
}

// Event listener untuk scroll
window.addEventListener('scroll', () => {
  scrollPosition = window.scrollY;
  updateBackgroundPosition();
});

// Update posisi background saat pertama kali load
updateBackgroundPosition();

// theme
// const page = document.getElementById('page2');
// const def = document.getElementById('default');
// const light = document.getElementById('light');
// const dark = document.getElementById('dark');
// const radio = document.getElementsByTagName('radio');

// function change() {
//   document.getElementById('page2').style.backgroundColor = 'red';
// }

// function light() {
//   document.getElementById('page2').style.backgroundColor = 'white';
//   document.getElementById('page2').style.color = 'black';
// }

// function dark() {
//   document.getElementById('page2').style.backgroundColor = 'dark';
//   document.getElementById('page2').style.color = 'white';
// }
// function def() {
//   document.getElementById('page2').style.backgroundColor = '#0f142a';
// }

function checked() {
  var light = document.getElementById('check');
  var lp = document.getElementById('lp');

  if (light.checked == true) {
    lp.style.display = 'block';
  } else {
    lp.style.display = 'none';
  }
}
