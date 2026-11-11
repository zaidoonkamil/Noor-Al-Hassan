import type { Locale } from "./i18n";

export type CategoryKey = "school" | "office" | "paper" | "pens" | "gifts" | "art";

const ar = {
  dir: "rtl" as "rtl" | "ltr",
  meta: {
    title: "شركة نور الحسان للتجارة العامة | قرطاسية مدرسية ومكتبية",
    description:
      "شركة نور الحسان للتجارة العامة محدودة المسؤولية — وجهتكم الأولى في بغداد لتجهيز القرطاسية المدرسية والمكتبية والهدايا بالجملة والمفرد، بجودة عالية وأسعار منافسة.",
    siteName: "شركة نور الحسان للتجارة العامة",
  },
  brand: { name: "نور الحسان", full: "شركة نور الحسان", tagline: "للتجارة العامة" },
  nav: {
    links: [
      { href: "#about", label: "من نحن" },
      { href: "#products", label: "منتجاتنا" },
      { href: "#showcase", label: "المعرض" },
      { href: "#why", label: "لماذا نحن" },
      { href: "#contact", label: "راسلنا" },
    ],
    cta: "اطلب عرض سعر",
    switchLabel: "EN",
    menu: "القائمة",
    close: "إغلاق",
  },
  loader: "نُجهّز لكم عالم القرطاسية",
  hero: {
    badge: "شركة خاصة محدودة المسؤولية — بغداد",
    titleA: "نور الحسان",
    titleB: "عالمٌ من القرطاسية",
    titleC: "بين يديك",
    desc: "نجهّز المدارس والجامعات والشركات والمكتبات بكل ما تحتاجه من قرطاسية مدرسية ومكتبية وهدايا فاخرة — جودة موثوقة، أسعار جملة منافسة، وتوصيل سريع.",
    primary: "تصفّح المنتجات",
    secondary: "راسلنا واتساب",
    scroll: "مرّر للأسفل",
    chips: ["أقلام", "دفاتر", "ملفات", "هدايا"],
  },
  marquee: [
    "قرطاسية مدرسية",
    "مستلزمات مكتبية",
    "دفاتر ومذكرات",
    "أقلام فاخرة",
    "أطقم هدايا",
    "ملفات وحافظات",
    "أدوات فنية",
    "توريد بالجملة",
  ],
  about: {
    eyebrow: "من نحن",
    title: "شريككم الموثوق في عالم القرطاسية",
    reveal:
      "شركة نور الحسان للتجارة العامة شركة عراقية خاصة محدودة المسؤولية، متخصصة في استيراد وتوزيع القرطاسية بكل أنواعها. نؤمن أن الأداة الجيدة تصنع فرقاً حقيقياً في التعلّم والعمل، لذلك نختار منتجاتنا بعناية لتصل إليكم بأعلى جودة وأفضل سعر.",
    points: [
      { title: "تجارة عامة", desc: "شركة مسجّلة محدودة المسؤولية" },
      { title: "اختصاص دقيق", desc: "القرطاسية المدرسية والمكتبية" },
      { title: "جملة ومفرد", desc: "للمدارس والشركات والمكتبات" },
    ],
    badge: "قلب بغداد — زيونة",
  },
  products: {
    eyebrow: "منتجاتنا",
    title: "كل ما تحتاجه… في مكان واحد",
    desc: "تشكيلة واسعة ومتجددة تغطي احتياجات الطالب والموظف والمؤسسة.",
    more: "اطلب هذا القسم",
    items: [
      { key: "school", title: "القرطاسية المدرسية", desc: "دفاتر، حقائب أدوات، مساطر، ممحاة ومبراة وكل مستلزمات العام الدراسي.", image: "/images/notebook-rainbow.webp" },
      { key: "office", title: "المستلزمات المكتبية", desc: "دبّاسات، ملفات بوكس، حافظات، أدوات تنظيم وأرشفة للمكاتب والدوائر.", image: "/images/box-files.webp" },
      { key: "paper", title: "الدفاتر والمذكرات", desc: "مذكرات فاخرة، دفاتر سلكية، نوت بوك جلد وتصاميم عصرية.", image: "/images/notebook-marble.webp" },
      { key: "pens", title: "الأقلام وأدوات الكتابة", desc: "أقلام حبر وجاف وجل، أقلام حبر سائل فاخرة وأطقم كتابة.", image: "/images/pens-premium.webp" },
      { key: "gifts", title: "أطقم الهدايا", desc: "أطقم هدايا راقية للشركات والمناسبات بتغليف أنيق.", image: "/images/gift-set.webp" },
      { key: "art", title: "الأدوات الفنية والديكور", desc: "أوراق فنية، أشرطة واشي، ملصقات وأدوات تزيين الدفاتر.", image: "/images/washi-tape.webp" },
    ] as { key: CategoryKey; title: string; desc: string; image: string }[],
  },
  showcase: {
    eyebrow: "المعرض",
    title: "لمحة من تشكيلتنا",
    desc: "مرّر لتتجول بين بعض منتجاتنا المتوفرة.",
    items: [
      { image: "/images/gift-set-box.webp", label: "طقم هدايا تنفيذي" },
      { image: "/images/notebooks-spiral.webp", label: "دفاتر سلكية مزخرفة" },
      { image: "/images/staplers.webp", label: "دبّاسات مكتبية" },
      { image: "/images/journal.webp", label: "مذكرات كلاسيكية" },
      { image: "/images/fountain-kit.webp", label: "أطقم أقلام حبر" },
      { image: "/images/folders.webp", label: "حافظات ملوّنة" },
      { image: "/images/art-paper.webp", label: "أوراق فنية" },
      { image: "/images/notepads.webp", label: "مفكرات صغيرة" },
    ],
  },
  stats: [
    { value: 1500, suffix: "+", label: "صنف متوفر" },
    { value: 6, suffix: "", label: "أقسام رئيسية" },
    { value: 100, suffix: "%", label: "منتجات أصلية" },
    { value: 24, suffix: "", label: "ساعة لتجهيز الطلب" },
  ],
  why: {
    eyebrow: "لماذا نور الحسان",
    title: "تفاصيل صغيرة… تصنع ثقة كبيرة",
    items: [
      { icon: "shield", title: "جودة مضمونة", desc: "نختار موردينا بعناية ونفحص المنتجات قبل وصولها إليكم." },
      { icon: "tag", title: "أسعار جملة منافسة", desc: "أسعار مدروسة للكميات الكبيرة تناسب المدارس والمؤسسات." },
      { icon: "truck", title: "توصيل سريع", desc: "تجهيز وتوصيل الطلبات داخل بغداد والمحافظات بسرعة." },
      { icon: "layers", title: "تشكيلة واسعة", desc: "آلاف الأصناف المتجددة باستمرار لتواكب كل موسم." },
      { icon: "handshake", title: "عقود توريد", desc: "اتفاقيات توريد دورية للشركات والدوائر والمدارس." },
      { icon: "headset", title: "خدمة شخصية", desc: "فريق جاهز للرد على استفساراتكم ومساعدتكم في الاختيار." },
    ],
  },
  process: {
    eyebrow: "كيف نعمل",
    title: "من طلبك… إلى باب مؤسستك",
    steps: [
      { title: "أرسل طلبك", desc: "عبر واتساب أو الهاتف مع قائمة احتياجاتك." },
      { title: "نجهّز عرض السعر", desc: "نرسل لك عرضاً مفصلاً بأفضل الأسعار والبدائل المتاحة." },
      { title: "التجهيز والتغليف", desc: "نجمع طلبك ونفحصه ونغلفه بعناية تامة." },
      { title: "التوصيل", desc: "يصلك الطلب في الموعد المتفق عليه، كاملاً وسليماً." },
    ],
  },
  sectors: {
    eyebrow: "من نخدم",
    title: "نجهّز كل من يكتب ويتعلّم ويعمل",
    items: ["المدارس", "الجامعات والمعاهد", "الشركات", "الدوائر الحكومية", "المكتبات", "المطابع", "رياض الأطفال", "المنظمات"],
  },
  email: {
    eyebrow: "واتساب",
    title: "راسلنا عبر الواتساب",
    desc: "تواصل معنا مباشرة عبر واتساب لطلب عرض سعر أو أي استفسار، وسنرد عليك بأسرع وقت.",
    chat: {
      status: "متصل الآن عادةً",
      greeting: "أهلاً وسهلاً بكم في شركة نور الحسان 👋\nكيف نكدر نساعدكم اليوم؟",
      pick: "اختر موضوع رسالتك:",
      start: "ابدأ المحادثة على واتساب",
    },
    subjects: ["طلب عرض سعر بالجملة", "تجهيز مدرسة / جامعة", "توريد للشركات والدوائر", "أطقم هدايا", "استفسار عام"],
    side: {
      title: "معلومات التواصل",
      phone: "الهاتف",
      whatsapp: "واتساب",
      whatsappText: "دردش معنا الآن",
      address: "العنوان",
      addressValue: "بغداد - زيونة - شارع الربيعي - م ٧١٢ / ز ١٥ / م ١٧ - مكتب رقم ٢٧ - الطابق الثاني",
      hours: "ساعات العمل",
      hoursValue: "السبت – الخميس: ٩:٠٠ ص – ٥:٠٠ م",
      maps: "افتح في الخرائط",
    },
  },
  footer: {
    about: "شركة نور الحسان للتجارة العامة محدودة المسؤولية — شركة خاصة متخصصة في القرطاسية المدرسية والمكتبية.",
    quick: "روابط سريعة",
    contact: "تواصل",
    rights: "جميع الحقوق محفوظة",
    legal: "شركة نور الحسان للتجارة العامة محدودة المسؤولية شركة خاصة",
    top: "للأعلى",
  },
  whatsappMsg: "مرحباً، أود الاستفسار عن منتجات القرطاسية لديكم.",
};

