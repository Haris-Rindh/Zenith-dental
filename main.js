// Advanced Premium Interaction Logic for Zenith Dental Clinic

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

// --- Dental Blog Articles Database ---
const blogArticles = {
  brushing: {
    title: "The Right Way to Brush: Are you doing it wrong?",
    date: "June 2026",
    read: "4 Min Read",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    content: [
      "<p>Brushing your teeth seems simple, but clinic evaluations show that over 70% of adults brush in horizontal strokes that damage tooth enamel and push bacteria beneath the gum line. This abrasive method leads to gum recession and root exposure.</p>",
      "<h3 style='font-size: 1.25rem; font-weight: 700; margin-top: 1.5rem;'>The Modified Bass Method</h3>",
      "<p>Hygienists recommend the circular Bass technique: Angle your toothbrush bristles at a 45-degree angle toward the gum line. Move the brush in very small, gentle circular vibrations, then sweep downwards (or upwards for bottom teeth) away from the gums. This sweeps plaque out of the subgingival pocket safely.</p>",
      "<h3 style='font-size: 1.25rem; font-weight: 700; margin-top: 1.5rem;'>Don't Brush Too Soon After Meals</h3>",
      "<p>Eating acidic foods (like citrus, sodas, or vinegar) softens tooth enamel temporarily. If you brush immediately, you rub away microscopic layers of enamel. We advise waiting 30 minutes after meals or rinsing thoroughly with plain water before brushing.</p>"
    ]
  },
  diet: {
    title: "Top 5 Foods for Naturally Stronger Enamel",
    date: "May 2026",
    read: "5 Min Read",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    content: [
      "<p>Your teeth are living structures that constantly demineralize and remineralize throughout the day. While brushing removes plaque, your diet supplies the raw building blocks required to repair enamel structure naturally.</p>",
      "<h3 style='font-size: 1.25rem; font-weight: 700; margin-top: 1.5rem;'>1. Cheese and Yogurt (Calcium Boost)</h3>",
      "<p>Dairy foods are rich in calcium and phosphates, which bond to tooth enamel to replace lost mineral content. They also stimulate saliva production—your body's natural defense against tooth decay.</p>",
      "<h3 style='font-size: 1.25rem; font-weight: 700; margin-top: 1.5rem;'>2. Dark Leafy Greens (Minerals & Vitamins)</h3>",
      "<p>Kale, spinach, and collard greens provide calcium alongside Vitamin K, which helps your body direct calcium directly into bone structures and enamel rather than calcium buildup in arteries.</p>",
      "<h3 style='font-size: 1.25rem; font-weight: 700; margin-top: 1.5rem;'>3. Green Tea (Antioxidant Shields)</h3>",
      "<p>Green tea contains polyphenols and natural fluorides that kill cavity-causing mouth bacteria, shielding your teeth from acidic plaque damage between meals.</p>"
    ]
  },
  floss: {
    title: "Flossing vs. Waterpicks: Which is better?",
    date: "April 2026",
    read: "3 Min Read",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    content: [
      "<p>Interdental cleaning is non-negotiable. Toothbrush bristles only clean 60% of tooth surfaces, leaving the tight spaces between teeth highly susceptible to cavities and periodontal disease.</p>",
      "<h3 style='font-size: 1.25rem; font-weight: 700; margin-top: 1.5rem;'>Traditional Floss: The Gold Standard for Plaque</h3>",
      "<p>Mechanical string floss physically scrapes sticky bacterial film (plaque) off the tooth surfaces. It is highly effective at scraping off calculus buildup in tight interdental contacts where pressure alone cannot remove it.</p>",
      "<h3 style='font-size: 1.25rem; font-weight: 700; margin-top: 1.5rem;'>Waterpicks: Ideal for Gums and Braces</h3>",
      "<p>Pressurized water irrigators wash away loose food debris and flush deep gum pockets. They are highly comfortable and crucial for patients with braces, dental bridges, or arthritis who struggle with string dexterity. However, they lack the scraping friction of traditional thread floss.</p>",
      "<h3 style='font-size: 1.25rem; font-weight: 700; margin-top: 1.5rem;'>The Clinician's Recommendation</h3>",
      "<p>For optimal health, use a water flosser first to clear debris, followed by string floss to scrape contact points before your bedtime brush.</p>"
    ]
  }
};

