// Animasi on scroll
function onScrollAnimate() {
  document.querySelectorAll('.animate-fade, .animate-fade-delay, .animate-fade-img, .animate-up, .animate-left, .animate-right').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('animate-visible');
    }
  });
}
window.addEventListener('scroll', onScrollAnimate);
window.addEventListener('DOMContentLoaded', onScrollAnimate);

// Navbar active link
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;
  ['home','produk','tentang','kontak'].forEach((id, idx) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[idx].classList.add('active');
      }
    }
  });
});

// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link, .btn[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    const hash = this.getAttribute('href');
    if (hash[0] === '#') {
      e.preventDefault();
      const target = document.querySelector(hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 72,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Tahun Copyright
document.getElementById('year').textContent = new Date().getFullYear();

// Produk efek klik
document.querySelectorAll('.btn-beli').forEach(btn => {
  btn.addEventListener('click', function(){
    btn.innerHTML = '<i class="bi bi-bag-check-fill"></i> Ditambahkan!';
    btn.classList.add('btn-success');
    setTimeout(() => {
      btn.innerHTML = 'Beli Sekarang';
      btn.classList.remove('btn-success');
    }, 1100);
  });
});

// Newsletter validation
const newsletterForm = document.getElementById('newsletterForm');
const newsletterError = document.getElementById('newsletterError');
const newsletterSuccess = document.getElementById('newsletterSuccess');
newsletterForm.addEventListener('submit', function(e){
  e.preventDefault();
  newsletterError.textContent = '';
  newsletterSuccess.textContent = '';
  const email = document.getElementById('emailNewsletter').value.trim();
  // Regex email sederhana
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    newsletterError.textContent = 'Masukkan email yang valid!';
    newsletterForm.classList.add('was-validated');
    return;
  }
  newsletterSuccess.textContent = 'Terima kasih sudah mendaftar!';
  document.getElementById('emailNewsletter').value = '';
  setTimeout(() => {
    newsletterSuccess.textContent = '';
  }, 2000);
});