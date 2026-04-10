/**
 * ShopKart — Updated E-Commerce
 * app.js — Updated with: Quick View, Wishlist Count, Search Suggestions,
 *          Active Filters Bar, Skeleton Loader, Color/Size/Fit filters,
 *          Two-panel Mega Menu, Announcement Bar, Mobile Filter Drawer
 */

/* =============================================
   1. PRODUCT DATA (expanded with colors, sizes, fewLeft, premium)
============================================= */
const PRODUCTS = [
  {
    id:1, brand:"Nike", title:"Men's Dri-FIT Running T-Shirt — Breathable Mesh Technology",
    category:"T-Shirts", price:799, orig:1599, discount:50, rating:4.5, reviews:12480,
    assured:true, isNew:false, fewLeft:false, premium:false,
    colors:["#1a1a1a","#1976d2","#388e3c"], sizes:["S","M","L","XL"],
    img:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80",
    desc:"Lightweight Dri-FIT fabric keeps you dry and comfortable during any workout."
  },
  {
    id:2, brand:"Levi's", title:"511 Slim Fit Stretchable Jeans — Dark Wash Indigo",
    category:"Jeans", price:1799, orig:3999, discount:55, rating:4.4, reviews:8920,
    assured:true, isNew:false, fewLeft:true, premium:false,
    colors:["#283593","#1a1a1a"], sizes:["28","30","32","34"],
    img:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
    desc:"Advanced stretch denim gives you the perfect fit all day long."
  },
  {
    id:3, brand:"Adidas", title:"Originals Trefoil Hoodie Sweatshirt — Classic Logo Print",
    category:"Sweatshirts", price:2499, orig:4999, discount:50, rating:4.6, reviews:6712,
    assured:true, isNew:true, fewLeft:false, premium:true,
    colors:["#1a1a1a","#ffffff","#e53935"], sizes:["S","M","L","XL","XXL"],
    img:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80",
    desc:"Classic trefoil logo hoodie in soft fleece fabric."
  },
  {
    id:4, brand:"H&M", title:"Slim Fit Stretch Oxford Casual Shirt — White",
    category:"Shirts", price:999, orig:1799, discount:44, rating:4.2, reviews:3450,
    assured:false, isNew:false, fewLeft:false, premium:false,
    colors:["#ffffff","#4a90d9","#f9a825"], sizes:["S","M","L","XL"],
    img:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80",
    desc:"Easy-iron cotton shirt with a relaxed Oxford weave."
  },
  {
    id:5, brand:"Puma", title:"Evostripe Slim Fit Track Trousers — Sporty Jogger",
    category:"Trousers", price:1299, orig:2499, discount:48, rating:4.3, reviews:2178,
    assured:true, isNew:false, fewLeft:true, premium:false,
    colors:["#1a1a1a","#9e9e9e"], sizes:["S","M","L","XL","XXL"],
    img:"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80",
    desc:"Slim-fit track trousers with quick-dry technology."
  },
  {
    id:6, brand:"Zara", title:"Oversized Bomber Jacket — Water-Resistant Shell",
    category:"Jackets", price:3499, orig:6999, discount:50, rating:4.7, reviews:1892,
    assured:true, isNew:true, fewLeft:false, premium:true,
    colors:["#1a1a1a","#8b6040","#283593"], sizes:["XS","S","M","L"],
    img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
    desc:"Relaxed oversized bomber with water-resistant outer shell."
  },
  {
    id:7, brand:"Allen Solly", title:"Regular Fit Chino Shorts — Cotton Blend",
    category:"Shorts", price:699, orig:1299, discount:46, rating:4.0, reviews:4560,
    assured:false, isNew:false, fewLeft:false, premium:false,
    colors:["#E8DCCB","#9e9e9e","#388e3c"], sizes:["Free Size","S","M","L"],
    img:"https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&q=80",
    desc:"Breathable cotton-blend chino shorts for casual days."
  },
  {
    id:8, brand:"UCB", title:"Casual Printed Round Neck T-Shirt — Multicolor",
    category:"T-Shirts", price:549, orig:999, discount:45, rating:3.9, reviews:7890,
    assured:false, isNew:false, fewLeft:true, premium:false,
    colors:["#e53935","#1976d2","#388e3c","#f9a825"], sizes:["S","M","L","XL"],
    img:"https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=400&q=80",
    desc:"Vibrant printed round-neck tee for everyday style."
  },
  {
    id:9, brand:"Nike", title:"Club Fleece Pullover Hoodie — Standard Fit",
    category:"Sweatshirts", price:2999, orig:5499, discount:45, rating:4.8, reviews:9012,
    assured:true, isNew:false, fewLeft:false, premium:true,
    colors:["#9e9e9e","#1a1a1a","#ffffff"], sizes:["S","M","L","XL","XXL"],
    img:"https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=400&q=80",
    desc:"Soft fleece pullover with kangaroo pocket and ribbed hem."
  },
  {
    id:10, brand:"Levi's", title:"Men's Denim Trucker Jacket — Light Wash",
    category:"Jackets", price:2799, orig:5599, discount:50, rating:4.5, reviews:3344,
    assured:true, isNew:false, fewLeft:false, premium:false,
    colors:["#4a90d9","#283593"], sizes:["S","M","L","XL"],
    img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80",
    desc:"Iconic trucker jacket in classic stonewashed denim."
  },
  {
    id:11, brand:"Adidas", title:"Essentials 3-Stripes Tricot Track Pants",
    category:"Trousers", price:1599, orig:2999, discount:47, rating:4.3, reviews:5521,
    assured:true, isNew:true, fewLeft:false, premium:false,
    colors:["#1a1a1a","#283593"], sizes:["S","M","L","XL","XXL"],
    img:"https://images.unsplash.com/photo-1562572159-4efd90232a87?w=400&q=80",
    desc:"Classic 3-stripes track pants in tricot fabric."
  },
  {
    id:12, brand:"H&M", title:"Regular Fit Linen Blend Shirt — Navy Stripe",
    category:"Shirts", price:1299, orig:2299, discount:43, rating:4.1, reviews:2890,
    assured:false, isNew:false, fewLeft:true, premium:false,
    colors:["#283593","#ffffff"], sizes:["S","M","L","XL"],
    img:"https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&q=80",
    desc:"Breathable linen-blend shirt with classic nautical stripe."
  },
  {
    id:13, brand:"Puma", title:"Active Woven Training Shorts — Quick Dry",
    category:"Shorts", price:899, orig:1799, discount:50, rating:4.2, reviews:3120,
    assured:false, isNew:false, fewLeft:false, premium:false,
    colors:["#1a1a1a","#e53935","#1976d2"], sizes:["S","M","L","XL"],
    img:"https://images.unsplash.com/photo-1639818395146-cd44de9e3e60?w=400&q=80",
    desc:"Quick-dry training shorts with zip pockets."
  },
  {
    id:14, brand:"Zara", title:"Slim Fit Smart Chino Trousers — Beige",
    category:"Trousers", price:2199, orig:3999, discount:45, rating:4.4, reviews:1678,
    assured:true, isNew:true, fewLeft:true, premium:true,
    colors:["#E8DCCB","#1a1a1a","#9e9e9e"], sizes:["28","30","32","34","36"],
    img:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80",
    desc:"Tailored chino trousers in stretch cotton twill."
  },
  {
    id:15, brand:"Nike", title:"Air Graphic Tee — Oversized Fit Cotton Jersey",
    category:"T-Shirts", price:1199, orig:2299, discount:48, rating:4.6, reviews:11203,
    assured:true, isNew:false, fewLeft:false, premium:false,
    colors:["#ffffff","#1a1a1a","#e53935"], sizes:["Free Size","S","M","L","XL"],
    img:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80",
    desc:"Boxy oversized fit tee in soft 100% cotton jersey."
  },
  {
    id:16, brand:"Allen Solly", title:"Formal Oxford Button-Down Shirt — White",
    category:"Shirts", price:1499, orig:2799, discount:46, rating:4.3, reviews:4450,
    assured:true, isNew:false, fewLeft:false, premium:false,
    colors:["#ffffff","#4a90d9","#f9a825"], sizes:["S","M","L","XL","XXL"],
    img:"https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&q=80",
    desc:"Crisp Oxford-weave button-down for formal occasions."
  },
  {
    id:17, brand:"UCB", title:"Classic Ethnic Nehru Collar Kurta Set",
    category:"Ethnic", price:1899, orig:3499, discount:46, rating:4.0, reviews:889,
    assured:false, isNew:false, fewLeft:true, premium:false,
    colors:["#A63D32","#1a1a1a","#BFC9B3"], sizes:["S","M","L","XL","Free Size"],
    img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
    desc:"Traditional Nehru collar kurta set in premium fabric."
  },
  {
    id:18, brand:"Adidas", title:"Tiro 21 Training Jacket — Slim Recycled Polyester",
    category:"Jackets", price:3199, orig:5999, discount:47, rating:4.7, reviews:4422,
    assured:true, isNew:true, fewLeft:false, premium:true,
    colors:["#1a1a1a","#283593","#388e3c"], sizes:["S","M","L","XL"],
    img:"https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=400&q=80",
    desc:"Slim-fit training jacket in recycled polyester with side pockets."
  },
  {
    id:19, brand:"Levi's", title:"505 Regular Fit Stretch Jeans — Medium Wash",
    category:"Jeans", price:2299, orig:4299, discount:47, rating:4.5, reviews:6788,
    assured:true, isNew:false, fewLeft:false, premium:false,
    colors:["#4a90d9","#1a1a1a"], sizes:["28","30","32","34","36"],
    img:"https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400&q=80",
    desc:"Regular-fit 505 jeans in comfortable stretch denim."
  },
  {
    id:20, brand:"Puma", title:"Classics T7 Track Jacket — Slim Retro Style",
    category:"Jackets", price:2599, orig:4999, discount:48, rating:4.4, reviews:3340,
    assured:true, isNew:false, fewLeft:true, premium:false,
    colors:["#1a1a1a","#e53935","#ffffff"], sizes:["XS","S","M","L","XL"],
    img:"https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=400&q=80",
    desc:"Retro-inspired T7 track jacket with classic taped seams."
  },
];