// --- Treatment Gallery Lightbox Database ---
const galleryCases = {
  veneers: {
    tag: "Cosmetic Restoration",
    title: "Porcelain Veneers Transformation",
    desc: "This patient wanted to correct staining and minor overlaps on their front teeth. We placed custom-crafted porcelain veneers over two clinical appointments. The result is a highly natural, bright, and symmetrical smile.",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    dentist: "Dr. Sarah Mitchell",
    plan: "2 Visits (Prep & Bonding)"
  },
  bonding: {
    tag: "Teeth Reshaping",
    title: "Composite Dental Bonding Restoration",
    desc: "A composite resin dental bonding treatment was completed to repair a chipped front incisor. We matched the resin material to the patient's enamel shade and hand-sculpted the restoration to restore the full incisal edge.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    dentist: "Dr. Sarah Mitchell",
    plan: "1 Visit (45 Minutes)"
  },
  crowns: {
    tag: "Structural Repair",
    title: "Porcelain Crown tooth recovery",
    desc: "This patient required root protection after damage to a pre-existing molar. We placed a biocompatible porcelain crown that provides structural strength for chewing while matching the patient's tooth color index perfectly.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    dentist: "Dr. Marcus Chen",
    plan: "2 Visits (Digital Scanning & Fitting)"
  }
};

