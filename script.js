/* ── TELPHAVASTRA PROFESSIONAL HOMEPAGE JS ── */

// State management
let cart = [], wishCount = 0, totalPrice = 0;
let currentSlide = 0, slideTimer;
let heroPaused = false;

// ── SCROLL EFFECTS ──────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ── HERO SLIDES ──────────────────────────────────────────────
const heroData = [
  {
    key: 'women',
    label: 'Women',
    tag: 'Women • Sarees • Suits • Lehengas',
    h1: 'Women’s<br><em>Heritage</em><br><span>Weaves</span>',
    desc: 'Premium silk sarees, festive lehengas and artisan suit sets — curated for celebrations and everyday elegance.',
    img: 'https://www.shutterstock.com/image-photo/create-blog-post-perfume-brand-260nw-2553388775.jpg',
    thumb: 'https://www.shutterstock.com/image-photo/create-blog-post-perfume-brand-260nw-2553388775.jpg',
    pill: 'Women Collection'
  },
  {
    key: 'men',
    label: 'Men',
    tag: 'Men • Kurtas • Sherwanis • Fabrics',
    h1: 'Men’s<br><em>Classic</em><br><span>Craft</span>',
    desc: 'Hand-embroidered kurtas, festive sherwanis and premium fabrics — tailored for modern tradition.',
    img: 'assets/images/men_ethnic.png',
    thumb: 'assets/images/men_ethnic.png',
    pill: 'Men Collection'
  },
  {
    key: 'kids',
    label: 'Kids',
    tag: 'Kids • Festive Sets • Comfort Cotton',
    h1: 'Kids<br><em>Festive</em><br><span>Comfort</span>',
    desc: 'Soft cottons, playful festive sets, and easy-to-wear styles — made for comfort, made to shine.',
    img: 'assets/images/kids_ethnic.png',
    thumb: 'assets/images/kids_ethnic.png',
    pill: 'Kids Collection'
  }
];

function ensureHeroImagesLoaded() {
  const ids = ['heroSlideImg0', 'heroSlideImg1', 'heroSlideImg2'];
  ids.forEach((id) => {
    let i = 0;
    if (id === 'heroSlideImg1') i = 1;
    if (id === 'heroSlideImg2') i = 2;
    const el = document.getElementById(id);
    if (!el) return;
    el.src = heroData[i]?.img || '';
  });
}

function syncCarouselUI(idx) {
  const items = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.carousel-indicator');

  items.forEach((it, i) => it.classList.toggle('is-active', i === idx));
  dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
}

function setSlide(idx, btn) {
  clearInterval(slideTimer);
  currentSlide = idx;
  const data = heroData[idx];
  syncCarouselUI(idx);

  // update first slide text hooks if present (optional)
  const tag = document.getElementById('heroTag');
  const title = document.getElementById('heroTitle');
  const desc = document.getElementById('heroDesc');
  if (tag) tag.textContent = data.tag;
  if (title) {
    // Convert our stored h1 HTML into a plain-ish title for the first slide hook
    title.innerHTML = data.h1.replace(/<br\s*\/?>/g, ' ').replace('’', '’');
  }
  if (desc) desc.textContent = data.desc;

  startHeroAutoplay();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % heroData.length;
  setSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + heroData.length) % heroData.length;
  setSlide(currentSlide);
}

slideTimer = setInterval(nextSlide, 5000);

function startHeroAutoplay() {
  if (heroPaused) return;
  slideTimer = setInterval(nextSlide, 5000);
}

function pauseHeroAutoplay() {
  heroPaused = true;
  clearInterval(slideTimer);
  slideTimer = null;
}

function resumeHeroAutoplay() {
  heroPaused = false;
  startHeroAutoplay();
}

// Pause on hover + touch swipe for hero carousel.
const heroEl = document.getElementById('hero');
if (heroEl) {
  heroEl.addEventListener('mouseenter', pauseHeroAutoplay);
  heroEl.addEventListener('mouseleave', resumeHeroAutoplay);

  let touchStartX = 0;
  let touchStartY = 0;
  heroEl.addEventListener(
    'touchstart',
    (e) => {
      const t = e.changedTouches && e.changedTouches[0];
      if (!t) return;
      touchStartX = t.screenX;
      touchStartY = t.screenY;
      pauseHeroAutoplay();
    },
    { passive: true }
  );

  heroEl.addEventListener(
    'touchend',
    (e) => {
      const t = e.changedTouches && e.changedTouches[0];
      if (!t) return;
      const dx = t.screenX - touchStartX;
      const dy = t.screenY - touchStartY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      // Horizontal swipe threshold
      if (absDx > 45 && absDx > absDy * 1.2) {
        if (dx < 0) nextSlide(); // swipe left => next
        else prevSlide(); // swipe right => previous
      }

      resumeHeroAutoplay();
    },
    { passive: true }
  );
}

