/**
 * TelphaVastra — app.js
 * Full e-commerce logic: products, filters, cart, wishlist,
 * quick view, search suggestions, spin wheel, mega menu
 */

/* =============================================
   1. PRODUCT DATA — 30 clothing products
   (real-person fashion images via Unsplash)
============================================= */
const PRODUCTS = [
  {
    id:1, brand:"TelphaVastra", title:"Printed Anarkali Kurta Set with Dupatta — Floral Maroon",
    category:"Ethnic", price:1299, orig:2599, discount:50, rating:4.6, reviews:8420,
    assured:true, isNew:false, fewLeft:false, trending:true, premium:false,
    colors:["#A63D32","#1a1a1a","#E8DCCB"], sizes:["S","M","L","XL","Free Size"],
    img1:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&q=80",
    desc:"Beautiful printed Anarkali kurta with matching dupatta. Perfect for festive occasions."
  },
  {
    id:2, brand:"Libas", title:"Embroidered Chiffon Saree with Unstitched Blouse — Royal Blue",
    category:"Sarees", price:1899, orig:3799, discount:50, rating:4.5, reviews:5630,
    assured:true, isNew:false, fewLeft:true, trending:false, premium:true,
    colors:["#1976d2","#A63D32","#1a1a1a"], sizes:["Free Size"],
    img1:"https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80",
    desc:"Exquisite embroidered chiffon saree with delicate border work."
  },
  {
    id:3, brand:"Biba", title:"A-Line Cotton Kurti with Mirror Work — Multicolor",
    category:"Kurtis", price:799, orig:1599, discount:50, rating:4.4, reviews:12800,
    assured:true, isNew:true, fewLeft:false, trending:true, premium:false,
    colors:["#e91e63","#f9a825","#388e3c"], sizes:["S","M","L","XL","XXL","Free Size"],
    img1:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80",
    desc:"A-line cotton kurti adorned with traditional mirror work embroidery."
  },
  {
    id:4, brand:"W for Woman", title:"Straight Fit Bandhani Print Kurta — Mustard Yellow",
    category:"Kurtis", price:999, orig:1999, discount:50, rating:4.3, reviews:7200,
    assured:false, isNew:false, fewLeft:false, trending:false, premium:false,
    colors:["#f9a825","#1a1a1a","#388e3c"], sizes:["S","M","L","XL"],
    img1:"https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&q=80",
    desc:"Straight fit kurta in authentic Bandhani print with contrast piping."
  },
  {
    id:5, brand:"TelphaVastra", title:"Lehenga Choli with Sequin Embroidery — Rose Gold",
    category:"Lehenga", price:3499, orig:6999, discount:50, rating:4.8, reviews:3100,
    assured:true, isNew:false, fewLeft:true, trending:true, premium:true,
    colors:["#c9a688","#A63D32","#283593"], sizes:["S","M","L","XL","Free Size"],
    img1:"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80",
    desc:"Stunning lehenga choli with hand-sewn sequin embroidery for bridal occasions."
  },
  {
    id:6, brand:"Global Desi", title:"Layered Skirt with Gota Patti Work — Turquoise",
    category:"Ethnic Skirts", price:1199, orig:2399, discount:50, rating:4.2, reviews:4500,
    assured:false, isNew:true, fewLeft:false, trending:false, premium:false,
    colors:["#0097a7","#e91e63","#f9a825"], sizes:["S","M","L","XL","Free Size"],
    img1:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80",
    desc:"Flowy layered skirt with intricate Gota Patti work hem detailing."
  },
  {
    id:7, brand:"Sangria", title:"Floral Printed Palazzo Pants with Kurti — Lavender",
    category:"Ethnic", price:1499, orig:2999, discount:50, rating:4.4, reviews:6200,
    assured:true, isNew:false, fewLeft:false, trending:true, premium:false,
    colors:["#9c27b0","#e91e63","#1a1a1a"], sizes:["S","M","L","XL","Free Size"],
    img1:"https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80",
    desc:"Beautiful floral palazzo set with matching short kurti for everyday ethnic wear."
  },
  {
    id:8, brand:"Anouk", title:"Organza Saree with Heavy Border Work — Navy Blue",
    category:"Sarees", price:2499, orig:4999, discount:50, rating:4.7, reviews:2900,
    assured:true, isNew:false, fewLeft:true, trending:false, premium:true,
    colors:["#283593","#A63D32","#1a1a1a"], sizes:["Free Size"],
    img1:"https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80",
    desc:"Premium organza saree with rich zari border work for weddings and ceremonies."
  },
  {
    id:9, brand:"TelphaVastra", title:"Sharara Set with Embroidered Kurti — Sage Green",
    category:"Ethnic", price:2199, orig:4399, discount:50, rating:4.5, reviews:3800,
    assured:true, isNew:true, fewLeft:false, trending:false, premium:true,
    colors:["#BFC9B3","#A63D32","#1a1a1a"], sizes:["S","M","L","XL"],
    img1:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&q=80",
    desc:"Elegant sharara set in sage green with thread embroidery on kurti yoke."
  },
  {
    id:10, brand:"Rangmanch", title:"Batik Print Casual Kurti — Terracotta Orange",
    category:"Kurtis", price:599, orig:1199, discount:50, rating:4.1, reviews:9800,
    assured:false, isNew:false, fewLeft:false, trending:false, premium:false,
    colors:["#ff6f00","#1a1a1a","#A63D32"], sizes:["S","M","L","XL","XXL","Free Size"],
    img1:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80",
    desc:"Casual everyday kurti in earthy terracotta with traditional batik print."
  },
  {
    id:11, brand:"Zara", title:"Flared Midi Dress with Floral Print — Blush Pink",
    category:"Dresses", price:2299, orig:3999, discount:43, rating:4.6, reviews:6700,
    assured:false, isNew:true, fewLeft:false, trending:true, premium:true,
    colors:["#f8bbd0","#fff","#1a1a1a"], sizes:["XS","S","M","L","XL"],
    img1:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80",
    desc:"Feminine floral flared midi dress with smocked waist and flutter sleeves."
  },
  {
    id:12, brand:"H&M", title:"Straight Leg Jeans — Dark Indigo Wash",
    category:"Jeans", price:1499, orig:2999, discount:50, rating:4.3, reviews:14500,
    assured:false, isNew:false, fewLeft:false, trending:false, premium:false,
    colors:["#283593","#1a1a1a","#9e9e9e"], sizes:["28","30","32","34","36"],
    img1:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=500&q=80",
    desc:"Classic straight-leg jeans in dark indigo wash with subtle fading."
  },
  {
    id:13, brand:"TelphaVastra", title:"Dupatta Set with Block Print — Ivory &amp; Rust",
    category:"Dupatta Sets", price:899, orig:1799, discount:50, rating:4.4, reviews:5100,
    assured:true, isNew:false, fewLeft:true, trending:true, premium:false,
    colors:["#E8DCCB","#A63D32","#1a1a1a"], sizes:["Free Size"],
    img1:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    desc:"Handblock printed dupatta set in cotton mulmul with contrast tassels."
  },
  {
    id:14, brand:"Nike", title:"Women's Dri-FIT Training T-Shirt — Black",
    category:"T-Shirts", price:1299, orig:2299, discount:43, rating:4.7, reviews:18900,
    assured:false, isNew:false, fewLeft:false, trending:false, premium:false,
    colors:["#1a1a1a","#fff","#1976d2","#A63D32"], sizes:["XS","S","M","L","XL","XXL"],
    img1:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80",
    desc:"Lightweight Dri-FIT fabric keeps you dry and comfortable during workouts."
  },
  {
    id:15, brand:"Adidas", title:"Originals Hoodie Sweatshirt — Maroon",
    category:"Sweatshirts", price:2499, orig:4999, discount:50, rating:4.8, reviews:11200,
    assured:true, isNew:false, fewLeft:false, trending:true, premium:true,
    colors:["#A63D32","#1a1a1a","#fff"], sizes:["S","M","L","XL","XXL"],
    img1:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=500&q=80",
    desc:"Classic trefoil logo hoodie in brushed fleece with kangaroo pocket."
  },
  {
    id:16, brand:"H&M", title:"Slim Fit Oxford Shirt — White",
    category:"Shirts", price:999, orig:1799, discount:44, rating:4.2, reviews:7800,
    assured:false, isNew:false, fewLeft:false, trending:false, premium:false,
    colors:["#fff","#1976d2","#f9a825"], sizes:["S","M","L","XL"],
    img1:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500&q=80",
    desc:"Crisp Oxford-weave slim fit shirt, easy-iron and wrinkle-resistant."
  },
  {
    id:17, brand:"Zara", title:"Oversized Bomber Jacket — Olive Green",
    category:"Jackets", price:3499, orig:6999, discount:50, rating:4.7, reviews:4200,
    assured:true, isNew:true, fewLeft:true, trending:true, premium:true,
    colors:["#388e3c","#1a1a1a","#E8DCCB"], sizes:["XS","S","M","L"],
    img1:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=500&q=80",
    desc:"Statement oversized bomber jacket in water-resistant shell fabric."
  },
  {
    id:18, brand:"Levi's", title:"Women's 501 Original Fit Jeans — Light Wash",
    category:"Jeans", price:2199, orig:3999, discount:45, rating:4.5, reviews:9300,
    assured:false, isNew:false, fewLeft:false, trending:false, premium:false,
    colors:["#4a90d9","#1a1a1a","#9e9e9e"], sizes:["26","28","30","32","34"],
    img1:"https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80",
    desc:"The iconic 501 original fit in classic light wash denim."
  },
  {
    id:19, brand:"TelphaVastra", title:"Georgette Gown with Embroidered Yoke — Deep Maroon",
    category:"Gowns", price:2999, orig:5999, discount:50, rating:4.6, reviews:3600,
    assured:true, isNew:false, fewLeft:false, trending:true, premium:true,
    colors:["#A63D32","#283593","#1a1a1a"], sizes:["S","M","L","XL","Free Size"],
    img1:"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80",
    desc:"Floor-length georgette gown with intricate hand embroidery at neckline and sleeves."
  },
  {
    id:20, brand:"Biba", title:"Coord Set — Floral Printed Top &amp; Palazzo",
    category:"Ethnic", price:1799, orig:3599, discount:50, rating:4.5, reviews:5400,
    assured:true, isNew:true, fewLeft:false, trending:false, premium:false,
    colors:["#e91e63","#9c27b0","#f9a825"], sizes:["S","M","L","XL","Free Size"],
    img1:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    desc:"Matching coord set with floral print top and wide palazzo pants."
  },
  {
    id:21, brand:"Adidas", title:"Track Jacket — Navy Blue 3-Stripes",
    category:"Jackets", price:2999, orig:5499, discount:45, rating:4.6, reviews:8800,
    assured:true, isNew:false, fewLeft:false, trending:true, premium:false,
    colors:["#283593","#1a1a1a","#fff"], sizes:["XS","S","M","L","XL","XXL"],
    img1:"https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=500&q=80",
    desc:"Classic 3-stripes track jacket in moisture-wicking recycled polyester."
  },
  {
    id:22, brand:"TelphaVastra", title:"Cotton Dupattas 2-Pack — Hand Block Printed",
    category:"Dupattas", price:499, orig:999, discount:50, rating:4.3, reviews:7200,
    assured:false, isNew:false, fewLeft:false, trending:false, premium:false,
    colors:["#A63D32","#BFC9B3","#f9a825"], sizes:["Free Size"],
    img1:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&q=80",
    desc:"Set of 2 cotton mulmul dupattas with hand block print and knotted tassels."
  },
  {
    id:23, brand:"Zara", title:"Cargo Jogger Pants — Stone Beige",
    category:"Trousers", price:2799, orig:4999, discount:44, rating:4.4, reviews:6100,
    assured:false, isNew:true, fewLeft:false, trending:true, premium:false,
    colors:["#E8DCCB","#1a1a1a","#9e9e9e"], sizes:["XS","S","M","L","XL"],
    img1:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1562572159-4efd90232a87?w=500&q=80",
    desc:"Relaxed cargo joggers with multiple pockets in soft cotton twill."
  },
  {
    id:24, brand:"Nike", title:"Club Fleece Pullover Sweatshirt — Maroon",
    category:"Sweatshirts", price:2999, orig:5499, discount:45, rating:4.8, reviews:15600,
    assured:true, isNew:false, fewLeft:false, trending:false, premium:true,
    colors:["#A63D32","#1a1a1a","#9e9e9e"], sizes:["S","M","L","XL","XXL"],
    img1:"https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80",
    desc:"Soft-brushed fleece sweatshirt with ribbed hem and cuffs."
  },
  {
    id:25, brand:"TelphaVastra", title:"Silk Saree with Zari Weave — Kanjeevaram Green",
    category:"Sarees", price:5999, orig:11999, discount:50, rating:4.9, reviews:1900,
    assured:true, isNew:false, fewLeft:true, trending:true, premium:true,
    colors:["#388e3c","#A63D32","#f9a825"], sizes:["Free Size"],
    img1:"https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&q=80",
    desc:"Pure Kanjeevaram silk saree with traditional zari weave and temple border."
  },
  {
    id:26, brand:"H&M", title:"Linen Blend Casual Shorts — Khaki",
    category:"Shorts", price:799, orig:1399, discount:43, rating:4.2, reviews:8900,
    assured:false, isNew:false, fewLeft:false, trending:false, premium:false,
    colors:["#E8DCCB","#1a1a1a","#388e3c"], sizes:["XS","S","M","L","XL"],
    img1:"https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1639818395146-cd44de9e3e60?w=500&q=80",
    desc:"Relaxed linen-cotton blend shorts for warm weather comfort."
  },
  {
    id:27, brand:"Libas", title:"Rayon Kurti with Embroidery — Peacock Blue",
    category:"Kurtis", price:699, orig:1399, discount:50, rating:4.3, reviews:11400,
    assured:true, isNew:false, fewLeft:false, trending:false, premium:false,
    colors:["#0097a7","#A63D32","#e91e63"], sizes:["S","M","L","XL","XXL","Free Size"],
    img1:"https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80",
    desc:"Straight-fit rayon kurti with neck and sleeve embroidery."
  },
  {
    id:28, brand:"Sangria", title:"Maxi Dress with Smocking — Dusty Rose",
    category:"Dresses", price:1799, orig:3299, discount:45, rating:4.5, reviews:7200,
    assured:false, isNew:true, fewLeft:false, trending:true, premium:false,
    colors:["#f8bbd0","#fff","#A63D32"], sizes:["XS","S","M","L","XL"],
    img1:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80",
    desc:"Boho-chic maxi dress with elasticated smocking and flutter sleeves."
  },
  {
    id:29, brand:"TelphaVastra", title:"Chanderi Suit Set with Embroidered Dupatta",
    category:"Ethnic", price:2499, orig:4999, discount:50, rating:4.7, reviews:4100,
    assured:true, isNew:true, fewLeft:false, trending:true, premium:true,
    colors:["#A63D32","#E8DCCB","#BFC9B3"], sizes:["S","M","L","XL","Free Size"],
    img1:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&q=80",
    desc:"Premium Chanderi silk suit set with hand-embroidered dupatta — festival ready."
  },
  {
    id:30, brand:"Levi's", title:"Slim Taper Jeans — Classic Mid Wash",
    category:"Jeans", price:2499, orig:4299, discount:42, rating:4.4, reviews:12600,
    assured:false, isNew:false, fewLeft:false, trending:false, premium:false,
    colors:["#4a90d9","#283593","#1a1a1a"], sizes:["26","28","30","32","34","36"],
    img1:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80",
    img2:"https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=500&q=80",
    desc:"Slim taper fit jeans in classic mid-wash denim with subtle whisker detailing."
  },
];