/* =============================================
   2. APP STATE
============================================= */
const state = {
  allProducts: PRODUCTS,
  filtered:    [],
  page:        1,
  perPage:     8,
  sort:        "relevance",
  cart:        [],
  wishlist:    new Set(),
  filters: {
    search:"", categories:[], brands:[], ratings:[],
    priceMin:100, priceMax:5000, discount:0,
    newOnly:false, offersOnly:false, premiumOnly:false,
    sizes:[], colors:[],
  },
};

/* =============================================
   3. DOM REFERENCES
============================================= */
const productGrid     = document.getElementById("productGrid");
const skeletonGrid    = document.getElementById("skeletonGrid");
const resultCount     = document.getElementById("resultCount");
const noResults       = document.getElementById("noResults");
const pagination      = document.getElementById("pagination");
const pageNums        = document.getElementById("pageNums");
const pagePrev        = document.getElementById("pagePrev");
const pageNext        = document.getElementById("pageNext");
const cartBadge       = document.getElementById("cartBadge");
const wishBadge       = document.getElementById("wishBadge");
const cartToast       = document.getElementById("cartToast");
const cartToastMsg    = document.getElementById("cartToastMsg");
const globalSearch    = document.getElementById("globalSearch");
const searchClear     = document.getElementById("searchClear");
const clearAllBtn     = document.getElementById("clearAllBtn");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const priceMinDisp    = document.getElementById("priceMinDisplay");
const priceMaxDisp    = document.getElementById("priceMaxDisplay");
const priceRangeMin   = document.getElementById("priceRangeMin");
const priceRangeMax   = document.getElementById("priceRangeMax");
const priceFill       = document.getElementById("priceFill");
const hamburger       = document.getElementById("hamburger");
const mobileMenu      = document.getElementById("mobileMenu");
const mobileOverlay   = document.getElementById("mobileMenuOverlay");
const mobileClose     = document.getElementById("mobileMenuClose");
const brandSearch     = document.getElementById("brandSearch");
const searchSuggestions = document.getElementById("searchSuggestions");
const activeFiltersBar  = document.getElementById("activeFiltersBar");
const afTags            = document.getElementById("afTags");
const afClearAll        = document.getElementById("afClearAll");
const qvOverlay         = document.getElementById("qvOverlay");
const qvClose           = document.getElementById("qvClose");
const filterToggleMobile= document.getElementById("filterToggleMobile");
const sidebar           = document.getElementById("sidebar");

