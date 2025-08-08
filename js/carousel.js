document.querySelectorAll('.example-card').forEach(card => {
  const slides = card.querySelector('.slides');
  const imgs   = slides.children;
  let idx = 0;

  const update = () => slides.style.transform = `translateX(-${idx * 100}%)`;

  card.querySelector('.next-image').addEventListener('click', () => {
    idx = (idx + 1) % imgs.length;
    update();
  });
  card.querySelector('.last-image').addEventListener('click', () => {
    idx = (idx - 1 + imgs.length) % imgs.length;
    update();
  });

  // keyboard support when preview receives focus
  card.querySelector('.previews').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') card.querySelector('.last-image').click();
    if (e.key === 'ArrowRight') card.querySelector('.next-image').click();
  });
});