/* =============================================
   2. APP STATE
============================================= */
const state = {
  allProducts: PRODUCTS,
  filtered: [],
  page: 1,
  perPage: 8,
  sort: "relevance",
  cart: [],
  wishlist: new Set(),
  filters: {
    search: "", categories: [], brands: [], ratings: [],
    priceMin: 100, priceMax: 5000, discount: 0,
    newOnly: false, offersOnly: false, assuredOnly: false,
    sizes: [], colors: [],
  },
};

/* =============================================
   3. DOM REFERENCES
============================================= */
const productGrid    = document.getElementById("productGrid");
const skeletonGrid   = document.getElementById("skeletonGrid");
const resultCount    = document.getElementById("resultCount");
const noResults      = document.getElementById("noResults");
const pagination     = document.getElementById("pagination");
const pageNums       = document.getElementById("pageNums");
const pagePrev       = document.getElementById("pagePrev");
const pageNext       = document.getElementById("pageNext");
const cartBadge      = document.getElementById("cartBadge");
const wishBadge      = document.getElementById("wishBadge");
const cartToast      = document.getElementById("cartToast");
const cartToastMsg   = document.getElementById("cartToastMsg");
const globalSearch   = document.getElementById("globalSearch");
const searchClear    = document.getElementById("searchClear");
const clearAllBtn    = document.getElementById("clearAllBtn");
const resetFiltersBtn= document.getElementById("resetFiltersBtn");
const priceMinDisp   = document.getElementById("priceMinDisp");
const priceMaxDisp   = document.getElementById("priceMaxDisp");
const priceMinRange  = document.getElementById("priceMin");
const priceMaxRange  = document.getElementById("priceMax");
const priceFill      = document.getElementById("priceFill");
const hamburger      = document.getElementById("hamburger");
const mobMenu        = document.getElementById("mobMenu");
const mobOverlay     = document.getElementById("mobOverlay");
const mobClose       = document.getElementById("mobClose");
const brandSearch    = document.getElementById("brandSearch");
const searchSugg     = document.getElementById("searchSuggestions");
const activeFiltersBar = document.getElementById("activeFiltersBar");
const afTags         = document.getElementById("afTags");
const afClearAll     = document.getElementById("afClearAll");
const qvOverlay      = document.getElementById("qvOverlay");
const qvClose        = document.getElementById("qvClose");
const filterMobBtn   = document.getElementById("filterMobBtn");
const sidebar        = document.getElementById("sidebar");

