// 1. REPLACE THIS WITH YOUR ACTUAL GOOGLE SHEET ID
const SPREADSHEET_ID = '1rqPLIFtqHWfkgOXIt27qm77dhEr7lsQ1gPu2oKqGiow';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json`;

const navContainer = document.getElementById('category-nav');
const menuContainer = document.getElementById('menu-container');

// Guaranteed price renderer
function formatPrice(priceInput) {
  if (priceInput === null || priceInput === undefined) return '';

  let priceStr = String(priceInput).trim();
  if (priceStr === '' || priceStr === 'undefined' || priceStr === 'null') return '';

  // Clean numeric test (handles integer & decimal strings)
  const isNumeric = !isNaN(priceStr) && !isNaN(parseFloat(priceStr));

  // 1. If it's a pure number (e.g. 25, "25", 25.5), append 'ج.م'
  if (isNumeric) {
    return `${priceStr} ج.م`;
  }

  // 2. If it already has text/mixed symbols, return raw string as-is
  return priceStr;
}

// Fetch live data from Google Sheets
async function loadMenuFromGoogleSheets() {
    try {
        const response = await fetch(SHEET_URL);
        const textResponse = await response.text();
        
        // Google returns JSON wrapped in a function call, strip it out
        const jsonData = JSON.parse(textResponse.substring(47, textResponse.length - 2));
        const rows = jsonData.table.rows;

        // Group rows by Category
        const categoriesMap = new Map();

        rows.forEach(row => {
            const cells = row.c;
            const catName = cells[0]?.v || '';
            const catIcon = cells[1]?.v || 'fa-glass-water';
            const catImage = cells[2]?.v || '';
            const itemName = cells[3]?.v || '';
            
            // Skip the header row if spreadsheet contains titles like "Category" or "Item Name"
            if (catName.toLowerCase().includes('category') || itemName.toLowerCase().includes('item')) {
                return;
            }

            // Read formatted string (.f) then raw value (.v)
            let rawPrice = '';
            if (cells[4]) {
                rawPrice = cells[4].f !== undefined ? cells[4].f : 
                           (cells[4].v !== undefined ? cells[4].v : '');
            }

            const itemImg = cells[5]?.v || null;
            const desc = cells[6]?.v || null;

            if (!catName || !itemName) return;

            if (!categoriesMap.has(catName)) {
                categoriesMap.set(catName, {
                    name: catName,
                    icon: catIcon,
                    image: catImage,
                    items: []
                });
            }

            categoriesMap.get(catName).items.push([itemName, rawPrice, itemImg, desc]);
        });

        const menuData = Array.from(categoriesMap.values());
        renderMenu(menuData);

    } catch (error) {
        console.error('Error loading menu from Google Sheets:', error);
        if (menuContainer) {
            menuContainer.innerHTML = '<p style="text-align:center; color:red; padding: 20px;">حدث خطأ في تحميل المنيو. يرجى المحاولة لاحقاً.</p>';
        }
    }
}

function renderMenu(menuData) {
    if (!navContainer || !menuContainer) return;

    navContainer.innerHTML = '';
    menuContainer.innerHTML = '';

    menuData.forEach((category, index) => {
        const catId = `cat-${index}`;
        
        // Check if category is an additions or special section
        const isAddonCategory = category.name.includes('إضافات') || category.name.includes('اضافات');
        const isRadaatCategory = category.name.includes('رضعات') || category.name.includes('الرضعات');

        // Nav Button Label
        const navLabel = isAddonCategory ? 'الإضافات' : category.name;

        // Quick Navigation Button
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.innerHTML = `<i class="fa-solid ${category.icon}"></i> ${navLabel}`;
        btn.onclick = () => {
            document.getElementById(catId)?.scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
        if (index === 0) btn.classList.add('active');
        navContainer.appendChild(btn);

        // Category Section
        const section = document.createElement('section');
        section.id = catId;
        section.className = isAddonCategory ? 'menu-category addons-style' : 'menu-category';

        // Hide banner for addons & رضعات
        if (category.image && !isAddonCategory && !isRadaatCategory) {
            const img = document.createElement('img');
            img.className = 'category-banner';
            img.src = category.image;
            img.alt = category.name;
            img.loading = 'lazy';
            section.appendChild(img);
        }

        // Section Title Output
        const title = document.createElement('h2');
        title.className = 'category-title';
        
        if (isAddonCategory) {
            title.innerHTML = `<i class="fa-solid fa-circle-plus" style="color: #ff7043;"></i> الإضافات المتاحة لهذا القسم:`;
        } else {
            title.innerHTML = `<i class="fa-solid ${category.icon}"></i> ${category.name}`;
        }
        
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        category.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item';

            // Safe price formatting
            let priceText = formatPrice(item[1]);

            const itemImageHtml = (item[2] && !isAddonCategory)
                ? `<img src="${item[2]}" alt="${item[0]}" class="item-img">` 
                : '';

            const itemDescHtml = item[3]
                ? `<span class="item-desc">${item[3]}</span>`
                : '';

            card.innerHTML = `
                ${itemImageHtml}
                <div class="item-details">
                    <span class="item-name">${item[0]}</span>
                    ${itemDescHtml}
                </div>
                <div class="item-price">${priceText}</div>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
        menuContainer.appendChild(section);
    });

    setupScrollSpy();
}

function setupScrollSpy() {
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.menu-category');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-btn').forEach((btn, index) => {
            btn.classList.remove('active');
            if (`cat-${index}` === current) {
                btn.classList.add('active');
                btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        });
    });
}

// Initialize Menu Load
loadMenuFromGoogleSheets();