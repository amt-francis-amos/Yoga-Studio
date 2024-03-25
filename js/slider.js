const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const imgSlider = document.querySelector('.img-slider');

  nextButton.addEventListener('click', () => {
      imgSlider.style.transition = 'transform 0.5s ease';
      imgSlider.style.transform = 'translateX(13%)'; /* Slide the slider to the left */
  });

  prevButton.addEventListener('click', () => {
      imgSlider.style.transition = 'transform 0.5s ease';
      imgSlider.style.transform = 'translateX(-10%)'; /* Slide the slider back to the right */
  });

  imgSlider.addEventListener('transitionend', () => {
      const firstSlide = imgSlider.querySelector('.slider-box:first-child');
      const lastSlide = imgSlider.querySelector('.slider-box:last-child');
      
      if (imgSlider.style.transform === 'translateX(-100%)') {
          imgSlider.style.transition = 'none';
          imgSlider.insertBefore(lastSlide, firstSlide);
          imgSlider.style.transform = 'translateX(0)';
      } else if (imgSlider.style.transform === 'translateX(0)') {
          imgSlider.style.transition = 'none';
          imgSlider.appendChild(firstSlide);
          imgSlider.style.transform = 'translateX(-100%)';
      }
  });