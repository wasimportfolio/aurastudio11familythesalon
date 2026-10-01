/* Aura Studio 11 – shared behaviour. Load at end of <body>. */


/* =========================================================
   HELPERS
========================================================= */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const page = document.body.dataset.page;


/* =========================================================
   SERVICE CONTENT
   Images are NOT managed here.
   Service images must stay inside HTML.
========================================================= */

const SERVICES = [
  [
    'Hair Cut',
    'Precision cuts and styling shaped around your face and daily routine.'
  ],
  [
    'Hair Color',
    'Global colour, highlights and balayage with gentle, premium products.'
  ],
  [
    'Skin Care',
    'Facials and glow treatments that leave skin fresh and healthy.'
  ],
  [
    'Hair Spa',
    'Deep-conditioning spa rituals for smooth, strong, shiny hair.'
  ],
  [
    'Makeup',
    'Party and occasion makeup that lasts through the whole event.'
  ],
  [
    'Bridal',
    'Complete bridal packages: makeup, hair and skin prep for your big day.'
  ],
  [
    'Nail Care',
    'Manicure, pedicure and nail art with a clean, polished finish.'
  ],
  [
    'Beard Trim',
    'Sharp beard shaping and grooming for a confident look.'
  ]
];


/* =========================================================
   SOCIAL LINKS
========================================================= */

const SOCIAL = {
  ig: 'https://www.instagram.com/aurastudiofamily_salon',
  fb: 'https://www.facebook.com/',
  wa: 'https://wa.me/918680808683',
  tel: 'tel:+918680808683',
  review: 'https://maps.app.goo.gl/iXaYTH5WP91qxZ3i7'
};


/* =========================================================
   RIGHT SIDE SOCIAL SIDEBAR
========================================================= */

if (!$('.social-sidebar')) {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="social-sidebar">

      <a href="${SOCIAL.ig}"
         target="_blank"
         rel="noopener"
         class="instagram-link"
         aria-label="Instagram">
        <i class="fab fa-instagram"></i>
        <span class="social-tooltip">Instagram</span>
      </a>

      <a href="${SOCIAL.fb}"
         target="_blank"
         rel="noopener"
         class="facebook-link"
         aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
        <span class="social-tooltip">Facebook</span>
      </a>

      <a href="${SOCIAL.wa}"
         target="_blank"
         rel="noopener"
         class="whatsapp-link"
         aria-label="WhatsApp">
        <i class="fab fa-whatsapp"></i>
        <span class="social-tooltip">WhatsApp</span>
      </a>

      <a href="${SOCIAL.tel}"
         class="phone-link"
         aria-label="Call Us">
        <i class="fas fa-phone"></i>
        <span class="social-tooltip">Call Us</span>
      </a>

    </div>
    `
  );
}


/* =========================================================
   HEADER + FOOTER FOR INNER PAGES
========================================================= */

if (page) {

  const links = [
    ['index.html', 'HOME'],
    ['services.html', 'SERVICES'],
    ['gallery.html', 'GALLERY'],
    ['contact.html', 'CONTACT']
  ];

  const nav = links
    .map(
      l =>
        `<a href="${l[0]}" class="nav-link${l[0].startsWith(page) ? ' active' : ''}">
          ${l[1]}
        </a>`
    )
    .join('');

  document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <header class="header">

      <div class="header-container">

        <a href="index.html" class="logo">
          <img src="images/logo.png" alt="Aura Studio 11">
        </a>

        <nav class="navbar">
          ${nav}
        </nav>

        <a href="index.html#booking" class="book-btn">
          <i class="fa-regular fa-calendar"></i>
          <span>BOOK APPOINTMENT</span>
        </a>

        <button class="menu-btn" id="menuBtn" aria-label="Menu">
          <i class="fa-solid fa-bars"></i>
        </button>

      </div>

      <div class="mobile-menu" id="mobileMenu">

        ${links
          .map(l => `<a href="${l[0]}">${l[1]}</a>`)
          .join('')}

        <a href="index.html#booking" class="mobile-book">
          <i class="fa-regular fa-calendar"></i>
          BOOK APPOINTMENT
        </a>

      </div>

    </header>
    `
  );


  /* Mobile menu */

  const menuBtn = $('#menuBtn');
  const mobileMenu = $('#mobileMenu');

  if (menuBtn && mobileMenu) {

    menuBtn.onclick = () => {

      const opened = mobileMenu.classList.toggle('show');

      menuBtn.innerHTML = `
        <i class="fa-solid fa-${opened ? 'xmark' : 'bars'}"></i>
      `;

      document.body.classList.toggle('menu-open', opened);
    };

  }


  /* Footer */

  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <footer class="footer">

      <div class="footer-bottom">

        <p>
          © 2026
          <strong>Aura Studio 11 – Family The Salon</strong>.
          No. 34, Mela Ullikhan Street,
          Kumbakonam – 612001
        </p>

        <p>
  Designed &amp; Developed by
  <a href="https://wasim4k.github.io/mw-craft/"
     target="_blank"
     rel="noopener"
     class="mw-link">
    <strong>MW WebCraft</strong>
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
  </a>
