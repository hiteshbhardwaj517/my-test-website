let index = 0;
const swiperWrapper = document.querySelector('.swiper-wrapper');
const dots = document.querySelectorAll('.dot');
const totalCards = document.querySelectorAll('.swiper-card').length;

function updateSwiper() {
  // Slide the cards to the correct position
  swiperWrapper.style.transform = `translateX(-${index * 100}%)`; // Move by 100% of the container width (one card at a time)

  // Highlight the active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Auto swipe every 3 seconds
setInterval(() => {
  index = (index + 1) % totalCards;
  updateSwiper();
}, 3000);

// Dot navigation
dots.forEach(dot => {
  dot.addEventListener('click', (event) => {
    index = parseInt(event.target.getAttribute('data-slide'));
    updateSwiper();
  });
});

// Initialize first state
updateSwiper();