/* =============================================
   4. ANNOUNCEMENT BAR
============================================= */
const announceClose = document.getElementById("announceClose");
if (announceClose) {
  announceClose.addEventListener("click", () => {
    document.getElementById("announcementBar").style.display = "none";
  });
}

/* =============================================
   5. MOBILE MENU
============================================= */
function openMobileMenu() {
  mobileMenu.classList.add("open");
  mobileOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  mobileOverlay.classList.remove("open");
  document.body.style.overflow = "";
}
hamburger.addEventListener("click", openMobileMenu);
mobileOverlay.addEventListener("click", closeMobileMenu);
mobileClose.addEventListener("click", closeMobileMenu);

/* Mobile Filter Toggle */
if (filterToggleMobile) {
  filterToggleMobile.addEventListener("click", () => {
    sidebar.classList.toggle("mobile-open");
    document.body.style.overflow = sidebar.classList.contains("mobile-open") ? "hidden" : "";
  });
}
// Close sidebar when clicking outside on mobile
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 900 && sidebar.classList.contains("mobile-open")) {
    if (!sidebar.contains(e.target) && e.target !== filterToggleMobile) {
      sidebar.classList.remove("mobile-open");
      document.body.style.overflow = "";
    }
  }
});

/* =============================================
   6. FILTER ACCORDION
============================================= */
document.querySelectorAll(".filter-block-header").forEach((header) => {
  const targetId = header.dataset.toggle;
  const body     = document.getElementById(targetId);
  const icon     = header.querySelector(".toggle-icon");
  if (body) body.style.maxHeight = body.scrollHeight + 200 + "px";
  header.addEventListener("click", () => {
    if (!body) return;
    const isOpen = body.style.maxHeight && body.style.maxHeight !== "0px";
    body.style.maxHeight = isOpen ? "0px" : body.scrollHeight + 200 + "px";
    if (icon) icon.classList.toggle("rotated", isOpen);
  });
});

