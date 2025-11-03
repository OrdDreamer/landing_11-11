function openMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerBtn = document.getElementById('burger-btn');
  
  if (mobileMenu && burgerBtn) {
    mobileMenu.classList.add('mobile-menu--active');
    burgerBtn.setAttribute('aria-expanded', true);
    
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerBtn = document.getElementById('burger-btn');
  
  if (mobileMenu && burgerBtn) {
    mobileMenu.classList.remove('mobile-menu--active');
    burgerBtn.setAttribute('aria-expanded', false);
    
    document.body.style.overflow = '';
  }
}

// Універсальна функція для створення безкінечної прокрутки каруселей
function createInfiniteScroll(selector) {
  const carouselList = document.querySelector(selector);
  
  if (!carouselList) return;
  
  // Отримуємо всі оригінальні елементи
  const originalItems = Array.from(carouselList.children);
  
  // Створюємо копії для візуального ефекту
  originalItems.forEach(item => {
    const clone = item.cloneNode(true);
    
    // Приховуємо копії від скрін-рідерів та пошукових систем
    clone.setAttribute('aria-hidden', 'true');
    
    // Додаємо копію до списку
    carouselList.appendChild(clone);
  });
}

// Універсальна функція для керування анімацією каруселей
function initCarouselAnimation(selector) {
  const carouselList = document.querySelector(selector);
  
  if (!carouselList) return;
  
  // Пауза анімації при наведенні миші
  carouselList.addEventListener('mouseenter', function() {
    this.style.animationPlayState = 'paused';
  });
  
  // Відновлення анімації при відведенні миші
  carouselList.addEventListener('mouseleave', function() {
    this.style.animationPlayState = 'running';
  });
  
  // Пауза анімації при фокусі (для доступності)
  carouselList.addEventListener('focusin', function() {
    this.style.animationPlayState = 'paused';
  });
  
  // Відновлення анімації при втраті фокусу
  carouselList.addEventListener('focusout', function() {
    this.style.animationPlayState = 'running';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.getElementById('burger-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  
  if (burgerBtn) {
    burgerBtn.addEventListener('click', openMobileMenu);
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }
  
  const menuLinks = document.querySelectorAll('.mobile-menu__nav-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // Ініціалізуємо безкінечну прокрутку маркетплейсів
  createInfiniteScroll('.marketplaces__list');

  // Ініціалізуємо безкінечну прокрутку пропозицій
  createInfiniteScroll('.top-discount-products__list');
  initCarouselAnimation('.top-discount-products__list');
});

