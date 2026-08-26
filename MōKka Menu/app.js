/* =====================================================
   MŌKKA CUSTOMER WEBSITE
===================================================== */

const MAPS_URL = "https://maps.app.goo.gl/gdR8w38cnorCzL789"; 
const INSTAGRAM_URL = "https://www.instagram.com/mokka.1995/"; 
const PHONE_NUMBER = "+201000000000";

/* =====================================================
   LANGUAGE & TRANSLATIONS MANAGEMENT
===================================================== */

let currentLang = "ar";

const translations = {
    ar: {
        langBtn: "EN",
        dir: "rtl",
        htmlLang: "ar",
        welcome: "أهلاً بيك في موكا",
        heroDesc: "اكتشف قائمتنا واستمتع باختيار مشروبك المفضل",
        exploreBtn: "استكشف القائمة",
        searchPlaceholder: "ابحث عن مشروب...",
        eyebrowMenu: "MŌKKA MENU",
        categoryTitle: "اختار مزاجك",
        eyebrowPicks: "OUR PICKS",
        picksTitle: "اختيارات موكا",
        visitEyebrow: "VISIT MŌKKA",
        visitTitle: "مستنيينك",
        visitDesc: "تعالَ جرب أجواء موكا ومشروبك المفضل.",
        locationBtn: "الموقع",
        callBtn: "اتصل بنا",
        instaFollow: "تابعنا على Instagram",
        badgeNew: "جديد",
        badgePicks: "اختيار موكا",
        ingredientsTitle: "المكونات",
        noDesc: "لا يوجد وصف حالياً.",
        noResultsTitle: "مفيش نتيجة",
        noResultsDesc: "جرب تبحث باسم مشروب تاني.",
        searchResultsTitle: "نتائج البحث",
        searchResultsEyebrow: "SEARCH RESULTS",
        adminBtn: "لوحة التحكم"
    },
    en: {
        langBtn: "عربي",
        dir: "ltr",
        htmlLang: "en",
        welcome: "Welcome to MōKka",
        heroDesc: "Discover our menu and enjoy your favorite drink",
        exploreBtn: "Explore Menu",
        searchPlaceholder: "Search for a drink...",
        eyebrowMenu: "MŌKKA MENU",
        categoryTitle: "Choose Your Mood",
        eyebrowPicks: "OUR PICKS",
        picksTitle: "MōKka Picks",
        visitEyebrow: "VISIT MŌKKA",
        visitTitle: "We Are Waiting For You",
        visitDesc: "Come experience MōKka vibe and enjoy your favorite drink.",
        locationBtn: "Location",
        callBtn: "Call Us",
        instaFollow: "Follow us on Instagram",
        badgeNew: "New",
        badgePicks: "MōKka Pick",
        ingredientsTitle: "Ingredients",
        noDesc: "No description available at the moment.",
        noResultsTitle: "No Results Found",
        noResultsDesc: "Try searching for another drink name.",
        searchResultsTitle: "Search Results",
        searchResultsEyebrow: "SEARCH RESULTS",
        adminBtn: "Admin Dashboard"
    }
};

/* =====================================================
   LOAD MENU
===================================================== */

function getMenu() {
    const saved = localStorage.getItem("mokka_menu");
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch {
            return typeof INITIAL_MENU !== "undefined" ? INITIAL_MENU : [];
        }
    }
    return typeof INITIAL_MENU !== "undefined" ? INITIAL_MENU : [];
}

let menu = getMenu();

/* =====================================================
   ELEMENTS
===================================================== */