/* =============================================
   4. TOP STRIP CLOSE
============================================= */
const tstripClose = document.getElementById("tstripClose");
if (tstripClose) {
  tstripClose.addEventListener("click", () => {
    const ts = document.getElementById("tstrip");
    if (ts) ts.style.display = "none";
  });
}

/* =============================================
   5. MOBILE MENU
============================================= */
hamburger.addEventListener("click", () => {
  mobMenu.classList.add("open"); mobOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
});
function closeMobMenu() {
  mobMenu.classList.remove("open"); mobOverlay.classList.remove("open");
  document.body.style.overflow = "";
}
mobOverlay.addEventListener("click", closeMobMenu);
mobClose.addEventListener("click", closeMobMenu);

/* Mobile filter drawer */
if (filterMobBtn) {
  filterMobBtn.addEventListener("click", () => {
    sidebar.classList.toggle("mob-open");
    document.body.style.overflow = sidebar.classList.contains("mob-open") ? "hidden" : "";
  });
}
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 900 && sidebar.classList.contains("mob-open")) {
    if (!sidebar.contains(e.target) && e.target !== filterMobBtn && !filterMobBtn.contains(e.target)) {
      sidebar.classList.remove("mob-open");
      document.body.style.overflow = "";
    }
  }
});

/* =============================================
   6. FILTER ACCORDION
============================================= */
document.querySelectorAll(".filter-block-header").forEach(hdr => {
  const tid  = hdr.dataset.toggle;
  const body = document.getElementById(tid);
  const arr  = hdr.querySelector(".toggle-arrow");
  if (body) body.style.maxHeight = body.scrollHeight + 200 + "px";
  hdr.addEventListener("click", () => {
    if (!body) return;
    const open = body.style.maxHeight && body.style.maxHeight !== "0px";
    body.style.maxHeight = open ? "0px" : body.scrollHeight + 200 + "px";
    if (arr) arr.classList.toggle("rotated", open);
  });
});

