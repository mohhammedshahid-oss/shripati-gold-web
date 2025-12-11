// ===== 1. Highlight active nav link based on current page =====
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  // map filenames to menu text, adjust if your text changes
  const map = {
    'index.html': 'Home',
    'about.html': 'About Us',
    'collections.html': 'Collections',
    'catalogue.html': 'Catalogue',
    'faqs.html': 'FAQs',
    'contact.html': 'Contact Us'
  };

  const currentLabel = map[path];
  if (!currentLabel) return;

  const links = document.querySelectorAll('.nav-links a, .site-nav a');
  links.forEach(link => {
    if (link.textContent.trim() === currentLabel) {
      link.classList.add('active-nav');
    }
  });
})();
 

// ===== 2. Smooth scroll for anchor links (#something) =====
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  const targetId = link.getAttribute('href').slice(1);
  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  e.preventDefault();
  targetEl.scrollIntoView({ behavior: 'smooth' });
});


// ===== 3. "Close" button on Collections page -> scroll to top =====
document.addEventListener('DOMContentLoaded', function () {
  const closeBtn = document.querySelector('.collections-close-btn, .btn-close-page');

  if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