/* =============================================
   7. PRICE RANGE SLIDER
============================================= */
function updatePriceSlider() {
  let min = parseInt(priceRangeMin.value);
  let max = parseInt(priceRangeMax.value);
  if (min > max - 100) { priceRangeMin.value = max - 100; min = max - 100; }
  priceMinDisp.textContent = min.toLocaleString("en-IN");
  priceMaxDisp.textContent = max.toLocaleString("en-IN");
  const pMin = ((min - 100) / 4900) * 100;
  const pMax = ((max - 100) / 4900) * 100;
  priceFill.style.left  = pMin + "%";
  priceFill.style.width = (pMax - pMin) + "%";
  state.filters.priceMin = min;
  state.filters.priceMax = max;
  applyFilters();
}
priceRangeMin.addEventListener("input", updatePriceSlider);
priceRangeMax.addEventListener("input", updatePriceSlider);
updatePriceSlider();

document.querySelectorAll(".price-preset").forEach((r) => {
  r.addEventListener("change", () => {
    const [lo, hi] = r.value.split("-").map(Number);
    priceRangeMin.value = lo || 100;
    priceRangeMax.value = hi;
    state.filters.priceMin = lo || 100;
    state.filters.priceMax = hi;
    updatePriceSlider();
  });
});

/* =============================================
   8. GATHER ALL FILTERS
============================================= */
function gatherFilters() {
  state.filters.categories = [...document.querySelectorAll(".cat-filter:checked")].map(c => c.value);
  state.filters.brands     = [...document.querySelectorAll(".brand-filter:checked")].map(b => b.value);
  state.filters.ratings    = [...document.querySelectorAll(".rating-filter:checked")].map(r => parseInt(r.value));
  const dr                 = document.querySelector(".disc-filter:checked");
  state.filters.discount   = dr ? parseInt(dr.value) : 0;
  state.filters.sizes      = [...document.querySelectorAll(".size-pill.active")].map(s => s.dataset.size);
  state.filters.colors     = [...document.querySelectorAll(".color-swatch-item.active")].map(c => c.dataset.color);
  state.filters.newOnly    = document.getElementById("newArrivalsToggle")?.checked || false;
  state.filters.premiumOnly= document.getElementById("premiumToggle")?.checked || false;
  updateActiveFiltersBar();
}

document.querySelectorAll(".cat-filter, .brand-filter, .rating-filter, .disc-filter").forEach((el) => {
  el.addEventListener("change", () => { gatherFilters(); applyFilters(); });
});

/* Toggle switches */
["newArrivalsToggle","offersToggle","premiumToggle"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("change", () => { gatherFilters(); applyFilters(); });
});

/* =============================================
   9. SIZE PILLS
============================================= */
document.querySelectorAll(".size-pill").forEach(pill => {
  pill.addEventListener("click", () => {
    pill.classList.toggle("active");
    gatherFilters(); applyFilters();
  });
});

/* =============================================
   10. COLOR SWATCHES
============================================= */
document.querySelectorAll(".color-swatch-item").forEach(swatch => {
  swatch.addEventListener("click", () => {
    swatch.classList.toggle("active");
    gatherFilters(); applyFilters();
  });
});

/* =============================================
   11. SHOW MORE (Brand / Fit)
============================================= */
const showMoreBrands = document.getElementById("showMoreBrands");
if (showMoreBrands) {
  showMoreBrands.addEventListener("click", () => {
    showMoreBrands.textContent = "Showing all brands";
    showMoreBrands.style.display = "none";
  });
}
const showMoreFit = document.getElementById("showMoreFit");
if (showMoreFit) {
  showMoreFit.addEventListener("click", () => {
    const more = document.getElementById("fitMoreSection");
    if (more) { more.style.display = "block"; showMoreFit.style.display = "none"; }
  });
}

