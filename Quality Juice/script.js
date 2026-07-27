const menu = [
  {
    category: "مشروبات ساخنه",
    icon: "☕",
    items: [
      { name: "شاي", price: "10" },
      { name: "شاي حليب", price: "30" },
      { name: "شاي أخضر", price: "15" },
      { name: "شاي أخضر بالليمون", price: "20" },
      { name: "شاي كرك", price: "40" },
      { name: "شاي أحمد تي", price: "15" },
      { name: "شاي فواكه", price: "20" },
      { name: "قهوة", price: "20" },
      { name: "قهوة دبل", price: "35" },
      { name: "قهوة أبو عوف", price: "30" },
      { name: "قهوة إسبريسو", price: "40" },
      { name: "قهوة إسبريسو دبل", price: "50" },
      { name: "قهوة فرنساوي", price: "30" },
      { name: "قهوة فرنساوي دبل", price: "50" },
      { name: "قهوة شيكولاتة", price: "35" },
      { name: "قهوة بندق", price: "35" },
      { name: "قهوة بندق كراميل", price: "45" },
      { name: "قهوة فواكه", price: "35" },
      { name: "هوت سيدر", price: "40" },
      { name: "كابتشينو", price: "30" },
      { name: "كابتشينو حليب صافي", price: "40" },
      { name: "كابتشينو ماشين", price: "60" },
      { name: "موكا ماشين", price: "65" },
      { name: "ماتشا حليب", price: "50" },
      { name: "نسكافيه بلاك", price: "20" },
      { name: "نسكافيه حليب", price: "35" },
      { name: "نسكافيه حليب صافي", price: "45" },
      { name: "نسكافيه جولد", price: "45" },
      { name: "نسكافيه 3×1", price: "25" },
      { name: "نسكافيه 3×1 باللبن", price: "45" },
      { name: "كوفي مكس باللبن", price: "35" },
      { name: "هوت شوكليت", price: "40" },
      { name: "هوت شوكليت كادبوري", price: "50" },
      { name: "هوت لوتس", price: "55" },
      { name: "سحلب", price: "40" },
      { name: "سحلب فواكه", price: "50" },
      { name: "سحلب أوريو", price: "50" }
    ]
  },
  {
    category: "الاعشاب",
    icon: "🌿",
    items: [
      { name: "قرفة", price: "20" },
      { name: "قرفة بالحليب", price: "35" },
      { name: "قرفة بالجنزبيل", price: "30" },
      { name: "قرفة بالجنزبيل بالحليب", price: "35" },
      { name: "جنزبيل", price: "20" },
      { name: "جنزبيل ليمون", price: "25" },
      { name: "جنزبيل بالحليب", price: "35" },
      { name: "كوكتيل أعشاب", price: "40" },
      { name: "ينسون", price: "15" },
      { name: "نعناع", price: "15" },
      { name: "كركديه", price: "15" }
    ]
  },
  {
    category: "عصائر شرقية",
    icon: "🥤",
    items: [
      { name: "سوبيا", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "سوبيا بيستاشيو", sizes: [{ label: "L", price: "60" }] },
      { name: "سوبيا مانجو", sizes: [{ label: "L", price: "60" }] },
      { name: "دوم سادة", sizes: [{ label: "M", price: "20" }, { label: "L", price: "25" }] },
      { name: "دوم بالحليب", sizes: [{ label: "M", price: "30" }, { label: "L", price: "35" }] },
      { name: "كركدية", sizes: [{ label: "M", price: "25" }, { label: "L", price: "30" }] },
      { name: "كركدية أناناس", sizes: [{ label: "L", price: "50" }] },
      { name: "تمر هندي", sizes: [{ label: "M", price: "25" }, { label: "L", price: "30" }] },
      { name: "خروب", sizes: [{ label: "M", price: "25" }, { label: "L", price: "30" }] },
      { name: "قمر الدين", sizes: [{ label: "M", price: "25" }, { label: "L", price: "30" }] }
    ]
  },
  {
    category: "ماتشا",
    icon: "🍵",
    items: [
      { name: "ماتشا لاتيه", price: "70" },
      { name: "ماتشا فراولة لاتيه", price: "80" },
      { name: "كوفي ماتشا لاتيه", price: "80" },
      { name: "آيس موكا ماتشا", price: "80" }
    ]
  },
  {
    category: "فروت سالاد",
    icon: "🍓",
    items: [
      { name: "صغير في كوباية", price: "60" },
      { name: "وسط في طبق", price: "70" },
      { name: "كبير في طبق اكبر", price: "75" }
    ]
  },
  {
    category: "قطع كواليتي",
    icon: "🍫",
    items: [
      { name: "سنيكرز", price: "150" },
      { name: "كيندر", price: "150" },
      { name: "جلاكسي", price: "150" },
      { name: "كيت كات", price: "150" },
      { name: "هوهوز", price: "90" },
      { name: "توينكيز", price: "90" },
      { name: "أوريو", price: "90" },
      { name: "بوريو", price: "80" },
      { name: "كيوي", price: "100" },
      { name: "أناناس", price: "120" },
      { name: "مانجو", price: "90" },
      { name: "بطيخ", price: "50" },
      { name: "فراولة", price: "50" },
      { name: "رمان حب", price: "60" }
    ]
  },
  {
    category: "الاضافات",
    icon: "➕",
    items: [
      { name: "لبن / عسل / فواكه", price: "10" },
      { name: "ايس كريم + صوص", price: "10" },
      { name: "كريم شانتي", price: "10" },
      { name: "حليب مكثف", price: "10" },
      { name: "يوجد لبن خالي من الدسم", note: true },
      { name: "يوجد سكر دايت", note: true }
    ]
  },
  {
    category: "زبادو",
    icon: "🥛",
    items: [
      { name: "زبادي لبن وعسل", sizes: [{ label: "M", price: "40" }, { label: "L", price: "50" }] },
      { name: "زبادي ملعقة واحدة", sizes: [{ label: "M", price: "60" }, { label: "L", price: "60" }] },
      { name: "زبادي مانجو", sizes: [{ label: "M", price: "70" }, { label: "L", price: "70" }] },
      { name: "زبادي خوخ", sizes: [{ label: "M", price: "60" }, { label: "L", price: "60" }] },
      { name: "زبادي توت", sizes: [{ label: "M", price: "80" }, { label: "L", price: "80" }] },
      { name: "زبادي رمان حب", sizes: [{ label: "M", price: "80" }, { label: "L", price: "80" }] },
      { name: "زبادي كوكتيل", sizes: [{ label: "M", price: "90" }, { label: "L", price: "90" }] }
    ]
  },
  {
    category: "بوبا",
    icon: "🧋",
    items: [
      { name: "بوبا كوفي", price: "80" },
      { name: "بوبا فراولة", price: "80" },
      { name: "بوبا كراميل", price: "80" },
      { name: "بوبا بلوبيري", price: "80" },
      { name: "بوبا ماتشا", price: "80" },
      { name: "بوبا موهيتو", price: "60" }
    ]
  },
  {
    category: "مشروبات غازية",
    icon: "🥤",
    items: [
      { name: "بيبسي / سفن / ميرندا", price: "25" },
      { name: "جولد / فيروز / بريل", price: "30" },
      { name: "ريد بول", price: "متغير" },
      { name: "مونستر", price: "متغير" },
      { name: "تويست", price: "متغير" },
      { name: "ستينج", price: "متغير" },
      { name: "مياه صغيرة", price: "10" },
      { name: "مياه كبيرة", price: "15" }
    ]
  },
  {
    category: "عصائر طبيعية",
    icon: "🍊",
    items: [
      { name: "ليمون", sizes: [{ label: "M", price: "25" }, { label: "L", price: "30" }] },
      { name: "ليمون بالنعناع", sizes: [{ label: "M", price: "25" }, { label: "L", price: "30" }] },
      { name: "ليمون باللبن", sizes: [{ label: "M", price: "30" }, { label: "L", price: "35" }] },
      { name: "موز باللبن", sizes: [{ label: "M", price: "40" }, { label: "L", price: "45" }] },
      { name: "جوافة باللبن", sizes: [{ label: "M", price: "40" }, { label: "L", price: "45" }] },
      { name: "بلح باللبن", sizes: [{ label: "M", price: "40" }, { label: "L", price: "45" }] },
      { name: "فراولة", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "أناناس", sizes: [{ label: "M", price: "50" }, { label: "L", price: "60" }] },
      { name: "كيوي", sizes: [{ label: "M", price: "50" }, { label: "L", price: "60" }] },
      { name: "بطيخ", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "عنب", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "كنتالوب", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "برتقال", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "تفاح", sizes: [{ label: "M", price: "40" }, { label: "L", price: "45" }] },
      { name: "يوسفى", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "رمان", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "مانجو", sizes: [{ label: "M", price: "45" }, { label: "L", price: "50" }] },
      { name: "خوخ", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "مشمش", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "برقوق", sizes: [{ label: "M", price: "45" }, { label: "L", price: "50" }] },
      { name: "تين شوكي", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "كرز", sizes: [{ label: "M", price: "50" }, { label: "L", price: "60" }] },
      { name: "جزر", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "حرنكش", sizes: [{ label: "M", price: "35" }, { label: "L", price: "40" }] },
      { name: "أوريو", sizes: [{ label: "M", price: "45" }, { label: "L", price: "50" }] },
      { name: "بوريو", sizes: [{ label: "M", price: "40" }, { label: "L", price: "45" }] },
      { name: "آيس شوكليت", sizes: [{ label: "M", price: "40" }, { label: "L", price: "45" }] }
    ]
  },
  {
    category: "ميكس فواكه",
    icon: "🍹",
    items: [
      { name: "فراولة + موز", price: "60" },
      { name: "فراولة + مانجو", price: "60" },
      { name: "فراولة + بوريو", price: "60" },
      { name: "فراولة + جوافة", price: "60" },
      { name: "بلح + موز", price: "60" },
      { name: "بلح + بوريو", price: "60" },
      { name: "كيوي + أناناس", price: "60" },
      { name: "كيوي + مانجو", price: "60" },
      { name: "كيوي + تفاح", price: "60" },
      { name: "كيوي + موز", price: "60" },
      { name: "برتقال + جزر", price: "60" },
      { name: "برتقال + أناناس", price: "60" },
      { name: "برتقال + يوسفى", price: "60" },
      { name: "تين شوكي + مانجو", price: "60" },
      { name: "كوكتيل فواكه", price: "70" },
      { name: "فيتامين سي", price: "70" },
      { name: "كوكتيل ½ضربة", price: "80" },
      { name: "مانجو بيتش (مانجو + خوخ + ايسكريم)", price: "70" },
      { name: "باراديس (مانجو + ايسكريم + فراولة + جوزهند)", price: "70" },
      { name: "مبدلي (مانجو + اناناس + ايسكريم + جوزهند)", price: "70" },
      { name: "شيكو بنانا (موز + ايسكريم + صوص شيكولاته)", price: "70" },
      { name: "كرمينت (بوريو + مانجو + قطع موز + قطع تفاح)", price: "80" },
      { name: "عريس يمني (مانجو + موز + بلح + حلاوة + عسل + تفاح قطع + مكسرات + جوز هند + زبيب)", price: "120" }
    ]
  },
  {
    category: "الرضعات",
    icon: "🍼",
    items: [
      { name: "رضعة الفيل (سوبيا + فانيليا + شيكولاته)", price: "70" },
      { name: "رضعة القرد (سوبيا + موز + سوداني)", price: "70" },
      { name: "رضعة الأسد (ميكس فواكه + ايسكريم + سوبيا)", price: "80" },
      { name: "لبن العصفور (سوبيا + ايسكريم + موز)", price: "70" }
    ]
  },
  {
    category: "ميلك شيك",
    icon: "🥤",
    items: [
      { name: "ميلك شيك تويـنكيز", sizes: [{ label: "M", price: "60" }, { label: "L", price: "70" }] },
      { name: "ميلك شيك هافموز", sizes: [{ label: "M", price: "60" }, { label: "L", price: "70" }] },
      { name: "ميلك شيك براونيز", sizes: [{ label: "M", price: "60" }, { label: "L", price: "70" }] },
      { name: "ميلك شيك شوكولاتة", sizes: [{ label: "M", price: "50" }, { label: "L", price: "60" }] },
      { name: "ميلك شيك فانيليا", sizes: [{ label: "M", price: "50" }, { label: "L", price: "60" }] },
      { name: "ميلك شيك بوريو", sizes: [{ label: "M", price: "55" }, { label: "L", price: "65" }] },
      { name: "ميلك شيك مانجو", sizes: [{ label: "M", price: "60" }, { label: "L", price: "70" }] },
      { name: "ميلك شيك فراولة", sizes: [{ label: "M", price: "55" }, { label: "L", price: "65" }] },
      { name: "ميلك شيك موز + فراولة", sizes: [{ label: "M", price: "60" }, { label: "L", price: "70" }] },
      { name: "ميلك شيك أوريو", sizes: [{ label: "M", price: "60" }, { label: "L", price: "70" }] },
      { name: "ميلك شيك كراميل", sizes: [{ label: "M", price: "60" }, { label: "L", price: "70" }] },
      { name: "ميلك شيك لوتس", sizes: [{ label: "M", price: "60" }, { label: "L", price: "70" }] },
      { name: "ميلك شيك بيستاشيو", sizes: [{ label: "M", price: "70" }, { label: "L", price: "80" }] },
      { name: "ميلك شيك زبدة فول سوداني", sizes: [{ label: "M", price: "60" }, { label: "L", price: "70" }] },
      { name: "ميلك شيك ماتشا", sizes: [{ label: "M", price: "70" }, { label: "L", price: "80" }] },
      { name: "ميلك شيك كيندر", sizes: [{ label: "L", price: "150" }] },
      { name: "ميلك شيك سنيكرز", sizes: [{ label: "L", price: "150" }] },
      { name: "ميلك شيك كيت كات", sizes: [{ label: "L", price: "150" }] },
      { name: "ميلك شيك جلاكسي", sizes: [{ label: "L", price: "150" }] },
      { name: "ميلك شيك كنافة بيستاشيو", sizes: [{ label: "L", price: "80" }] },
      { name: "ميلك شيك تشيز كيك فراولة", sizes: [{ label: "L", price: "80" }] },
      { name: "ميلك شيك دولسي دي ليتشي", sizes: [{ label: "L", price: "80" }] }
    ]
  },
  {
    category: "عالم المكسرات",
    icon: "🥜",
    items: [
      { name: "كاجو فانيليا", price: "90" },
      { name: "بندق فانيليا", price: "90" },
      { name: "سوداني فانيليا", price: "80" },
      { name: "ميكس مكسرات فانيليا", price: "100" }
    ]
  },
  {
    category: "عالم الاڤوكادو",
    icon: "🥑",
    items: [
      { name: "أفوكادو بالعسل", sizes: [{ label: "M", price: "70" }, { label: "L", price: "80" }] },
      { name: "أفوكادو + مانجو", sizes: [{ label: "M", price: "75" }, { label: "L", price: "85" }] },
      { name: "أفوكادو + مانجو + كيوي", sizes: [{ label: "M", price: "80" }, { label: "L", price: "90" }] },
      { name: "أفوكادو + مانجو + موز", sizes: [{ label: "M", price: "80" }, { label: "L", price: "90" }] },
      { name: "أفوكادو + بلح + موز", sizes: [{ label: "M", price: "80" }, { label: "L", price: "90" }] },
      { name: "أفوكادو + مكسرات", sizes: [{ label: "L", price: "100" }] },
      { name: "أفوكادو حلاوة", sizes: [{ label: "M", price: "75" }, { label: "L", price: "85" }] },
      { name: "أفوكادو قشطة", sizes: [{ label: "L", price: "100" }] },
      { name: "أفوكادو مكسرات + قطع فواكه", sizes: [{ label: "L", price: "120" }] },
      { name: "أفوكادو الكبير أوي (افوكادو + بلح + كيوي قطع + تفاح قطع + ايس كريم + مكسرات + عسل)", price: "150" },
      { name: "أفوكادو الأسد (اڤوكادو + جرجير + حلاوة + كاجو + عسل + لبن)", price: "120" }
    ]
  },
  {
    category: "قهوة باردة",
    icon: "🧊",
    items: [
      { name: "آيس كوفي", price: "50" },
      { name: "وايت موكا", price: "60" },
      { name: "فانيليا لاتيه", price: "60" },
      { name: "سبانش لاتيه", price: "70" },
      { name: "آيس موكا", price: "60" },
      { name: "ماتشا فرابيه", price: "70" },
      { name: "كراميل فرابيه", price: "60" },
      { name: "فانيليا فرابيه", price: "60" },
      { name: "كوكيز موكا فرابيه", price: "70" }
    ]
  },
  {
    category: "موهيتو وصن شاين",
    icon: "🍋",
    items: [
      { name: "صن شاين نعناع", sizes: [{ label: "جامبو", price: "50" }, { label: "L", price: "40" }] },
      { name: "صن شاين بلوبيري", sizes: [{ label: "جامبو", price: "50" }, { label: "L", price: "40" }] },
      { name: "صن شاين ريد بيري", sizes: [{ label: "جامبو", price: "50" }, { label: "L", price: "40" }] },
      { name: "صن شاين بلو كراسو", sizes: [{ label: "جامبو", price: "50" }, { label: "L", price: "40" }] },
      { name: "صن شاين فراولة", sizes: [{ label: "جامبو", price: "50" }, { label: "L", price: "40" }] },
      { name: "صن شاين شيري كولا", sizes: [{ label: "جامبو", price: "50" }, { label: "L", price: "40" }] },
      { name: "صن شاين ريد بول", sizes: [{ label: "جامبو", price: "50" }, { label: "L", price: "40" }] },
      { name: "صن شاين ريد بول + بطيخ", sizes: [{ label: "جامبو", price: "60" }, { label: "L", price: "50" }] },
      { name: "صن شاين جوز هند", sizes: [{ label: "جامبو", price: "50" }, { label: "L", price: "40" }] },
      { name: "صن شاين ميكس بيري", sizes: [{ label: "جامبو", price: "60" }, { label: "L", price: "50" }] },
      { name: "بلو ليتشي (باشون فروت + برتقال + مانجو + بلو كرواسو)", sizes: [{ label: "جامبو", price: "70" }, { label: "L", price: "60" }] },
      { name: "صن سيت (رمان + برتقال + ليمون)", sizes: [{ label: "جامبو", price: "70" }, { label: "L", price: "60" }] },
      { name: "جامايكا (رمان + برتقال + ليمون + اناناس)", sizes: [{ label: "جامبو", price: "70" }, { label: "L", price: "60" }] },
      { name: "صن شاين بوبا", sizes: [{ label: "جامبو", price: "70" }, { label: "L", price: "60" }] }
    ]
  },
  {
    category: "عالم السموذي",
    icon: "🍍",
    items: [
      { name: "بلو بيري", price: "50" },
      { name: "ريد بيري", price: "50" },
      { name: "راسبيري", price: "50" },
      { name: "باشون فروت", price: "50" },
      { name: "كراميل", price: "50" },
      { name: "شيري كولا", price: "50" },
      { name: "سموزي مانجو", price: "60" },
      { name: "سموزي فراولة", price: "50" },
      { name: "سموزي بطيخ", price: "50" },
      { name: "سموزي ليمون نعناع", price: "40" }
    ]
  }
];

