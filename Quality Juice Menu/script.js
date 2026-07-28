        const menuData = [
            {
                name: "مشروبات ساخنة",
                icon: "fa-mug-hot",
                image: "Images/hot.png",
                items: [
                    ["شاي", "10"], ["شاي حليب", "30"], ["شاي أخضر", "15"], ["شاي أخضر بالليمون", "20"], ["شاي كرك", "40"], ["شاي أحمد تي", "15"], ["شاي فواكه", "20"], ["قهوة", "20"], ["قهوة دبل", "35"], ["قهوة أبو عوف", "30"], ["قهوة إسبريسو", "40"], ["قهوة إسبريسو دبل", "50"], ["قهوة فرنساوي", "30"], ["قهوة فرنساوي دبل", "50"], ["قهوة شيكولاتة", "35"], ["قهوة بندق", "35"], ["قهوة بندق كراميل", "45"], ["قهوة فواكه", "35"], ["هوت سيدر", "40"], ["كابتشينو", "30"], ["كابتشينو حليب صافي", "40"], ["كابتشينو ماشين", "60"], ["موكا ماشين", "65"], ["ماتشا حليب", "50"], ["نسكافيه بلاك", "20"], ["نسكافيه حليب", "35"], ["نسكافيه حليب صافي", "45"], ["نسكافيه جولد", "45"], ["نسكافيه 3×1", "25"], ["نسكافيه 3×1 باللبن", "45"], ["كوفي مكس باللبن", "35"], ["هوت شوكليت", "40"], ["هوت شوكليت كادبوري", "50"], ["هوت لوتس", "55"], ["سحلب", "40"], ["سحلب فواكه", "50"], ["سحلب أوريو", "50"]
                ]
            },
            {
                name: "الأعشاب",
                icon: "fa-leaf",
                image: "Images/herbs.png",
                items: [
                    ["قرفة", "20"], ["قرفة بالحليب", "35"], ["قرفة بالجنزبيل", "30"], ["قرفة بالجنزبيل بالحليب", "35"], ["جنزبيل", "20"], ["جنزبيل ليمون", "25"], ["جنزبيل بالحليب", "35"], ["كوكتيل أعشاب", "40"], ["ينسون", "15"], ["نعناع", "15"], ["كركديه", "15"]
                ]
            },
            {
                name: "عصائر شرقية",
                icon: "fa-wine-glass",
                image: "Images/eastern.png",
                items: [
                    ["سوبيا", "M 35 | L 40"], ["سوبيا بيستاشيو", "L 60"], ["سوبيا مانجو", "L 60"], ["دوم سادة", "M 20 | L 25"], ["دوم بالحليب", "M 30 | L 35"], ["كركدية", "M 25 | L 30"], ["كركدية أناناس", "L 50"], ["تمر هندي", "M 25 | L 30"], ["خروب", "M 25 | L 30"], ["قمر الدين", "M 25 | L 30"]
                ]
            },
            {
                name: "ماتشا",
                icon: "fa-glass-water",
                image: "Images/matcha.png",
                items: [
                    ["ماتشا لاتيه", "70"], ["ماتشا فراولة لاتيه", "80"], ["كوفي ماتشا لاتيه", "80"], ["آيس موكا ماتشا", "80"]
                ]
            },
            {
                name: "فروت سالاد",
                icon: "fa-bowl-food",
                items: [
               ["صغير", "60", "Images/salad(s).jpg"],
               ["وسط", "70", "Images/salad(m).jpg"],
               ["كبير", "75", "Images/salad(l).jpg"]
                ]
            },
            {
                name: "قطع كواليتي",
                icon: "fa-cookie-bite",
                image: "Images/pieces.png",
                items: [
                    ["سنيكرز", "150"], ["كيندر", "150"], ["جلاكسي", "150"], ["كيت كات", "150"], ["هوهوز", "90"], ["توينكيز", "90"], ["أوريو", "90"], ["بوريو", "80"], ["كيوي", "100"], ["أناناس", "120"], ["مانجو", "90"], ["بطيخ", "50"], ["فراولة", "50"], ["رمان حب", "60"]
                ],
                // تم نقل الإضافات لتكون خاصة بهذا القسم فقط
                addons: [
                    ["لبن / عسل / فواكه", "10"], 
                    ["ايس كريم + صوص", "10"], 
                    ["كريم شانتي", "10"], 
                    ["حليب مكثف", "10"], 
                    ["لبن خالي من الدسم", "متوفر"], 
                    ["سكر دايت", "متوفر"]
                ]
            },
            {
                name: "زبادو",
                icon: "fa-blender",
                image: "Images/zabado.png",
                items: [
                    ["زبادي لبن وعسل", "M 40 | L 50"], ["زبادي ملعقة واحدة", "L 60"], ["زبادي مانجو", "L 70"], ["زبادي خوخ", "L 60"], ["زبادي توت", "L 80"], ["زبادي رمان حب", "L 80"], ["زبادي كوكتيل", "L 90"]
                ]
            },
            {
                name: "بوبا",
                icon: "fa-circle-dot",
                image: "Images/booba.jpg",
                items: [
                    ["بوبا كوفي", "80"], ["بوبا فراولة", "80"], ["بوبا كراميل", "80"], ["بوبا بلوبيري", "80"], ["بوبا ماتشا", "80"], ["بوبا موهيتو", "60"]
                ]
            },
            {
                name: "عصائر طبيعية",
                icon: "fa-martini-glass-citrus",
                image: "Images/fresh.png",
                items: [
                    ["ليمون", "M 25 | L 30"], ["ليمون بالنعناع", "M 25 | L 30"], ["ليمون باللبن", "M 30 | L 35"], ["موز باللبن", "M 40 | L 45"], ["جوافة باللبن", "M 40 | L 45"], ["بلح باللبن", "M 40 | L 45"], ["فراولة", "M 35 | L 40"], ["أناناس", "M 50 | L 60"], ["كيوي", "M 50 | L 60"], ["بطيخ", "M 35 | L 40"], ["عنب", "M 35 | L 40"], ["كنتالوب", "M 35 | L 40"], ["برتقال", "M 35 | L 40"], ["تفاح", "M 40 | L 45"], ["يوسفي", "M 35 | L 40"], ["رمان", "M 35 | L 40"], ["مانجو", "M 45 | L 50"], ["خوخ", "M 35 | L 40"], ["مشمش", "M 35 | L 40"], ["برقوق", "M 45 | L 50"], ["تين شوكي", "M 35 | L 40"], ["كرز", "M 50 | L 60"], ["جزر", "M 35 | L 40"], ["حرنكش", "M 35 | L 40"], ["أوريو", "M 45 | L 50"], ["بوريو", "M 40 | L 45"], ["آيس شوكليت", "M 40 | L 45"]
                ]
            },
            {
                name: "ميكس فواكه",
                icon: "fa-bowl-food",
                image: "Images/cocktail.png",
                items: [
                    ["فراولة + موز", "60"], ["فراولة + مانجو", "60"], ["فراولة + بوريو", "60"], ["فراولة + جوافة", "60"], ["بلح + موز", "60"], ["بلح + بوريو", "60"], ["كيوي + أناناس", "60"], ["كيوي + مانجو", "60"], ["كيوي + تفاح", "60"], ["كيوي + موز", "60"], ["برتقال + جزر", "60"], ["برتقال + أناناس", "60"], ["برتقال + يوسفى", "60"], ["تين شوكي + مانجو", "60"], ["كوكتيل فواكه", "70"], ["فيتامين سي", "70"], ["كوكتيل ½ ضربة", "80"], ["مانجو بيتش", "70", null, "مانجو + خوخ + أيس كريم"],
                    ["باراديس", "70", null, "مانجو + أيس كريم + فراولة + جوز هند"],
                    ["مبدلي", "70", null, "مانجو + أناناس + أيس كريم + جوز هند"],
                    ["شيكو بنانا", "70", null, "موز + أيس كريم + صوص شيكولاتة"],
                    ["كرمينت", "80", null, "بوريو + مانجو + قطع موز + قطع تفاح"],
                    ["عرايس يمني", "120", null, "مانجو + موز + بلح + حلاوة + عسل + تفاح قطع + مكسرات + جوز هند + زبيب"]
                ],
                // Special sub-section for "الرضعات" inside Fruit Mixes
                specialSection: {
                    title: "الرضعات",
                    icon: "fa-bottle-water",
                    items: [
                        ["رضعة الفيل", "70", null, "سوبيا + فانيليا + شيكولاتة"],
                        ["رضعة القرد", "70", null, "سوبيا + موز + سوداني"],
                        ["رضعة الأسد", "80", null, "ميكس فواكه + أيس كريم + سوبيا"],
                        ["لبن العصفور", "70", null, "سوبيا + أيس كريم + موز"]
        ]
    }
            },
            {
                name: "ميلك شيك",
                icon: "fa-ice-cream",
                image: "Images/milkshake.png",
                items: [
                    ["تويـنكيز", "M 60 | L 70"], ["هافموز", "M 60 | L 70"], ["براونيز", "M 60 | L 70"], ["شوكولاتة", "M 50 | L 60"], ["فانيليا", "M 50 | L 60"], ["بوريو", "M 55 | L 65"], ["مانجو", "M 60 | L 70"], ["فراولة", "M 55 | L 65"], ["موز + فراولة", "M 60 | L 70"], ["أوريو", "M 60 | L 70"], ["كراميل", "M 60 | L 70"], ["لوتس", "M 60 | L 70"], ["بيستاشيو", "M 70 | L 80"], ["زبدة فول سوداني", "M 60 | L 70"], ["ماتشا", "M 70 | L 80"], ["كيندر", "L 150"], ["سنيكرز", "L 150"], ["كيت كات", "L 150"], ["جلاكسي", "L 150"], ["كنافة بيستاشيو", "L 80"], ["تشيز كيك فراولة", "L 80"], ["دولسي دي ليتشي", "L 80"]
                ]
            },
            {
                name: "عالم المكسرات",
                icon: "fa-seedling",
                image: "Images/nuts.webp",
                items: [
                    ["كاجو فانيليا", "90"], ["بندق فانيليا", "90"], ["سوداني فانيليا", "80"], ["ميكس مكسرات فانيليا", "100"]
                ]
            },
            {
                name: "عالم الأفوكادو",
                icon: "fa-leaf",
                image: "Images/avocado.png",
                items: [
                    ["أفوكادو بالعسل", "M 70 | L 80"], ["أفوكادو + مانجو", "M 75 | L 85"], ["أفوكادو + مانجو + كيوي", "M 80 | L 90"], ["أفوكادو + مانجو + موز", "M 80 | L 90"], ["أفوكادو + بلح + موز", "M 80 | L 90"], ["أفوكادو + مكسرات", "L 100"], ["أفوكادو حلاوة", "M 75 | L 85"], ["أفوكادو قشطة", "L 100"], ["أفوكادو مكسرات + قطع فواكه", "L 120"], ["أفوكادو الكبير أوي", "120", null, "أفوكادو + بلح + كيوي قطع + تفاح قطع + أيس كريم + مكسرات + عسل"],["أفوكادو الأسد", "110", null, "أفوكادو + جرجير + حلاوة + كاجو + عسل + لبن"]
                ]
            },
            {
                name: "قهوة باردة",
                icon: "fa-snowflake",
                image: "Images/icedcofee.jpg",
                items: [
                    ["آيس كوفي", "50"], ["وايت موكا", "60"], ["فانيليا لاتيه", "60"], ["سبانش لاتيه", "70"], ["آيس موكا", "60"], ["ماتشا فرابيه", "70"], ["كراميل فرابيه", "60"], ["فانيليا فرابيه", "60"], ["كوكيز موكا فرابيه", "70"]
                ]
            },
            {
                name: "موهيتو وصن شاين",
                icon: "fa-martini-glass-citrus",
                image: "Images/mojito.png",
                items: [
                    ["صن شاين نعناع", "L 40 | جامبو 50"], ["صن شاين بلوبيري", "L 40 | جامبو 50"], ["صن شاين ريد بيري", "L 40 | جامبو 50"], ["صن شاين بلو كراسو", "L 40 | جامبو 50"], ["صن شاين فراولة", "L 40 | جامبو 50"], ["صن شاين شيري كولا", "L 40 | جامبو 50"], ["صن شاين ريد بول", "L 40 | جامبو 50"], ["ريد بول + بطيخ", "L 50 | جامبو 60"], ["صن شاين جوز هند", "L 40 | جامبو 50"], ["صن شاين ميكس بيري", "L 50 | جامبو 60"], ["بلو ليتشي", "L 60 | جامبو 70", null, "باشون فروت + برتقال + مانجو + بلو كرواسو"],["صن سيت", "L 60 | جامبو 70", null, "رمان + برتقال + ليمون"],["جاميكا", "L 60 | جامبو 70", null, "رمان + برتقال + ليمون + أناناس"], ["صن شاين بوبا", "L 60 | جامبو 70"]
                ]
            },
            {
                name: "عالم السموذي",
                icon: "fa-blender",
                image: "Images/smoothie.png",
                items: [
                    ["بلو بيري", "50"], ["ريد بيري", "50"], ["راسبيري", "50"], ["باشون فروت", "50"], ["كراميل", "50"], ["شيري كولا", "50"], ["سموزي مانجو", "60"], ["سموزي فراولة", "50"], ["سموزي بطيخ", "50"], ["سموزي ليمون نعناع", "40"]
                ]
            },
            {
                name: "مشروبات غازية",
                icon: "fa-jar",
                image: "Images/cans.png",
                items: [
                    ["بيبسي / سفن / ميرندا", "25"], ["جولد / فيروز / بريل", "30"], ["ريد بول", "متغير"], ["مونستر", "متغير"], ["تويست", "متغير"], ["ستينج", "متغير"], ["مياه صغيرة", "10"], ["مياه كبيرة", "15"]
                ]
            }
        ];

        const navContainer = document.getElementById('category-nav');
        const menuContainer = document.getElementById('menu-container');