/* =============================================
   7. PRICE RANGE SLIDER
============================================= */
function updateSlider() {
  let mn = parseInt(priceMinRange.value), mx = parseInt(priceMaxRange.value);
  if (mn > mx - 100) { priceMinRange.value = mx - 100; mn = mx - 100; }
  priceMinDisp.textContent = mn.toLocaleString("en-IN");
  priceMaxDisp.textContent = mx.toLocaleString("en-IN");
  const pMn = ((mn - 100) / 4900) * 100, pMx = ((mx - 100) / 4900) * 100;
  priceFill.style.left = pMn + "%"; priceFill.style.width = (pMx - pMn) + "%";
  state.filters.priceMin = mn; state.filters.priceMax = mx;
  applyFilters();
}
priceMinRange.addEventListener("input", updateSlider);
priceMaxRange.addEventListener("input", updateSlider);
updateSlider();

document.querySelectorAll(".price-preset").forEach(r => {
  r.addEventListener("change", () => {
    const [lo, hi] = r.value.split("-").map(Number);
    priceMinRange.value = lo || 100; priceMaxRange.value = hi;
    state.filters.priceMin = lo || 100; state.filters.priceMax = hi;
    updateSlider();
  });
});

/* =============================================
   8. GATHER FILTERS
============================================= */
function gatherFilters() {
  state.filters.categories = [...document.querySelectorAll(".cat-filter:checked")].map(c => c.value);
  state.filters.brands     = [...document.querySelectorAll(".brand-filter:checked")].map(b => b.value);
  state.filters.ratings    = [...document.querySelectorAll(".rating-filter:checked")].map(r => parseInt(r.value));
  const dr = document.querySelector(".disc-filter:checked");
  state.filters.discount   = dr ? parseInt(dr.value) : 0;
  state.filters.sizes      = [...document.querySelectorAll(".s-pill.active")].map(s => s.dataset.size);
  state.filters.newOnly    = document.getElementById("newArrToggle")?.checked || false;
  state.filters.offersOnly = document.getElementById("offersToggle")?.checked || false;
  state.filters.assuredOnly= document.getElementById("assuredToggle")?.checked || false;
  updateActiveFiltersBar();
}

document.querySelectorAll(".cat-filter,.brand-filter,.rating-filter,.disc-filter").forEach(el =>
  el.addEventListener("change", () => { gatherFilters(); applyFilters(); })
);
["newArrToggle","offersToggle","assuredToggle"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("change", () => { gatherFilters(); applyFilters(); });
});

/* Size pills */
document.querySelectorAll(".s-pill").forEach(p =>
  p.addEventListener("click", () => { p.classList.toggle("active"); gatherFilters(); applyFilters(); })
);

