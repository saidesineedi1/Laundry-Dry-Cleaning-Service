
const SERVICES_DATA = [
  {
    id: 1,
    slug: 'wash-and-fold-service',
    title: 'Wash & Fold Everyday Bag',
    category: 'wash-fold',
    image: 'assets/laundry-wash-fold.jpg',
    price: '$18',
    rating: 4.9,
    reviews: 142,
    badge: 'Best Seller',
    tag: 'Wash & Fold',
    shortDesc: 'Everyday garment washing, low-heat tumble drying, and neat folding with hypoallergenic gentle detergents and eco-friendly conditioning.',
  },
  {
    id: 2,
    slug: 'formal-dry-cleaning',
    title: 'Suits & Formal Dry Cleaning',
    category: 'dry-clean',
    image: 'assets/laundry-dry-clean.jpg',
    price: '$34',
    rating: 4.8,
    reviews: 98,
    badge: 'Eco-Solvent',
    tag: 'Dry Cleaning',
    shortDesc: 'Specialized dry cleaning care for tailored suits, blazers, evening wear, and delicate textiles with precision hand-finished steam pressing.',
  },
  {
    id: 3,
    slug: 'steam-ironing-pressing',
    title: 'Executive Steam Ironing',
    category: 'ironing',
    image: 'assets/laundry-steam-iron.jpg',
    price: '$22',
    rating: 4.9,
    reviews: 211,
    badge: null,
    tag: 'Steam Press',
    shortDesc: 'Professional vertical steam pressing for wrinkle-free crisp shirts, dress trousers, and blouses with custom collar contouring.',
  },
  {
    id: 4,
    slug: 'curtain-drapery-cleaning',
    title: 'Curtain & Drapery Cleaning',
    category: 'household',
    image: 'assets/laundry-curtains.jpg',
    price: '$45',
    rating: 5.0,
    reviews: 327,
    badge: 'Allergen Free',
    tag: 'Home Textiles',
    shortDesc: 'Gentle in-depth cleaning for sheer, blackout, linen, and velvet curtains to remove dust mites, allergens, and restore original drape.',
  },
  {
    id: 5,
    slug: 'delicate-garment-care',
    title: 'Premium Garment Care',
    category: 'dry-clean',
    image: 'assets/laundry-delicates.jpg',
    price: '$28',
    rating: 4.7,
    reviews: 189,
    badge: null,
    tag: 'Specialty Care',
    shortDesc: 'Temperature-controlled gentle wash and specialized lanolin conditioning for fine cashmere sweaters, silks, and delicate weaves.',
  },
  {
    id: 6,
    slug: 'express-doorstep-laundry',
    title: 'Express 24H Turnaround',
    category: 'wash-fold',
    image: 'assets/laundry-express.jpg',
    price: '$25',
    rating: 4.9,
    reviews: 76,
    badge: 'Popular',
    tag: 'Rush Valet',
    shortDesc: 'Fast-track doorstep pickup and priority delivery within 24 hours. Perfect for busy professionals and urgent travel preparations.',
  },
  {
    id: 7,
    slug: 'bedding-linen-sanitization',
    title: 'Bedding & Duvet Care',
    category: 'household',
    image: 'assets/laundry-bedding.jpg',
    price: '$38',
    rating: 4.8,
    reviews: 154,
    badge: null,
    tag: 'Linen Care',
    shortDesc: 'Deep sanitization and high-heat steam pressing for comforters, goose-down duvets, bedspreads, and cotton bed linens.',
  },
  {
    id: 8,
    slug: 'leather-footwear-revival',
    title: 'Leather & Footwear Revival',
    category: 'dry-clean',
    image: 'assets/laundry-shoes.jpg',
    price: '$48',
    rating: 5.0,
    reviews: 93,
    badge: 'Luxury',
    tag: 'Leather & Suede',
    shortDesc: 'Atelier-grade cleaning, condition-restoring oils, and water-repellent protective finishing for leather jackets, suede, and designer shoes.',
  },
];