/* =============================================
   12. ACTIVE FILTERS BAR
============================================= */
function updateActiveFiltersBar() {
  const tags = [];
  state.filters.categories.forEach(v => tags.push({ label: v, key:"cat", value: v }));
  state.filters.brands.forEach(v     => tags.push({ label: v, key:"brand", value: v }));
  state.filters.sizes.forEach(v      => tags.push({ label: "Size: " + v, key:"size", value: v }));
  state.filters.colors.forEach(v     => tags.push({ label: v, key:"color", value: v }));
  if (state.filters.discount > 0) tags.push({ label: state.filters.discount + "%+ off", key:"disc", value: "" });
  if (state.filters.newOnly) tags.push({ label: "New Arrivals", key:"new", value: "" });
  if (state.filters.premiumOnly) tags.push({ label: "Premium", key:"prem", value: "" });

  if (!tags.length) { activeFiltersBar.style.display = "none"; return; }
  activeFiltersBar.style.display = "block";
  afTags.innerHTML = tags.map(t =>
    `<span class="af-tag">${t.label} <button onclick="removeFilter('${t.key}','${t.value}')">✕</button></span>`
  ).join("");
}

function removeFilter(key, value) {
  if (key === "cat") {
    const cb = document.querySelector(`.cat-filter[value="${value}"]`);
    if (cb) cb.checked = false;
  } else if (key === "brand") {
    const cb = document.querySelector(`.brand-filter[value="${value}"]`);
    if (cb) cb.checked = false;
  } else if (key === "size") {
    const btn = document.querySelector(`.size-pill[data-size="${value}"]`);
    if (btn) btn.classList.remove("active");
  } else if (key === "color") {
    const sw = document.querySelector(`.color-swatch-item[data-color="${value}"]`);
    if (sw) sw.classList.remove("active");
  } else if (key === "disc") {
    const r = document.querySelector(".disc-filter:checked");
    if (r) r.checked = false;
  } else if (key === "new") {
    const t = document.getElementById("newArrivalsToggle");
    if (t) t.checked = false;
  } else if (key === "prem") {
    const t = document.getElementById("premiumToggle");
    if (t) t.checked = false;
  }
  gatherFilters(); applyFilters();
}

if (afClearAll) afClearAll.addEventListener("click", clearAllFilters);

/* =============================================
   13. FILTER + SORT LOGIC
============================================= */
function applyFilters() {
  let products = [...state.allProducts];

  if (state.filters.search) {
    const q = state.filters.search.toLowerCase();
    products = products.filter(p =>
      p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }
  if (state.filters.categories.length) {
    products = products.filter(p => state.filters.categories.includes(p.category));
  }
  if (state.filters.brands.length) {
    products = products.filter(p => {
      const norm = p.brand.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
      return state.filters.brands.some(b => { const nb = b.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); return norm.includes(nb) || nb.includes(norm); });
    });
  }
  if (state.filters.ratings.length) {
    const minR = Math.min(...state.filters.ratings);
    products = products.filter(p => p.rating >= minR);
  }
  products = products.filter(p => p.price >= state.filters.priceMin && p.price <= state.filters.priceMax);
  if (state.filters.discount > 0) products = products.filter(p => p.discount >= state.filters.discount);
  if (state.filters.newOnly) products = products.filter(p => p.isNew);
  if (state.filters.premiumOnly) products = products.filter(p => p.premium);
  if (state.filters.sizes.length) {
    products = products.filter(p => p.sizes && state.filters.sizes.some(s => p.sizes.includes(s)));
  }

  switch (state.sort) {
    case "price-asc":  products.sort((a,b) => a.price - b.price); break;
    case "price-desc": products.sort((a,b) => b.price - a.price); break;
    case "rating":     products.sort((a,b) => b.reviews - a.reviews); break;
    case "newest":     products.sort((a,b) => b.isNew - a.isNew); break;
    default:           products.sort((a,b) => b.reviews - a.reviews);
  }

  state.filtered = products;
  state.page     = 1;
  renderProducts();
  renderPagination();
}