/* Color swatches */
document.querySelectorAll(".col-swatch").forEach(s =>
  s.addEventListener("click", () => {
    s.classList.toggle("active");
    state.filters.colors = [...document.querySelectorAll(".col-swatch.active")].map(c => c.dataset.color);
    updateActiveFiltersBar(); applyFilters();
  })
);

/* Gender pills */
document.querySelectorAll(".g-pill").forEach(p =>
  p.addEventListener("click", () => {
    document.querySelectorAll(".g-pill").forEach(x => x.classList.remove("active"));
    p.classList.add("active");
    showToast("Gender: " + p.dataset.g, "bi-filter");
  })
);

/* Show more brands */
const showMoreBrandsBtn = document.getElementById("showMoreBrands");
if (showMoreBrandsBtn) showMoreBrandsBtn.addEventListener("click", () => {
  showMoreBrandsBtn.textContent = "Showing all brands";
  showMoreBrandsBtn.style.display = "none";
});

/* =============================================
   9. ACTIVE FILTERS BAR
============================================= */
function updateActiveFiltersBar() {
  const tags = [];
  state.filters.categories.forEach(v => tags.push({ label: v, key:"cat", value: v }));
  state.filters.brands.forEach(v => tags.push({ label: v, key:"brand", value: v }));
  state.filters.sizes.forEach(v => tags.push({ label: "Size: " + v, key:"size", value: v }));
  state.filters.colors.forEach(v => tags.push({ label: v, key:"color", value: v }));
  if (state.filters.discount > 0) tags.push({ label: state.filters.discount + "%+ off", key:"disc" });
  if (state.filters.newOnly)    tags.push({ label: "New Arrivals", key:"new" });
  if (state.filters.assuredOnly) tags.push({ label: "Assured", key:"assured" });
  if (!tags.length) { activeFiltersBar.style.display = "none"; return; }
  activeFiltersBar.style.display = "block";
  afTags.innerHTML = tags.map(t =>
    `<span class="af-tag">${t.label} <button onclick="removeFilter('${t.key}','${t.value||''}')">✕</button></span>`
  ).join("");
}

function removeFilter(key, value) {
  if (key === "cat") { const cb = document.querySelector(`.cat-filter[value="${value}"]`); if (cb) cb.checked = false; }
  else if (key === "brand") { const cb = document.querySelector(`.brand-filter[value="${value}"]`); if (cb) cb.checked = false; }
  else if (key === "size") { const btn = document.querySelector(`.s-pill[data-size="${value}"]`); if (btn) btn.classList.remove("active"); }
  else if (key === "color") { const sw = document.querySelector(`.col-swatch[data-color="${value}"]`); if (sw) sw.classList.remove("active"); }
  else if (key === "disc") { const r = document.querySelector(".disc-filter:checked"); if (r) r.checked = false; }
  else if (key === "new") { const t = document.getElementById("newArrToggle"); if (t) t.checked = false; }
  else if (key === "assured") { const t = document.getElementById("assuredToggle"); if (t) t.checked = false; }
  gatherFilters(); applyFilters();
}

if (afClearAll) afClearAll.addEventListener("click", clearAllFilters);

/* =============================================
   10. FILTER + SORT LOGIC
============================================= */
function applyFilters() {
  let products = [...state.allProducts];
  const q = state.filters.search.toLowerCase();
  if (q) products = products.filter(p => p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  if (state.filters.categories.length) products = products.filter(p => state.filters.categories.includes(p.category));
  if (state.filters.brands.length) products = products.filter(p => {
    const nm = p.brand.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return state.filters.brands.some(b => { const nb = b.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); return nm.includes(nb) || nb.includes(nm); });
  });
  if (state.filters.ratings.length) {
    const minR = Math.min(...state.filters.ratings);
    products = products.filter(p => p.rating >= minR);
  }
  products = products.filter(p => p.price >= state.filters.priceMin && p.price <= state.filters.priceMax);
  if (state.filters.discount > 0) products = products.filter(p => p.discount >= state.filters.discount);
  if (state.filters.newOnly) products = products.filter(p => p.isNew);
  if (state.filters.assuredOnly) products = products.filter(p => p.assured);
  if (state.filters.sizes.length) products = products.filter(p => p.sizes && state.filters.sizes.some(s => p.sizes.includes(s)));
  switch (state.sort) {
    case "price-asc":  products.sort((a,b) => a.price - b.price); break;
    case "price-desc": products.sort((a,b) => b.price - a.price); break;
    case "rating":     products.sort((a,b) => b.reviews - a.reviews); break;
    case "newest":     products.sort((a,b) => b.isNew - a.isNew); break;
    default:           products.sort((a,b) => b.reviews - a.reviews);
  }
  state.filtered = products; state.page = 1;
  renderProducts(); renderPagination();
}

