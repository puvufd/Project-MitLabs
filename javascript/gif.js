const gifImages = document.querySelectorAll('.gif-image');

gifImages.forEach(gif => {
  let isPlaying = false;

  gif.addEventListener('mouseenter', () => {
    if (!isPlaying) {
      gif.classList.add('active');
      isPlaying = true;
    }
  });

  gif.addEventListener('mouseleave', () => {
    if (isPlaying) {
      gif.classList.remove('active');
      isPlaying = false;
    }
  });
});