/* =============================================
   14. BUILD CARD HTML
============================================= */
function buildCard(p, delay) {
  const wished   = state.wishlist.has(p.id);
  const inrPrice = "₹" + p.price.toLocaleString("en-IN");
  const inrOrig  = "₹" + p.orig.toLocaleString("en-IN");
  let chipBg = "#388e3c";
  if (p.rating < 3) chipBg = "#d32f2f";
  else if (p.rating < 4) chipBg = "#f57c00";

  // Size badges (show up to 4)
  const sizeBadges = (p.sizes || []).slice(0, 4).map(s =>
    `<span class="card-size-badge${s === "Free Size" ? " free-size" : ""}">${s}</span>`
  ).join("") + ((p.sizes || []).length > 4 ? `<span class="card-size-badge">+${p.sizes.length - 4}</span>` : "");

  // Color dots (show up to 4)
  const colorDots = (p.colors || []).slice(0, 4).map(c =>
    `<span class="card-color-dot" style="background:${c};"></span>`
  ).join("") + ((p.colors || []).length > 4 ? `<span class="card-more-colors">+${p.colors.length - 4}</span>` : "");

  // Top badge
  const topBadge = p.fewLeft
    ? `<div class="card-few-left">⚡ Only Few Left</div>`
    : p.premium
    ? `<div class="card-premium-tag"><i class="fas fa-crown"></i> PREMIUM</div>`
    : "";

  return `
    <div class="product-card" data-id="${p.id}" style="animation-delay:${delay}ms"
         onclick="handleCardClick(${p.id})">

      ${topBadge}

      <button class="card-wishlist ${wished ? "wished" : ""}"
              onclick="event.stopPropagation(); toggleWishlist(${p.id})"
              title="${wished ? "Remove from wishlist" : "Wishlist"}">
        <i class="${wished ? "fas" : "far"} fa-heart"></i>
      </button>

      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        ${p.assured ? `<div class="assured-badge"><i class="fas fa-shield-alt"></i> Assured</div>` : ""}
        ${p.isNew   ? `<div class="new-badge">NEW</div>` : ""}
      </div>

      <div class="card-body">
        <div class="card-brand">${p.brand}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-rating-row">
          <span class="rating-chip" style="background:${chipBg}">
            ${p.rating} <i class="fas fa-star"></i>
          </span>
          <span class="rating-count">(${p.reviews.toLocaleString("en-IN")})</span>
        </div>
        <div class="card-price-row">
          <span class="price-current">${inrPrice}</span>
          <span class="price-original">${inrOrig}</span>
          <span class="price-discount">${p.discount}% off</span>
        </div>
        <div class="card-sizes">${sizeBadges}</div>
        <div class="card-color-dots">${colorDots}</div>
        <button class="card-add-btn"
                onclick="event.stopPropagation(); addToCart(${p.id})">
          <i class="fas fa-shopping-cart"></i>&nbsp; Add to Cart
        </button>
        <button class="card-quick-view"
                onclick="event.stopPropagation(); openQuickView(${p.id})">
          <i class="fas fa-eye"></i>&nbsp; Quick View
        </button>
      </div>
    </div>`;
}

/* =============================================
   15. RENDER PRODUCTS
============================================= */
function renderProducts() {
  const { filtered, page, perPage } = state;
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  resultCount.textContent = filtered.length;

  if (!filtered.length) {
    skeletonGrid.style.display = "none";
    productGrid.style.display  = "none";
    productGrid.innerHTML      = "";
    noResults.style.display    = "block";
    pagination.style.display   = "none";
    return;
  }

  noResults.style.display   = "none";
  skeletonGrid.style.display= "none";
  productGrid.style.display = "grid";
  pagination.style.display  = "flex";
  productGrid.innerHTML     = paginated.map((p, i) => buildCard(p, i * 45)).join("");
}

/* =============================================
   16. PAGINATION
============================================= */
function renderPagination() {
  const total = Math.ceil(state.filtered.length / state.perPage);
  pagePrev.disabled = state.page <= 1;
  pageNext.disabled = state.page >= total;
  let html = "";
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= state.page - 2 && i <= state.page + 2)) {
      html += `<button class="page-num ${i === state.page ? "active" : ""}" onclick="goToPage(${i})">${i}</button>`;
    } else if (i === state.page - 3 || i === state.page + 3) {
      html += `<span style="padding:0 0.2rem;color:var(--text-soft)">…</span>`;
    }
  }
  pageNums.innerHTML = html;
}

function goToPage(n) {
  state.page = Math.max(1, Math.min(n, Math.ceil(state.filtered.length / state.perPage)));
  renderProducts();
  renderPagination();
  document.querySelector(".listing-area").scrollIntoView({ behavior:"smooth", block:"start" });
}

pagePrev.addEventListener("click", () => goToPage(state.page - 1));
pageNext.addEventListener("click", () => goToPage(state.page + 1));

/* =============================================
   17. SORT BUTTONS
============================================= */
document.querySelectorAll(".sort-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sort-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.sort = btn.dataset.sort;
    applyFilters();
  });
});

/* =============================================
   18. WISHLIST
============================================= */
function toggleWishlist(id) {
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
    showToast("Removed from wishlist", "far fa-heart");
  } else {
    state.wishlist.add(id);
    const p = PRODUCTS.find(x => x.id === id);
    showToast(`${p?.brand} added to wishlist ♥`, "fas fa-heart");
  }
  wishBadge.textContent = state.wishlist.size;
  const card = document.querySelector(`.product-card[data-id="${id}"]`);
  if (card) {
    const btn = card.querySelector(".card-wishlist");
    const inW = state.wishlist.has(id);
    btn.className = `card-wishlist ${inW ? "wished" : ""}`;
    btn.innerHTML = `<i class="${inW ? "fas" : "far"} fa-heart"></i>`;
  }
}