/* =============================================
   11. BUILD CARD HTML
============================================= */
function buildCard(p, delay) {
  const wished = state.wishlist.has(p.id);
  const inrPrice = "₹" + p.price.toLocaleString("en-IN");
  const inrOrig  = "₹" + p.orig.toLocaleString("en-IN");
  let chipBg = "#388e3c";
  if (p.rating < 3) chipBg = "#d32f2f";
  else if (p.rating < 4) chipBg = "#f57c00";

  const sizesHtml = (p.sizes || []).slice(0, 4).map(s =>
    `<span class="c-size${s === "Free Size" ? " free" : ""}">${s}</span>`
  ).join("") + ((p.sizes || []).length > 4 ? `<span class="c-size">+${p.sizes.length - 4}</span>` : "");

  const colorsHtml = (p.colors || []).slice(0, 3).map(c =>
    `<span class="c-dot" style="background:${c};"></span>`
  ).join("") + ((p.colors || []).length > 3 ? `<span class="c-more">+${p.colors.length - 3}</span>` : "");

  const badges = [
    p.fewLeft  ? `<span class="badge badge-few"><i class="bi bi-lightning-fill"></i> Few Left</span>` : "",
    p.trending ? `<span class="badge badge-trending"><i class="bi bi-fire"></i> Trending</span>` : "",
    p.isNew    ? `<span class="badge badge-new">New</span>` : "",
    p.discount >= 50 ? `<span class="badge badge-sale">${p.discount}% OFF</span>` : "",
    p.assured  ? `<span class="badge badge-assured"><i class="bi bi-shield-check"></i> Assured</span>` : "",
  ].filter(Boolean).slice(0, 2).join("");

  return `
  <div class="product-card" data-id="${p.id}" style="animation-delay:${delay}ms">
    <div class="card-top-badge">${badges}</div>
    <button class="card-wish-btn ${wished ? "wished" : ""}"
            onclick="toggleWishlist(${p.id})" title="Wishlist">
      <i class="bi bi-heart${wished ? "-fill" : ""}"></i>
    </button>
    <div class="card-img-wrap">
      <img class="card-img-primary"   src="${p.img1}" alt="${p.title}" loading="lazy"/>
      <img class="card-img-secondary" src="${p.img2}" alt="${p.title}" loading="lazy"/>
      <div class="card-overlay">
        <button class="card-add-btn" onclick="addToCart(${p.id}, event)">
          <i class="bi bi-bag-plus"></i> Add to Cart
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="card-brand">${p.brand}</div>
      <div class="card-title">${p.title}</div>
      <div class="card-rating-row">
        <span class="rating-chip" style="background:${chipBg}">
          ${p.rating} <i class="bi bi-star-fill"></i>
        </span>
        <span class="rating-count">(${p.reviews.toLocaleString("en-IN")})</span>
      </div>
      <div class="card-price-row">
        <span class="price-now">${inrPrice}</span>
        <span class="price-orig">${inrOrig}</span>
        <span class="price-off">${p.discount}% off</span>
      </div>
      <div class="card-sizes">${sizesHtml}</div>
      <div class="card-colors">${colorsHtml}</div>
    </div>
    <button class="card-view-similar" onclick="openQuickView(${p.id})">
      <i class="bi bi-grid-3x3-gap"></i> View Similar
    </button>
  </div>`;
}

/* =============================================
   12. RENDER PRODUCTS
============================================= */
function renderProducts() {
  const { filtered, page, perPage } = state;
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  resultCount.textContent = filtered.length;
  if (!filtered.length) {
    skeletonGrid.style.display = "none"; productGrid.style.display = "none";
    noResults.style.display = "block"; pagination.style.display = "none"; return;
  }
  noResults.style.display = "none"; skeletonGrid.style.display = "none";
  productGrid.style.display = "grid"; pagination.style.display = "flex";
  productGrid.innerHTML = paginated.map((p, i) => buildCard(p, i * 45)).join("");
}

/* =============================================
   13. PAGINATION
============================================= */
function renderPagination() {
  const total = Math.ceil(state.filtered.length / state.perPage);
  pagePrev.disabled = state.page <= 1; pageNext.disabled = state.page >= total;
  let html = "";
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= state.page - 2 && i <= state.page + 2)) {
      html += `<button class="pg-num ${i === state.page ? "active" : ""}" onclick="goToPage(${i})">${i}</button>`;
    } else if (i === state.page - 3 || i === state.page + 3) {
      html += `<span style="padding:0 .2rem;color:var(--text-soft)">…</span>`;
    }
  }
  pageNums.innerHTML = html;
}
function goToPage(n) {
  state.page = Math.max(1, Math.min(n, Math.ceil(state.filtered.length / state.perPage)));
  renderProducts(); renderPagination();
  document.querySelector(".listing-area")?.scrollIntoView({ behavior:"smooth", block:"start" });
}
pagePrev.addEventListener("click", () => goToPage(state.page - 1));
pageNext.addEventListener("click", () => goToPage(state.page + 1));

/* =============================================
   14. SORT
============================================= */
document.querySelectorAll(".sort-btn").forEach(btn =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sort-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active"); state.sort = btn.dataset.sort; applyFilters();
  })
);

/* =============================================
   15. CART
============================================= */
function addToCart(id, event) {
  if (event) { event.stopPropagation(); addRipple(event.currentTarget, event); }
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const ex = state.cart.find(x => x.id === id);
  if (ex) ex.qty++; else state.cart.push({ ...p, qty: 1 });
  cartBadge.textContent = state.cart.reduce((s, x) => s + x.qty, 0);
  showToast(p.brand + " — " + p.category + " added to cart!");
}

/* =============================================
   16. WISHLIST
============================================= */
function toggleWishlist(id) {
  if (state.wishlist.has(id)) { state.wishlist.delete(id); showToast("Removed from wishlist", "bi-heart"); }
  else { state.wishlist.add(id); const p = PRODUCTS.find(x => x.id === id); showToast((p?.brand || "") + " added to wishlist ♥", "bi-heart-fill"); }
  wishBadge.textContent = state.wishlist.size;
  const card = document.querySelector(`.product-card[data-id="${id}"]`);
  if (card) {
    const btn = card.querySelector(".card-wish-btn");
    const inW = state.wishlist.has(id);
    btn.className = "card-wish-btn" + (inW ? " wished" : "");
    btn.innerHTML = `<i class="bi bi-heart${inW ? "-fill" : ""}"></i>`;
  }
}

