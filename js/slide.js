const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.ponto');
let currentIndex = 0;
let startX = 0;
let isMoving = false;

const slideWidth = slider.clientWidth;

function goToSlide(index) {
  currentIndex = index;
  const offset = -index * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % dots.length;
  goToSlide(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToSlide(index));
});

slider.addEventListener('mousedown', (e) => {
  isMoving = true;
  startX = e.clientX;
  slider.style.transition = 'none';
});

slider.addEventListener('touchstart', (e) => {
  isMoving = true;
  startX = e.touches[0].clientX;
  slider.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (isMoving) {
    const x = e.clientX;
    const moveX = x - startX;
    slider.style.transform = `translateX(${moveX - currentIndex * slideWidth}px)`;
  }
});

document.addEventListener('touchmove', (e) => {
  if (isMoving) {
    const x = e.touches[0].clientX;
    const moveX = x - startX;
    slider.style.transform = `translateX(${moveX - currentIndex * slideWidth}px)`;
  }
});

document.addEventListener('mouseup', (e) => {
  if (isMoving) {
    isMoving = false;
    slider.style.transition = 'transform 0.5s ease-in-out';
    if (Math.abs(startX - e.clientX) > 50) {
      if (e.clientX < startX) {
        nextSlide();
      } else if (e.clientX > startX) {
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        goToSlide(currentIndex);
      }
    } else {
      goToSlide(currentIndex);
    }
  }
});

document.addEventListener('touchend', (e) => {
  if (isMoving) {
    isMoving = false;
    slider.style.transition = 'transform 0.5s ease-in-out';
    if (Math.abs(startX - e.changedTouches[0].clientX) > 50) {
      if (e.changedTouches[0].clientX < startX) {
        nextSlide();
      } else if (e.changedTouches[0].clientX > startX) {
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        goToSlide(currentIndex);
      }
    } else {
      goToSlide(currentIndex);
    }
  }
});

setInterval(nextSlide, 5000); // Altera a imagem a cada 5 segundos
goToSlide(currentIndex);
