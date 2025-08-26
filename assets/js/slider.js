  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const sliderContainer = document.querySelector('.slider-container');
    const images = document.querySelectorAll('.slides a'); // Select the links, not just the images
    let currentIndex = 0;
    const intervalTime = 3000; // 3 seconds
    let slideInterval;

    // Function to move to the next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    }

    // Function to update the slider position
    function updateSlider() {
      if (images.length === 0) return; // Handle case with no images
      const slideWidth = images[0].clientWidth;
      slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }

    // Start the interval for automatic slide
    function startSlider() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }

    // Stop the interval
    function stopSlider() {
      clearInterval(slideInterval);
    }

    // Event listeners for mouse interaction
    sliderContainer.addEventListener('mouseover', stopSlider);
    sliderContainer.addEventListener('mouseout', startSlider);

    // Update slider on window resize to maintain layout
    window.addEventListener('resize', updateSlider);

    // Initial call to set the correct position on load and start the slider
    updateSlider();
    startSlider();
  });