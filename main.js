// Advanced Interactive Logic for Zenith Dental Clinic

// --- Service Subpages Database ---
const servicesData = {
  whitening: {
    title: "Cosmetic Teeth Whitening",
    description: "Brighten your smile in just one visit. We use professional-grade whitening gel activated by specialized light wavelengths to safely erase years of stains from coffee, tea, and aging without enamel wear.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    cost: "$299 - $599",
    duration: "45 - 60 Mins",
    recovery: "Immediate (no downtime)",
    insurance: "Cosmetic (not covered)",
    steps: [
      { num: "1", title: "Shade Analysis & Prep", desc: "We map your current tooth color and isolate gums using a medical protective barrier." },
      { num: "2", title: "Gel Application", desc: "A prescription-strength hydrogen peroxide gel is applied evenly to teeth surfaces." },
      { num: "3", title: "Laser Light Activation", desc: "An advanced blue LED light accelerates whitening for 15-minute cycles." },
      { num: "4", title: "Post-Treatment Rinse", desc: "We clean teeth, apply a desensitizing paste, and measure your new, brighter shade." }
    ]
  },
  implants: {
    title: "Permanent Dental Implants",
    description: "Restore missing teeth permanently. Implants place biocompatible titanium posts directly into the jawbone, acting as artificial roots that anchor hand-crafted porcelain crowns.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    cost: "$1,999 - $3,999 per tooth",
    duration: "2 - 3 Visits over months",
    recovery: "3 - 5 Days post-surgery",
    insurance: "Partially Covered (up to 50%)",
    steps: [
      { num: "1", title: "Consultation & 3D Scan", desc: "We examine bone density using low-radiation digital scans to map placement." },
      { num: "2", title: "Post Placement", desc: "A titanium implant post is surgically inserted into the jawbone under local anesthesia." },
      { num: "3", title: "Healing & Osseointegration", desc: "The post fuses organically with the jawbone over 3-6 months to form a root." },
      { num: "4", title: "Crown Attachment", desc: "A custom-crafted porcelain crown matching your surrounding teeth is securely anchored." }
    ]
  },
  exams: {
    title: "Preventive Exams & Cleanings",
    description: "Keep your gums and teeth healthy for life. Our comprehensive wellness visits include plaque scraping, polishing, decay scans, and oral cancer screenings.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    cost: "$149 - $299 (Or fully covered by insurance)",
    duration: "45 - 60 Mins",
    recovery: "Immediate",
    insurance: "Fully Covered (100% Preventive)",
    steps: [
      { num: "1", title: "Digital Diagnostics", desc: "We take high-definition digital X-rays to check for bone decay and internal cavities." },
      { num: "2", title: "Ultrasonic Scaling", desc: "An ultrasonic hygienist tool gently removes plaque, calculus, and tartar buildup." },
      { num: "3", title: "Jet Polishing & Floss", desc: "Teeth are buffed with a mild mint polish paste to eliminate surface staining." },
      { num: "4", title: "Specialist Review", desc: "Dr. Mitchell conducts a full dental assessment, checks gums, and schedules care." }
    ]
  },
  pediatric: {
    title: "Gentle Pediatric Dental Care",
    description: "Establish strong oral health habits for children in a fun, fear-free environment. We focus on gentle cleanings, cavity protection, and decay prevention with custom sealants.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    cost: "$120 - $250",
    duration: "30 - 45 Mins",
    recovery: "Immediate",
    insurance: "Fully Covered (Preventive schedules)",
    steps: [
      { num: "1", title: "Friendly Introduction", desc: "We introduce children to the dentist chair and instruments using fun, playful terminology." },
      { num: "2", title: "Soft Clean & Polish", desc: "Hygienists clean teeth gently using child-sized polish brushes and fruity flavors." },
      { num: "3", title: "Fluoride Protection", desc: "A safe, protective tooth varnish is painted on to strengthen developing enamel." },
      { num: "4", title: "No-Cavity Club rewards", desc: "Kids select a toy from our chest and join the No-Cavity Club reward chart." }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // --- Client-Side Hash Router ---
  function router() {
    const hash = window.location.hash || '#home';
    const homeView = document.getElementById('view-home');
    const detailView = document.getElementById('view-service-detail');
    
    if (hash === '#home' || hash === '') {
      if (homeView) homeView.classList.remove('hidden');
      if (detailView) detailView.classList.add('hidden');
    } else if (hash.startsWith('#services/')) {
      const serviceKey = hash.split('/')[1];
      const data = servicesData[serviceKey];
      
      if (data) {
        if (homeView) homeView.classList.add('hidden');
        if (detailView) {
          detailView.classList.remove('hidden');
          
          // Populate view details
          document.getElementById('detail-title').textContent = data.title;
          document.getElementById('detail-desc').textContent = data.description;
          document.getElementById('detail-img').src = data.image;
          document.getElementById('detail-cost').textContent = data.cost;
          document.getElementById('detail-duration').textContent = data.duration;
          document.getElementById('detail-recovery').textContent = data.recovery;
          document.getElementById('detail-insurance').textContent = data.insurance;
          
          // Populate steps
          const stepsContainer = document.getElementById('detail-steps-container');
          if (stepsContainer) {
            stepsContainer.innerHTML = '';
            data.steps.forEach(step => {
              const stepHtml = `
                <div class="step-card">
                  <div class="step-num">${step.num}</div>
                  <div>
                    <h4 class="step-title">${step.title}</h4>
                    <p class="step-desc">${step.desc}</p>
                  </div>
                </div>
              `;
              stepsContainer.insertAdjacentHTML('beforeend', stepHtml);
            });
          }
        }
        window.scrollTo(0, 0);
      } else {
        window.location.hash = '#home';
      }
    }
  }

  window.addEventListener('hashchange', router);
  router(); // Run on load

  // --- Dynamic Live Opening Hours Checker ---
  function updateClinicStatus() {
    const statusBadgeContainer = document.getElementById('clinic-status-badge');
    if (!statusBadgeContainer) return;

    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();
    const minute = now.getMinutes();
    const timeDecimal = hour + minute / 60;

    let isOpen = false;

    if (day >= 1 && day <= 5) {
      // Mon - Fri: 8:00 AM - 6:00 PM (8.0 to 18.0)
      if (timeDecimal >= 8.0 && timeDecimal < 18.0) {
        isOpen = true;
      }
    } else if (day === 6) {
      // Saturday: 9:00 AM - 2:00 PM (9.0 to 14.0)
      if (timeDecimal >= 9.0 && timeDecimal < 14.0) {
        isOpen = true;
      }
    }

    if (isOpen) {
      statusBadgeContainer.innerHTML = `
        <span class="badge-status open">
          <span class="badge-status-dot"></span>
          Open Now
        </span>
      `;
    } else {
      statusBadgeContainer.innerHTML = `
        <span class="badge-status closed">
          <span class="badge-status-dot"></span>
          Closed
        </span>
      `;
    }
  }
  updateClinicStatus();
  setInterval(updateClinicStatus, 60000); // Check every minute

  // --- Sticky Navbar Shadow & Height ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      if (menuIcon) {
        if (mobileMenu.classList.contains('open')) {
          menuIcon.classList.remove('fa-bars');
          menuIcon.classList.add('fa-xmark');
        } else {
          menuIcon.classList.remove('fa-xmark');
          menuIcon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        if (menuIcon) {
          menuIcon.classList.remove('fa-xmark');
          menuIcon.classList.add('fa-bars');
        }
      });
    });
  }

  // --- FAQ Accordion Logic ---
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    const trigger = card.querySelector('.faq-trigger');
    const content = card.querySelector('.faq-content');
    const chevron = card.querySelector('.faq-chevron');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = content.classList.contains('active');
        
        faqCards.forEach(otherCard => {
          const otherContent = otherCard.querySelector('.faq-content');
          const otherChevron = otherCard.querySelector('.faq-chevron');
          if (otherContent && otherContent !== content) {
            otherContent.classList.remove('active');
            otherContent.style.maxHeight = '0px';
            if (otherChevron) otherChevron.style.transform = 'rotate(0deg)';
          }
        });

        if (isOpen) {
          content.classList.remove('active');
          content.style.maxHeight = '0px';
          if (chevron) chevron.style.transform = 'rotate(0deg)';
        } else {
          content.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
          if (chevron) chevron.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // --- Pricing Sheet Modal Tab Switcher ---
  const pricingTabButtons = document.querySelectorAll('.pricing-tab-btn');
  const pricingTables = document.querySelectorAll('.pricing-table-container');

  pricingTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      pricingTabButtons.forEach(b => b.classList.remove('active'));
      pricingTables.forEach(t => t.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      const targetTable = document.getElementById(targetId);
      if (targetTable) {
        targetTable.classList.add('active');
      }
    });
  });

  // --- Verified Google Reviews Testimonials Slider ---
  const reviewsTrack = document.getElementById('reviews-track');
  const prevBtn = document.getElementById('review-prev-btn');
  const nextBtn = document.getElementById('review-next-btn');

  if (reviewsTrack && prevBtn && nextBtn) {
    let currentIndex = 0;
    const slides = reviewsTrack.querySelectorAll('.reviews-slide');
    const totalSlides = slides.length;

    function getVisibleSlidesCount() {
      return window.innerWidth >= 768 ? 3 : 1;
    }

    function updateSliderPosition() {
      const visibleCount = getVisibleSlidesCount();
      const maxIndex = Math.max(0, totalSlides - visibleCount);
      
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      if (currentIndex < 0) currentIndex = 0;

      const slideWidth = slides[0].getBoundingClientRect().width;
      const offset = currentIndex * slideWidth;
      reviewsTrack.style.transform = `translateX(-${offset}px)`;
    }

    nextBtn.addEventListener('click', () => {
      const visibleCount = getVisibleSlidesCount();
      if (currentIndex < totalSlides - visibleCount) {
        currentIndex++;
        updateSliderPosition();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    });

    window.addEventListener('resize', updateSliderPosition);
    setTimeout(updateSliderPosition, 150); // Small delay to let bounding box compute
  }

  // --- Interactive Before / After Gallery Slider ---
  const sliderWrapper = document.querySelector('.slider-wrapper');
  if (sliderWrapper) {
    const afterImg = sliderWrapper.querySelector('.slider-after');
    const handle = sliderWrapper.querySelector('.slider-handle');
    const button = sliderWrapper.querySelector('.slider-button');
    
    let isResizing = false;

    function setSliderPosition(x) {
      const rect = sliderWrapper.getBoundingClientRect();
      let position = ((x - rect.left) / rect.width) * 100;

      if (position < 0) position = 0;
      if (position > 100) position = 100;

      afterImg.style.clipPath = `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`;
      handle.style.left = `${position}%`;
      if (button) button.style.left = `${position}%`;
    }

    function startResize(e) {
      isResizing = true;
      e.preventDefault();
    }

    function stopResize() {
      isResizing = false;
    }

    function onResize(e) {
      if (!isResizing) return;
      let clientX;
      if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }
      setSliderPosition(clientX);
    }

    handle.addEventListener('mousedown', startResize);
    window.addEventListener('mouseup', stopResize);
    window.addEventListener('mousemove', onResize);

    handle.addEventListener('touchstart', startResize);
    window.addEventListener('touchend', stopResize);
    window.addEventListener('touchmove', onResize);

    sliderWrapper.addEventListener('click', (e) => {
      if (e.target !== handle && e.target !== button) {
        setSliderPosition(e.clientX);
      }
    });
  }

  // --- Appointment Booking Form Handler ---
  const bookingForm = document.getElementById('booking-form');
  const successMessage = document.getElementById('success-message');
  const submitBtn = document.getElementById('submit-btn');

  if (bookingForm && successMessage && submitBtn) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('book-name');
      const emailInput = document.getElementById('book-email');
      const phoneInput = document.getElementById('book-phone');

      if (!nameInput.value.trim()) {
        alert('Please enter your full name');
        return;
      }
      if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
      }
      if (!validatePhone(phoneInput.value)) {
        alert('Please enter a valid phone number');
        return;
      }

      // Check if Web3Forms key is configured
      const accessKey = bookingForm.querySelector('input[name="access_key"]')?.value;

      const originalBtnContent = submitBtn.innerHTML;
      submitBtn.innerHTML = '<div class="spinner"></div>';
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-disabled');

      if (accessKey && accessKey !== 'YOUR_ACCESS_KEY_HERE') {
        // Submit real request to Web3Forms
        const formData = new FormData(bookingForm);
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => {
          submitBtn.innerHTML = originalBtnContent;
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn-disabled');

          if (data.success) {
            bookingForm.style.display = 'none';
            successMessage.classList.add('open');
          } else {
            alert('Submission error: ' + (data.message || 'Please try again.'));
          }
        })
        .catch(() => {
          submitBtn.innerHTML = originalBtnContent;
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn-disabled');
          alert('Network connection error. Please try again.');
        });
      } else {
        // Fallback simulated submission
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnContent;
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn-disabled');

          bookingForm.style.display = 'none';
          successMessage.classList.add('open');
        }, 1500);
      }
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(String(phone).replace(/\s/g, ''));
  }
});

// --- Modal Global Control Triggers ---
window.openModal = function() {
  const modal = document.getElementById('appointment-modal');
  const bookingForm = document.getElementById('booking-form');
  const successMessage = document.getElementById('success-message');

  if (modal) {
    modal.classList.add('open');
    if (bookingForm) bookingForm.style.display = 'flex';
    if (successMessage) successMessage.classList.remove('open');
    if (bookingForm) bookingForm.reset();
  }
};

window.closeModal = function() {
  const modal = document.getElementById('appointment-modal');
  if (modal) {
    modal.classList.remove('open');
  }
};

window.openPricingModal = function() {
  const modal = document.getElementById('pricing-modal');
  if (modal) {
    modal.classList.add('open');
  }
};

window.closePricingModal = function() {
  const modal = document.getElementById('pricing-modal');
  if (modal) {
    modal.classList.remove('open');
  }
};

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeModal();
    window.closePricingModal();
  }
});