/* =============================================
   17. RIPPLE EFFECT
============================================= */
function addRipple(btn, e) {
  const rect = btn.getBoundingClientRect();
  const r = document.createElement("span");
  r.className = "ripple";
  r.style.left = (e.clientX - rect.left) + "px";
  r.style.top  = (e.clientY - rect.top)  + "px";
  btn.appendChild(r);
  setTimeout(() => r.remove(), 700);
}

/* =============================================
   18. TOAST
============================================= */
let toastTimer = null;
function showToast(msg, icon = "bi-check-circle-fill") {
  clearTimeout(toastTimer);
  cartToast.querySelector("i").className = "bi " + icon;
  cartToastMsg.textContent = msg;
  cartToast.classList.add("show");
  toastTimer = setTimeout(() => cartToast.classList.remove("show"), 2500);
}

/* =============================================
   19. CLEAR FILTERS
============================================= */
function clearAllFilters() {
  document.querySelectorAll(".cat-filter,.brand-filter,.rating-filter,.disc-filter,.price-preset").forEach(el => el.checked = false);
  document.querySelectorAll(".s-pill,.col-swatch").forEach(el => el.classList.remove("active"));
  ["newArrToggle","offersToggle","assuredToggle"].forEach(id => { const el = document.getElementById(id); if (el) el.checked = false; });
  priceMinRange.value = 100; priceMaxRange.value = 5000; updateSlider();
  globalSearch.value = ""; if (searchClear) searchClear.style.display = "none";
  searchSugg.classList.remove("open");
  state.filters = { search:"", categories:[], brands:[], ratings:[], priceMin:100, priceMax:5000, discount:0, newOnly:false, offersOnly:false, assuredOnly:false, sizes:[], colors:[] };
  updateActiveFiltersBar(); applyFilters();
  showToast("All filters cleared", "bi-x-circle-fill");
}
clearAllBtn.addEventListener("click", clearAllFilters);
if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", clearAllFilters);

/* =============================================
   20. GLOBAL SEARCH + SUGGESTIONS
============================================= */
const SUGGS = ["Anarkali Kurta","Silk Saree","Lehenga Choli","Floral Dress","Palazzo Pants","Denim Jeans","Casual Shirt","Sweatshirt","Track Jacket","Dupattas","Cotton Kurti","Embroidered Saree","Block Print","Georgette Gown"];
let searchTimer = null;
globalSearch.addEventListener("input", () => {
  const val = globalSearch.value.trim();
  if (searchClear) searchClear.style.display = val ? "block" : "none";
  if (val.length >= 1) {
    const matches = SUGGS.filter(s => s.toLowerCase().includes(val.toLowerCase()));
    if (matches.length) {
      searchSugg.innerHTML = matches.slice(0, 6).map(s =>
        `<div class="sugg-item" onclick="selectSugg('${s}')"><i class="bi bi-search"></i> ${s.replace(new RegExp(val,"gi"), m => `<strong>${m}</strong>`)}</div>`
      ).join("");
      searchSugg.classList.add("open");
    } else { searchSugg.classList.remove("open"); }
  } else { searchSugg.classList.remove("open"); }
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => { state.filters.search = val; applyFilters(); }, 300);
});
function selectSugg(val) {
  globalSearch.value = val; searchSugg.classList.remove("open");
  state.filters.search = val; applyFilters();
}
document.addEventListener("click", e => {
  if (!e.target.closest("#navSearchWrap")) searchSugg.classList.remove("open");
});
if (searchClear) searchClear.addEventListener("click", () => {
  globalSearch.value = ""; searchClear.style.display = "none";
  searchSugg.classList.remove("open"); state.filters.search = ""; applyFilters();
});
globalSearch.addEventListener("keydown", e => {
  if (e.key === "Enter") { state.filters.search = globalSearch.value.trim(); searchSugg.classList.remove("open"); applyFilters(); }
});

/* =============================================
   21. MEGA MENU — TWO PANEL HOVER
============================================= */
document.querySelectorAll(".mega-left-item").forEach(item => {
  item.addEventListener("mouseenter", () => {
    const panelId = item.dataset.panel;
    const parent  = item.closest(".mega-two-panel");
    if (!parent) return;
    parent.querySelectorAll(".mega-left-item").forEach(i => i.classList.remove("active"));
    parent.querySelectorAll(".mega-panel").forEach(p => p.classList.remove("active"));
    item.classList.add("active");
    const panel = document.getElementById("panel-" + panelId);
    if (panel) panel.classList.add("active");
  });
});

/* Mega-menu link shortcuts → apply category filter */
document.querySelectorAll("[data-fc]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const cat = link.dataset.fc;
    document.querySelectorAll(".cat-filter").forEach(c => c.checked = false);
    const cb = document.querySelector(`.cat-filter[value="${cat}"]`);
    if (cb) cb.checked = true;
    gatherFilters(); applyFilters();
    showToast("Showing: " + cat, "bi-funnel-fill");
  });
});

