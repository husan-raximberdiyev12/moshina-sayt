/* ---------- data ---------- */
const BODY_COLORS = [
  { id: "white", name: "Oq", hex: "#F2F1ED" },
  { id: "black", name: "Qora", hex: "#1A1A1A" },
  { id: "silver", name: "Kumush", hex: "#B9BDC2" },
  { id: "red", name: "Qizil", hex: "#C6402A" },
  { id: "blue", name: "Ko'k", hex: "#2E5A8C" },
  { id: "grey", name: "Kulrang", hex: "#5C5E62" },
];
const INTERIOR_COLORS = [
  { id: "black", name: "Qora", hex: "#232323" },
  { id: "beige", name: "Bej", hex: "#D8C8A8" },
  { id: "grey", name: "Kulrang", hex: "#8A8A8A" },
];
const WHEELS = [
  { id: "standard", name: "Standart", price: 0, cls: "rim-standard" },
  { id: "sport", name: "Sport", price: 900000, cls: "rim-sport" },
  { id: "offroad", name: "Off-road", price: 1500000, cls: "rim-offroad" },
];
const ACCESSORIES = [
  { id: "tint", name: "Tonirovka", price: 600000 },
  { id: "alarm", name: "Signalizatsiya", price: 850000 },
  { id: "park", name: "Parktronik", price: 700000 },
  { id: "media", name: "Multimedia tizimi", price: 2200000 },
  { id: "caps", name: "Disk qopqoqlari", price: 250000 },
  { id: "mats", name: "Salon kilamlari", price: 180000 },
];
const CARS = [
  {
    id: 1,
    brand: "Chevrolet",
    model: "Cobalt",
    year: 2021,
    price: 132000000,
    power: "106 o.k.",
    speed: "170 km/soat",
    trans: "Mexanika",
  },
  {
    id: 2,
    brand: "Chevrolet",
    model: "Gentra",
    year: 2022,
    price: 148000000,
    power: "113 o.k.",
    speed: "175 km/soat",
    trans: "Avtomat",
  },
  {
    id: 3,
    brand: "Chevrolet",
    model: "Nexia 3",
    year: 2020,
    price: 108000000,
    power: "105 o.k.",
    speed: "165 km/soat",
    trans: "Mexanika",
  },
  {
    id: 4,
    brand: "Chevrolet",
    model: "Malibu 2",
    year: 2021,
    price: 210000000,
    power: "167 o.k.",
    speed: "200 km/soat",
    trans: "Avtomat",
  },
  {
    id: 5,
    brand: "Chevrolet",
    model: "Spark",
    year: 2020,
    price: 95000000,
    power: "82 o.k.",
    speed: "150 km/soat",
    trans: "Mexanika",
  },
  {
    id: 6,
    brand: "Chevrolet",
    model: "Tracker",
    year: 2022,
    price: 186000000,
    power: "113 o.k.",
    speed: "180 km/soat",
    trans: "Avtomat",
  },
  {
    id: 7,
    brand: "Chevrolet",
    model: "Captiva",
    year: 2021,
    price: 235000000,
    power: "167 o.k.",
    speed: "195 km/soat",
    trans: "Avtomat",
  },
  {
    id: 8,
    brand: "Chevrolet",
    model: "Onix",
    year: 2023,
    price: 158000000,
    power: "113 o.k.",
    speed: "178 km/soat",
    trans: "Avtomat",
  },
  {
    id: 9,
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    price: 320000000,
    power: "181 o.k.",
    speed: "210 km/soat",
    trans: "Avtomat",
  },
  {
    id: 10,
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: 245000000,
    power: "122 o.k.",
    speed: "195 km/soat",
    trans: "Avtomat",
  },
  {
    id: 11,
    brand: "Toyota",
    model: "Land Cruiser Prado",
    year: 2020,
    price: 560000000,
    power: "249 o.k.",
    speed: "210 km/soat",
    trans: "Avtomat",
  },
  {
    id: 12,
    brand: "Hyundai",
    model: "Elantra",
    year: 2021,
    price: 205000000,
    power: "150 o.k.",
    speed: "200 km/soat",
    trans: "Avtomat",
  },
  {
    id: 13,
    brand: "Hyundai",
    model: "Tucson",
    year: 2022,
    price: 340000000,
    power: "181 o.k.",
    speed: "205 km/soat",
    trans: "Avtomat",
  },
  {
    id: 14,
    brand: "Kia",
    model: "Rio",
    year: 2021,
    price: 168000000,
    power: "123 o.k.",
    speed: "185 km/soat",
    trans: "Avtomat",
  },
  {
    id: 15,
    brand: "Kia",
    model: "Sportage",
    year: 2022,
    price: 365000000,
    power: "156 o.k.",
    speed: "200 km/soat",
    trans: "Avtomat",
  },
  {
    id: 16,
    brand: "Lada",
    model: "Vesta",
    year: 2021,
    price: 118000000,
    power: "106 o.k.",
    speed: "175 km/soat",
    trans: "Mexanika",
  },
  {
    id: 17,
    brand: "Lada",
    model: "Niva Travel",
    year: 2022,
    price: 145000000,
    power: "122 o.k.",
    speed: "150 km/soat",
    trans: "Mexanika",
  },
  {
    id: 18,
    brand: "Daewoo",
    model: "Matiz",
    year: 2019,
    price: 68000000,
    power: "51 o.k.",
    speed: "140 km/soat",
    trans: "Mexanika",
  },
];
const CITIES = {
  Toshkent: 0,
  Samarqand: 280,
  Buxoro: 430,
  Navoiy: 380,
  Andijon: 420,
  "Farg'ona": 390,
  Namangan: 350,
  Nukus: 950,
  Qarshi: 520,
  Termiz: 710,
  Xiva: 880,
  Jizzax: 200,
};
const EQUIPMENT = {
  phone: {
    name: "Telefonlar",
    icon: "📱",
    items: [
      {
        name: "Samsung Galaxy A55",
        price: 5200000,
        specs: '8/128GB · 6.6" ekran · 50MP kamera',
      },
      {
        name: "iPhone 13",
        price: 8900000,
        specs: '128GB · 6.1" ekran · 12MP dual kamera',
      },
      {
        name: "Xiaomi Redmi Note 13",
        price: 2600000,
        specs: '6/128GB · 6.67" AMOLED · 108MP kamera',
      },
      {
        name: "Realme 12",
        price: 3100000,
        specs: '8/256GB · 6.72" ekran · 108MP kamera',
      },
      {
        name: "Samsung Galaxy S23",
        price: 11800000,
        specs: '8/256GB · 6.1" Dynamic AMOLED · 50MP kamera',
      },
      {
        name: "iPhone 15",
        price: 15200000,
        specs: '128GB · 6.1" Super Retina · 48MP dual kamera',
      },
      {
        name: "Xiaomi Poco X6",
        price: 3900000,
        specs: '8/256GB · 6.67" AMOLED · 64MP kamera',
      },
      {
        name: "Nokia G42",
        price: 2100000,
        specs: '6/128GB · 6.56" ekran · 50MP kamera',
      },
    ],
  },
  laptop: {
    name: "Noutbuklar",
    icon: "💻",
    items: [
      {
        name: "HP Pavilion 15",
        price: 9800000,
        specs: "Core i5 · 8GB RAM · 512GB SSD",
      },
      {
        name: "Lenovo IdeaPad 3",
        price: 7200000,
        specs: "Ryzen 5 · 8GB RAM · 256GB SSD",
      },
      {
        name: "ASUS Vivobook 15",
        price: 8600000,
        specs: "Core i5 · 8GB RAM · 512GB SSD",
      },
      {
        name: "MacBook Air M1",
        price: 14500000,
        specs: "Apple M1 · 8GB RAM · 256GB SSD",
      },
      {
        name: "Dell Inspiron 15",
        price: 9100000,
        specs: "Core i5 · 8GB RAM · 512GB SSD",
      },
      {
        name: "Acer Aspire 5",
        price: 7800000,
        specs: "Ryzen 5 · 8GB RAM · 512GB SSD",
      },
      {
        name: "HP Victus Gaming",
        price: 13400000,
        specs: "Core i7 · 16GB RAM · RTX 3050",
      },
      {
        name: "Lenovo Legion 5",
        price: 16200000,
        specs: "Ryzen 7 · 16GB RAM · RTX 4060",
      },
    ],
  },
  appliance: {
    name: "Maishiy texnika",
    icon: "🧺",
    items: [
      {
        name: "Kir yuvish mashinasi (Artel)",
        price: 3400000,
        specs: "7 kg · 1000 ayl/daq · A++",
      },
      {
        name: "Muzlatgich (Samsung)",
        price: 6800000,
        specs: "350L · No Frost · 2 kamera",
      },
      {
        name: "Idish yuvish mashinasi (Bosch)",
        price: 5100000,
        specs: "12 komplekt · 6 dastur",
      },
      {
        name: "Changyutgich (Xiaomi)",
        price: 2200000,
        specs: "Simsiz · 2500 Pa · 60 daq",
      },
      {
        name: "Mikroto'lqinli pech (LG)",
        price: 1500000,
        specs: "23L · Grill · 800W",
      },
      {
        name: "Konditsioner (Artel)",
        price: 4300000,
        specs: "12000 BTU · Inverter",
      },
      {
        name: "Elektr pech (Bosch)",
        price: 6200000,
        specs: "60L · 6 rejim · Konveksiya",
      },
      {
        name: "Suv isitgich (Ariston)",
        price: 1900000,
        specs: "50L · Tez isitish",
      },
    ],
  },
  furniture: {
    name: "Mebel",
    icon: "🛋️",
    items: [
      {
        name: "Divan to'plami",
        price: 7500000,
        specs: "3+1+1 o'rindiq · mato qoplama",
      },
      { name: "Yotoqxona shkafi", price: 4200000, specs: "3 eshikli · oynali" },
      {
        name: "Oshxona stoli to'plami",
        price: 3100000,
        specs: "Stol + 4 stul",
      },
      { name: "Ish stoli", price: 1600000, specs: "120x60 sm · tortmali" },
      {
        name: "Yumshoq kreslo",
        price: 2400000,
        specs: "Aylanuvchi · yumshoq mato",
      },
      { name: "Kitob javoni", price: 1800000, specs: "5 qavat · MDF" },
      {
        name: "Bolalar krovati",
        price: 2900000,
        specs: "160x80 sm · saqlash qutisi bilan",
      },
      {
        name: "Oshxona stullari to'plami",
        price: 2100000,
        specs: "4 dona · yog'ochdan",
      },
    ],
  },
  carparts: {
    name: "Mashina jihozlari",
    icon: "🔧",
    items: [
      {
        name: "Video registrator",
        price: 850000,
        specs: "Full HD · keng burchak · tungi rejim",
      },
      {
        name: "Orqa ko'rish kamerasi",
        price: 420000,
        specs: "Suv o'tkazmaydigan · gid chiziqlar bilan",
      },
      { name: "Avto akkumulyator", price: 1100000, specs: "60Ah · 12V" },
      {
        name: "Salon organayzeri",
        price: 180000,
        specs: "Ko'p bo'limli · osma",
      },
      {
        name: "Multimedia magnitola",
        price: 1750000,
        specs: 'Android · 9" ekran · GPS',
      },
      {
        name: "GPS navigator",
        price: 650000,
        specs: '5" ekran · offlayn xaritalar',
      },
      {
        name: "Avto polik kilamlari",
        price: 390000,
        specs: "Rezinadan · to'liq to'plam",
      },
      { name: "Fara LED lampalari", price: 340000, specs: "6000K · juft" },
    ],
  },
  tv: {
    name: "Televizorlar",
    icon: "📺",
    items: [
      {
        name: 'Smart TV 55" 4K',
        price: 6200000,
        specs: '55" · 4K UHD · Smart OS',
      },
      { name: 'TV 43" Full HD', price: 3400000, specs: '43" · Full HD' },
      {
        name: 'Android TV 65" 4K',
        price: 8100000,
        specs: '65" · 4K · Android TV',
      },
      { name: 'TV 32" HD', price: 1600000, specs: '32" · HD Ready' },
      {
        name: 'Smart TV 50" 4K',
        price: 5400000,
        specs: '50" · 4K UHD · Smart OS',
      },
      { name: 'QLED TV 55"', price: 9600000, specs: '55" · QLED · HDR' },
      {
        name: 'TV 24" HD',
        price: 1050000,
        specs: '24" · kichik xonalar uchun',
      },
      {
        name: 'Smart TV 75" 4K',
        price: 13800000,
        specs: '75" · 4K UHD · Smart OS',
      },
    ],
  },
};

