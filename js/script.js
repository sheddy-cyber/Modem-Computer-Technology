(function() {
  'use strict';

  // CONFIGURATION
  const CONFIG = {
    mobileBreakpoint: 900,
    hideHeaderThreshold: 400,
    scrollOffset: 100,
    statsAnimationDuration: 1500,
    statsAnimationSteps: 50,
    formMessageTimeout: 5000,
    animationStagger: 50
  };

  // UTILITY FUNCTIONS
  const utils = {
    debounce(fn, delay) {
      let timeoutId;
      return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
      };
    },

    throttle(fn, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          fn.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    isMobile() {
      return window.innerWidth <= CONFIG.mobileBreakpoint;
    }
  };

  // MOBILE MENU MODULE
  (() => {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    if (!menuToggle || !nav) return;

    const closeMenu = () => {
      nav.style.display = '';
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
    };

    const toggleMenu = () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      
      if (isExpanded) {
        closeMenu();
      } else {
        nav.style.display = 'block';
        menuToggle.classList.add('active');
      }
    };

    // Event listeners
    menuToggle.addEventListener('click', toggleMenu);

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (utils.isMobile()) closeMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (utils.isMobile() && 
          nav.style.display === 'block' && 
          !nav.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        closeMenu();
      }
    });

    window.addEventListener('resize', utils.debounce(() => {
      if (!utils.isMobile()) closeMenu();
    }, 150));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.style.display === 'block') {
        closeMenu();
      }
    });
  })();

  // HEADER SCROLL EFFECTS MODULE
  (() => {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = window.scrollY;

    const updateHeader = utils.throttle(() => {
      const currentScroll = window.scrollY;

      // Hide/show header
      if (currentScroll > lastScroll && currentScroll > CONFIG.hideHeaderThreshold) {
        header.classList.add('hide-header');
      } else {
        header.classList.remove('hide-header');
      }

      // Update shadow
      header.style.boxShadow = currentScroll > 10 
        ? '0 4px 16px rgba(0,0,0,0.08)' 
        : '0 2px 8px rgba(0,0,0,0.04)';

      lastScroll = currentScroll;
    }, 100);

    window.addEventListener('scroll', updateHeader);
  })();

  // NAVIGATION HIGHLIGHTING MODULE
  (() => {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav a[href^="#"]');
    
    if (!sections.length || !navItems.length) return;

    const highlightNav = utils.throttle(() => {
      const scrollPosition = window.scrollY + CONFIG.scrollOffset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('href') === `#${sectionId}`);
          });
        }
      });
    }, 100);

    window.addEventListener('scroll', highlightNav);
  })();

  // STATS ANIMATION MODULE
  (() => {
    const stats = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.hero-stats');
    
    if (!stats.length || !statsSection) return;

    let hasAnimated = false;

    const animateCounter = (element, target, isPercentage) => {
      const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
      const increment = numericValue / CONFIG.statsAnimationSteps;
      const stepTime = CONFIG.statsAnimationDuration / CONFIG.statsAnimationSteps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          element.textContent = isPercentage ? `${numericValue}%` : `${numericValue}+`;
          clearInterval(counter);
        } else {
          element.textContent = isPercentage ? `${Math.floor(current)}%` : `${Math.floor(current)}+`;
        }
      }, stepTime);
    };

    const checkAndAnimate = () => {
      if (hasAnimated) return;

      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        hasAnimated = true;
        stats.forEach(stat => {
          const target = stat.textContent;
          animateCounter(stat, target, target.includes('%'));
        });
      }
    };

    window.addEventListener('scroll', utils.throttle(checkAndAnimate, 100));
    checkAndAnimate();
  })();

  // FORM HANDLING MODULE
  const formHandler = (() => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');

    if (!form || !submitBtn || !resetBtn) return;

    const validators = {
      name: (value) => value.trim() ? null : 'Please enter your full name.',
      phone: (value) => {
        if (!value.trim()) return 'Please enter your phone number.';
        return /^[\d\s\+\-\(\)]+$/.test(value) ? null : 'Please enter a valid phone number.';
      },
      email: (value) => {
        if (!value.trim()) return null;
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Please enter a valid email address.';
      }
    };

    const showMessage = (message, type) => {
      const existing = form.querySelector('.form-message');
      if (existing) existing.remove();

      const messageDiv = document.createElement('div');
      messageDiv.className = `form-message form-message-${type}`;
      messageDiv.innerHTML = `
        <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" class="icon-sm"></i>
        <span>${message}</span>
      `;

      form.insertBefore(messageDiv, form.firstChild);
      lucide.createIcons();
      messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      if (type === 'success') {
        setTimeout(() => messageDiv.remove(), CONFIG.formMessageTimeout);
      }
    };

    const setButtonState = (loading) => {
      submitBtn.disabled = loading;
      submitBtn.innerHTML = loading 
        ? '<i data-lucide="loader" class="icon"></i> Sending...'
        : '<i data-lucide="send" class="icon"></i> Send Enquiry';
      lucide.createIcons();
    };

    submitBtn.addEventListener('click', async (e) => {
      e.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        course: document.getElementById('course').value,
        message: document.getElementById('message').value
      };

      // Validate fields
      for (const [field, validator] of Object.entries(validators)) {
        const error = validator(formData[field]);
        if (error) {
          showMessage(error, 'error');
          document.getElementById(field).focus();
          return;
        }
      }

      setButtonState(true);

      // Simulate submission
      setTimeout(() => {
        showMessage('Thank you! Your enquiry has been received. We\'ll contact you soon.', 'success');
        form.reset();
        setButtonState(false);
        console.log('Form Data:', formData);
      }, 1500);
    });

    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear the form?')) {
        form.reset();
        const message = form.querySelector('.form-message');
        if (message) message.remove();
      }
    });
  })();

  // SCROLL ANIMATIONS MODULE
  const scrollAnimations = (() => {
    const elements = document.querySelectorAll('.course, .service, .testimonial, .feature-icon');
    if (!elements.length) return;

    const animate = utils.throttle(() => {
      elements.forEach((element, index) => {
        if (element.classList.contains('animate-in')) return;

        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setTimeout(() => element.classList.add('animate-in'), index * CONFIG.animationStagger);
        }
      });
    }, 100);

    window.addEventListener('scroll', animate);
    animate();
  })();

  // COURSE ENROLLMENT TRACKING
  const courseTracking = (() => {
    const courseLinks = document.querySelectorAll('.course-link, .hero-ctas a[href="#courses"]');
    
    courseLinks.forEach(link => {
      link.addEventListener('click', function() {
        const courseName = this.closest('.course')?.querySelector('h3')?.textContent;
        if (!courseName) return;

        setTimeout(() => {
          const courseSelect = document.getElementById('course');
          if (!courseSelect) return;

          const matchingOption = Array.from(courseSelect.options).find(opt =>
            opt.text.toLowerCase().includes(courseName.toLowerCase().split(' ')[0])
          );

          if (matchingOption) courseSelect.value = matchingOption.value;
        }, 500);
      });
    });
  })();

  // PHONE NUMBER COPY FEATURE
  const phoneCopy = (() => {
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
      link.addEventListener('click', function(e) {
        if (!navigator.clipboard) return;

        const phoneNumber = this.textContent;
        navigator.clipboard.writeText(phoneNumber).then(() => {
          const tooltip = document.createElement('span');
          tooltip.className = 'phone-tooltip';
          tooltip.textContent = 'Phone number copied!';
          
          this.parentElement.style.position = 'relative';
          this.parentElement.appendChild(tooltip);
          
          setTimeout(() => tooltip.remove(), 2000);
        });
      });
    });
  })();

  // LAZY LOADING IMAGES
  const lazyLoadImages = (() => {
    if (!('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
  })();

  // PHOTO OVERLAY INTERACTION
  const photoOverlay = document.querySelector('.photo-overlay');
  if (photoOverlay) {
    photoOverlay.style.cursor = 'pointer';
    photoOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Video/Gallery feature: This would open a lightbox or video player showing your facilities.');
    });
  }

  // INITIALIZE
  console.log('✅ Modem Computer Technology - Website Interactive Features Loaded');
  lucide.createIcons();

})();