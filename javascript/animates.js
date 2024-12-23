document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.image-slide-right, .image-slide-left, .image-animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); 
      }
    });
  });

  images.forEach(image => {
    observer.observe(image);
  });
});