/* ---------- i18n (UZ / RU / EN) ---------- */
let lang = (function () {
  try {
    const v = localStorage.getItem("drive-lang");
    if (["uz", "ru", "en"].includes(v)) return v;
  } catch (e) {}
  return "uz";
})();
const I18N = {
  uz: {
    nav_cars: "Avtomobillar",
    nav_equip: "Jihozlar",
    nav_login: "Kirish",
    cart_btn: "Savat",
    hero_title: "Har bir avtomobilni<br>o'zingizga moslang",
    hero_sub:
      "Rangini tanlang, disklarini almashtiring, aksessuar qo'shing va yetkazib berishni hisoblab, savatga qo'shing.",
    trust_sold: "sotilgan avtomobil",
    trust_warranty: "kafolat",
    trust_brands: "brend va model",
    trust_support: "qo'llab-quvvatlash",
    grid_title: "Ishlatilgan avtomobillar",
    search_ph: "Brend yoki model bo'yicha qidirish...",
    all_brands: "Barcha brendlar",
    sort_default: "Saralash",
    sort_price_asc: "Narx: arzondan qimmatga",
    sort_price_desc: "Narx: qimmatdan arzonga",
    sort_year_desc: "Yil: yangidan eskiga",
    fav_off: "♡ Faqat sevimlilar",
    fav_on: "♥ Faqat sevimlilar",
    used: "ishlatilgan",
    configure: "Sozlash",
    no_results: "Hech narsa topilmadi",
    count_suffix: "ta e'lon",
    detail_body: "KUZOV RANGI",
    detail_interior: "SALON RANGI",
    detail_wheels: "DISKLAR",
    detail_acc: "AKSESSUARLAR",
    add_to_cart: "Savatga qo'shish",
    wheel_standard: "Standart",
    wheel_sport: "Sport",
    wheel_offroad: "Off-road",
    color_white: "Oq",
    color_black: "Qora",
    color_silver: "Kumush",
    color_red: "Qizil",
    color_blue: "Ko'k",
    color_grey: "Kulrang",
    color_beige: "Bej",
    acc_tint: "Tonirovka",
    acc_alarm: "Signalizatsiya",
    acc_park: "Parktronik",
    acc_media: "Multimedia tizimi",
    acc_caps: "Disk qopqoqlari",
    acc_mats: "Salon kilamlari",
    trans_manual: "Mexanika",
    trans_automatic: "Avtomat",
    cart_title: "Savat",
    cart_empty: "Savat hozircha bo'sh",
    cart_remove: "Olib tashlash",
    cart_body_lbl: "Kuzov:",
    cart_interior_lbl: "Salon:",
    cart_wheel_lbl: "Disk:",
    cart_acc_lbl: "Aksessuar:",
    cart_acc_none: "yo'q",
    delivery_title: "Yetkazib berish",
    calc_btn: "Hisoblash",
    jami_label: "Jami",
    pay_cash: "Naqd",
    pay_install: "Bo'lib to'lash",
    checkout_btn: "Buyurtmani rasmiylashtirish",
    delivery_route: "Yo'nalish",
    delivery_distance: "Masofa (taxminiy)",
    delivery_vehicle_type: "Transport turi",
    delivery_truck_type: "Fura (yuk mashinasi)",
    delivery_car_type: "Yengil yetkazib berish mashinasi",
    delivery_truck_label: "Fura davlat raqami",
    delivery_car_label: "Yetkazib berish mashinasi raqami",
    delivery_price: "Yetkazib berish narxi",
    calc_title: "Kredit / bo'lib to'lash hisoblagichi",
    calc_price: "Avtomobil narxi",
    calc_down: "Boshlang'ich to'lov",
    calc_term: "Muddat",
    calc_monthly: "Oylik to'lov",
    calc_total: "Jami to'lanadigan summa",
    monthly_label: "Oylik to'lov:",
    review_title: "Mijozlar fikri",
    review1:
      "Mashinani onlayn sozlab, o'zim tanlagan rangda buyurtma berdim. Yetkazib berish ham aytilgan vaqtda bo'ldi.",
    review2:
      "Disklarni almashtirish variantini ko'rib, sport diskli versiyani tanladim — natija kutganimdek chiqdi.",
    review3:
      "Kredit hisoblagich orqali oylik to'lovni oldindan bilib oldim, bu qaror qabul qilishni osonlashtirdi.",
    equip_title: "Jihozlar",
    equip_sub: "Uy, ofis va mashinangiz uchun texnika hamda aksessuarlar",
    equip_specs: "MA'LUMOTLAR",
    cat_phone: "Telefonlar",
    cat_laptop: "Noutbuklar",
    cat_appliance: "Maishiy texnika",
    cat_furniture: "Mebel",
    cat_carparts: "Mashina jihozlari",
    cat_tv: "Televizorlar",
    auth_art_title: "Yo'lga chiqishga tayyormisiz?",
    auth_art_sub:
      "Kiring — buyurtmalaringiz, sevimli mashinalaringiz va yetkazib berish bir joyda.",
    welcome_title: "Xush kelibsiz",
    welcome_sub: "Hisobingizga kiring",
    register_title: "Yangi hisob yarating",
    register_sub: "Bir necha soniyada ro'yxatdan o'ting",
    name_label: "Ismingiz",
    name_ph: "Masalan, Husan",
    phone_label: "Telefon raqam",
    pass_label: "Parol",
    pass_ph: "Kamida 6 belgi",
    submit_login: "Kirish",
    submit_register: "Ro'yxatdan o'tish",
    auth_note: "Demo: ma'lumotlar faqat shu brauzerda saqlanadi",
    err_phone: "Telefon raqamni to'g'ri kiriting",
    err_pass: "Parol kamida 6 belgidan iborat bo'lsin",
    err_name: "Ismingizni kiriting",
    err_exists: "Bu raqam allaqachon ro'yxatdan o'tgan",
    err_wrong: "Telefon yoki parol noto'g'ri",
    toast_welcome: "Xush kelibsiz, {name}!",
    toast_logout: "Hisobdan chiqdingiz",
    toast_added: "{name} savatga qo'shildi",
    toast_cart_empty: "Savat bo'sh",
    toast_order_done: "Buyurtma qabul qilindi — tez orada bog'lanamiz",
    toast_login_first: "Buyurtma berish uchun avval kiring",
    footer_text: "DRIVE — namoyish maqsadida yaratilgan konseptual savdo sayti",
  },
  ru: {
    nav_cars: "Автомобили",
    nav_equip: "Техника",
    nav_login: "Войти",
    cart_btn: "Корзина",
    hero_title: "Настройте<br>любой автомобиль под себя",
    hero_sub:
      "Выберите цвет, замените диски, добавьте аксессуары и рассчитайте доставку перед заказом.",
    trust_sold: "проданных авто",
    trust_warranty: "гарантия",
    trust_brands: "брендов и моделей",
    trust_support: "поддержка",
    grid_title: "Автомобили с пробегом",
    search_ph: "Поиск по бренду или модели...",
    all_brands: "Все бренды",
    sort_default: "Сортировка",
    sort_price_asc: "Цена: сначала дешевле",
    sort_price_desc: "Цена: сначала дороже",
    sort_year_desc: "Год: сначала новые",
    fav_off: "♡ Только избранное",
    fav_on: "♥ Только избранное",
    used: "б/у",
    configure: "Настроить",
    no_results: "Ничего не найдено",
    count_suffix: "объявлений",
    detail_body: "ЦВЕТ КУЗОВА",
    detail_interior: "ЦВЕТ САЛОНА",
    detail_wheels: "ДИСКИ",
    detail_acc: "АКСЕССУАРЫ",
    add_to_cart: "Добавить в корзину",
    wheel_standard: "Стандарт",
    wheel_sport: "Спорт",
    wheel_offroad: "Off-road",
    color_white: "Белый",
    color_black: "Чёрный",
    color_silver: "Серебристый",
    color_red: "Красный",
    color_blue: "Синий",
    color_grey: "Серый",
    color_beige: "Бежевый",
    acc_tint: "Тонировка",
    acc_alarm: "Сигнализация",
    acc_park: "Парктроник",
    acc_media: "Мультимедиа система",
    acc_caps: "Колпаки на диски",
    acc_mats: "Коврики салона",
    trans_manual: "Механика",
    trans_automatic: "Автомат",
    cart_title: "Корзина",
    cart_empty: "Корзина пока пуста",
    cart_remove: "Удалить",
    cart_body_lbl: "Кузов:",
    cart_interior_lbl: "Салон:",
    cart_wheel_lbl: "Диски:",
    cart_acc_lbl: "Аксессуары:",
    cart_acc_none: "нет",
    delivery_title: "Доставка",
    calc_btn: "Рассчитать",
    jami_label: "Итого",
    pay_cash: "Наличные",
    pay_install: "Рассрочка",
    checkout_btn: "Оформить заказ",
    delivery_route: "Маршрут",
    delivery_distance: "Расстояние (прибл.)",
    delivery_vehicle_type: "Тип транспорта",
    delivery_truck_type: "Фура (грузовая)",
    delivery_car_type: "Лёгкая доставочная машина",
    delivery_truck_label: "Гос. номер фуры",
    delivery_car_label: "Гос. номер машины доставки",
    delivery_price: "Стоимость доставки",
    calc_title: "Калькулятор кредита / рассрочки",
    calc_price: "Цена автомобиля",
    calc_down: "Первый взнос",
    calc_term: "Срок",
    calc_monthly: "Ежемесячный платёж",
    calc_total: "Общая сумма к оплате",
    monthly_label: "Ежемесячный платёж:",
    review_title: "Отзывы клиентов",
    review1:
      "Настроил машину онлайн и заказал в нужном цвете. Доставили точно в срок.",
    review2:
      "Посмотрел варианты дисков и выбрал спортивные — результат оправдал ожидания.",
    review3:
      "Калькулятор кредита заранее показал ежемесячный платёж — это облегчило решение.",
    equip_title: "Техника",
    equip_sub: "Техника и аксессуары для дома, офиса и автомобиля",
    equip_specs: "ХАРАКТЕРИСТИКИ",
    cat_phone: "Телефоны",
    cat_laptop: "Ноутбуки",
    cat_appliance: "Бытовая техника",
    cat_furniture: "Мебель",
    cat_carparts: "Автоаксессуары",
    cat_tv: "Телевизоры",
    auth_art_title: "Готовы отправиться в путь?",
    auth_art_sub: "Войдите — ваши заказы, избранное и доставка в одном месте.",
    welcome_title: "Добро пожаловать",
    welcome_sub: "Войдите в свой аккаунт",
    register_title: "Создайте новый аккаунт",
    register_sub: "Регистрация займёт пару секунд",
    name_label: "Ваше имя",
    name_ph: "Например, Иван",
    phone_label: "Номер телефона",
    pass_label: "Пароль",
    pass_ph: "Не менее 6 символов",
    submit_login: "Войти",
    submit_register: "Зарегистрироваться",
    auth_note: "Демо: данные хранятся только в этом браузере",
    err_phone: "Введите корректный номер телефона",
    err_pass: "Пароль должен быть не менее 6 символов",
    err_name: "Введите ваше имя",
    err_exists: "Этот номер уже зарегистрирован",
    err_wrong: "Неверный телефон или пароль",
    toast_welcome: "Добро пожаловать, {name}!",
    toast_logout: "Вы вышли из аккаунта",
    toast_added: "{name} добавлено в корзину",
    toast_cart_empty: "Корзина пуста",
    toast_order_done: "Заказ принят — скоро свяжемся с вами",
    toast_login_first: "Для заказа сначала войдите в аккаунт",
    footer_text: "DRIVE — демонстрационный концептуальный сайт продаж",
  },
  en: {
    nav_cars: "Cars",
    nav_equip: "Gear",
    nav_login: "Log in",
    cart_btn: "Cart",
    hero_title: "Customize<br>any car to your taste",
    hero_sub:
      "Pick a color, swap the wheels, add accessories, and calculate delivery before adding to cart.",
    trust_sold: "cars sold",
    trust_warranty: "warranty",
    trust_brands: "brands & models",
    trust_support: "support",
    grid_title: "Used cars",
    search_ph: "Search by brand or model...",
    all_brands: "All brands",
    sort_default: "Sort",
    sort_price_asc: "Price: low to high",
    sort_price_desc: "Price: high to low",
    sort_year_desc: "Year: newest first",
    fav_off: "♡ Favorites only",
    fav_on: "♥ Favorites only",
    used: "used",
    configure: "Configure",
    no_results: "Nothing found",
    count_suffix: "listings",
    detail_body: "BODY COLOR",
    detail_interior: "INTERIOR COLOR",
    detail_wheels: "WHEELS",
    detail_acc: "ACCESSORIES",
    add_to_cart: "Add to cart",
    wheel_standard: "Standard",
    wheel_sport: "Sport",
    wheel_offroad: "Off-road",
    color_white: "White",
    color_black: "Black",
    color_silver: "Silver",
    color_red: "Red",
    color_blue: "Blue",
    color_grey: "Grey",
    color_beige: "Beige",
    acc_tint: "Window tint",
    acc_alarm: "Alarm system",
    acc_park: "Parking sensors",
    acc_media: "Multimedia system",
    acc_caps: "Wheel caps",
    acc_mats: "Floor mats",
    trans_manual: "Manual",
    trans_automatic: "Automatic",
    cart_title: "Cart",
    cart_empty: "Your cart is empty",
    cart_remove: "Remove",
    cart_body_lbl: "Body:",
    cart_interior_lbl: "Interior:",
    cart_wheel_lbl: "Wheels:",
    cart_acc_lbl: "Accessories:",
    cart_acc_none: "none",
    delivery_title: "Delivery",
    calc_btn: "Calculate",
    jami_label: "Total",
    pay_cash: "Cash",
    pay_install: "Installments",
    checkout_btn: "Place order",
    delivery_route: "Route",
    delivery_distance: "Distance (approx.)",
    delivery_vehicle_type: "Vehicle type",
    delivery_truck_type: "Truck (freight)",
    delivery_car_type: "Light delivery car",
    delivery_truck_label: "Truck plate number",
    delivery_car_label: "Delivery car plate number",
    delivery_price: "Delivery cost",
    calc_title: "Credit / installment calculator",
    calc_price: "Car price",
    calc_down: "Down payment",
    calc_term: "Term",
    calc_monthly: "Monthly payment",
    calc_total: "Total amount payable",
    monthly_label: "Monthly payment:",
    review_title: "Customer reviews",
    review1:
      "I configured the car online and ordered it in the color I wanted. Delivery arrived right on time.",
    review2:
      "I compared the wheel options and picked the sport set — it turned out exactly as expected.",
    review3:
      "The credit calculator showed me the monthly payment in advance, which made deciding much easier.",
    equip_title: "Gear",
    equip_sub: "Tech and accessories for your home, office, and car",
    equip_specs: "SPECS",
    cat_phone: "Phones",
    cat_laptop: "Laptops",
    cat_appliance: "Home appliances",
    cat_furniture: "Furniture",
    cat_carparts: "Car accessories",
    cat_tv: "TVs",
    auth_art_title: "Ready to hit the road?",
    auth_art_sub:
      "Log in — your orders, favorites, and delivery all in one place.",
    welcome_title: "Welcome",
    welcome_sub: "Log in to your account",
    register_title: "Create a new account",
    register_sub: "Sign up in just a few seconds",
    name_label: "Your name",
    name_ph: "e.g. John",
    phone_label: "Phone number",
    pass_label: "Password",
    pass_ph: "At least 6 characters",
    submit_login: "Log in",
    submit_register: "Sign up",
    auth_note: "Demo: data is stored only in this browser",
    err_phone: "Enter a valid phone number",
    err_pass: "Password must be at least 6 characters",
    err_name: "Enter your name",
    err_exists: "This number is already registered",
    err_wrong: "Wrong phone or password",
    toast_welcome: "Welcome, {name}!",
    toast_logout: "You've been logged out",
    toast_added: "{name} added to cart",
    toast_cart_empty: "Cart is empty",
    toast_order_done: "Order received — we'll contact you soon",
    toast_login_first: "Please log in first to place an order",
    footer_text: "DRIVE — a demo concept sales site",
  },
};
function t(k) {
  return (I18N[lang] && I18N[lang][k]) || I18N.uz[k] || k;
}
function colorName(id) {
  return t("color_" + id);
}
function wheelName(id) {
  return t("wheel_" + id);
}
function accName(id) {
  return t("acc_" + id);
}
function transText(trans) {
  return trans === "Mexanika" ? t("trans_manual") : t("trans_automatic");
}
function powerText(car) {
  const n = (car.power.match(/\d+/) || [""])[0];
  return n + (lang === "ru" ? " л.с." : lang === "en" ? " hp" : " o.k.");
}
function speedText(car) {
  const n = (car.speed.match(/\d+/) || [""])[0];
  return n + (lang === "ru" ? " км/ч" : lang === "en" ? " km/h" : " km/soat");
}
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
function applyLang() {
  document.documentElement.lang = lang;
  document
    .querySelectorAll("#langSwitch button")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  setText("tabCars", t("nav_cars"));
  setText("tabEquip", t("nav_equip"));
  setText("authBtn", t("nav_login"));
  setText("cartLabel", t("cart_btn"));
  const ht = document.getElementById("heroTitle");
  if (ht) ht.innerHTML = t("hero_title");
  setText("heroSub", t("hero_sub"));
  setText("trustSold", t("trust_sold"));
  setText("trustWarranty", t("trust_warranty"));
  setText("trustBrands", t("trust_brands"));
  setText("trustSupport", t("trust_support"));
  setText("gridTitle", t("grid_title"));
  const si = document.getElementById("searchInput");
  if (si) si.placeholder = t("search_ph");
  const ab = document.querySelector('#brandFilter option[value=""]');
  if (ab) ab.textContent = t("all_brands");
  const sf = document.getElementById("sortFilter");
  if (sf) {
    sf.querySelector('option[value="default"]').textContent = t("sort_default");
    sf.querySelector('option[value="price-asc"]').textContent =
      t("sort_price_asc");
    sf.querySelector('option[value="price-desc"]').textContent =
      t("sort_price_desc");
    sf.querySelector('option[value="year-desc"]').textContent =
      t("sort_year_desc");
  }
  const fb = document.getElementById("favToggleBtn");
  if (fb) fb.textContent = state.onlyFav ? t("fav_on") : t("fav_off");
  setText("calcTitle", t("calc_title"));
  setText("calcPriceLabel", t("calc_price"));
  setText("calcDownLabel", t("calc_down"));
  setText("calcTermLabel", t("calc_term"));
  setText("reviewTitle", t("review_title"));
  setText("review1", t("review1"));
  setText("review2", t("review2"));
  setText("review3", t("review3"));
  setText("equipTitleH1", t("equip_title"));
  setText("equipSubP", t("equip_sub"));
  setText("footerText", t("footer_text"));
  setText("hBodyColor", t("detail_body"));
  setText("hInteriorColor", t("detail_interior"));
  setText("hWheels", t("detail_wheels"));
  setText("hAcc", t("detail_acc"));
  setText("hSpecs", t("equip_specs"));
  setText("cartTitleH2", t("cart_title"));
  setText("deliveryTitle", t("delivery_title"));
  setText("calcBtn", t("calc_btn"));
  setText("addCarBtn", t("add_to_cart"));
  setText("addEquipBtn", t("add_to_cart"));
  setText("jamiLabel", t("jami_label"));
  setText("payCashLabel", t("pay_cash"));
  setText("payInstallLabel", t("pay_install"));
  setText("checkoutBtn", t("checkout_btn"));
  setText("authArtTitle", t("auth_art_title"));
  setText("authArtSub", t("auth_art_sub"));
  setText("nameLabel", t("name_label"));
  setText("phoneLabel", t("phone_label"));
  setText("passLabel", t("pass_label"));
  setText("authNote", t("auth_note"));
  const fn = document.getElementById("fName");
  if (fn) fn.placeholder = t("name_ph");
  const fp = document.getElementById("fPass");
  if (fp) fp.placeholder = t("pass_ph");
  setAuthMode(authMode);
  renderGrid();
  if (equipActive) selectEquipCat(equipActive);
  renderCart();
  updateCalc();
  if (document.getElementById("dResult").classList.contains("show"))
    calcDelivery();
}
document.querySelectorAll("#langSwitch button").forEach(
  (b) =>
    (b.onclick = () => {
      lang = b.dataset.lang;
      try {
        localStorage.setItem("drive-lang", lang);
      } catch (e) {}
      applyLang();
    }),
);