// Initialize hero carousel backgrounds + UI
ensureHeroImagesLoaded();
syncCarouselUI(0);

// ── PRODUCT FILTERING ────────────────────────────────────────
function filterPicks(btn, cat) {
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.pick-card').forEach(c => {
    const cats = c.dataset.cat || 'all';
    if (cat === 'all' || cats.includes(cat)) {
      c.style.display = '';
      c.style.animation = 'cardIn .35s ease';
    } else {
      c.style.display = 'none';
    }
  });
}

// ── PICKS SCROLLER ──────────────────────────────────────────
function scrollPicks(dir) {
  const sc = document.getElementById('picksScroller');
  sc.scrollBy({ left: dir * 500, behavior: 'smooth' });
}

// ── COLOR SWATCHES ──────────────────────────────────────────
function setSwatch(btn, color) {
  document.querySelectorAll('.swatch-item').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  const colorName = color.charAt(0).toUpperCase() + color.slice(1);
  showToast(`✓ Filtering by ${colorName === 'All' ? 'All Colors' : colorName}`);
}

// ── SHOPPING CART ────────────────────────────────────────────
function addToCart(btn) {
  const card = btn.closest('.pick-card');
  const name = card?.querySelector('h4')?.textContent || 'Product';
  const price = card?.querySelector('.cur')?.textContent || '₹999';
  const img = card?.querySelector('img')?.src || '';

  const num = parseInt(price.replace(/[₹,]/g, '')) || 999;
  totalPrice += num;
  cart.push({ name, price, img, qty: 1, num });

  document.getElementById('cBadge').textContent = cart.length;
  document.getElementById('cBadge').style.transform = 'scale(1.5)';
  setTimeout(() => document.getElementById('cBadge').style.transform = 'scale(1)', 280);

  showToast('🛍️ Added to your bag!');
}

// ── WISHLIST ────────────────────────────────────────────────
function toggleWish(btn) {
  const icon = btn.querySelector('i');
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
    icon.className = 'far fa-heart';
    wishCount = Math.max(0, wishCount - 1);
    showToast('Removed from wishlist');
  } else {
    btn.classList.add('active');
    icon.className = 'fas fa-heart';
    icon.style.color = '#A63D32';
    wishCount++;
    showToast('❤️ Added to wishlist!');
  }
  document.getElementById('wBadge').textContent = wishCount;
}

// ── AI TRY-ON MODAL ──────────────────────────────────────────
function openTryon() {
  document.getElementById('tryonModal').classList.add('active');
}

function closeTryon() {
  document.getElementById('tryonModal').classList.remove('active');
}

function handleTryonUpload(input) {
  if (input.files[0]) {
    const wrap = document.getElementById('tryonUpload');
    wrap.innerHTML = `<i class="fas fa-check-circle" style="color:#2E7D32;font-size:36px"></i><p style="color:#2E7D32;font-weight:600">Photo Uploaded!</p><span>${input.files[0].name}</span>`;
  }
}

function generateTryon() {
  showToast('🪄 Generating virtual try-on…');
  setTimeout(() => {
    closeTryon();
    showToast('✅ Try-On complete! Check your gallery.');
  }, 2000);
}

// ── SPIN WHEEL ───────────────────────────────────────────────
const prizes = [
  { label: '10% OFF', code: 'SPIN10',   col: '#8B6A5B' },
  { label: '5% OFF',  code: 'SPIN5',    col: '#BFC9B3' },
  { label: 'Free\nShip', code: 'FREESHIP', col: '#EFD9D5' },
  { label: 'Try\nAgain', code: null,    col: '#E8DCCB' },
  { label: '15% OFF', code: 'SPIN15',   col: '#6B4F42' },
  { label: '₹200\nOff', code: 'FLAT200', col: '#9BAF99' },
  { label: 'Try\nAgain', code: null,    col: '#D4B5AF' },
  { label: '20% OFF', code: 'SPIN20',   col: '#8B6A5B' },
];

