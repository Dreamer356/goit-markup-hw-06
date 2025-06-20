document.addEventListener('DOMContentLoaded', function() {
  // Код для модального окна
  const customModal = document.querySelector('.custom-modal');
  const customModalOpenBtns = document.querySelectorAll('.order-service-btn');
  const customModalCloseBtn = document.querySelector('.custom-modal_close-btn');
  const customModalForm = document.querySelector('.custom-modal_form');
  const userPrivacyCheckbox = document.getElementById('user-privacy');

  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  function openModal(e) {
    e.preventDefault();
    document.body.style.paddingRight = scrollbarWidth + 'px';
    document.body.classList.add('no-scroll');
    customModal.classList.add('is-open');
  }

  function closeModal() {
    customModal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    document.body.style.paddingRight = '';
  }

  customModalOpenBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (customModalCloseBtn) {
    customModalCloseBtn.addEventListener('click', closeModal);
  }

  customModal.addEventListener('click', function(e) {
    if (e.target === customModal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && customModal.classList.contains('is-open')) {
      closeModal();
    }
  });

  if (customModalForm) {
    customModalForm.addEventListener('submit', function(e) {
      e.preventDefault();
      closeModal();
    });
  }

  if (userPrivacyCheckbox) {
    userPrivacyCheckbox.addEventListener('change', function() {
      if (this.checked) {
        // действия при отметке чекбокса
      } else {
        // действия при снятии отметки
      }
    });
  }

  // Код для мобильного меню
  const menuButton = document.querySelector('.header-btn');
  const mobileMenu = document.querySelector('.mobail-menu'); // Исправлено на 'mobail-menu'
  const closeButton = document.querySelector('.close-btn');

  function toggleMenu() {
    const isMenuOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    
    // Управление прокруткой тела документа
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollbarWidth + 'px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', toggleMenu);
  }

  if (closeButton) {
    closeButton.addEventListener('click', toggleMenu);
  }

  // Закрытие меню при клике на ссылки
  const menuLinks = document.querySelectorAll('.mob-nav-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}); // Закрывающая скобка для DOMContentLoaded