const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  header.classList.toggle('is-scrolled', currentScroll > 20);

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('is-hidden');
  } else {
    header.classList.remove('is-hidden');
  }

  lastScroll = currentScroll;
});

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach((item) => revealObserver.observe(item));