/* =============================================
   19. ADD TO CART
============================================= */
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const ex = state.cart.find(x => x.id === id);
  if (ex) ex.qty++; else state.cart.push({ ...p, qty: 1 });
  cartBadge.textContent = state.cart.reduce((s,x) => s + x.qty, 0);
  showToast(`${p.brand} added to cart`);
}

function handleCardClick(id) {
  openQuickView(id);
}

/* =============================================
   20. QUICK VIEW MODAL
============================================= */
function openQuickView(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  document.getElementById("qvImage").src = p.img;
  document.getElementById("qvBrand").textContent = p.brand;
  document.getElementById("qvTitle").textContent = p.title;

  const chipBg = p.rating >= 4 ? "#388e3c" : p.rating >= 3 ? "#f57c00" : "#d32f2f";
  document.getElementById("qvRating").innerHTML =
    `<span class="rating-chip" style="background:${chipBg}">${p.rating} <i class="fas fa-star"></i></span>
     <span class="rating-count">(${p.reviews.toLocaleString("en-IN")} reviews)</span>`;

  document.getElementById("qvPrice").innerHTML =
    `<span class="qv-price-current">₹${p.price.toLocaleString("en-IN")}</span>
     <span class="qv-price-orig">₹${p.orig.toLocaleString("en-IN")}</span>
     <span class="qv-price-disc">${p.discount}% OFF</span>`;

  document.getElementById("qvSizes").innerHTML =
    (p.sizes || ["S","M","L","XL"]).map((s,i) =>
      `<button class="qv-size-btn ${i===1?"active":""}" onclick="this.parentNode.querySelectorAll('.qv-size-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">${s}</button>`
    ).join("");

  document.getElementById("qvColors").innerHTML =
    (p.colors || ["#1a1a1a"]).map((c,i) =>
      `<div class="qv-color-dot ${i===0?"active":""}" style="background:${c}" onclick="this.parentNode.querySelectorAll('.qv-color-dot').forEach(d=>d.classList.remove('active'));this.classList.add('active')"></div>`
    ).join("");

  document.getElementById("qvBadges").innerHTML =
    (p.fewLeft ? `<div class="card-few-left">⚡ Only Few Left</div>` : "") +
    (p.premium ? `<div class="card-premium-tag"><i class="fas fa-crown"></i> PREMIUM</div>` : "");

  document.getElementById("qvCartBtn").onclick = () => { addToCart(id); qvOverlay.classList.remove("open"); };
  document.getElementById("qvWishBtn").onclick = () => { toggleWishlist(id); };

  qvOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

qvClose.addEventListener("click", () => { qvOverlay.classList.remove("open"); document.body.style.overflow = ""; });
qvOverlay.addEventListener("click", (e) => { if (e.target === qvOverlay) { qvOverlay.classList.remove("open"); document.body.style.overflow = ""; } });
document.addEventListener("keydown", e => { if (e.key === "Escape") { qvOverlay.classList.remove("open"); document.body.style.overflow = ""; } });

/* =============================================
   21. TOAST
============================================= */
let toastTimer = null;
function showToast(msg, icon = "fas fa-check-circle") {
  clearTimeout(toastTimer);
  cartToast.querySelector("i").className = icon;
  cartToastMsg.textContent = msg;
  cartToast.classList.add("show");
  toastTimer = setTimeout(() => cartToast.classList.remove("show"), 2400);
}

/* =============================================
   22. CLEAR FILTERS
============================================= */
function clearAllFilters() {
  document.querySelectorAll(".cat-filter, .brand-filter, .rating-filter").forEach(el => el.checked = false);
  document.querySelectorAll(".disc-filter, .price-preset").forEach(el => el.checked = false);
  document.querySelectorAll(".size-pill").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".color-swatch-item").forEach(el => el.classList.remove("active"));
  ["newArrivalsToggle","offersToggle","premiumToggle"].forEach(id => {
    const el = document.getElementById(id); if (el) el.checked = false;
  });
  priceRangeMin.value = 100;
  priceRangeMax.value = 5000;
  updatePriceSlider();
  globalSearch.value = "";
  if (searchClear) searchClear.style.display = "none";
  state.filters = { search:"", categories:[], brands:[], ratings:[], priceMin:100, priceMax:5000, discount:0, newOnly:false, offersOnly:false, premiumOnly:false, sizes:[], colors:[] };
  updateActiveFiltersBar();
  applyFilters();
  showToast("All filters cleared", "fas fa-times-circle");
}