const categoryScroller = document.getElementById("categoryScroller");
const featuredGrid = document.getElementById("featuredGrid");
const menuContainer = document.getElementById("menuContainer");
const searchSection = document.getElementById("searchSection");
const searchInput = document.getElementById("searchInput");
const productModal = document.getElementById("productModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalName = document.getElementById("modalName");
const modalEnglish = document.getElementById("modalEnglish");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalBadges = document.getElementById("modalBadges");
const ingredientsArea = document.getElementById("ingredientsArea");
const modalImage = document.getElementById("modalImage");

/* =====================================================
   CATEGORY ORDER
===================================================== */

const CATEGORY_ORDER = [
    "hot",
    "espresso",
    "cold",
    "juice",
    "smoothie",
    "mocktail",
    "milkshake",
    "soft"
];

/* =====================================================
   ANNOUNCEMENT / OFFER BANNER
===================================================== */
function renderAnnouncement(announcementObj) {
    const banner = document.getElementById("announcementBanner");
    const textElement = document.getElementById("announcementText");

    if (!banner || !textElement) return;

    // Get the message based on current language or fallback to default message string
    let message = "";
    if (typeof announcementObj === "string") {
        message = announcementObj;
    } else if (announcementObj && typeof announcementObj === "object") {
        message = currentLang === "en" 
            ? (announcementObj.en || announcementObj.ar || "")
            : (announcementObj.ar || announcementObj.en || "");
    }

    // Trim spaces
    message = message.trim();

    // If there is text, show banner; otherwise hide it completely
    if (message.length > 0) {
        textElement.textContent = message;
        banner.style.display = "block";
    } else {
        textElement.textContent = "";
        banner.style.display = "none";
    }
}

/* =====================================================
   INITIALIZE
===================================================== */

function init() {
    renderCategories();
    renderFeatured();
    renderMenu();
    setupButtons();
    setupExternalLinks();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

/* =====================================================
   CATEGORIES
===================================================== */

function renderCategories() {
    if (!categoryScroller) return;
    categoryScroller.innerHTML = "";

    const t = translations[currentLang];

    // Individual Category Buttons
    CATEGORY_ORDER.forEach(category => {
        const info = typeof CATEGORY_INFO !== "undefined" && CATEGORY_INFO[category]
            ? CATEGORY_INFO[category]
            : { icon: "fa-mug-hot", ar: category, en: category };

        const hasProducts = menu.some(
            item => item.category === category && item.available
        );

        if (!hasProducts) return;

        const button = document.createElement("button");
        button.className = "category-button";
        button.dataset.category = category;

        const categoryLabel = currentLang === "en" ? (info.en || category) : (info.ar || category);
        const iconClass = info.icon ? escapeHTML(info.icon) : "fa-mug-hot";

        button.innerHTML = `
            <i class="fa-solid ${iconClass}"></i>
            <strong>${escapeHTML(categoryLabel)}</strong>
        `;

        button.addEventListener("click", () => {
            setActiveCategory(button);
            
            const targetSection = document.getElementById(`category-${category}`);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                renderMenu(category);
                menuContainer?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });

        categoryScroller.appendChild(button);
    });
}

/* =====================================================
   ACTIVE CATEGORY
===================================================== */

function setActiveCategory(active) {
    document.querySelectorAll(".category-button").forEach(button => {
        button.classList.remove("active");
    });
    if (active) active.classList.add("active");
}

/* =====================================================
   FEATURED
===================================================== */

function renderFeatured() {
    if (!featuredGrid) return;

    const products = menu.filter(
        item => item.available && item.featured
    );

    const featuredSection = document.getElementById("featuredSection");

    if (!products.length) {
        if (featuredSection) featuredSection.style.display = "none";
        return;
    }

    if (featuredSection) featuredSection.style.display = "";

    featuredGrid.innerHTML = products
        .slice(0, 6)
        .map(createProductCard)
        .join("");

    attachProductEvents(featuredGrid);
}

/* =====================================================
   MENU
===================================================== */

function renderMenu(selectedCategory = null) {
    if (!menuContainer) return;

    let filtered = menu.filter(item => item.available);

    if (selectedCategory && selectedCategory !== "all") {
        filtered = filtered.filter(item => item.category === selectedCategory);
    }

    menuContainer.innerHTML = "";

    CATEGORY_ORDER.forEach(category => {
        const products = filtered.filter(item => item.category === category);
        if (!products.length) return;

        const info = typeof CATEGORY_INFO !== "undefined" && CATEGORY_INFO[category]
            ? CATEGORY_INFO[category] 
            : { icon: "fa-mug-hot", ar: category, en: category };

        const iconMarkup = info.icon && info.icon.startsWith("fa-")
            ? `<i class="fa-solid ${escapeHTML(info.icon)}"></i>`
            : `<i class="fa-solid fa-mug-hot"></i>`;

        const primaryTitle = currentLang === "en" ? (info.en || category) : (info.ar || category);
        const secondaryTitle = currentLang === "en" ? (info.ar || category) : (info.en || category);

        const section = document.createElement("section");
        section.className = "menu-category";
        section.id = `category-${category}`;
        section.dataset.category = category;

        section.innerHTML = `
            <div class="menu-category-heading">
                <div class="category-icon">${iconMarkup}</div>
                <div>
                    <small>${escapeHTML(secondaryTitle)}</small>
                    <h2>${escapeHTML(primaryTitle)}</h2>
                </div>
            </div>
            <div class="menu-grid">
                ${products.map(createMenuCard).join("")}
            </div>
        `;

        menuContainer.appendChild(section);
        attachProductEvents(section);
    });

    initScrollSpy();
}

/* =====================================================
   PRODUCT CARD
===================================================== */

/* =====================================================
   PRODUCT CARD
===================================================== */

function createProductCard(product) {
    const t = translations[currentLang];
    
    // Check if image exists and is not an empty string
    const imageSrc = product.image && product.image.trim() !== "" 
        ? escapeHTML(product.image.trim()) 
        : "assets/logo_Icon.png";
    
    const primaryName = currentLang === "en" ? (product.english || product.name) : product.name;
    const secondaryName = currentLang === "en" ? product.name : (product.english || "");

    return `
        <article
            class="product-card ${!product.available ? "unavailable" : ""}"
            data-product-id="${escapeHTML(product.id)}"
        >
            <div class="product-image">
                <img 
                    src="${imageSrc}" 
                    alt="${escapeHTML(primaryName)}"
                    onerror="this.onerror=null; this.src='assets/logo_Icon.png';"
                >
            </div>
            <div class="product-content">
                ${product.isNew ? `<span class="badge">${escapeHTML(t.badgeNew)}</span>` : ""}
                ${product.featured ? `<span class="badge">${escapeHTML(t.badgePicks)}</span>` : ""}
                <div class="product-top">
                    <div>
                        <div class="product-name">${escapeHTML(primaryName)}</div>
                        <span class="product-english">${escapeHTML(secondaryName)}</span>
                    </div>
                    <div class="product-price">
                        ${escapeHTML(product.price)}
                        <small>EGP</small>
                    </div>
                </div>
            </div>
        </article>
    `;
}

/* =====================================================
   MENU CARD
===================================================== */

function createMenuCard(product) {
    const primaryName = currentLang === "en" ? (product.english || product.name) : product.name;
    const secondaryName = currentLang === "en" ? product.name : (product.english || "");

    return `
        <article
            class="menu-card"
            data-product-id="${escapeHTML(product.id)}"
        >
            <div class="menu-card-info">
                <div class="menu-card-name">${escapeHTML(primaryName)}</div>
                <div class="menu-card-en">${escapeHTML(secondaryName)}</div>
            </div>
            <div class="menu-card-price">
                ${escapeHTML(product.price)}
                <small>EGP</small>
            </div>
        </article>
    `;
}

/* =====================================================
   PRODUCT EVENTS
===================================================== */

function attachProductEvents(container) {
    container.querySelectorAll("[data-product-id]").forEach(card => {
        card.addEventListener("click", () => {
            const product = menu.find(item => String(item.id) === String(card.dataset.productId));
            if (product) openProduct(product);
        });
    });
}

/* =====================================================
   OPEN PRODUCT MODAL
===================================================== */

function openProduct(product) {
    if (!productModal) return;

    const t = translations[currentLang];
    const primaryName = currentLang === "en" ? (product.english || product.name) : product.name;
    const secondaryName = currentLang === "en" ? product.name : (product.english || "");

    if (modalName) modalName.textContent = primaryName;
    if (modalEnglish) modalEnglish.textContent = secondaryName;
    if (modalPrice) modalPrice.innerHTML = `${escapeHTML(product.price)} <small>EGP</small>`;

    if (modalImage) {
        modalImage.src = product.image ? product.image : "assets/logo.png";
        modalImage.alt = primaryName;
        modalImage.onerror = function() {
            this.onerror = null;
            this.src = "assets/logo.png";
        };
    }

    if (modalBadges) {
        modalBadges.innerHTML = "";
        if (product.featured) modalBadges.innerHTML += `<span class="badge">${escapeHTML(t.badgePicks)}</span>`;
        if (product.isNew) modalBadges.innerHTML += `<span class="badge">${escapeHTML(t.badgeNew)}</span>`;
    }

    if (modalDescription) {
        const desc = currentLang === "en" ? (product.descriptionEn || product.description) : product.description;
        modalDescription.textContent = desc || t.noDesc;
    }

    if (ingredientsArea) {
        if (product.ingredients && Array.isArray(product.ingredients) && product.ingredients.length) {
            ingredientsArea.innerHTML = `
                <h3>${escapeHTML(t.ingredientsTitle)}</h3>
                <div class="ingredients-list">
                    ${product.ingredients.map(ing => `<span class="ingredient">${escapeHTML(ing)}</span>`).join("")}
                </div>
            `;
        } else {
            ingredientsArea.innerHTML = "";
        }
    }

    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {
    if (!productModal) return;
    productModal.classList.remove("active");
    document.body.style.overflow = "";
}

modalClose?.addEventListener("click", closeModal);
modalOverlay?.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
});

/* =====================================================
   SEARCH
===================================================== */

document.getElementById("searchButton")?.addEventListener("click", () => {
    searchSection?.classList.add("active");
    searchInput?.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("closeSearch")?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    searchSection?.classList.remove("active");
    renderMenu();
});

searchInput?.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        renderMenu();
        return;
    }

    const results = menu.filter(product => {
        return (
            product.available &&
            (product.name?.toLowerCase().includes(query) ||
             product.english?.toLowerCase().includes(query))
        );
    });

    renderSearchResults(results);
});