/* ---------- auth (demo, faqat brauzerda) ---------- */
let session = null,
  authMode = "login",
  memUsers = {};
try {
  memUsers = JSON.parse(localStorage.getItem("drive-users") || "{}");
} catch (e) {}
function saveUsers() {
  try {
    localStorage.setItem("drive-users", JSON.stringify(memUsers));
  } catch (e) {}
}
async function hashPw(p) {
  try {
    const b = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode("drive:" + p),
    );
    return [...new Uint8Array(b)]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");
  } catch (e) {
    return "x:" + p;
  }
}
document.getElementById("authCar").innerHTML = carSVG("#C6402A");
function openAuth(mode) {
  setAuthMode(mode || "login");
  document.getElementById("authOverlay").classList.add("open");
}
function closeAuth() {
  document.getElementById("authOverlay").classList.remove("open");
}
function setAuthMode(m) {
  authMode = m;
  const reg = m === "register";
  document.getElementById("tabLogin").classList.toggle("active", !reg);
  document.getElementById("tabRegister").classList.toggle("active", reg);
  document.getElementById("fNameWrap").style.display = reg ? "" : "none";
  document.getElementById("tabLogin").textContent = t("tab_login");
  document.getElementById("tabRegister").textContent = t("tab_register");
  document.getElementById("authTitle").textContent = reg
    ? t("register_title")
    : t("welcome_title");
  document.getElementById("authSub").textContent = reg
    ? t("register_sub")
    : t("welcome_sub");
  document.getElementById("authSubmit").textContent = reg
    ? t("submit_register")
    : t("submit_login");
  document.getElementById("fPass").autocomplete = reg
    ? "new-password"
    : "current-password";
  document.getElementById("authErr").textContent = "";
}
function togglePw() {
  const i = document.getElementById("fPass");
  i.type = i.type === "password" ? "text" : "password";
}
function authErr(m) {
  document.getElementById("authErr").textContent = m;
}
async function submitAuth() {
  const phone = document
    .getElementById("fPhone")
    .value.trim()
    .replace(/[\s-]/g, "");
  const pw = document.getElementById("fPass").value;
  const name = document.getElementById("fName").value.trim();
  if (!/^\+?\d{9,13}$/.test(phone)) return authErr(t("err_phone"));
  if (pw.length < 6) return authErr(t("err_pass"));
  const h = await hashPw(pw);
  if (authMode === "register") {
    if (!name) return authErr(t("err_name"));
    if (memUsers[phone]) return authErr(t("err_exists"));
    memUsers[phone] = { name, h };
    saveUsers();
  } else {
    const u = memUsers[phone];
    if (!u || u.h !== h) return authErr(t("err_wrong"));
  }
  session = { phone, name: memUsers[phone].name };
  try {
    localStorage.setItem("drive-session", phone);
  } catch (e) {}
  applySession();
  closeAuth();
  document.getElementById("fPass").value = "";
  showToast(t("toast_welcome").replace("{name}", session.name));
}
function applySession() {
  document.getElementById("authBtn").style.display = session ? "none" : "";
  document.getElementById("userChip").style.display = session ? "flex" : "none";
  document.getElementById("userName").textContent = session ? session.name : "";
  document.getElementById("userAv").textContent = session
    ? session.name.charAt(0).toUpperCase()
    : "";
}
function logout() {
  session = null;
  try {
    localStorage.removeItem("drive-session");
  } catch (e) {}
  applySession();
  showToast(t("toast_logout"));
}
["fName", "fPhone", "fPass"].forEach((id) =>
  document.getElementById(id).addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitAuth();
  }),
);
(function restoreSession() {
  try {
    const ph = localStorage.getItem("drive-session");
    if (ph && memUsers[ph]) session = { phone: ph, name: memUsers[ph].name };
  } catch (e) {}
  applySession();
})();