const menuGrid = document.getElementById("menuGrid");
const categoryButtons = document.getElementById("categoryButtons");
const searchInput = document.getElementById("searchInput");

let activeCategory = "الكل";
let searchText = "";

function itemMatchesSearch(item, text) {
  const haystack = `${item.name} ${(item.price || "")} ${(item.note ? "note" : "")}`.toLowerCase();
  return haystack.includes(text.toLowerCase());
}

function getCategories() {
  return ["الكل", ...menu.map(section => section.category)];
}

function renderCategoryButtons() {
  categoryButtons.innerHTML = "";
  getCategories().forEach(category => {
    const button = document.createElement("button");
    button.textContent = category;
    button.className = category === activeCategory ? "active" : "";
    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategoryButtons();
      renderMenu();
    });
    categoryButtons.appendChild(button);
  });
}

function renderMenu() {
  const filtered = menu
    .filter(section => activeCategory === "الكل" || section.category === activeCategory)
    .map(section => ({
      ...section,
      items: section.items.filter(item => itemMatchesSearch(item, searchText))
    }))
    .filter(section => section.items.length > 0);

  if (filtered.length === 0) {
    menuGrid.innerHTML = `
      <div class="empty">
        لا توجد نتائج مطابقة للبحث أو الفلتر الحالي.
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filtered.map(section => {
    const itemsHTML = section.items.map(item => {
      const sizesHTML = item.sizes
        ? `<div class="sizes">${item.sizes.map(s => `<span class="size-pill">${s.label}: ${s.price}</span>`).join("")}</div>`
        : "";

      const priceHTML = !item.sizes && item.price ? `<div class="item-price">${item.price}</div>` : "";
      const noteHTML = item.note ? `<div class="note">متوفر</div>` : "";

      return `
        <div class="item">
          <div class="item-top">
            <div class="item-name">${item.name}</div>
            ${priceHTML}
          </div>
          ${sizesHTML}
          ${noteHTML}
        </div>
      `;
    }).join("");

    return `
      <article class="category-card">
        <div class="category-title">
          <h2>${section.icon} ${section.category}</h2>
          <span class="count">${section.items.length} صنف</span>
        </div>
        <div class="items">
          ${itemsHTML}
        </div>
      </article>
    `;
  }).join("");
}

searchInput.addEventListener("input", (e) => {
  searchText = e.target.value.trim();
  renderMenu();
});

renderCategoryButtons();
renderMenu();