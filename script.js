 let current = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const dots   = document.querySelectorAll('.dot');

    function goToSlide(n) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    function changeSlide(dir) { goToSlide(current + dir); }
    setInterval(() => changeSlide(1), 5000);

    document.querySelectorAll('.lang-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.lang-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

function showInfo() {
    document.getElementById("info").style.display = "block";
}

function closeInfo() {
    document.getElementById("info").style.display = "none";
}



