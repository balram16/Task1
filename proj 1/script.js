window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;
  
    if ((scrollPosition + windowHeight) >= bodyHeight) {
      footer.style.opacity = 1;
    } else {
      footer.style.opacity = 0;
    }
  });
  