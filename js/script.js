document.addEventListener("DOMContentLoaded", function () {
    var readMoreBtn = document.getElementById("read-more");
    var fullDescription = document.querySelector(".full-description");
  
    readMoreBtn.addEventListener("click", function (event) {
      event.preventDefault();
      fullDescription.style.display =
        fullDescription.style.display === "none" ? "block" : "none";
    });
  });
  
  /*==================== toggle icon navbar ====================*/
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  
  menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
  };
  
  /*==================== scroll sections active link ====================*/
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  
  window.onscroll = () => {
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');
  
          if(top >=offset && top < offset + height) {
              navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
              });
          };
      });
  
      /*==================== sticky navbar ====================*/
      let header = document.querySelector('header');
  
      header.classList.toggle('sticky', window.scrollY > 100);
  
      /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
  };
  
  /*==================== scroll reveal ====================*/
  ScrollReveal({
      //reset: true,
      distance: '80px',
      duration: 2000,
      deplay: 200
  });
  
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });

  
  document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne l'élément de l'icône LinkedIn
    let linkedinIcon = document.querySelector('.linkedin-icon');
  
    // Ajoute un écouteur d'événements au clic sur l'icône
    linkedinIcon.addEventListener('click', function () {
      // Remplace "TON_LIEN_LINKEDIN" par le lien de ton profil LinkedIn
      window.location.href = "https://www.linkedin.com/in/el-manouane-youssouf/";
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        // Sélectionne l'élément de l'icône GitHub
        let githubIcon = document.querySelector('.github-icon');
      
        // Ajoute un écouteur d'événements au clic sur l'icône
        githubIcon.addEventListener('click', function () {
          // Remplace "TON_LIEN_LINKEDIN" par le lien de ton profil GitHub
          window.location.href = "https://github.com/CodEfrem";
        }); 
    
    
  });
  
  