// --- i18n English / Spanish translation strings ---
const translations = {
  en: {
    nav_about: "About Us",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_team: "Team",
    nav_stories: "Stories",
    nav_faq: "FAQ",
    nav_book: "Book Appointment",
    hero_badge: "Accepting New Patients",
    hero_title: "Gentle Care for <br>Your Best Smile",
    hero_desc: "Experience anxiety-free dentistry in a modern, soothing environment. We combine state-of-the-art dental technology with a compassionate touch to keep your family smiling.",
    btn_book: "Book Your Visit",
    btn_procedures: "View Procedures",
    calc_subtitle: "Cost Estimator",
    calc_title: "Treatment Cost Calculator",
    calc_desc: "Select procedures and your insurance provider to estimate your out-of-pocket costs and financing terms.",
    calc_header_procedures: "Select Procedures",
    calc_header_insurance: "Select Insurance",
    calc_header_estimate: "Estimate Summary",
    calc_label_subtotal: "Subtotal Cost",
    calc_label_coverage: "Estimated Insurance Coverage",
    calc_label_outofpocket: "Your Out-of-Pocket Estimate",
    calc_label_financing: "CareCredit Financing",
    calc_label_financing_sub: "12-Month Interest-Free plan",
    btn_book_estimate: "Book appointment for this estimate",
    blog_subtitle: "Patient Education",
    blog_title: "Recent Dental Articles",
    blog_desc: "Insights and advice from our dental clinicians to maintain a healthy smile at home."
  },
  es: {
    nav_about: "Nosotros",
    nav_services: "Servicios",
    nav_gallery: "Galería",
    nav_team: "Equipo",
    nav_stories: "Opiniones",
    nav_faq: "Preguntas",
    nav_book: "Reservar Cita",
    hero_badge: "Aceptando Nuevos Pacientes",
    hero_title: "Cuidado Delicado para su <br>Mejor Sonrisa",
    hero_desc: "Experimente una odontología libre de ansiedad en un ambiente moderno y relajante. Combinamos tecnología dental de vanguardia con un toque compasivo para mantener sonriente a su familia.",
    btn_book: "Reserve Su Visita",
    btn_procedures: "Ver Tratamientos",
    calc_subtitle: "Calculador de Costos",
    calc_title: "Calculadora de Costos de Tratamiento",
    calc_desc: "Seleccione los tratamientos y su seguro para estimar sus costos finales y plazos de financiamiento.",
    calc_header_procedures: "Seleccionar Procedimientos",
    calc_header_insurance: "Seleccionar Seguro",
    calc_header_estimate: "Resumen del Estimado",
    calc_label_subtotal: "Costo Subtotal",
    calc_label_coverage: "Cobertura de Seguro Estimada",
    calc_label_outofpocket: "Su Estimado de Bolsillo",
    calc_label_financing: "Financiamiento CareCredit",
    calc_label_financing_sub: "Plan de 12 meses sin intereses",
    btn_book_estimate: "Reservar cita con este estimado",
    blog_subtitle: "Educación al Paciente",
    blog_title: "Artículos Dentales Recientes",
    blog_desc: "Consejos y análisis de nuestros clínicos dentales para cuidar su sonrisa en casa."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let currentLanguage = 'en';

  // --- Client-Side Hash Router ---
  function router() {
    const hash = window.location.hash || '#home';
    const homeView = document.getElementById('view-home');
    const detailView = document.getElementById('view-service-detail');
    const blogView = document.getElementById('view-blog-detail');
    
    // Reset views visibility
    if (homeView) homeView.classList.add('hidden');
    if (detailView) detailView.classList.add('hidden');
    if (blogView) blogView.classList.add('hidden');

    if (hash === '#home' || hash === '') {
      if (homeView) homeView.classList.remove('hidden');
    } else if (hash.startsWith('#services/')) {
      const serviceKey = hash.split('/')[1];
      const data = servicesData[serviceKey];
      
      if (data) {
        if (detailView) {
          detailView.classList.remove('hidden');
          document.getElementById('detail-title').textContent = data.title;
          document.getElementById('detail-desc').textContent = data.description;
          document.getElementById('detail-img').src = data.image;
          document.getElementById('detail-cost').textContent = data.cost;
          document.getElementById('detail-duration').textContent = data.duration;
          document.getElementById('detail-recovery').textContent = data.recovery;
          document.getElementById('detail-insurance').textContent = data.insurance;
          
          const stepsContainer = document.getElementById('detail-steps-container');
          if (stepsContainer) {
            stepsContainer.innerHTML = '';
            data.steps.forEach(step => {
              stepsContainer.insertAdjacentHTML('beforeend', `
                <div class="step-card">
                  <div class="step-num">${step.num}</div>
                  <div>
                    <h4 class="step-title">${step.title}</h4>
                    <p class="step-desc">${step.desc}</p>
                  </div>
                </div>
              `);
            });
          }
        }
        window.scrollTo(0, 0);
      } else {
        window.location.hash = '#home';
      }
    } else if (hash.startsWith('#blog/')) {
      const articleKey = hash.split('/')[1];
      const article = blogArticles[articleKey];

      if (article) {
        if (blogView) {
          blogView.classList.remove('hidden');
          document.getElementById('blog-detail-title').textContent = article.title;
          document.getElementById('blog-detail-date').textContent = article.date;
          document.getElementById('blog-detail-read').textContent = article.read;
          document.getElementById('blog-detail-img').src = article.image;
          
          const contentContainer = document.getElementById('blog-detail-content');
          if (contentContainer) {
            contentContainer.innerHTML = article.content.join('');
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
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const timeDecimal = hour + minute / 60;

    let isOpen = false;

    if (day >= 1 && day <= 5) {
      if (timeDecimal >= 8.0 && timeDecimal < 18.0) isOpen = true;
    } else if (day === 6) {
      if (timeDecimal >= 9.0 && timeDecimal < 14.0) isOpen = true;
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

  // --- Sticky Navbar Shadow ---
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

  // --- Light / Dark Mode Toggle ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

  // Load persisted theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  }

  // --- Multi-Language Switcher (EN/ES Translation) ---
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
      langToggleBtn.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
      translatePage(currentLanguage);
    });
  }

  function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  // --- Treatment Out-of-Pocket Cost Calculator ---
  const calcCheckboxes = document.querySelectorAll('.calc-check');
  const calcInsurance = document.getElementById('calc-insurance');

  const prices = {
    cleaning: 250,
    whitening: 399,
    fillings: 190,
    crown: 950,
    implants: 2999,
    invisalign: 4500
  };

  // Insurance Deductions (Preventive vs Basic vs Restorative vs Cosmetic)
  // Delta covers 100% cleaning, 70% fillings, 50% crowns/implants/ortho, 0% whitening
  const coverageRates = {
    none: { cleaning: 0, whitening: 0, fillings: 0, crown: 0, implants: 0, invisalign: 0 },
    delta: { cleaning: 1.0, whitening: 0, fillings: 0.8, crown: 0.5, implants: 0.5, invisalign: 0.4 },
    cigna: { cleaning: 1.0, whitening: 0, fillings: 0.7, crown: 0.5, implants: 0.4, invisalign: 0.5 },
    metlife: { cleaning: 0.9, whitening: 0, fillings: 0.8, crown: 0.4, implants: 0.5, invisalign: 0.3 },
    aetna: { cleaning: 1.0, whitening: 0, fillings: 0.8, crown: 0.5, implants: 0.3, invisalign: 0.4 }
  };

  function runCalculator() {
    let subtotal = 0;
    let totalCoverage = 0;
    const insuranceProvider = calcInsurance ? calcInsurance.value : 'none';

    calcCheckboxes.forEach(box => {
      if (box.checked) {
        const value = box.value;
        const basePrice = prices[value];
        subtotal += basePrice;

        const rate = coverageRates[insuranceProvider][value] || 0;
        totalCoverage += basePrice * rate;
      }
    });

    const outOfPocket = Math.max(0, subtotal - totalCoverage);
    const monthlyCareCredit = outOfPocket > 0 ? (outOfPocket / 12) : 0;

    // Render results
    const subtotalEl = document.getElementById('calc-subtotal');
    const coverageEl = document.getElementById('calc-coverage');
    const oopEl = document.getElementById('calc-oop');
    const installmentsEl = document.getElementById('calc-installments');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (coverageEl) coverageEl.textContent = `-$${totalCoverage.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (oopEl) oopEl.textContent = `$${outOfPocket.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (installmentsEl) installmentsEl.textContent = `$${monthlyCareCredit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / mo`;
  }

  calcCheckboxes.forEach(box => box.addEventListener('change', runCalculator));
  if (calcInsurance) calcInsurance.addEventListener('change', runCalculator);

  // --- Real-Time FAQ Search and Category Filters ---
  const faqSearchInput = document.getElementById('faq-search');
  const faqFilterButtons = document.querySelectorAll('.btn-faq-filter');

  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', runFaqFilters);
  }

  faqFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      faqFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      runFaqFilters();
    });
  });

  function runFaqFilters() {
    const searchText = faqSearchInput ? faqSearchInput.value.toLowerCase().trim() : '';
    const activeFilterBtn = document.querySelector('.btn-faq-filter.active');
    const categoryFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
    
    const faqCards = document.querySelectorAll('.faq-container .faq-card');

    faqCards.forEach(card => {
      const title = card.querySelector('.faq-title').textContent.toLowerCase();
      const content = card.querySelector('.faq-inner') ? card.querySelector('.faq-inner').textContent.toLowerCase() : '';
      const category = card.getAttribute('data-category');

      const matchesSearch = title.includes(searchText) || content.includes(searchText);
      const matchesCategory = categoryFilter === 'all' || category === categoryFilter;

      if (matchesSearch && matchesCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
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
    setTimeout(updateSliderPosition, 150);
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
    const nameInput = document.getElementById('book-name');
    const emailInput = document.getElementById('book-email');
    const phoneInput = document.getElementById('book-phone');

    const nameError = document.getElementById('err-book-name');
    const emailError = document.getElementById('err-book-email');
    const phoneError = document.getElementById('err-book-phone');
    const submitError = document.getElementById('err-book-submit');

    function showFieldValid(inputEl, errorEl) {
      if (inputEl) inputEl.classList.remove('input-error');
      if (errorEl) {
        errorEl.classList.add('hidden');
        errorEl.textContent = '';
      }
    }

    function showFieldError(inputEl, errorEl, message) {
      if (inputEl) inputEl.classList.add('input-error');
      if (errorEl) {
        errorEl.classList.remove('hidden');
        errorEl.textContent = message;
      }
    }

    function checkName() {
      if (!nameInput.value.trim()) {
        showFieldError(nameInput, nameError, 'Please enter your full name.');
        return false;
      }
      showFieldValid(nameInput, nameError);
      return true;
    }

    function checkEmail() {
      if (!validateEmail(emailInput.value)) {
        showFieldError(emailInput, emailError, 'Please enter a valid email address.');
        return false;
      }
      showFieldValid(emailInput, emailError);
      return true;
    }

    function checkPhone() {
      if (!validatePhone(phoneInput.value)) {
        showFieldError(phoneInput, phoneError, 'Please enter a valid phone number (e.g. (555) 123-4567).');
        return false;
      }
      showFieldValid(phoneInput, phoneError);
      return true;
    }

    if (nameInput) {
      nameInput.addEventListener('input', checkName);
      nameInput.addEventListener('blur', checkName);
    }
    if (emailInput) {
      emailInput.addEventListener('input', checkEmail);
      emailInput.addEventListener('blur', checkEmail);
    }
    if (phoneInput) {
      phoneInput.addEventListener('input', checkPhone);
      phoneInput.addEventListener('blur', checkPhone);
    }

    // Phone Auto-Formatter
    if (phoneInput) {
      phoneInput.addEventListener('input', (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(0, 10);
        const size = input.length;
        if (size === 0) {
          e.target.value = '';
        } else if (size < 4) {
          e.target.value = '(' + input;
        } else if (size < 7) {
          e.target.value = '(' + input.substring(0, 3) + ') ' + input.substring(3);
        } else {
          e.target.value = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + '-' + input.substring(6);
        }
        // Run validation check immediately after formatting
        checkPhone();
      });
    }

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (submitError) {
        submitError.classList.add('hidden');
        submitError.textContent = '';
      }

      const isNameValid = checkName();
      const isEmailValid = checkEmail();
      const isPhoneValid = checkPhone();

      if (!isNameValid || !isEmailValid || !isPhoneValid) {
        if (!isNameValid && nameInput) {
          nameInput.focus();
        } else if (!isEmailValid && emailInput) {
          emailInput.focus();
        } else if (!isPhoneValid && phoneInput) {
          phoneInput.focus();
        }
        return;
      }

      const accessKey = bookingForm.querySelector('input[name="access_key"]')?.value;

      const originalBtnContent = submitBtn.innerHTML;
      submitBtn.innerHTML = '<div class="spinner"></div>';
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-disabled');

      if (accessKey && accessKey !== 'YOUR_ACCESS_KEY_HERE') {
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
            if (submitError) {
              submitError.classList.remove('hidden');
              submitError.textContent = 'Submission error: ' + (data.message || 'Please try again.');
            }
          }
        })
        .catch(() => {
          submitBtn.innerHTML = originalBtnContent;
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn-disabled');
          if (submitError) {
            submitError.classList.remove('hidden');
            submitError.textContent = 'Network connection error. Please try again.';
          }
        });
      } else {
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

  // --- Mobile Sticky Booking Bar Scroll Trigger ---
  const mobileStickyBar = document.getElementById('mobile-sticky-bar');
  if (mobileStickyBar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        mobileStickyBar.classList.add('show');
      } else {
        mobileStickyBar.classList.remove('show');
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
    if (bookingForm) {
      bookingForm.style.display = 'flex';
      bookingForm.reset();

      // Clear errors
      const nameInput = document.getElementById('book-name');
      const emailInput = document.getElementById('book-email');
      const phoneInput = document.getElementById('book-phone');
      const nameError = document.getElementById('err-book-name');
      const emailError = document.getElementById('err-book-email');
      const phoneError = document.getElementById('err-book-phone');
      const submitError = document.getElementById('err-book-submit');

      if (nameInput) nameInput.classList.remove('input-error');
      if (emailInput) emailInput.classList.remove('input-error');
      if (phoneInput) phoneInput.classList.remove('input-error');

      if (nameError) { nameError.classList.add('hidden'); nameError.textContent = ''; }
      if (emailError) { emailError.classList.add('hidden'); emailError.textContent = ''; }
      if (phoneError) { phoneError.classList.add('hidden'); phoneError.textContent = ''; }
      if (submitError) { submitError.classList.add('hidden'); submitError.textContent = ''; }
    }
    if (successMessage) successMessage.classList.remove('open');
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

// --- Treatment Gallery Lightbox Triggers (NEW) ---
window.openLightbox = function(caseKey) {
  const modal = document.getElementById('lightbox-modal');
  const data = galleryCases[caseKey];
  
  if (modal && data) {
    modal.classList.add('open');
    document.getElementById('lightbox-img').src = data.img;
    document.getElementById('lightbox-tag').textContent = data.tag;
    document.getElementById('lightbox-title').textContent = data.title;
    document.getElementById('lightbox-desc').textContent = data.desc;
    document.getElementById('lightbox-dentist').textContent = data.dentist;
    document.getElementById('lightbox-plan').textContent = data.plan;
  }
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('open');
  }
};

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeModal();
    window.closePricingModal();
    window.closeLightbox();
  }
});
