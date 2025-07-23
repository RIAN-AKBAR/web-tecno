// Fungsi untuk animasi scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Fungsi untuk menampilkan informasi komunitas
function displayCommunityInfo() {
  const biodataElement = document.getElementById('biodata');
  if (biodataElement) {
    const infoElement = document.createElement('div');
    infoElement.className = 'community-info';
    infoElement.innerHTML = `
      <p>Anggota aktif: 8+ pelajar</p>
      <p>Berdiri sejak: JULI 2024</p>
    `;
    biodataElement.appendChild(infoElement);
  }
}

// Animasi elemen saat halaman dimuat
function animateElements() {
  const animatedElements = document.querySelectorAll('.img-content, #biodata');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  setTimeout(() => {
    animatedElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 300);
}

// Jalankan semua fungsi saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  displayCommunityInfo();
  animateElements();
  
  // Tambahkan tahun di footer
  const yearElement = document.querySelector('.h1-footer');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent += ` © ${currentYear}`;
  }
});

console.log('Website The Tekno siap digunakan!');
