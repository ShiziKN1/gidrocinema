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


    function changeLang(lang) {
  const elements = document.querySelectorAll("[data-ru]");

  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  localStorage.setItem("lang", lang);
}

const savedLang = localStorage.getItem("lang") || "ru";
changeLang(savedLang);

document.querySelector(".btn-alpha").addEventListener("click", function(){
  document.getElementById("filmInfo").style.display = "flex";
});


document.getElementById("closeInfo").addEventListener("click", function(){
  document.getElementById("filmInfo").style.display = "none";
});

window.addEventListener("click", function(e){
  if(e.target.id === "filmInfo"){
    document.getElementById("filmInfo").style.display = "none";
  }
});




<<<<<<< HEAD


document.addEventListener("DOMContentLoaded", () => {

  const btn = document.querySelector(".btn-alpha");
  const info = document.querySelector(".movie-info"); 
  const closeBtn = document.querySelector(".close");

  btn.addEventListener("click", () => {
    info.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    info.classList.remove("active");
  });

});


=======
>>>>>>> 35a6c3dff1b70c68db2074d4b301a4e36b69a473