</p>

      </div>

    </footer>
    `
  );
}


/* =========================================================
   MOBILE BOTTOM BAR
========================================================= */

document.body.insertAdjacentHTML(
  'beforeend',
  `
  <div class="mbar">

    <a href="tel:+918680808683">
      <i class="fas fa-phone"></i>
      Call
    </a>

    <a href="https://wa.me/918680808683" target="_blank">
      <i class="fab fa-whatsapp"></i>
      WhatsApp
    </a>

    <a href="index.html#booking">
      <i class="fa-regular fa-calendar"></i>
      Book
    </a>

  </div>
  `
);


/* =========================================================
   STICKY HEADER COLOUR CHANGE
========================================================= */

const hd = $('.header');

const sc = () => {

  if (hd) {
    hd.classList.toggle('scrolled', scrollY > 40);
  }

};

addEventListener('scroll', sc);
sc();


/* =========================================================
   SERVICES PAGE
   Images must already exist in services.html.
   JS only handles the service text/content if needed.
========================================================= */

const sv = $('#svc-list');

if (sv && !sv.children.length) {

  sv.innerHTML = SERVICES
    .map(
      s =>
        `
        <div class="svc-row">

          <div class="svc-img">
            <!-- Add service image directly in services.html -->
          </div>

          <div class="svc-txt">

            <h2>${s[0]}</h2>

            <p>${s[1]}</p>

            <a class="btn-gold" href="index.html#booking">
              Book ${s[0]}
            </a>

          </div>

        </div>
        `
    )
    .join('');

}


/* =========================================================
   GALLERY PAGE
   Images stay inside gallery.html.
   JS only handles filter + lightbox.
========================================================= */

const gg = $('#g-grid');

if (gg) {

  /* Gallery filter */

  $$('.filters button').forEach(button => {

    button.onclick = () => {

      $$('.filters button').forEach(
        b => b.classList.remove('on')
      );

      button.classList.add('on');

      $$('figure', gg).forEach(figure => {

        const category = figure.dataset.c;

        const show =
          button.dataset.c === 'all' ||
          category === button.dataset.c;

        figure.classList.toggle('hide', !show);

      });

    };

  });


  /* Lightbox */

  if (!$('#lb')) {

    document.body.insertAdjacentHTML(
      'beforeend',
      `
      <div id="lb">
        <img alt="">
      </div>
      `
    );

  }

  const lb = $('#lb');

  if (lb) {

    gg.onclick = e => {

      const image = e.target.closest('img');

      if (!image) return;

      const preview = $('img', lb);

      if (!preview) return;

      preview.src = image.src;
      preview.alt = image.alt || 'Aura Studio 11';

      lb.classList.add('open');

    };


    lb.onclick = () => {
      lb.classList.remove('open');
    };


    addEventListener('keydown', e => {

      if (e.key === 'Escape') {
        lb.classList.remove('open');
      }

    });

  }

}


/* =========================================================
   CONTACT FORM → WHATSAPP (with emojis)
========================================================= */

const cf = $('#c-form');

if (cf) {

  const SERVICE_EMOJI = {
    'Hair Cut': '✂️',
    'Hair Color': '🎨',
    'Skin Care': '🧖‍♀️',
    'Hair Spa': '💆‍♀️',
    'Makeup': '💄',
    'Bridal': '👰',
    'Nail Care': '💅',
    'Beard Trim': '🧔'
  };

  cf.onsubmit = e => {

    e.preventDefault();

    const d = new FormData(cf);

    const name    = (d.get('name') || '').trim();
    const phone   = (d.get('phone') || '').trim();
    const service = d.get('service') || '';
    const msg     = (d.get('msg') || '').trim() || 'No extra message';
    const emoji   = SERVICE_EMOJI[service] || '✨';

    const message =
`✨ *NEW APPOINTMENT REQUEST* ✨
━━━━━━━━━━━━━━━━━━

👋 Hello *Aura Studio 11 – Family The Salon*!

👤 *Name:* ${name}
📞 *Phone:* ${phone}
${emoji} *Service:* ${service}

💬 *Message:*
${msg}

