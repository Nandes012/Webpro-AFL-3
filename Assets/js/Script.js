document.addEventListener('DOMContentLoaded', function() {
  // Collapsible Sidebar
  const sidebar = document.getElementById('sidebar');
  const collapseBtn = document.getElementById('sidebarCollapse');
  
  collapseBtn.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-chevron-left');
    icon.classList.toggle('fa-chevron-right');
    
    // Toggle main content margin
    document.querySelector('.main-content').classList.toggle('ml-64');
    document.querySelector('.main-content').classList.toggle('ml-20');
  });

  // Highlight current page
  const currentPage = location.pathname.split('/').pop();
  document.querySelectorAll('#sidebar a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('bg-blue-600', 'text-white');
      link.classList.remove('hover:bg-blue-600');
    }
  });

  // Animate skill bars on scroll
  const animateOnScroll = () => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 100) {
        card.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initialize
});