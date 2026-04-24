const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

siteNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 980) {
      siteNav.classList.remove('is-open');
      navToggle?.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(item => observer.observe(item));

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');
if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = (data.get('name') || 'there').toString().trim();
    formMessage.textContent = `Thanks, ${name}. Your message is ready to be connected to email, Formspree, or another form service.`;
  contactForm.reset();
  });
}

const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach((card) => {
  card.setAttribute("tabindex", "0");

  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("is-flipped");
    }
  });
});