function navigateToServiceDetail(serviceId) {
  const service = SERVICES_DATA.find((s) => s.id === parseInt(serviceId));
  if (!service) return;

  sessionStorage.setItem('selectedService', JSON.stringify(service));
  sessionStorage.setItem('selectedServiceId', serviceId);

  window.location.href = `servicedetail.html?id=${serviceId}&service=${service.slug}`;
}

function initCardButtons() {
  const cardBtns = document.querySelectorAll('.sv-card-btn');
  cardBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = btn.getAttribute('data-service-id');
      navigateToServiceDetail(serviceId);
    });
  });

  const cards = document.querySelectorAll('.sv-card');
  cards.forEach((card) => {
    const title = card.querySelector('.sv-card-title');
    const imgWrap = card.querySelector('.sv-card-img-wrap');
    const serviceId = card.getAttribute('data-service-id');

    [title, imgWrap].forEach((el) => {
      if (el) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          navigateToServiceDetail(serviceId);
        });
      }
    });
  });
}

function initFilters() {
  const filterBtns = document.querySelectorAll('.sv-filter-btn');
  const cards = document.querySelectorAll('.sv-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {

      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach((card) => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.classList.remove('sv-card--hidden');

          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          });
        } else {
          card.classList.add('sv-card--hidden');
        }
      });
    });
  });
}

function initScrollAnimations() {
  const animatables = document.querySelectorAll(
    '.sv-card, .sv-process-step, .sv-heritage-content, .sv-heritage-visual, .sv-ingredient-item, .sv-trust-item, .sv-heritage-img-card'
  );

  animatables.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  const svCards = document.querySelectorAll('.sv-card');
  svCards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });

  const trustItems = document.querySelectorAll('.sv-trust-item');
  trustItems.forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.06}s`;
  });

  const ingredientItems = document.querySelectorAll('.sv-ingredient-item');
  ingredientItems.forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.08}s`;
  });

  animatables.forEach((el) => observer.observe(el));
}

function initHeroAnimations() {
  const heroContent = document.querySelector('.sv-hero-content');
  const heroVisual = document.querySelector('.sv-hero-visual');

  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
  }

  if (heroVisual) {
    heroVisual.style.opacity = '0';
    heroVisual.style.transform = 'scale(0.92)';
    heroVisual.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
    setTimeout(() => {
      heroVisual.style.opacity = '1';
      heroVisual.style.transform = 'scale(1)';
    }, 100);
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 84;
        const y = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
}

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initFilterSectionObserver() {
  const filterSection = document.getElementById('services-collection');
  if (!filterSection) return;

  const sticky = filterSection;
  const observer = new IntersectionObserver(
    ([e]) => {
      sticky.classList.toggle('is-pinned', e.intersectionRatio < 1);
    },
    { threshold: [1] }
  );
  observer.observe(sticky);
}

document.addEventListener('DOMContentLoaded', () => {

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  initHeroAnimations();
  initCardButtons();
  initFilters();
  initScrollAnimations();
  initSmoothScroll();
  initHeaderScroll();
  initFilterSectionObserver();
  initActiveNavLinks();
});

function initActiveNavLinks() {
  const rawPath = window.location.pathname.split('/').pop().toLowerCase();
  const currentPath = (rawPath === '' || rawPath === 'index.html') ? 'index.html' : rawPath;

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefBase = href.split('/').pop().toLowerCase();

    if (hrefBase === currentPath) {
      link.classList.add('active');
    } else if (currentPath === 'servicedetail.html' && hrefBase === 'services.html') {
      link.classList.add('active');
    } else if (currentPath === 'journals detail.html' && hrefBase === 'journals.html') {
      link.classList.add('active');
    } else if ((currentPath === 'index.html' || currentPath === 'home2.html') && link.id === 'nav-home') {
      link.classList.add('active');
    } else if (href.includes('.html') && hrefBase !== currentPath) {
      link.classList.remove('active');
    }
  });

  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-sublink');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefBase = href.split('/').pop().toLowerCase();

    if (hrefBase === currentPath) {
      link.classList.add('active');
    } else if (currentPath === 'servicedetail.html' && hrefBase === 'services.html') {
      link.classList.add('active');
    } else if (currentPath === 'journals detail.html' && hrefBase === 'journals.html') {
      link.classList.add('active');
    }
  });
}