let wAngle = 0, spinning = false;

function drawWheel() {
  const canvas = document.getElementById('wheelCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 130, cy = 130, r = 120;
  const arc = (2 * Math.PI) / prizes.length;
  
  prizes.forEach((p, i) => {
    const s = wAngle + i * arc, e = s + arc;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, s, e);
    ctx.fillStyle = p.col;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(s + arc / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#2C1E18';
    ctx.font = 'bold 11px Poppins,sans-serif';
    p.label.split('\n').forEach((l, li) => 
      ctx.fillText(l, r - 10, li * 14 - ((p.label.split('\n').length - 1) * 7) + 4)
    );
    ctx.restore();
  });
  
  ctx.beginPath();
  ctx.arc(cx, cy, 20, 0, 2 * Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.strokeStyle = '#8B6A5B';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = '#8B6A5B';
  ctx.font = 'bold 9px Montserrat,sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('SPIN', cx, cy + 3);
}

function openSpinModal() {
  document.getElementById('spinModal').classList.add('active');
  setTimeout(() => drawWheel(), 100);
}

function closeSpinModal() {
  document.getElementById('spinModal').classList.remove('active');
}

function spinWheel() {
  if (spinning) return;
  spinning = true;
  const btn = document.getElementById('spinBtn');
  const result = document.getElementById('spinResult');
  btn.disabled = true;
  result.textContent = '';
  
  const extra = 5 + Math.floor(Math.random() * 4);
  const pick = Math.floor(Math.random() * prizes.length);
  const arc = (2 * Math.PI) / prizes.length;
  const target = wAngle + extra * 2 * Math.PI + pick * arc;
  const dur = 4000, t0 = performance.now(), a0 = wAngle;
  
  const frame = (now) => {
    const p = Math.min((now - t0) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    wAngle = a0 + (target - a0) * e;
    drawWheel();
    
    if (p < 1) {
      requestAnimationFrame(frame);
      return;
    }
    
    spinning = false;
    btn.disabled = false;
    const prize = prizes[pick];
    result.innerHTML = prize.code
      ? `🎉 You won <strong>${prize.label.replace('\n', ' ')}</strong>!<br>Code: <strong>${prize.code}</strong>`
      : '😊 Try again next time!';
    
    if (prize.code) showToast(`🎁 Won: ${prize.label.replace('\n', ' ')}! Use ${prize.code}`);
  };
  
  requestAnimationFrame(frame);
}

// ── NEWSLETTER ──────────────────────────────────────────────
function subscribe(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const email = e.target.querySelector('input').value;
  const prevHTML = btn.innerHTML;
  btn.innerHTML = '✓ Subscribed!';
  e.target.querySelector('input').value = '';
  showToast(`🎉 Welcome ${email.split('@')[0]}! Check your inbox.`);
  setTimeout(() => btn.innerHTML = prevHTML, 3000);
}

// ── TOAST NOTIFICATIONS ─────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── SMOOTH SCROLL REVEAL ────────────────────────────────────
const style = document.createElement('style');
style.textContent = `
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .revealed { opacity: 1; transform: translateY(0); }
  @keyframes cardIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
`;
document.head.appendChild(style);

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

setTimeout(() => {
  document.querySelectorAll('.pick-card, .occ-card, .feat').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 0.1 + 's';
    obs.observe(el);
  });
}, 200);

// ── MODAL OVERLAY CLOSE ─────────────────────────────────────
// Intentionally left blank as modal is removed

// ── KEYBOARD SHORTCUTS ──────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeTryon();
    closeSpinModal();
    closeW();
    closeSearch();
  }
});

// ── TELPHAVASTRA NAVBAR: theme + coupon wheel ─────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Search Bar Toggle ─────────────────────────────────────────────────
function closeSearch() {
  const c = document.getElementById('searchContainer');
  if (!c) return;
  c.classList.add('hidden');
  c.setAttribute('aria-hidden', 'true');
}

function toggleSearch() {
  const c = document.getElementById('searchContainer');
  if (!c) return;
  const willHide = !c.classList.contains('hidden');
  if (willHide) {
    closeSearch();
    return;
  }

  c.classList.remove('hidden');
  c.setAttribute('aria-hidden', 'false');
  const input = document.getElementById('searchInput');
  if (input) setTimeout(() => input.focus(), 0);
}