export type Dictionary = typeof ar;

const en: Dictionary = {
  dir: "ltr",
  meta: {
    title: "Noor Al Hassan General Trading | School & Office Stationery",
    description:
      "Noor Al Hassan General Trading Company, a private limited liability company in Baghdad — your trusted supplier of school, office and gift stationery, wholesale and retail.",
    siteName: "Noor Al Hassan General Trading Company",
  },
  brand: { name: "Noor Al Hassan", full: "Noor Al Hassan", tagline: "General Trading" },
  nav: {
    links: [
      { href: "#about", label: "About" },
      { href: "#products", label: "Products" },
      { href: "#showcase", label: "Showcase" },
      { href: "#why", label: "Why us" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Get a quote",
    switchLabel: "عربي",
    menu: "Menu",
    close: "Close",
  },
  loader: "Preparing a world of stationery",
  hero: {
    badge: "Private Limited Liability Company — Baghdad",
    titleA: "Noor Al Hassan",
    titleB: "A world of stationery",
    titleC: "in your hands",
    desc: "We supply schools, universities, companies and bookstores with everything they need — school & office stationery and premium gifts. Trusted quality, competitive wholesale prices, fast delivery.",
    primary: "Explore products",
    secondary: "WhatsApp us",
    scroll: "Scroll",
    chips: ["Pens", "Notebooks", "Files", "Gifts"],
  },
  marquee: [
    "School Stationery",
    "Office Supplies",
    "Notebooks & Journals",
    "Premium Pens",
    "Gift Sets",
    "Files & Folders",
    "Art Supplies",
    "Wholesale Supply",
  ],
  about: {
    eyebrow: "About us",
    title: "Your trusted partner in stationery",
    reveal:
      "Noor Al Hassan General Trading Company is an Iraqi private limited liability company specialized in importing and distributing stationery of every kind. We believe good tools make a real difference in learning and work — so we hand-pick every product to reach you with the best quality and price.",
    points: [
      { title: "General trading", desc: "Registered limited liability company" },
      { title: "Our specialty", desc: "School & office stationery" },
      { title: "Wholesale & retail", desc: "For schools, offices & bookstores" },
    ],
    badge: "Heart of Baghdad — Zayouna",
  },
  products: {
    eyebrow: "Our products",
    title: "Everything you need… in one place",
    desc: "A wide, ever-growing range covering the needs of students, employees and institutions.",
    more: "Request this",
    items: [
      { key: "school", title: "School Stationery", desc: "Notebooks, pencil cases, rulers, erasers, sharpeners and every back-to-school essential.", image: "/images/notebook-rainbow.webp" },
      { key: "office", title: "Office Supplies", desc: "Staplers, box files, folders and organizing tools for offices and departments.", image: "/images/box-files.webp" },
      { key: "paper", title: "Notebooks & Journals", desc: "Premium journals, spiral notebooks, leather notebooks and modern designs.", image: "/images/notebook-marble.webp" },
      { key: "pens", title: "Pens & Writing", desc: "Ballpoint, gel and premium fountain pens plus writing sets.", image: "/images/pens-premium.webp" },
      { key: "gifts", title: "Gift Sets", desc: "Elegant corporate and occasion gift sets with refined packaging.", image: "/images/gift-set.webp" },
      { key: "art", title: "Art & Decor", desc: "Art paper, washi tapes, stickers and journaling decoration tools.", image: "/images/washi-tape.webp" },
    ],
  },
  showcase: {
    eyebrow: "Showcase",
    title: "A glimpse of our range",
    desc: "Scroll to walk through some of our available products.",
    items: [
      { image: "/images/gift-set-box.webp", label: "Executive gift set" },
      { image: "/images/notebooks-spiral.webp", label: "Decorated spiral notebooks" },
      { image: "/images/staplers.webp", label: "Office staplers" },
      { image: "/images/journal.webp", label: "Classic journals" },
      { image: "/images/fountain-kit.webp", label: "Fountain pen kits" },
      { image: "/images/folders.webp", label: "Colorful folders" },
      { image: "/images/art-paper.webp", label: "Art papers" },
      { image: "/images/notepads.webp", label: "Pocket notepads" },
    ],
  },
  stats: [
    { value: 1500, suffix: "+", label: "Items in stock" },
    { value: 6, suffix: "", label: "Main categories" },
    { value: 100, suffix: "%", label: "Genuine products" },
    { value: 24, suffix: "h", label: "Order preparation" },
  ],
  why: {
    eyebrow: "Why Noor Al Hassan",
    title: "Small details… big trust",
    items: [
      { icon: "shield", title: "Guaranteed quality", desc: "We carefully choose suppliers and inspect products before they reach you." },
      { icon: "tag", title: "Wholesale prices", desc: "Competitive pricing for large quantities, ideal for schools and institutions." },
      { icon: "truck", title: "Fast delivery", desc: "Quick preparation and delivery across Baghdad and the provinces." },
      { icon: "layers", title: "Wide range", desc: "Thousands of items, constantly refreshed to match every season." },
      { icon: "handshake", title: "Supply contracts", desc: "Recurring supply agreements for companies, departments and schools." },
      { icon: "headset", title: "Personal service", desc: "A team ready to answer your questions and help you choose." },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "From your order… to your door",
    steps: [
      { title: "Send your request", desc: "Via WhatsApp or phone with your list of needs." },
      { title: "We prepare a quote", desc: "A detailed offer with the best prices and available alternatives." },
      { title: "Packing", desc: "We gather, inspect and pack your order with care." },
      { title: "Delivery", desc: "Your order arrives on time, complete and intact." },
    ],
  },
  sectors: {
    eyebrow: "Who we serve",
    title: "Equipping everyone who writes, learns and works",
    items: ["Schools", "Universities", "Companies", "Government", "Bookstores", "Printing houses", "Kindergartens", "Organizations"],
  },
  email: {
    eyebrow: "WhatsApp",
    title: "Message us on WhatsApp",
    desc: "Reach us directly on WhatsApp for a quote or any question — we'll reply as fast as we can.",
    chat: {
      status: "Typically online",
      greeting: "Welcome to Noor Al Hassan 👋\nHow can we help you today?",
      pick: "Choose a topic:",
      start: "Start chat on WhatsApp",
    },
    subjects: ["Wholesale quote", "School / university supply", "Corporate & government supply", "Gift sets", "General inquiry"],
    side: {
      title: "Contact details",
      phone: "Phone",
      whatsapp: "WhatsApp",
      whatsappText: "Chat with us now",
      address: "Address",
      addressValue: "Baghdad - Zayouna - Al-Rubaie St. - Block 712 / Alley 15 / House 17 - Office 27 - 2nd Floor",
      hours: "Working hours",
      hoursValue: "Sat – Thu: 9:00 AM – 5:00 PM",
      maps: "Open in Maps",
    },
  },
  footer: {
    about: "Noor Al Hassan General Trading Company — a private limited liability company specialized in school and office stationery.",
    quick: "Quick links",
    contact: "Contact",
    rights: "All rights reserved",
    legal: "Noor Al Hassan General Trading Company is a private limited liability company",
    top: "Top",
  },
  whatsappMsg: "Hello, I'd like to ask about your stationery products.",
};

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