/* =====================================================
   SEARCH RESULTS
===================================================== */

function renderSearchResults(results) {
    if (!menuContainer) return;
    menuContainer.innerHTML = "";

    const t = translations[currentLang];

    if (!results.length) {
        menuContainer.innerHTML = `
            <div style="text-align:center; padding:80px 20px;">
                <div style="font-size:40px; margin-bottom:15px; color:#d4af37;">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <h2>${escapeHTML(t.noResultsTitle)}</h2>
                <p style="color:#8b7765; margin-top:8px;">${escapeHTML(t.noResultsDesc)}</p>
            </div>
        `;
        return;
    }

    menuContainer.innerHTML = `
        <section class="menu-category">
            <div class="menu-category-heading">
                <div class="category-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    <small>${escapeHTML(t.searchResultsEyebrow)}</small>
                    <h2>${escapeHTML(t.searchResultsTitle)}</h2>
                </div>
            </div>
            <div class="menu-grid">
                ${results.map(createMenuCard).join("")}
            </div>
        </section>
    `;

    attachProductEvents(menuContainer);
}

/* =====================================================
   TOGGLE LANGUAGE FUNCTION
===================================================== */

function toggleLanguage() {
    currentLang = currentLang === "ar" ? "en" : "ar";
    const t = translations[currentLang];

    // Add this line inside your language toggle function right after updating currentLang
if (window.lastAnnouncementData) {
    renderAnnouncement(window.lastAnnouncementData);
}

    // 1. Update HTML document direction and language attributes
    document.documentElement.lang = t.htmlLang;
    document.documentElement.dir = t.dir;

    // 2. Update Language Button text
    const languageButton = document.getElementById("languageButton");
    if (languageButton) languageButton.textContent = t.langBtn;

    // 3. Update Static Page Text Elements
    const heroTitle = document.querySelector(".hero h1");
    if (heroTitle) heroTitle.textContent = t.welcome;

    const heroDesc = document.querySelector(".hero-description");
    if (heroDesc) heroDesc.textContent = t.heroDesc;

    const exploreBtn = document.getElementById("exploreButton");
    if (exploreBtn) {
        exploreBtn.innerHTML = `${escapeHTML(t.exploreBtn)} <span>↓</span>`;
    }

    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    const categoryEyebrow = document.querySelector(".category-section .eyebrow");
    if (categoryEyebrow) categoryEyebrow.textContent = t.eyebrowMenu;

    const categoryHeading = document.querySelector(".category-section h2");
    if (categoryHeading) categoryHeading.textContent = t.categoryTitle;

    const picksEyebrow = document.querySelector(".featured-section .eyebrow");
    if (picksEyebrow) picksEyebrow.textContent = t.eyebrowPicks;

    const picksHeading = document.querySelector(".featured-section h2");
    if (picksHeading) picksHeading.textContent = t.picksTitle;

    const storeEyebrow = document.querySelector(".store-card .eyebrow");
    if (storeEyebrow) storeEyebrow.textContent = t.visitEyebrow;

    const storeTitle = document.querySelector(".store-card h2");
    if (storeTitle) storeTitle.textContent = t.visitTitle;

    const storeDesc = document.querySelector(".store-card p");
    if (storeDesc) storeDesc.textContent = t.visitDesc;

    const mapsBtn = document.getElementById("mapsButton");
    if (mapsBtn) mapsBtn.innerHTML = `<span>⌖</span> ${escapeHTML(t.locationBtn)}`;

    const telLink = document.querySelector('a[href^="tel:"]');
    if (telLink) telLink.innerHTML = `<span>☎</span> ${escapeHTML(t.callBtn)}`;

    const instaBtn = document.getElementById("instagramButton");
    if (instaBtn) instaBtn.textContent = t.instaFollow;

    const adminBtnText = document.getElementById("adminBtnText");
    if (adminBtnText) adminBtnText.textContent = t.adminBtn;

    // 4. Re-render UI components with new language settings
    renderCategories();
    renderFeatured();
    renderMenu();
}