// Close search when clicking outside navbar/search.
document.addEventListener('click', (e) => {
  const c = document.getElementById('searchContainer');
  if (!c || c.classList.contains('hidden')) return;

  const nav = document.getElementById('mainNav');
  const target = e.target;
  if (!nav || !target) return;

  if (!nav.contains(target)) {
    closeSearch();
  }
});

function handleSearch() {
  const input = document.getElementById('searchInput');
  const q = input?.value?.trim() || '';
  if (!q) {
    showToast('Type something to search');
    input?.focus?.();
    return;
  }
  showToast(`Searching: ${q}`);
  closeSearch();
}

let telphaDark = localStorage.getItem('auraDarkMode') === 'true';

function applyTelphaTheme(isDark) {
  document.body.style.background = isDark ? '#1a0d06' : '#faf9f7';
  document.body.style.color = isDark ? '#f0e8e0' : '#1a0d06';
  document.documentElement.classList.toggle('dark', isDark);

  const tIco = document.getElementById('tIco');
  if (!tIco) return;

  tIco.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars';
  tIco.style.transform = isDark ? 'rotate(180deg)' : 'rotate(0deg)';
}

applyTelphaTheme(telphaDark);

function toggleT() {
  telphaDark = !telphaDark;
  localStorage.setItem('auraDarkMode', String(telphaDark));
  applyTelphaTheme(telphaDark);
}