/* ---------- theme ---------- */
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  document.getElementById("themeBtn").textContent = t === "dark" ? "☀️" : "🌙";
}
(function initTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem("drive-theme");
  } catch (e) {}
  if (saved) {
    applyTheme(saved);
    return;
  }
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
})();
function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("drive-theme", next);
  } catch (e) {}
}

/* ---------- view switching ---------- */
function showView(v) {
  document.getElementById("carsView").style.display =
    v === "cars" ? "" : "none";
  document.getElementById("equipView").style.display =
    v === "equip" ? "" : "none";
  document.getElementById("tabCars").classList.toggle("active", v === "cars");
  document.getElementById("tabEquip").classList.toggle("active", v === "equip");
  if (v === "equip" && !equipActive) selectEquipCat(Object.keys(EQUIPMENT)[0]);
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ---------- equipment catalog page ---------- */
let equipActive = null;
function renderEquipTabs() {
  const tabs = document.getElementById("equipTabs");
  tabs.innerHTML = "";
  Object.keys(EQUIPMENT).forEach((key) => {
    const cat = EQUIPMENT[key];
    const chip = document.createElement("button");
    chip.className = "equip-chip" + (key === equipActive ? " active" : "");
    chip.innerHTML = `${cat.icon} ${t("cat_" + key)}`;
    chip.onclick = () => selectEquipCat(key);
    tabs.appendChild(chip);
  });
}
function selectEquipCat(key) {
  equipActive = key;
  renderEquipTabs();
  const cat = EQUIPMENT[key];
  const grid = document.getElementById("equipGrid");
  grid.innerHTML = "";
  cat.items.forEach((it) => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <div class="card-visual equip-visual"></div>
      <div class="card-body">
        <h3>${it.name}</h3>
        <div class="sub">${it.specs}</div>
        <div class="price-row">
          <span class="price">${fmt(it.price)}</span>
          <span class="tag">${t("configure")}</span>
        </div>
      </div>`;
    paintEquipImg(el.querySelector(".equip-visual"), key, it, cat.icon, false);
    el.onclick = () => openEquipDetail(key, it);
    grid.appendChild(el);
  });
}

/* ---------- equipment detail (color + specs) ---------- */
let currentEquip = null;
function openEquipDetail(key, it) {
  const cat = EQUIPMENT[key];
  currentEquip = { key, cat, item: it };
  document.getElementById("eqTitle").textContent = it.name;
  const eqIconEl = document.getElementById("eqIcon");
  eqIconEl.className = "eq-icon";
  paintEquipImg(eqIconEl, key, it, cat.icon, true);
  document.getElementById("eqSpecs").innerHTML = it.specs
    .split(" · ")
    .map((s) => `<div>${s}</div>`)
    .join("");
  document.getElementById("eqTotal").textContent = fmt(it.price);
  document.getElementById("equipOverlay").classList.add("open");
}
function closeEquipDetail() {
  document.getElementById("equipOverlay").classList.remove("open");
}
function addEquipConfiguredToCart() {
  const { key, cat, item } = currentEquip;
  cart.push({
    type: "equipment",
    category: key,
    icon: cat.icon,
    name: item.name,
    specs: item.specs,
    total: item.price,
  });
  renderCart();
  closeEquipDetail();
  showToast(t("toast_added").replace("{name}", item.name));
}

let cart = [];
let current = null; // {car, body, interior, wheel, acc:Set}

/* ---------- car svg ---------- */
function carSVG(bodyHex) {
  return `<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="150" cy="112" rx="128" ry="8" fill="rgba(0,0,0,.12)"/>
    <path d="M18 92 Q22 55 62 48 L96 30 Q120 20 170 20 L206 30 Q244 40 268 60 L280 78 Q284 92 268 96 L250 96
      Q248 78 230 78 Q212 78 210 96 L92 96 Q90 78 72 78 Q54 78 52 96 L28 96 Q14 96 18 92 Z" fill="${bodyHex}" stroke="rgba(0,0,0,.25)" stroke-width="1.5"/>
    <path d="M100 33 Q122 24 168 24 L200 32 Q216 40 226 56 L104 56 Z" fill="rgba(255,255,255,.55)"/>
    <circle cx="72" cy="96" r="20" fill="#1c1c1c"/>
    <circle cx="230" cy="96" r="20" fill="#1c1c1c"/>
  </svg>`;
}

/* ---------- rasmlar: papka (images/...) yoki brauzerga yuklangan ---------- */
/* Papka qoidasi:  images/<model>/<rang>.png   masalan images/cobalt/white.png
                   images/<model>/wheel-<disk>.png   yoki umumiy images/wheels/<disk>.png */
const IMG_EXTS = ["png", "jpg", "webp"];
const uploads = {};
/* AVTOMOBIL RASMLARI: har bir mashina + rang uchun havola qo'ying (link yo'q bo'lsa '' qoldiring) */
// Chevrolet Cobalt
uploads["car:cobalt:white"] =
  "https://chevrolet.uz/assets/images/cobalt/colours/1.png";
uploads["car:cobalt:black"] =
  "https://w7.pngwing.com/pngs/838/615/png-transparent-chevrolet-cobalt-ss-chevrolet-prisma-car-chevrolet-onix-chevrolet-compact-car-sedan-car-thumbnail.png";
uploads["car:cobalt:silver"] =
  "https://w7.pngwing.com/pngs/844/631/png-transparent-chevrolet-cobalt-ss-car-general-motors-chevrolet-spin-chevrolet-compact-car-sedan-car-thumbnail.png";
uploads["car:cobalt:red"] =
  "https://img.chevrolet-motors.kg/cache/images/box_data/2025/10/71/img-w1200-h600--701554.png";
uploads["car:cobalt:blue"] =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2h8JexBg0y2aLBS6YTnJZpd0jc91L2cJoO3eepIZgw&s=10";
uploads["car:cobalt:grey"] =
  "https://w7.pngwing.com/pngs/838/615/png-transparent-chevrolet-cobalt-ss-chevrolet-prisma-car-chevrolet-onix-chevrolet-compact-car-sedan-car-thumbnail.png";
// Chevrolet Gentra
uploads["car:gentra:white"] =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYaE_jEJJ9dAmm-i_xYh5LsCXXl0wqLl651BLfhrFtw&s=10";
uploads["car:gentra:black"] =
  "https://driversvillage.uz/storage/dv/car_color/39/JP3apTDscFPxqOOf5z2aGxJeqdpuIYVu3ZLET2Qx.png";
uploads["car:gentra:silver"] =
  "https://ecosetting-files.com/en/image/models/2h0lmHRmu4WV4uYE37yzVw0qJSTKhm.png";
uploads["car:gentra:red"] =
  "https://driversvillage.uz/storage/dv/car_color/41/N9samh5qJvoBCuNzBbQJt6mFY3SnKe4k0BecUBsl.png";
uploads["car:gentra:blue"] =
  "https://cdn.qwenlm.ai/output/793e972b-a0a1-4fc8-b62a-a3f23c61a527/image_edit/13dac530-e9a4-4913-af87-fde60277bdfe/1790769889.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiNzkzZTk3MmItYTBhMS00ZmM4LWI2MmEtYTNmMjNjNjFhNTI3IiwicmVzb3VyY2VfaWQiOiIxNzkwNzY5ODg5IiwicmVzb3VyY2VfY2hhdF9pZCI6ImVjMGI3NDcwLWRiY2YtNDllNi05MGFiLTgyNzU2MWExMmI0MiJ9.i_3YlXwCKs_DWG6r4fGX9cseTVLPScV5oM2OfZQwhpc&x-oss-process=image/resize,m_mfit,w_450,h_450";
uploads["car:gentra:grey"] =
  "https://driversvillage.uz/storage/dv/car_color/43/0OUArvTfRmKI0xalkgRyzmzimzYQYt0eT1sMhZAX.png";
// Chevrolet Nexia 3
uploads["car:nexia-3:white"] =
  "https://saratov.ruautoshop.com/auto/images/0000012137ca822e305a.png";
uploads["car:nexia-3:black"] =
  "https://www.avtotexxizmat.uz/uploads/car-color/KK/KK/KA/1635147517.png";
uploads["car:nexia-3:silver"] =
  "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/309/colors/3.png";
uploads["car:nexia-3:red"] =
  "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/309/colors/10.png";
uploads["car:nexia-3:blue"] =
  "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/309/colors/9.png";
uploads["car:nexia-3:grey"] =
  "https://cdn.qwenlm.ai/output/793e972b-a0a1-4fc8-b62a-a3f23c61a527/image_edit/ab447deb-1bf0-401b-934c-530e8d30e0e1/1791203677.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiNzkzZTk3MmItYTBhMS00ZmM4LWI2MmEtYTNmMjNjNjFhNTI3IiwicmVzb3VyY2VfaWQiOiIxNzkxMjAzNjc3IiwicmVzb3VyY2VfY2hhdF9pZCI6ImVjMGI3NDcwLWRiY2YtNDllNi05MGFiLTgyNzU2MWExMmI0MiJ9.-0Sr9p0Aw1ziREwdsIcRPi5rwroCYwNH2YRNCdbn0P0";
// Chevrolet Malibu 2
uploads["car:malibu-2:white"] = "";
uploads["car:malibu-2:black"] = "";
uploads["car:malibu-2:silver"] = "";
uploads["car:malibu-2:red"] = "";
uploads["car:malibu-2:blue"] = "";
uploads["car:malibu-2:grey"] = "";
// Chevrolet Spark
uploads["car:spark:white"] = "";
uploads["car:spark:black"] = "";
uploads["car:spark:silver"] = "";
uploads["car:spark:red"] = "";
uploads["car:spark:blue"] = "";
uploads["car:spark:grey"] = "";
// Chevrolet Tracker
uploads["car:tracker:white"] = "";
uploads["car:tracker:black"] = "";
uploads["car:tracker:silver"] = "";
uploads["car:tracker:red"] = "";
uploads["car:tracker:blue"] = "";
uploads["car:tracker:grey"] = "";
// Chevrolet Captiva
uploads["car:captiva:white"] = "";
uploads["car:captiva:black"] = "";
uploads["car:captiva:silver"] = "";
uploads["car:captiva:red"] = "";
uploads["car:captiva:blue"] = "";
uploads["car:captiva:grey"] = "";
// Chevrolet Onix
uploads["car:onix:white"] = "";
uploads["car:onix:black"] = "";
uploads["car:onix:silver"] = "";
uploads["car:onix:red"] = "";
uploads["car:onix:blue"] = "";
uploads["car:onix:grey"] = "";
// Toyota Camry
uploads["car:camry:white"] = "";
uploads["car:camry:black"] = "";
uploads["car:camry:silver"] = "";
uploads["car:camry:red"] = "";
uploads["car:camry:blue"] = "";
uploads["car:camry:grey"] = "";
// Toyota Corolla
uploads["car:corolla:white"] = "";
uploads["car:corolla:black"] = "";
uploads["car:corolla:silver"] = "";
uploads["car:corolla:red"] = "";
uploads["car:corolla:blue"] = "";
uploads["car:corolla:grey"] = "";
// Toyota Land Cruiser Prado
uploads["car:land-cruiser-prado:white"] = "";
uploads["car:land-cruiser-prado:black"] = "";
uploads["car:land-cruiser-prado:silver"] = "";
uploads["car:land-cruiser-prado:red"] = "";
uploads["car:land-cruiser-prado:blue"] = "";
uploads["car:land-cruiser-prado:grey"] = "";
// Hyundai Elantra
uploads["car:elantra:white"] = "";
uploads["car:elantra:black"] = "";
uploads["car:elantra:silver"] = "";
uploads["car:elantra:red"] = "";
uploads["car:elantra:blue"] = "";
uploads["car:elantra:grey"] = "";
// Hyundai Tucson
uploads["car:tucson:white"] = "";
uploads["car:tucson:black"] = "";
uploads["car:tucson:silver"] = "";
uploads["car:tucson:red"] = "";
uploads["car:tucson:blue"] = "";
uploads["car:tucson:grey"] = "";
// Kia Rio
uploads["car:rio:white"] = "";
uploads["car:rio:black"] = "";
uploads["car:rio:silver"] = "";
uploads["car:rio:red"] = "";
uploads["car:rio:blue"] = "";
uploads["car:rio:grey"] = "";
// Kia Sportage
uploads["car:sportage:white"] = "";
uploads["car:sportage:black"] = "";
uploads["car:sportage:silver"] = "";
uploads["car:sportage:red"] = "";
uploads["car:sportage:blue"] = "";
uploads["car:sportage:grey"] = "";
// Lada Vesta
uploads["car:vesta:white"] = "";
uploads["car:vesta:black"] = "";
uploads["car:vesta:silver"] = "";
uploads["car:vesta:red"] = "";
uploads["car:vesta:blue"] = "";
uploads["car:vesta:grey"] = "";
// Lada Niva Travel
uploads["car:niva-travel:white"] = "";
uploads["car:niva-travel:black"] = "";
uploads["car:niva-travel:silver"] = "";
uploads["car:niva-travel:red"] = "";
uploads["car:niva-travel:blue"] = "";
uploads["car:niva-travel:grey"] = "";
// Daewoo Matiz
uploads["car:matiz:white"] = "";
uploads["car:matiz:black"] = "";
uploads["car:matiz:silver"] = "";
uploads["car:matiz:red"] = "";
uploads["car:matiz:blue"] = "";
uploads["car:matiz:grey"] = "";

/* JIHOZLAR RASMLARI: har bir mahsulot uchun havola qo'ying */
// Telefonlar
uploads["equip:phone:samsung-galaxy-a55"] = "";
uploads["equip:phone:iphone-13"] = "";
uploads["equip:phone:xiaomi-redmi-note-13"] = "";
uploads["equip:phone:realme-12"] = "";
uploads["equip:phone:samsung-galaxy-s23"] = "";
uploads["equip:phone:iphone-15"] = "";
uploads["equip:phone:xiaomi-poco-x6"] = "";
uploads["equip:phone:nokia-g42"] = "";
// Noutbuklar
uploads["equip:laptop:hp-pavilion-15"] = "";
uploads["equip:laptop:lenovo-ideapad-3"] = "";
uploads["equip:laptop:asus-vivobook-15"] = "";
uploads["equip:laptop:macbook-air-m1"] = "";
uploads["equip:laptop:dell-inspiron-15"] = "";
uploads["equip:laptop:acer-aspire-5"] = "";
uploads["equip:laptop:hp-victus-gaming"] = "";
uploads["equip:laptop:lenovo-legion-5"] = "";
// Maishiy texnika
uploads["equip:appliance:kir-yuvish-mashinasi-artel"] = "";
uploads["equip:appliance:muzlatgich-samsung"] = "";
uploads["equip:appliance:idish-yuvish-mashinasi-bosch"] = "";
uploads["equip:appliance:changyutgich-xiaomi"] = "";
uploads["equip:appliance:mikroto-lqinli-pech-lg"] = "";
uploads["equip:appliance:konditsioner-artel"] = "";
uploads["equip:appliance:elektr-pech-bosch"] = "";
uploads["equip:appliance:suv-isitgich-ariston"] = "";
// Mebel
uploads["equip:furniture:divan-to-plami"] = "";
uploads["equip:furniture:yotoqxona-shkafi"] = "";
uploads["equip:furniture:oshxona-stoli-to-plami"] = "";
uploads["equip:furniture:ish-stoli"] = "";
uploads["equip:furniture:yumshoq-kreslo"] = "";
uploads["equip:furniture:kitob-javoni"] = "";
uploads["equip:furniture:bolalar-krovati"] = "";
uploads["equip:furniture:oshxona-stullari-to-plami"] = "";
// Mashina jihozlari
uploads["equip:carparts:video-registrator"] = "";
uploads["equip:carparts:orqa-ko-rish-kamerasi"] = "";
uploads["equip:carparts:avto-akkumulyator"] = "";
uploads["equip:carparts:salon-organayzeri"] = "";
uploads["equip:carparts:multimedia-magnitola"] = "";
uploads["equip:carparts:gps-navigator"] = "";
uploads["equip:carparts:avto-polik-kilamlari"] = "";
uploads["equip:carparts:fara-led-lampalari"] = "";
// Televizorlar
uploads["equip:tv:smart-tv-55"] = "";
uploads["equip:tv:tv-43"] = "";
uploads["equip:tv:android-tv-65"] = "";
uploads["equip:tv:tv-32"] = "";
uploads["equip:tv:smart-tv-50"] = "";
uploads["equip:tv:qled-tv-55"] = "";
uploads["equip:tv:tv-24"] = "";
uploads["equip:tv:smart-tv-75"] = "";
let paintSeq = 0;
const fileTest = {};
function carSlug(car) {
  return car.model
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
function canLoad(src) {
  if (!fileTest[src])
    fileTest[src] = new Promise((res) => {
      const i = new Image();
      i.onload = () => res(true);
      i.onerror = () => res(false);
      i.src = src;
    });
  return fileTest[src];
}
async function resolveImg(keys, paths) {
  for (const k of keys) {
    if (uploads[k]) return uploads[k];
  }
  for (const p of paths) {
    if (await canLoad(p)) return p;
  }
  return null;
}
function paintCarImg(el, car, color) {
  if (!el) return;
  el.innerHTML = carSVG(color.hex);
  const t = ++paintSeq;
  el.dataset.t = t;
  const slug = carSlug(car);
  resolveImg(
    [`car:${slug}:${color.id}`],
    IMG_EXTS.map((e) => `images/${slug}/${color.id}.${e}`),
  ).then((src) => {
    if (src && el.dataset.t == t)
      el.innerHTML = `<img class="car-photo" alt="${car.model}" src="${src}">`;
  });
}
function applyWheelImg(el, wid, car) {
  if (!el) return;
  const slug = carSlug(car);
  const paths = [
    ...IMG_EXTS.map((e) => `images/${slug}/wheel-${wid}.${e}`),
    ...IMG_EXTS.map((e) => `images/wheels/${wid}.${e}`),
  ];
  resolveImg([`wheel:${slug}:${wid}`, `wheel:${wid}`], paths).then((src) => {
    if (el.dataset.w !== wid) return;
    if (src) {
      el.style.backgroundImage = `url("${src}")`;
      el.classList.add("has-img");
    } else {
      el.style.backgroundImage = "";
      el.classList.remove("has-img");
    }
  });
}
function equipSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
function paintEquipImg(el, catKey, item, fallbackIcon, big) {
  if (!el) return;
  el.textContent = fallbackIcon;
  if (big) el.classList.add("eq-icon");
  const t = ++paintSeq;
  el.dataset.t = t;
  const key = `equip:${catKey}:${equipSlug(item.name)}`;
  resolveImg(
    [key],
    IMG_EXTS.map(
      (e) => `images/jihozlar/${catKey}/${equipSlug(item.name)}.${e}`,
    ),
  ).then((src) => {
    if (src && el.dataset.t == t)
      el.innerHTML = `<img alt="${item.name}" src="${src}">`;
  });
}
function refreshWheelPicks() {
  document
    .querySelectorAll("#wheelOpts .rim")
    .forEach((el) => applyWheelImg(el, el.dataset.w, current.car));
}

/* ---------- render grid (filters + favorites) ---------- */
const grid = document.getElementById("carGrid");
const favorites = new Set();
const cardColor = {};
const state = { search: "", brand: "", sort: "default", onlyFav: false };

const brandFilter = document.getElementById("brandFilter");
[...new Set(CARS.map((c) => c.brand))].forEach((b) => {
  brandFilter.innerHTML += `<option value="${b}">${b}</option>`;
});

function fmt(n) {
  return n.toLocaleString("ru-RU").replace(/,/g, " ") + " so'm";
}

function renderGrid() {
  let list = CARS.filter((c) => {
    const s = (c.brand + " " + c.model)
      .toLowerCase()
      .includes(state.search.toLowerCase());
    const b = !state.brand || c.brand === state.brand;
    const f = !state.onlyFav || favorites.has(c.id);
    return s && b && f;
  });
  if (state.sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (state.sort === "year-desc") list.sort((a, b) => b.year - a.year);

  document.getElementById("countLabel").textContent =
    list.length + " " + t("count_suffix");
  grid.innerHTML = "";
  if (list.length === 0) {
    grid.innerHTML = `<div class="empty-cart">${t("no_results")}</div>`;
    return;
  }

  list.forEach((car) => {
    const el = document.createElement("div");
    el.className = "card";
    const isFav = favorites.has(car.id);
    el.innerHTML = `
      <div class="card-visual">
        <div class="badge">${car.brand}</div>
        <button class="fav-btn${isFav ? " active" : ""}" data-favbtn>${isFav ? "♥" : "♡"}</button>
        <div class="car-img"></div>
        <div class="card-dots"></div>
        <div class="heat"></div>
        <div class="spec-flip"><b>${powerText(car)}</b><small>${speedText(car)}</small><small>${transText(car.trans)}</small></div>
      </div>
      <div class="card-body">
        <h3>${car.brand} ${car.model}</h3>
        <div class="sub">${car.year} • ${t("used")}</div>
        <div class="price-row">
          <span class="price">${fmt(car.price)}</span>
          <span class="tag">${t("configure")}</span>
        </div>
      </div>`;
    el.querySelector("[data-favbtn]").onclick = (e) => {
      e.stopPropagation();
      if (favorites.has(car.id)) favorites.delete(car.id);
      else favorites.add(car.id);
      renderGrid();
    };
    const col = cardColor[car.id] || BODY_COLORS[0];
    paintCarImg(el.querySelector(".car-img"), car, col);
    const dots = el.querySelector(".card-dots");
    BODY_COLORS.forEach((c) => {
      const b = document.createElement("button");
      b.className = "cdot" + (c.id === col.id ? " active" : "");
      b.style.background = c.hex;
      b.title = colorName(c.id);
      b.onclick = (e) => {
        e.stopPropagation();
        cardColor[car.id] = c;
        dots
          .querySelectorAll(".cdot")
          .forEach((x) => x.classList.toggle("active", x === b));
        paintCarImg(el.querySelector(".car-img"), car, c);
      };
      dots.appendChild(b);
    });
    el.onclick = () =>
      openDetail(car, (cardColor[car.id] || BODY_COLORS[0]).id);
    grid.appendChild(el);
  });
}
document.getElementById("searchInput").oninput = (e) => {
  state.search = e.target.value;
  renderGrid();
};
brandFilter.onchange = (e) => {
  state.brand = e.target.value;
  renderGrid();
};
document.getElementById("sortFilter").onchange = (e) => {
  state.sort = e.target.value;
  renderGrid();
};
document.getElementById("favToggleBtn").onclick = (e) => {
  state.onlyFav = !state.onlyFav;
  e.target.classList.toggle("active", state.onlyFav);
  e.target.textContent = state.onlyFav ? t("fav_on") : t("fav_off");
  renderGrid();
};
renderGrid();

/* ---------- credit calculator ---------- */
const calcPrice = document.getElementById("calcPrice");
const calcDown = document.getElementById("calcDown");
const calcMonths = document.getElementById("calcMonths");
function updateCalc() {
  const price = +calcPrice.value,
    downPct = +calcDown.value,
    months = +calcMonths.value;
  const down = Math.round((price * downPct) / 100);
  const principal = price - down;
  const rate = 0.24;
  const total = principal * (1 + (rate * months) / 12);
  const monthly = Math.round(total / months);
  document.getElementById("calcPriceVal").textContent = fmt(price);
  document.getElementById("calcDownVal").textContent =
    downPct + "% (" + fmt(down) + ")";
  document.getElementById("calcResult").innerHTML =
    `<div><span>${t("calc_monthly")}</span><span><b>${fmt(monthly)}</b></span></div>
     <div><span>${t("calc_total")}</span><span>${fmt(Math.round(total) + down)}</span></div>`;
}
[calcPrice, calcDown, calcMonths].forEach((el) =>
  el.addEventListener("input", updateCalc),
);
calcMonths.addEventListener("change", updateCalc);
updateCalc();

/* ---------- detail modal ---------- */
function openDetail(car, colorId) {
  current = {
    car,
    body: BODY_COLORS.find((c) => c.id === colorId) || BODY_COLORS[0],
    interior: INTERIOR_COLORS[0],
    wheel: WHEELS[0],
    acc: new Set(),
  };
  document.getElementById("dTitle").textContent = `${car.brand} ${car.model}`;
  renderStage();
  const bs = document.getElementById("bodySwatches");
  bs.innerHTML = "";
  BODY_COLORS.forEach((c) => {
    const s = document.createElement("div");
    s.className = "swatch" + (c.id === current.body.id ? " active" : "");
    s.style.background = c.hex;
    s.title = colorName(c.id);
    s.onclick = () => {
      current.body = c;
      refreshOptions();
    };
    bs.appendChild(s);
  });
  const is = document.getElementById("interiorSwatches");
  is.innerHTML = "";
  INTERIOR_COLORS.forEach((c) => {
    const s = document.createElement("div");
    s.className = "swatch" + (c.id === current.interior.id ? " active" : "");
    s.style.background = c.hex;
    s.title = colorName(c.id);
    s.onclick = () => {
      current.interior = c;
      refreshOptions();
    };
    is.appendChild(s);
  });
  const wo = document.getElementById("wheelOpts");
  wo.innerHTML = "";
  WHEELS.forEach((w) => {
    const d = document.createElement("div");
    d.className = "wheel-pick" + (w.id === current.wheel.id ? " active" : "");
    d.innerHTML = `<div class="rim ${w.cls}" data-w="${w.id}"></div><span>${wheelName(w.id)}</span>`;
    d.onclick = () => {
      current.wheel = w;
      refreshOptions();
    };
    wo.appendChild(d);
    applyWheelImg(d.querySelector(".rim"), w.id, current.car);
  });
  const al = document.getElementById("accList");
  al.innerHTML = "";
  ACCESSORIES.forEach((a) => {
    const lbl = document.createElement("label");
    lbl.innerHTML = `<input type="checkbox" data-id="${a.id}"> ${accName(a.id)} <span class="p">+${fmt(a.price)}</span>`;
    lbl.querySelector("input").onchange = (e) => {
      if (e.target.checked) current.acc.add(a.id);
      else current.acc.delete(a.id);
      updateTotal();
    };
    al.appendChild(lbl);
  });
  updateTotal();
  document.getElementById("overlay").classList.add("open");
}
function refreshOptions() {
  document
    .querySelectorAll("#bodySwatches .swatch")
    .forEach((s, i) =>
      s.classList.toggle("active", BODY_COLORS[i].id === current.body.id),
    );
  document
    .querySelectorAll("#interiorSwatches .swatch")
    .forEach((s, i) =>
      s.classList.toggle(
        "active",
        INTERIOR_COLORS[i].id === current.interior.id,
      ),
    );
  document
    .querySelectorAll("#wheelOpts .wheel-pick")
    .forEach((s, i) =>
      s.classList.toggle("active", WHEELS[i].id === current.wheel.id),
    );
  renderStage();
  updateTotal();
}
function renderStage() {
  paintCarImg(document.getElementById("stageCar"), current.car, current.body);
  const w = current.wheel;
  document.getElementById("stageWheel").innerHTML =
    `<div class="rim rim-big ${w.cls}" data-w="${w.id}"></div><span>${wheelName(w.id)}</span>`;
  applyWheelImg(document.querySelector("#stageWheel .rim"), w.id, current.car);
}
function configPrice() {
  let total = current.car.price + current.wheel.price;
  current.acc.forEach((id) => {
    total += ACCESSORIES.find((a) => a.id === id).price;
  });
  return total;
}
function updateTotal() {
  document.getElementById("dTotal").textContent = fmt(configPrice());
}
function closeDetail() {
  document.getElementById("overlay").classList.remove("open");
}

/* ---------- cart ---------- */
function addConfiguredToCart() {
  cart.push({
    car: current.car,
    body: current.body,
    interior: current.interior,
    wheel: current.wheel,
    acc: Array.from(current.acc),
    total: configPrice(),
  });
  renderCart();
  closeDetail();
  showToast(
    t("toast_added").replace(
      "{name}",
      `${current.car.brand} ${current.car.model}`,
    ),
  );
}
function removeFromCart(i) {
  cart.splice(i, 1);
  renderCart();
}
function renderCart() {
  document.getElementById("cartCount").textContent = cart.length;
  const box = document.getElementById("cartItems");
  if (cart.length === 0) {
    box.innerHTML = `<div class="empty-cart">${t("cart_empty")}</div>`;
  } else {
    box.innerHTML = cart
      .map((it, i) => {
        if (it.type === "equipment") {
          return `<div class="cart-item">
          <div class="ci-icon">${it.icon}</div>
          <div>
            <div class="ci-name">${it.name}</div>
            <div class="ci-opt">${t("cat_" + it.category)}</div>
            <div class="ci-opt">${it.specs || ""}</div>
            <div class="ci-opt"><b>${fmt(it.total)}</b></div>
            <button class="ci-remove" onclick="removeFromCart(${i})">${t("cart_remove")}</button>
          </div>
        </div>`;
        }
        const accNames =
          it.acc.map((id) => accName(id)).join(", ") || t("cart_acc_none");
        return `<div class="cart-item">
        <div class="ci-thumb" data-i="${i}">${carSVG(it.body.hex)}</div>
        <div>
          <div class="ci-name">${it.car.brand} ${it.car.model}</div>
          <div class="ci-opt">${t("cart_body_lbl")} ${colorName(it.body.id)} · ${t("cart_interior_lbl")} ${colorName(it.interior.id)}</div>
          <div class="ci-opt">${t("cart_wheel_lbl")} ${wheelName(it.wheel.id)}</div>
          <div class="ci-opt">${t("cart_acc_lbl")} ${accNames}</div>
          <div class="ci-opt"><b>${fmt(it.total)}</b></div>
          <button class="ci-remove" onclick="removeFromCart(${i})">${t("cart_remove")}</button>
        </div>
      </div>`;
      })
      .join("");
  }
  box.querySelectorAll(".ci-thumb").forEach((el) => {
    const it = cart[+el.dataset.i];
    if (it) paintCarImg(el, it.car, it.body);
  });
  const total = cart.reduce((s, it) => s + it.total, 0) + (deliveryFee || 0);
  document.getElementById("cartTotal").textContent = fmt(total);
  updatePayMethod();
}

/* ---------- payment method ---------- */
function updatePayMethod() {
  const installment = document.getElementById("pmInstallment").checked;
  document.getElementById("installmentBox").style.display = installment
    ? "block"
    : "none";
  if (installment) {
    const total = cart.reduce((s, it) => s + it.total, 0) + (deliveryFee || 0);
    const months = +document.getElementById("payMonths").value;
    const monthly = Math.round((total * (1 + (0.24 * months) / 12)) / months);
    document.getElementById("payMonthly").innerHTML =
      `${t("monthly_label")} <b>${fmt(monthly)}</b>`;
  }
}
document.getElementById("pmCash").onchange = updatePayMethod;
document.getElementById("pmInstallment").onchange = updatePayMethod;
document.getElementById("payMonths").onchange = updatePayMethod;

/* ---------- delivery ---------- */
let deliveryFee = 0;
const fromSel = document.getElementById("fromCity");
const toSel = document.getElementById("toCity");
Object.keys(CITIES).forEach((c) => {
  fromSel.innerHTML += `<option>${c}</option>`;
  toSel.innerHTML += `<option>${c}</option>`;
});
toSel.selectedIndex = 1;
function randomPlate() {
  const region = String(Math.floor(1 + Math.random() * 99)).padStart(2, "0");
  const L1 = "ABCDEFGHJKLMNPQRSTUVXYZ"[Math.floor(Math.random() * 23)];
  const num = String(Math.floor(Math.random() * 900) + 100);
  const L2 = "ABCDEFGHJKLMNPQRSTUVXYZ";
  const suffix =
    L2[Math.floor(Math.random() * 23)] + L2[Math.floor(Math.random() * 23)];
  return `${region} ${L1} ${num} ${suffix}`;
}
function calcDelivery() {
  const from = fromSel.value,
    to = toSel.value;
  const km = Math.max(30, Math.abs(CITIES[from] - CITIES[to]) || 60);
  const hasCar = cart.some((it) => it.type !== "equipment");
  const perKm = hasCar ? 3500 : 1800;
  const base = hasCar ? 80000 : 40000;
  deliveryFee = Math.round(base + km * perKm);
  const vehicleLabel = hasCar
    ? t("delivery_truck_label")
    : t("delivery_car_label");
  const vehicleType = hasCar
    ? t("delivery_truck_type")
    : t("delivery_car_type");
  const r = document.getElementById("dResult");
  r.classList.add("show");
  r.innerHTML = `
    <div><span>${t("delivery_route")}</span><span>${from} → ${to}</span></div>
    <div><span>${t("delivery_distance")}</span><span>${km} km</span></div>
    <div><span>${t("delivery_vehicle_type")}</span><span>${vehicleType}</span></div>
    <div><span>${vehicleLabel}</span><span class="plate">${randomPlate()}</span></div>
    <div><span>${t("delivery_price")}</span><span><b>${fmt(deliveryFee)}</b></span></div>`;
  renderCart();
}

/* ---------- drawer / toast ---------- */
function openDrawer() {
  document.getElementById("drawer").classList.add("open");
  document.getElementById("drawerOverlay").classList.add("open");
}
function closeDrawer() {
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("drawerOverlay").classList.remove("open");
}
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}
function checkout() {
  if (cart.length === 0) {
    showToast(t("toast_cart_empty"));
    return;
  }
  if (!session) {
    closeDrawer();
    openAuth("login");
    showToast(t("toast_login_first"));
    return;
  }
  showToast(t("toast_order_done"));
  cart = [];
  deliveryFee = 0;
  renderCart();
  document.getElementById("dResult").classList.remove("show");
  document.getElementById("pmCash").checked = true;
  closeDrawer();
}
renderCart();
applyLang();