━━━━━━━━━━━━━━━━━━
🙏 Thank you! Please confirm my appointment 💖
📍 _Sent from your website_`;

    window.open(
      'https://wa.me/918680808683?text=' + encodeURIComponent(message),
      '_blank'
    );

    cf.reset();
  };

}


/* =========================================================
   BROKEN IMAGE FALLBACK
========================================================= */

document.addEventListener(
  'error',
  e => {

    if (e.target.tagName === 'IMG') {

      e.target.classList.add('img-fail');

      e.target.src =
        'data:image/svg+xml,' +
        encodeURIComponent(
          `
          <svg xmlns="http://www.w3.org/2000/svg"
               width="600"
               height="400">

            <rect
              width="600"
              height="400"
              fill="#0b2854"
            />

            <text
              x="300"
              y="210"
              fill="#c9972b"
              font-family="serif"
              font-size="32"
              text-anchor="middle">
              Aura Studio 11
            </text>

          </svg>
          `
        );

    }

  },
  true
);


/* =========================================================
   HERO SLIDESHOW
   Images are already inside index.html.
========================================================= */

{
  const slides = $$('.ah-slides img');
  const dotsWrap = $('#ahDots');

  if (slides.length > 1) {

    let current = 0;
    let timer;


    const updateDots = () => {

      if (!dotsWrap) return;

      $$('button', dotsWrap).forEach(
        (button, index) => {
          button.classList.toggle(
            'on',
            index === current
          );
        }
      );

    };


    const goTo = index => {

      slides[current].classList.remove('on');

      current = index;

      slides[current].classList.add('on');

      updateDots();

    };


    const start = () => {

      clearInterval(timer);

      timer = setInterval(
        () => {
          goTo((current + 1) % slides.length);
        },
        5500
      );

    };


    if (dotsWrap) {

      dotsWrap.innerHTML = slides
        .map(
          (_, index) =>
            `
            <button
              type="button"
              aria-label="Slide ${index + 1}">
            </button>
            `
        )
        .join('');


      $$('button', dotsWrap).forEach(
        (button, index) => {

          button.onclick = () => {

            goTo(index);
            start();

          };

        }
      );

      updateDots();

    }


    start();

  }
}


/* =========================================================
   HOME PHOTO MARQUEE
   IMPORTANT:
   Images come ONLY from index.html.
   
   HTML structure:
   
   .mq-row
      .mq-track
         figure
         figure
         figure
   
   JS removes .mq-track and duplicates the
   existing figures for seamless animation.
========================================================= */

{
  const rows = $$('.mq-row');

  rows.forEach(row => {

    const track = $('.mq-track', row);

    if (!track) return;

    const figures = track.innerHTML.trim();

    if (!figures) return;

    /* Put the existing HTML images directly
       inside the animated .mq-row */

    row.innerHTML = figures + figures;

  });
}


 /* =========================================================
    BEFORE / AFTER SLIDER
    Images are controlled from HTML data attributes.
    
    Example:
    data-before="images/before-hair-color.jpg"
    data-after="images/after-hair-color.jpg"
 ========================================================= */

{
  const box = $('#ba');
  const tabs = $('#baTabs');

  if (box && tabs) {

    const afterImage = $('.ba-after', box);
    const beforeImage = $('.ba-before', box);
    const range = $('input[type="range"]', box);


    /* Slider position */

    const setPosition = value => {

      box.style.setProperty(
        '--p',
        value + '%'
      );

    };


    /* Change Before / After images */

    const showTransformation = button => {

      const before = button.dataset.before;
      const after = button.dataset.after;

      if (before && beforeImage) {
        beforeImage.src = before;
      }

      if (after && afterImage) {
        afterImage.src = after;
      }

      /* Update active tab */

      $$('.ba-tabs button', tabs).forEach(btn => {
        btn.classList.remove('on');
      });

      button.classList.add('on');


      /* Reset slider to center */

      if (range) {
        range.value = 50;
      }

      setPosition(50);

    };


    /* Tab click */

    $$('.ba-tabs button', tabs).forEach(button => {

      button.addEventListener(
        'click',
        () => {
          showTransformation(button);
        }
      );

    });


    /* Slider drag */

    if (range) {

      range.addEventListener(
        'input',
        () => {
          setPosition(range.value);
        }
      );

    }


    /* Set first tab as default */

    const firstTab =
      $('.ba-tabs button.on', tabs) ||
      $('.ba-tabs button', tabs);

    if (firstTab) {
      showTransformation(firstTab);
    }


    /* Gentle first-view animation */

    if (
      !matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches &&
      'IntersectionObserver' in window &&
      range
    ) {

      new IntersectionObserver(
        (entries, observer) => {

          if (!entries[0].isIntersecting) return;

          observer.disconnect();

          let t = 0;


          const step = () => {

            t += 0.022;

            const value =
              50 +
              Math.sin(t * Math.PI * 2) *
              (t < 1 ? 22 : 0);

            setPosition(value);

            range.value = value;


            if (t < 1) {

              requestAnimationFrame(step);

            } else {

              setPosition(50);
              range.value = 50;

            }

          };


          requestAnimationFrame(step);

        },
        {
          threshold: 0.6
        }
      ).observe(box);

    }

  }
}


/* =========================================================
   FINISHED
========================================================= */