const telphaCups = ['10% OFF', '15% OFF', 'FREE SHIP', '5% OFF', '20% OFF', 'LUCKY!', '₹100 OFF', 'TRY AGAIN'];
const telphaCols = ['#9b3a22', '#8b5cf6', '#0ea5e9', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#BFC9B3'];

let telphaSpinning = false;
let telphaCurA = 0;

function drawW() {
  const cv = document.getElementById('wCv');
  if (!cv) return;

  const x = cv.getContext('2d');
  const cx = 110, cy = 110, r = 104;
  const sl = (2 * Math.PI) / 8;

  x.clearRect(0, 0, 220, 220);

  telphaCups.forEach((label, i) => {
    const s = i * sl + telphaCurA;
    const e = s + sl;

    x.beginPath();
    x.moveTo(cx, cy);
    x.arc(cx, cy, r, s, e);
    x.closePath();

    x.fillStyle = telphaCols[i];
    x.fill();
    x.strokeStyle = 'rgba(255,255,255,.5)';
    x.lineWidth = 1.5;
    x.stroke();

    x.save();
    x.translate(cx, cy);
    x.rotate(s + sl / 2);
    x.textAlign = 'right';
    x.fillStyle = '#fff';
    x.font = 'bold 11px Montserrat,sans-serif';
    x.fillText(label, r - 8, 4);
    x.restore();
  });

  x.beginPath();
  x.arc(cx, cy, 22, 0, 2 * Math.PI);
  x.fillStyle = '#fff';
  x.fill();

  x.beginPath();
  x.arc(cx, cy, 16, 0, 2 * Math.PI);
  const g = x.createRadialGradient(cx, cy, 2, cx, cy, 16);
  g.addColorStop(0, '#9b3a22');
  g.addColorStop(1, '#5b1e10');
  x.fillStyle = g;
  x.fill();
}

function openW() {
  const modal = document.getElementById('wOv');
  if (!modal) return;
  modal.classList.add('on');
  drawW();
}

function closeW() {
  const modal = document.getElementById('wOv');
  if (modal) modal.classList.remove('on');

  const res = document.getElementById('cRes');
  if (res) res.textContent = '';

  const btn = document.getElementById('sBtn');
  if (btn) btn.disabled = false;
  telphaSpinning = false;
}

function doSpin() {
  if (telphaSpinning) return;
  telphaSpinning = true;

  const btn = document.getElementById('sBtn');
  if (btn) btn.disabled = true;

  const res = document.getElementById('cRes');
  if (res) res.textContent = '';

  const extra = 360 * (5 + Math.floor(Math.random() * 5));
  const land = Math.random() * 360;
  const total = (extra + land) * Math.PI / 180;

  const dur = 4200;
  const st = performance.now();
  const sa = telphaCurA;

  function af(now) {
    const el = now - st;
    const p = Math.min(el / dur, 1);
    const e = 1 - Math.pow(1 - p, 4);

    telphaCurA = sa + total * e;
    drawW();

    if (p < 1) {
      requestAnimationFrame(af);
      return;
    }

    telphaSpinning = false;

    const norm = (2 * Math.PI) - (telphaCurA % (2 * Math.PI));
    const idx = Math.floor(norm / ((2 * Math.PI) / 8)) % 8;
    const w = telphaCups[idx];

    if (res) {
      res.textContent = w === 'TRY AGAIN' ? 'Better luck next time!' : `You won: ${w}!`;
    }
    if (btn) btn.disabled = false;
  }

  requestAnimationFrame(af);
}

// ── AOS (Scroll Reveal) ─────────────────────────────────────────
if (window.AOS) {
  AOS.init({ duration: 800, once: true, offset: 120 });
}

// ── Chat Widget (Virtual Assistant) ────────────────────────────
let chatWelcomeShown = false;

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function appendChatMessage(text, who) {
  const wrap = document.getElementById('chatMessages');
  if (!wrap) return;

  const row = document.createElement('div');
  row.className = who === 'user' ? 'chat-row user' : 'chat-row bot';
  row.innerHTML = `<div class="chat-bubble">${escapeHtml(text)}</div>`;
  wrap.appendChild(row);
  wrap.scrollTop = wrap.scrollHeight;
}

function toggleChat() {
  const widget = document.getElementById('chatWidget');
  if (!widget) return;

  if (!widget.classList.contains('hidden')) {
    widget.classList.add('hidden');
    widget.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('chat-open');
    return;
  }

  // Remove hidden, force reflow so animation replays
  widget.classList.remove('hidden');
  widget.setAttribute('aria-hidden', 'false');
  document.body.classList.add('chat-open');
  void widget.offsetWidth; // trigger reflow

  if (!chatWelcomeShown) {
    appendChatMessage("Hi! I'm your Telpha Assistant. How can I help you with our collection today? I can assist with sarees, sizing, shipping, or any other queries.", 'bot');
    chatWelcomeShown = true;
  }

  const input = document.getElementById('chatInput');
  if (input) setTimeout(() => input.focus(), 50);
}

function getChatReply(userText) {
  const t = userText.toLowerCase();
  if (t.includes('saree') || t.includes('silk')) return 'Great choice! Tell me your budget and occasion, and I will suggest a few premium options.';
  if (t.includes('kurta') || t.includes('kurtas')) return 'Kurtas look amazing! Are you looking for casual, festive, or formal wear?';
  if (t.includes('lehenga') || t.includes('lehnga')) return 'Lehengas for festive evenings! Which color/theme do you prefer?';
  if (t.includes('shipping') || t.includes('delivery')) return 'Shipping is fast. Share your pin code and I will guide you with estimated delivery time.';
  if (t.includes('return') || t.includes('exchange')) return 'Returns/exchanges depend on the product type. Share what you bought and I’ll help with next steps.';
  if (t.includes('size') || t.includes('measure')) return 'Sizing tip: share your height and preferred fit (regular/loose), and I’ll recommend the closest option.';
  return 'Thanks! What are you looking for today: sarees, kurtas, lehengas, or fabric?';
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  appendChatMessage(text, 'user');
  input.value = '';

  // Auto-reply simulation
  const reply = getChatReply(text);
  setTimeout(() => appendChatMessage(reply, 'bot'), 900);
}

// Wire chat input "Enter" key
const chatInputEl = document.getElementById('chatInput');
if (chatInputEl) {
  chatInputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendChatMessage();
  });
}

// ── INITIAL SETUP ───────────────────────────────────────────
console.log('✨ TelphaVastra Professional Homepage Ready');
console.log('🎨 Features: Hero Slides • Color Swatches • Product Filtering • Smart Cart • Wishlist • AI Try-On • Spin Wheel • Newsletter');

// ── NAV LINK ACTIVE STATE ────────────────────────────────────
const navAnchors = document.querySelectorAll('.nlinks > li > a[href^="#"]');
navAnchors.forEach((a) => {
  a.addEventListener('click', () => {
    navAnchors.forEach((x) => x.classList.remove('active-nav'));
    a.classList.add('active-nav');
  });
});
