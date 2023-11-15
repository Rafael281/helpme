document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const dots = document.querySelectorAll('.ponto');
  let currentIndex = 0;
  let startX = 0;

  const slideWidth = slider.clientWidth;

  function goToSlide(index) {
    currentIndex = index;
    const offset = -index * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('ativo', index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % dots.length;
    goToSlide(currentIndex);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      goToSlide(currentIndex);
    });
  });

  slider.addEventListener('mousedown', (e) => {
    startX = e.clientX;
  });

  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  document.addEventListener('mouseup', (e) => {
    const moveX = e.clientX - startX;
    if (Math.abs(moveX) > 50) {
      if (moveX < 0) {
        nextSlide();
      } else {
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        goToSlide(currentIndex);
      }
    } else {
      goToSlide(currentIndex);
    }
  });

  document.addEventListener('touchend', (e) => {
    const moveX = e.changedTouches[0].clientX - startX;
    if (Math.abs(moveX) > 50) {
      if (moveX < 0) {
        nextSlide();
      } else {
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        goToSlide(currentIndex);
      }
    } else {
      goToSlide(currentIndex);
    }
  });

  setInterval(nextSlide, 8000); // Altera a imagem a cada 8 segundos
  goToSlide(currentIndex);
});
