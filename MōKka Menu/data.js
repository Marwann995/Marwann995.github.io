// data.js

const INITIAL_MENU = [
    // =========================
    // HOT DRINKS
    // =========================

    {
        id: "hot-tea",
        name: "شاي",
        english: "Tea",
        category: "hot",
        price: 15,
        available: true,
        featured: false,
        isNew: false,
        description: "شاي أسود ساخن فاخر",
        ingredients: ["شاي", "ماء مغلّي"],
        image: "assets/items/hot-tea.jpg"
    },
    {
        id: "plain-coffee",
        name: "قهوة سادة",
        english: "Turkish Coffee",
        category: "hot",
        price: 20,
        available: true,
        featured: false,
        isNew: false,
        description: "قهوة تركية كلاسيكية بدون سكر",
        ingredients: ["بن تركي"],
        image: "assets/items/plain-coffee.png"
    },
    {
        id: "double-coffee",
        name: "قهوة دبل",
        english: "Double Coffee",
        category: "hot",
        price: 25,
        available: true,
        featured: false,
        isNew: false,
        description: "جرعة مضاعفة من القهوة التركية الغنية",
        ingredients: ["بن تركي دبل"],
        image: "assets/items/double-coffee.png"
    },
    {
        id: "french-coffee",
        name: "قهوة فرنساوي",
        english: "French Coffee",
        category: "hot",
        price: 30,
        available: true,
        featured: false,
        isNew: false,
        description: "مزاج القهوة التركية الممزوجة بالحليب المبتكر",
        ingredients: ["بن تركي", "حليب"],
        image: "assets/items/french-coffee.png"
    },
    {
        id: "hazelnut-coffee",
        name: "قهوة بندق",
        english: "Hazelnut Coffee",
        category: "hot",
        price: 30,
        available: true,
        featured: false,
        isNew: false,
        description: "قهوة تركية بنكهة البندق الغنية",
        ingredients: ["بن بنكهة البندق"],
        image: "assets/items/hazelnut-coffee.png"
    },
    {
        id: "hot-drink",
        name: "مشروب ساخن",
        english: "Hot Drink",
        category: "hot",
        price: 15,
        available: true,
        featured: false,
        isNew: false,
        description: "مشروبات أعشاب دافئة حسب اختيارك",
        ingredients: [],
        image: "assets/items/hot-drink.png"
    },
    {
        id: "flavor-hot",
        name: "إضافة فليفر",
        english: "Flavor Add-on",
        category: "hot",
        price: 10,
        available: true,
        featured: false,
        isNew: false,
        description: "إضافة سيروب نكهة إضافي لمشروبك الساخن",
        ingredients: [],
        image: "assets/items/flavor-addon.png"
    },

    // =========================
    // ESPRESSO
    // =========================

    {
        id: "espresso-single",
        name: "إسبريسو سنجل",
        english: "Single Espresso",
        category: "espresso",
        price: 25,
        available: true,
        featured: false,
        isNew: false,
        description: "جرعة إسبريسو مركزة ومركزية",
        ingredients: ["إسبريسو"],
        image: "assets/items/espresso-single.png"
    },
    {
        id: "espresso-double",
        name: "إسبريسو دبل",
        english: "Double Espresso",
        category: "espresso",
        price: 35,
        available: true,
        featured: false,
        isNew: false,
        description: "جرعة مضاعفة من الإسبريسو القوي",
        ingredients: ["دبل إسبريسو"],
        image: "assets/items/espresso-double.png"
    },
    {
        id: "americano",
        name: "أمريكانو",
        english: "Americano",
        category: "espresso",
        price: 40,
        available: true,
        featured: false,
        isNew: false,
        description: "إسبريسو خفيف مخفف بالماء الساخن",
        ingredients: ["إسبريسو", "ماء ساخن"],
        image: "assets/items/americano.png"
    },
    {
        id: "cortado",
        name: "كوترادو",
        english: "Cotrado",
        category: "espresso",
        price: 45,
        available: true,
        featured: false,
        isNew: false,
        description: "كميات متساوية من الإسبريسو والحليب المبخر",
        ingredients: ["إسبريسو", "حليب مبخر"],
        image: "assets/items/cortado.png"
    },
    {
        id: "flat-white",
        name: "فلات وايت",
        english: "Flat White",
        category: "espresso",
        price: 80,
        available: true,
        featured: false,
        isNew: false,
        description: "إسبريسو ناعم مع رغوة حليب دقيقة",
        ingredients: ["إسبريسو", "حليب مخفوق"],
        image: "assets/items/flat-white.png"
    },
    {
        id: "cappuccino",
        name: "كابتشينو",
        english: "Cappuccino",
        category: "espresso",
        price: 80,
        available: true,
        featured: true,
        isNew: false,
        description: "مزيج متوازن من الإسبريسو، الحليب، ورغوة غنية",
        ingredients: ["إسبريسو", "حليب", "رغوة غنية"],
        image: "assets/items/cappuccino.png"
    },
    {
        id: "latte",
        name: "لاتيه",
        english: "Latte",
        category: "espresso",
        price: 80,
        available: true,
        featured: false,
        isNew: false,
        description: "إسبريسو كريمي مع كمية سخية من الحليب المبخر",
        ingredients: ["إسبريسو", "حليب مبخر"],
        image: "assets/items/latte.png"
    },
    {
        id: "mocha-white",
        name: "موكا / وايت",
        english: "Mocha / White Mocha",
        category: "espresso",
        price: 85,
        available: true,
        featured: false,
        isNew: false,
        description: "إسبريسو مع الشوكولاتة والحليب المبخر",
        ingredients: ["إسبريسو", "صوص شوكولاتة", "حليب"],
        image: "assets/items/mocha-white.png"
    },
    {
        id: "spanish-latte",
        name: "سبانش لاتيه",
        english: "Spanish Latte",
        category: "espresso",
        price: 90,
        available: true,
        featured: false,
        isNew: false,
        description: "مشروب القهوة البارد الممكس والمستوحى من المارتيني",
        ingredients: ["إسبريسو", "سيروب خاص", "ثلج"],
        image: "assets/items/espresso-tini.png"
    },
    {
        id: "hot-chocolate",
        name: "هوت شوكليت",
        english: "Hot Chocolate",
        category: "espresso",
        price: 90,
        available: true,
        featured: false,
        isNew: false,
        description: "شوكولاتة ساخنة غنية وكريمية",
        ingredients: ["شوكولاتة", "حليب دافئ"],
        image: "assets/items/hot-chocolate.png"
    },
    {
        id: "flavour-expresso",
        name: "إضافة فليفر",
        english: "Flavor Add-on",
        category: "espresso",
        price: 10,
        available: true,
        featured: false,
        isNew: false,
        description: "إضافة سيروب نكهة إضافي للاسبريسو",
        ingredients: [ ],
        image: "assets/items/flavor-addon.png.png"
    },

    // =========================
    // JUICES
    // =========================

    {
        id: "strawberry-juice",
        name: "فراولة",
        english: "Strawberry",
        category: "juice",
        price: 45,
        available: true,
        featured: false,
        isNew: false,
        description: "عصير فراولة طبيعي وطازج",
        ingredients: ["فراولة طبيعية"],
        image: "assets/items/strawberry-juice.png"
    },
    {
        id: "orange-juice",
        name: "برتقال",
        english: "Orange",
        category: "juice",
        price: 45,
        available: true,
        featured: false,
        isNew: false,
        description: "عصير برتقال فريش عصارة يومية",
        ingredients: ["برتقال طازج"],
        image: "assets/items/orange-juice.png"
    },
    {
        id: "banana-milk",
        name: "موز باللبن",
        english: "Banana Milk",
        category: "juice",
        price: 45,
        available: true,
        featured: false,
        isNew: false,
        description: "موز طازج مخفوق مع الحليب النقي",
        ingredients: ["موز", "حليب"],
        image: "assets/items/banana-milk.png"
    },
    {
        id: "lemon-mint",
        name: "ليمون بالنعناع",
        english: "Lemon Mint",
        category: "juice",
        price: 45,
        available: true,
        featured: false,
        isNew: false,
        description: "ليموناد منعشة بأوراق النعناع الطازجة",
        ingredients: ["ليمون", "نعناع طازج", "ثلج"],
        image: "assets/items/lemon-mint.png"
    },
    {
        id: "mango-kiwi-juice",
        name: "مانجو - كيوي",
        english: "Mango - Kiwi",
        category: "juice",
        price: 50,
        available: true,
        featured: false,
        isNew: false,
        description: "مكس استوائي ممتع بين المانجو والكيوي",
        ingredients: ["مانجو", "كيوي"],
        image: "assets/items/mango-kiwi-juice.png"
    },
    {
        id: "cocktail",
        name: "كوكتيل",
        english: "Cocktail",
        category: "juice",
        price: 55,
        available: true,
        featured: false,
        isNew: false,
        description: "تشكيلة من أفضل الفواكه الطبيعية المشكلة",
        ingredients: ["فواكه مشكلة"],
        image: "assets/items/cocktail.png"
    },

    // =========================
    // SOFT DRINKS
    // =========================

    {
        id: "water",
        name: "مياه",
        english: "Water",
        category: "soft",
        price: 10,
        available: true,
        featured: false,
        isNew: false,
        description: "زجاجة مياه",
        ingredients: [],
        image: "assets/items/water.png"
    },
    {
        id: "pepsi",
        name: "بيبسي",
        english: "Pepsi",
        category: "soft",
        price: 20,
        available: true,
        featured: false,
        isNew: false,
        description: "مشروب غازي منعش",
        ingredients: [],
        image: "assets/items/pepsi.png"
    },
    {
        id: "red-bull",
        name: "ريد بول",
        english: "Red Bull",
        category: "soft",
        price: 50,
        available: true,
        featured: false,
        isNew: false,
        description: "مشروب الطاقة الشهير",
        ingredients: [],
        image: "assets/items/red-bull.png"
    },

    // =========================
    // SMOOTHIES
    // =========================

    {
        id: "smoothie-strawberry",
        name: "فراولة",
        english: "Strawberry",
        category: "smoothie",
        price: 60,
        available: true,
        featured: false,
        isNew: false,
        description: "سموزي فراولة مثلج ومنعش",
        ingredients: ["فراولة", "ثلج مجروش"],
        image: "assets/items/smoothie-strawberry.png"
    },
    {
        id: "smoothie-blueberry",
        name: "بلوبيري",
        english: "Blueberry",
        category: "smoothie",
        price: 60,
        available: true,
        featured: false,
        isNew: false,
        description: "سموزي التوت الأزرق غني بالنكهة",
        ingredients: ["توت أزرق", "ثلج مجروش"],
        image: "assets/items/smoothie-blueberry.png"
    },
    {
        id: "smoothie-mixed-berry",
        name: "ميكس بيري",
        english: "Mixed Berry",
        category: "smoothie",
        price: 60,
        available: true,
        featured: false,
        isNew: false,
        description: "سموزي تشكيلة التوت المشكل",
        ingredients: ["توت مشكل", "ثلج مجروش"],
        image: "assets/items/smoothie-mixed-berry.png"
    },
    {
        id: "smoothie-pineapple",
        name: "أناناس",
        english: "Pineapple",
        category: "smoothie",
        price: 60,
        available: true,
        featured: false,
        isNew: false,
        description: "سموزي الأناناس الاستوائي البارد",
        ingredients: ["أناناس", "ثلج مجروش"],
        image: "assets/items/smoothie-pineapple.png"
    },
    {
        id: "smoothie-peach",
        name: "خوخ",
        english: "Peach",
        category: "smoothie",
        price: 60,
        available: true,
        featured: false,
        isNew: false,
        description: "سموزي الخوخ المنعش",
        ingredients: ["خوخ", "ثلج مجروش"],
        image: "assets/items/smoothie-peach.png"
    },
    {
        id: "smoothie-mango-kiwi",
        name: "مانجو - كيوي",
        english: "Mango - Kiwi",
        category: "smoothie",
        price: 70,
        available: true,
        featured: false,
        isNew: false,
        description: "سموزي المانجو مع قطع الكيوي الحامضة",
        ingredients: ["مانجو", "كيوي", "ثلج مجروش"],
        image: "assets/items/smoothie-mango-kiwi.png"
    },

    // =========================
    // MOCKTAILS
    // =========================

    {
        id: "mojito-classic",
        name: "موهيتو كلاسيك",
        english: "Classic Mojito",
        category: "mocktail",
        price: 40,
        available: true,
        featured: false,
        isNew: false,
        description: "نعناع، ليمون، وماء صودا فوار",
        ingredients: ["نعناع", "ليمون", "صودا"],
        image: "assets/items/mojito-classic.png"
    },
    {
        id: "mojito-blueberry",
        name: "بلوبيري",
        english: "Blueberry Mojito",
        category: "mocktail",
        price: 40,
        available: true,
        featured: false,
        isNew: false,
        description: "موهيتو بنكهة التوت الأزرق المنعشة",
        ingredients: ["نعناع", "ليمون", "توت أزرق", "صودا"],
        image: "assets/items/mojito-blueberry.png"
    },
    {
        id: "mojito-mixed-berry",
        name: "ميكس بيري",
        english: "Mixed Berry Mojito",
        category: "mocktail",
        price: 40,
        available: true,
        featured: false,
        isNew: false,
        description: "موهيتو بالتوت المشكل والمشروب الفوار",
        ingredients: ["نعناع", "ليمون", "توت مشكل", "صودا"],
        image: "assets/items/mojito-mixed-berry.png"
    },
    {
        id: "mojito-strawberry",
        name: "فراولة",
        english: "Strawberry Mojito",
        category: "mocktail",
        price: 40,
        available: true,
        featured: false,
        isNew: false,
        description: "موهيتو بنكهة الفراولة اللذيذة",
        ingredients: ["نعناع", "ليمون", "فراولة", "صودا"],
        image: "assets/items/mojito-strawberry.png"
    },
    {
        id: "mojito-watermelon",
        name: "بطيخ",
        english: "Watermelon Mojito",
        category: "mocktail",
        price: 40,
        available: true,
        featured: false,
        isNew: false,
        description: "موهيتو البطيخ الصيفي البارد",
        ingredients: ["نعناع", "ليمون", "بطيخ", "صودا"],
        image: "assets/items/mojito-watermelon.png"
    },
    {
        id: "mojito-peach",
        name: "خوخ",
        english: "Peach Mojito",
        category: "mocktail",
        price: 40,
        available: true,
        featured: false,
        isNew: false,
        description: "موهيتو بلمسة نكهة الخوخ الغنية",
        ingredients: ["نعناع", "ليمون", "خوخ", "صودا"],
        image: "assets/items/mojito-peach.png"
    },
    {
        id: "passion-fruit",
        name: "باشون فروت",
        english: "Passion Fruit",
        category: "mocktail",
        price: 55,
        available: true,
        featured: false,
        isNew: false,
        description: "موكتيل الباشن فروت الاستوائي المميز",
        ingredients: ["باشون فروت", "صودا", "ثلج"],
        image: "assets/items/passion-fruit.png"
    },
    {
        id: "passion-fruit-mix",
        name: "باشون فروت ميكس",
        english: "Passion Fruit Mix",
        category: "mocktail",
        price: 65,
        available: true,
        featured: false,
        isNew: false,
        description: "مزيج إضافي من الفواكه مع الباشن فروت",
        ingredients: ["باشون فروت", "فواكه إضافية", "صودا"],
        image: "assets/items/passion-fruit-mix.png"
    },
    {
        id: "mojito-mokka-mix",
        name: "موهيتو ميكس موكا",
        english: "Mokka Mix Mojito",
        category: "mocktail",
        price: 65,
        available: true,
        featured: false,
        isNew: false,
        description: "خلطة موهيتو موكا الخاصة والاستثنائية",
        ingredients: ["خلطة موكا الخاصة", "صودا"],
        image: "assets/items/mojito-mokka-mix.png"
    },

    // =========================
    // COLD DRINKS
    // =========================

    {
        id: "frappe-fruits",
        name: "فرابيه فواكه",
        english: "Frappe Fruits",
        category: "cold",
        price: 70,
        available: true,
        featured: true,
        isNew: false,
        description: "مكس بين نكهة الفراولة والموكا المثلجة",
        ingredients: ["إسبريسو", "فراولة", "شوكولاتة", "حليب", "ثلج"],
        image: "assets/items/strawberry-mocha.png"
    },
    {
        id: "frappe-latte",
        name: "فرابيه لاتيه",
        english: "Frappe latte",
        category: "cold",
        price: 70,
        available: true,
        featured: false,
        isNew: false,
        description: "فرابيه لاتيه كريمي بطعم القهوة الغني",
        ingredients: ["قهوة", "حليب", "ثلج"],
        image: "assets/items/frappe-latte.png"
    },
    {
        id: "strawberry-vanilla",
        name: "فرابيه فانيليا",
        english: "Frappe Vanilla",
        category: "cold",
        price: 70,
        available: true,
        featured: false,
        isNew: false,
        description: "مزيج الفراولة الطازجة مع لمسة الفانيليا",
        ingredients: ["فراولة", "فانيليا", "حليب", "ثلج"],
        image: "assets/items/strawberry-vanilla.png"
    },
    {
        id: "frappe-caramel",
        name: "فرابيه كراميل",
        english: "Frappe Caramel",
        category: "cold",
        price: 75,
        available: true,
        featured: false,
        isNew: false,
        description: "نكهة الفراولة الممزوجة بصوص الكراميل غني",
        ingredients: ["فراولة", "كراميل", "حليب", "ثلج"],
        image: "assets/items/strawberry-caramel.png"
    },
    {
        id: "frappe-chocolate",
        name: "فرابيه شوكليت",
        english: "Frappe Chocolate",
        category: "cold",
        price: 75,
        available: true,
        featured: false,
        isNew: false,
        description: "تركيبة الفراولة اللذيذة مع صوص الشوكولاتة",
        ingredients: ["فراولة", "شوكولاتة", "حليب", "ثلج"],
        image: "assets/items/strawberry-chocolate.png"
    },
    {
        id: "frappe-latte-caramel",
        name: "فرابيه لاتيه كراميل",
        english: "Frappe Latte Caramel",
        category: "cold",
        price: 80,
        available: true,
        featured: false,
        isNew: false,
        description: "لاتيه بارد بصوص فرابيه والكراميل",
        ingredients: ["إسبريسو", "فراولة", "كراميل", "حليب", "ثلج"],
        image: "assets/items/strawberry-latte-caramel.png"
    },
    {
        id: "Frappe-mocha-white",
        name: "فرابيه موكا / وايت",
        english: "Frappe Mocha / White",
        category: "cold",
        price: 80,
        available: true,
        featured: false,
        isNew: false,
        description: "موكا بيضاء مثلجة بنكهة الفراولة",
        ingredients: ["إسبريسو", "شوكولاتة بيضاء", "فراولة", "حليب", "ثلج"],
        image: "assets/items/strawberry-mocha-white.png"
    },
    {
        id: "iced-latte",
        name: "ايس لاتيه",
        english: "Iced Latte",
        category: "cold",
        price: 80,
        available: true,
        featured: false,
        isNew: false,
        description: "لاتيه كلاسيكي بارد مع ثلج وحليب",
        ingredients: ["إسبريسو", "حليب بارد", "ثلج"],
        image: "assets/items/iced-latte.png"
    },
    {
        id: "iced-spanish-latte",
        name: "ايس اسبانش لاتيه",
        english: "Iced Spanish Latte",
        category: "cold",
        price: 90,
        available: true,
        featured: true,
        isNew: false,
        description: "إسبريسو بارد مع الحليب المكثف المحلى",
        ingredients: ["إسبريسو", "حليب مكثف محلى", "حليب", "ثلج"],
        image: "assets/items/iced-spanish-latte.png"
    },
    {
        id: "iced-mocha-white",
        name: "ايس موكا / وايت",
        english: "Iced Mocha / White",
        category: "cold",
        price: 90,
        available: true,
        featured: false,
        isNew: false,
        description: "موكا مثلجة مع اختيارك من الشوكولاتة الداكنة أو البيضاء",
        ingredients: ["إسبريسو", "شوكولاتة", "حليب", "ثلج"],
        image: "assets/items/iced-mocha-white.png"
    },
    {
        id: "flavor-cold",
        name: "إضافة فليفر",
        english: "Flavor Add-on",
        category: "cold",
        price: 10,
        available: true,
        featured: false,
        isNew: false,
        description: "إضافة سيروب نكهة إضافي لمشروبك البارد",
        ingredients: [],
        image: "assets/items/flavor-addon-cold.png"
    },

    // =========================
    // MILK SHAKES
    // =========================

    {
        id: "milkshake-vanilla",
        name: "فانيليا",
        english: "Vanilla",
        category: "milkshake",
        price: 80,
        available: true,
        featured: false,
        isNew: false,
        description: "ميلك شيك الفانيليا الكريمي",
        ingredients: ["آيس كريم فانيليا", "حليب"],
        image: "assets/items/milkshake-vanilla.png"
    },
    {
        id: "milkshake-chocolate",
        name: "شوكليت",
        english: "Chocolate",
        category: "milkshake",
        price: 90,
        available: true,
        featured: false,
        isNew: false,
        description: "ميلك شيك غني بالشوكولاتة",
        ingredients: ["آيس كريم شوكولاتة", "صوص شوكولاتة", "حليب"],
        image: "assets/items/milkshake-chocolate.png"
    },
    {
        id: "milkshake-caramel",
        name: "كراميل",
        english: "Caramel",
        category: "milkshake",
        price: 90,
        available: true,
        featured: false,
        isNew: false,
        description: "ميلك شيك بصوص الكراميل اللذيذ",
        ingredients: ["آيس كريم", "صوص كراميل", "حليب"],
        image: "assets/items/milkshake-caramel.png"
    },
    {
        id: "milkshake-strawberry",
        name: "فراولة",
        english: "Strawberry",
        category: "milkshake",
        price: 90,
        available: true,
        featured: false,
        isNew: false,
        description: "ميلك شيك الفراولة الطبيعي",
        ingredients: ["آيس كريم", "فراولة", "حليب"],
        image: "assets/items/milkshake-strawberry.png"
    },
    {
        id: "milkshake-mango",
        name: "مانجو",
        english: "Mango",
        category: "milkshake",
        price: 100,
        available: true,
        featured: false,
        isNew: false,
        description: "ميلك شيك المانجو الفاخر",
        ingredients: ["آيس كريم", "مانجو", "حليب"],
        image: "assets/items/milkshake-mango.png"
    }
];

const CATEGORY_INFO = {
    hot: {
        ar: "المشروبات الساخنة",
        en: "Hot Drinks",
        icon: "fa-mug-hot"
    },
    espresso: {
        ar: "إسبريسو",
        en: "Espresso",
        icon: "fa-coffee"
    },
    juice: {
        ar: "العصائر",
        en: "Fresh Juices",
        icon: "fa-martini-glass-citrus"
    },
    soft: {
        ar: "سوفت",
        en: "Soft Drinks",
        icon: "fa-bottle-water"
    },
    cold: {
        ar: "مشروبات ساقعة",
        en: "Cold Drinks",
        icon: "fa-snowflake"
    },
    smoothie: {
        ar: "سموزي",
        en: "Smoothies",
        icon: "fa-blender"
    },
    mocktail: {
        ar: "موكتيلز",
        en: "Mocktails",
        icon: "fa-lemon"
    },
    milkshake: {
        ar: "ميلك شيك",
        en: "Milkshakes",
        icon: "fa-ice-cream"
    }
};

window.INITIAL_MENU = INITIAL_MENU;
window.CATEGORY_INFO = CATEGORY_INFO;

// Exporting data for ES modules / Node environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { INITIAL_MENU, CATEGORY_INFO };
}