/* =====================================================
   BUTTONS & EXTERNAL LINKS
===================================================== */

function setupButtons() {
    document.getElementById("exploreButton")?.addEventListener("click", () => {
        menuContainer?.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("languageButton")?.addEventListener("click", toggleLanguage);
}

function setupExternalLinks() {
    const mapsBtn = document.getElementById("mapsButton");
    if (mapsBtn) mapsBtn.href = MAPS_URL;

    const instaBtn = document.getElementById("instagramButton");
    if (instaBtn) instaBtn.href = INSTAGRAM_URL;

    const telLink = document.querySelector('a[href^="tel:"]');
    if (telLink) telLink.href = `tel:${PHONE_NUMBER}`;
}

/* =====================================================
   SCROLL SPY & AUTO-SCROLL
===================================================== */

var scrollObserver = null;

function initScrollSpy() {
    if (scrollObserver) scrollObserver.disconnect();

    const catButtons = document.querySelectorAll(".category-button");
    const sections = document.querySelectorAll(".menu-category");

    if (!catButtons.length || !sections.length) return;

    function centerActiveButton(activeBtn) {
        if (!activeBtn || !categoryScroller) return;
        
        const isRtl = document.documentElement.dir === "rtl";
        const offset = activeBtn.offsetLeft - (categoryScroller.clientWidth / 2) + (activeBtn.clientWidth / 2);

        categoryScroller.scrollTo({
            left: isRtl ? -Math.abs(offset) : offset,
            behavior: "smooth"
        });
    }

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
    };

    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const categoryId = entry.target.dataset.category;

                catButtons.forEach(btn => {
                    if (btn.dataset.category === categoryId) {
                        btn.classList.add("active");
                        centerActiveButton(btn);
                    } else {
                        btn.classList.remove("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => scrollObserver.observe(section));
}

/* =====================================================
   HTML ESCAPE UTILITY
===================================================== */

function escapeHTML(value) {
    if (value === null || value === undefined) return "";
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* =====================================================
   STORAGE EVENT LISTENER
===================================================== */

window.addEventListener("storage", event => {
    if (event.key === "mokka_menu") {
        menu = getMenu();
        renderCategories();
        renderFeatured();
        renderMenu();
    }
});

/* =====================================================
   EXPOSE FOR FIREBASE REAL-TIME UPDATES
===================================================== */

window.updateLiveMenu = function(newItems) {
    if (!Array.isArray(newItems)) return;
    
    menu = newItems.map((item, idx) => ({
        id: item.id || `item_${idx}`,
        ...item,
        available: item.available !== false
    }));

    renderCategories();
    renderFeatured();
    renderMenu();
};