/* =============================================
   22. QUICK VIEW MODAL
============================================= */
function openQuickView(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById("qvImg").src = p.img1;
  document.getElementById("qvBrand").textContent = p.brand;
  document.getElementById("qvTitle").textContent = p.title;
  const chipBg = p.rating >= 4 ? "#388e3c" : p.rating >= 3 ? "#f57c00" : "#d32f2f";
  document.getElementById("qvRating").innerHTML =
    `<span class="rating-chip" style="background:${chipBg}">${p.rating} <i class="bi bi-star-fill"></i></span>
     <span class="rating-count">(${p.reviews.toLocaleString("en-IN")} reviews)</span>`;
  document.getElementById("qvPrice").innerHTML =
    `<span class="qv-price-now">₹${p.price.toLocaleString("en-IN")}</span>
     <span class="qv-price-orig">₹${p.orig.toLocaleString("en-IN")}</span>
     <span class="qv-price-off">${p.discount}% OFF</span>`;
  document.getElementById("qvSizes").innerHTML =
    (p.sizes || ["S","M","L","XL"]).map((s,i) =>
      `<button class="qv-size-btn ${i===1?"active":""}"
               onclick="this.parentNode.querySelectorAll('.qv-size-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">${s}</button>`
    ).join("");
  document.getElementById("qvColors").innerHTML =
    (p.colors || ["#1a1a1a"]).map((c,i) =>
      `<div class="qv-col-dot ${i===0?"active":""}" style="background:${c}"
            onclick="this.parentNode.querySelectorAll('.qv-col-dot').forEach(d=>d.classList.remove('active'));this.classList.add('active')"></div>`
    ).join("");
  const badges = [p.fewLeft ? `<span class="badge badge-few"><i class="bi bi-lightning-fill"></i> Few Left</span>` : "",
    p.trending ? `<span class="badge badge-trending">Trending</span>` : "", p.isNew ? `<span class="badge badge-new">New</span>` : ""].filter(Boolean).join("");
  document.getElementById("qvTopBadge").innerHTML = badges;
  document.getElementById("qvCartBtn").onclick = (e) => { addToCart(id, e); qvOverlay.classList.remove("open"); document.body.style.overflow = ""; };
  document.getElementById("qvWishBtn").onclick = () => toggleWishlist(id);
  qvOverlay.classList.add("open"); document.body.style.overflow = "hidden";
}
qvClose.addEventListener("click", () => { qvOverlay.classList.remove("open"); document.body.style.overflow = ""; });
qvOverlay.addEventListener("click", e => { if (e.target === qvOverlay) { qvOverlay.classList.remove("open"); document.body.style.overflow = ""; } });
document.addEventListener("keydown", e => { if (e.key === "Escape") { qvOverlay.classList.remove("open"); document.body.style.overflow = ""; } });

/* =============================================
   23. BRAND SEARCH IN SIDEBAR
============================================= */
brandSearch.addEventListener("input", () => {
  const q = brandSearch.value.toLowerCase();
  document.querySelectorAll(".brand-filter").forEach(cb => {
    const lbl = cb.closest("label");
    if (lbl) lbl.style.display = lbl.textContent.toLowerCase().includes(q) ? "" : "none";
  });
});

/* =============================================
   24. SCROLL — NAVBAR EFFECT
============================================= */
window.addEventListener("scroll", () => {
  const nav = document.getElementById("topNavbar");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

/* =============================================
   25. WHEEL / SPIN COUPON (original kept)
============================================= */
const cups = ["10% OFF","15% OFF","FREE SHIP","5% OFF","20% OFF","LUCKY!","₹100 OFF","TRY AGAIN"];
const cols = ["#9b3a22","#8b5cf6","#0ea5e9","#ec4899","#10b981","#f59e0b","#ef4444","#BFC9B3"];
let spinning = false, curA = 0;

function drawW() {
  const cv = document.getElementById("wCv"); if (!cv) return;
  const x = cv.getContext("2d"), cx=110, cy=110, r=104, sl=(2*Math.PI)/8;
  x.clearRect(0,0,220,220);
  cups.forEach((l,i) => {
    const s=i*sl+curA, e=s+sl;
    x.beginPath(); x.moveTo(cx,cy); x.arc(cx,cy,r,s,e); x.closePath();
    x.fillStyle=cols[i]; x.fill();
    x.strokeStyle="rgba(255,255,255,.5)"; x.lineWidth=1.5; x.stroke();
    x.save(); x.translate(cx,cy); x.rotate(s+sl/2);
    x.textAlign="right"; x.fillStyle="#fff";
    x.font="bold 11px Montserrat,sans-serif"; x.fillText(l,r-8,4); x.restore();
  });
  x.beginPath(); x.arc(cx,cy,22,0,2*Math.PI); x.fillStyle="#fff"; x.fill();
  x.beginPath(); x.arc(cx,cy,16,0,2*Math.PI);
  const g=x.createRadialGradient(cx,cy,2,cx,cy,16);
  g.addColorStop(0,"#9b3a22"); g.addColorStop(1,"#5b1e10");
  x.fillStyle=g; x.fill();
}
function openW() { document.getElementById("wOv").classList.add("on"); drawW(); }
function closeW() {
  document.getElementById("wOv").classList.remove("on");
  document.getElementById("cRes").textContent = "";
  document.getElementById("sBtn").disabled = false; spinning = false;
}
function doSpin() {
  if (spinning) return; spinning = true;
  document.getElementById("sBtn").disabled = true;
  document.getElementById("cRes").textContent = "";
  const extra = 360*(5+Math.floor(Math.random()*5)), land = Math.random()*360;
  const total = (extra+land)*Math.PI/180;
  const dur=4200, st=performance.now(), sa=curA;
  function af(now) {
    const el=now-st, p=Math.min(el/dur,1), e=1-Math.pow(1-p,4);
    curA=sa+total*e; drawW();
    if (p<1) { requestAnimationFrame(af); }
    else {
      spinning=false;
      const norm=((2*Math.PI)-(curA%(2*Math.PI)));
      const idx=Math.floor(norm/((2*Math.PI)/8))%8;
      const w=cups[idx];
      document.getElementById("cRes").textContent = w==="TRY AGAIN" ? "Better luck next time!" : "You won: "+w+"!";
      document.getElementById("sBtn").disabled = false;
    }
  }
  requestAnimationFrame(af);
}

/* =============================================
   26. INIT — Skeleton → Products
============================================= */
function showSkeleton() {
  skeletonGrid.style.display = "grid";
  productGrid.style.display = "none";
  pagination.style.display = "none";
  noResults.style.display = "none";
}

showSkeleton();
setTimeout(() => { applyFilters(); }, 900);
