function dynamicSlider() {
    const slides = document.querySelectorAll('.slider li');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }
  
    function showNextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    setInterval(showNextSlide, 2000);
  }
  
  dynamicSlider();