// بناء محتوى المنيو والأزرار
menuData.forEach((category, index) => {
    const catId = `cat-${index}`;
    
    // إضافة زر للتنقل السريع
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.innerHTML = `<i class="fa-solid ${category.icon}"></i> ${category.name}`;
    btn.onclick = () => {
        document.getElementById(catId).scrollIntoView({ behavior: 'smooth' });
        // تغيير لون الزر النشط
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    };
    if(index === 0) btn.classList.add('active');
    navContainer.appendChild(btn);

    // بناء قسم المنيو
    const section = document.createElement('section');
    section.id = catId;
    section.className = 'menu-category';

    // إضافة صورة القسم إذا كانت موجودة
    if (category.image) {
        const img = document.createElement('img');
        img.className = 'category-banner';
        img.src = category.image;
        img.alt = category.name;
        img.loading = 'lazy';
        section.appendChild(img);
    }

    // عنوان القسم
    const title = document.createElement('h2');
    title.className = 'category-title';
    title.innerHTML = `<i class="fa-solid ${category.icon}"></i> ${category.name}`;
    section.appendChild(title);

    // شبكة العناصر الأساسية
    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    category.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-item';

        // Format price
        let priceText = item[1];
        if(!isNaN(priceText.charAt(0)) || priceText.includes('L') || priceText.includes('M')) {
            priceText += ' ج.م'; 
        }

        // Optional item image (item[2])
        const itemImageHtml = item[2] 
            ? `<img src="${item[2]}" alt="${item[0]}" class="item-img">` 
            : '';

        // Optional item description (item[3])
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

    // إضافة الإضافات (Addons) إذا كانت موجودة
    if (category.addons) {
        const addonsContainer = document.createElement('div');
        addonsContainer.className = 'addons-section';
        
        const addonsTitle = document.createElement('h3');
        addonsTitle.className = 'addons-title';
        addonsTitle.innerHTML = `<i class="fa-solid fa-plus-circle"></i> الإضافات المتاحة لهذا القسم:`;
        addonsContainer.appendChild(addonsTitle);

        const addonsGrid = document.createElement('div');
        addonsGrid.className = 'addons-grid';

        category.addons.forEach(addon => {
            let priceText = addon[1];
            if(!isNaN(priceText.charAt(0))) {
                priceText += ' ج.م'; 
            }
            
            addonsGrid.innerHTML += `
                <div class="addon-item">
                    <span>${addon[0]}</span>
                    <span class="price">${priceText}</span>
                </div>
            `;
        });
        addonsContainer.appendChild(addonsGrid);
        section.appendChild(addonsContainer);
    }

    // إضافة القسم الخاص بالرضعات إذا كان موجوداً داخل القسم
    if (category.specialSection) {
        const specialContainer = document.createElement('div');
        specialContainer.className = 'special-section';
        
        const specialTitle = document.createElement('h3');
        specialTitle.className = 'special-title';
        specialTitle.innerHTML = `<i class="fa-solid ${category.specialSection.icon}"></i> ${category.specialSection.title}`;
        specialContainer.appendChild(specialTitle);

        const specialGrid = document.createElement('div');
        specialGrid.className = 'menu-grid';

        category.specialSection.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            
            let priceText = item[1];
            if(!isNaN(priceText.charAt(0))) {
                priceText += ' ج.م'; 
            }

            const itemDescHtml = item[3]
                ? `<span class="item-desc">${item[3]}</span>`
                : '';

            card.innerHTML = `
                <div class="item-details">
                    <span class="item-name">${item[0]}</span>
                    ${itemDescHtml}
                </div>
                <div class="item-price">${priceText}</div>
            `;
            specialGrid.appendChild(card);
        });

        specialContainer.appendChild(specialGrid);
        section.appendChild(specialContainer);
    }

    // إضافة القسم كاملاً إلى الحاوية الرئيسية
    menuContainer.appendChild(section);
});

        // تفعيل الزر المناسب أثناء التمرير (Scroll Spy)
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('.menu-category');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-btn').forEach((btn, index) => {
                btn.classList.remove('active');
                if (`cat-${index}` === current) {
                    btn.classList.add('active');
                    // تمرير شريط التمرير الأفقي للأزرار ليبقى الزر النشط مرئياً
                    btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
            });
        });
        // التحكم في التمرير يميناً ويساراً بالأسهم
const navBar = document.getElementById('category-nav');
const btnRight = document.getElementById('scrollRight');
const btnLeft = document.getElementById('scrollLeft');

btnRight.addEventListener('click', () => {
    navBar.scrollBy({ left: 200, behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
    navBar.scrollBy({ left: -200, behavior: 'smooth' });
});

// إمكانية التمرير الأفقي باستخدام عجلة الماوس (Mouse Wheel)
navBar.addEventListener('wheel', (e) => {
    e.preventDefault();
    navBar.scrollLeft += e.deltaY;
});