clearAllBtn.addEventListener("click", clearAllFilters);
if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", clearAllFilters);

/* =============================================
   23. GLOBAL SEARCH + SUGGESTIONS
============================================= */
const SUGGESTIONS = ["Nike T-Shirts","Adidas Jackets","Levi's Jeans","Women Kurtis","Men Shirts","Puma Track Pants","Zara Blazers","Sweatshirts","Shorts","Ethnic Wear","Formal Shirts","Running Shoes"];

let searchTimer = null;
globalSearch.addEventListener("input", () => {
  const val = globalSearch.value.trim();
  searchClear.style.display = val ? "block" : "none";

  // Suggestions
  if (val.length >= 1) {
    const matches = SUGGESTIONS.filter(s => s.toLowerCase().includes(val.toLowerCase()));
    if (matches.length) {
      searchSuggestions.innerHTML = matches.slice(0,6).map(s =>
        `<div class="suggestion-item" onclick="selectSuggestion('${s}')">
          <i class="fas fa-search"></i> ${s.replace(new RegExp(val,"gi"), m => `<strong>${m}</strong>`)}
        </div>`
      ).join("");
      searchSuggestions.classList.add("open");
    } else {
      searchSuggestions.classList.remove("open");
    }
  } else {
    searchSuggestions.classList.remove("open");
  }

  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => { state.filters.search = val; applyFilters(); }, 300);
});

function selectSuggestion(val) {
  globalSearch.value = val;
  searchSuggestions.classList.remove("open");
  state.filters.search = val;
  applyFilters();
}

document.addEventListener("click", e => {
  if (!e.target.closest("#navSearchWrap")) searchSuggestions.classList.remove("open");
});

searchClear.addEventListener("click", () => {
  globalSearch.value = ""; searchClear.style.display = "none";
  searchSuggestions.classList.remove("open");
  state.filters.search = ""; applyFilters();
});
globalSearch.addEventListener("keydown", e => {
  if (e.key === "Enter") { state.filters.search = globalSearch.value.trim(); searchSuggestions.classList.remove("open"); applyFilters(); }
});

/* =============================================
   24. MEGA-MENU LINK SHORTCUTS
============================================= */
document.querySelectorAll("[data-filter-cat]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const cat = link.dataset.filterCat;
    document.querySelectorAll(".cat-filter").forEach(c => c.checked = false);
    const cb = document.querySelector(`.cat-filter[value="${cat}"]`);
    if (cb) cb.checked = true;
    gatherFilters(); applyFilters();
    showToast(`Showing: ${cat}`, "fas fa-filter");
  });
});
document.querySelectorAll("[data-filter-brand]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const brand = link.dataset.filterBrand;
    document.querySelectorAll(".brand-filter").forEach(b => b.checked = false);
    const cb = document.querySelector(`.brand-filter[value="${brand}"]`);
    if (cb) cb.checked = true;
    gatherFilters(); applyFilters();
    showToast(`Showing: ${brand}`, "fas fa-filter");
  });
});

/* =============================================
   25. BRAND SEARCH IN SIDEBAR
============================================= */
brandSearch.addEventListener("input", () => {
  const q = brandSearch.value.toLowerCase();
  document.querySelectorAll(".brand-filter").forEach(cb => {
    const label = cb.closest("label");
    if (label) label.style.display = label.textContent.toLowerCase().includes(q) ? "" : "none";
  });
});

/* =============================================
   26. GENDER PILLS
============================================= */
document.querySelectorAll(".gender-pill").forEach(pill => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".gender-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    showToast(`Gender: ${pill.dataset.gender}`, "fas fa-filter");
  });
});

/* =============================================
   27. TWO-PANEL MEGA MENU HOVER
============================================= */
document.querySelectorAll(".mega-left-item").forEach(item => {
  item.addEventListener("mouseenter", () => {
    const panelId = item.dataset.panel;
    const parent  = item.closest(".mega-two-panel");
    if (!parent) return;
    parent.querySelectorAll(".mega-left-item").forEach(i => i.classList.remove("active"));
    parent.querySelectorAll(".mega-right-panel").forEach(p => p.classList.remove("active"));
    item.classList.add("active");
    const panel = document.getElementById("panel-" + panelId);
    if (panel) panel.classList.add("active");
  });
});

/* =============================================
   28. SKELETON LOADER INIT
============================================= */
function showSkeleton() {
  skeletonGrid.style.display = "grid";
  productGrid.style.display  = "none";
  pagination.style.display   = "none";
  noResults.style.display    = "none";
}

/* =============================================
   29. INIT
============================================= */
showSkeleton();
setTimeout(() => { applyFilters(); }, 800); // Simulate loading
