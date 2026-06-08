/* ═══════════════════════════════════════════
   DIELLI X — Interactive Functionality
   ═══════════════════════════════════════════ */

// ── SUPABASE ──
const SUPABASE_URL = 'https://nmontinovgrxfohdecrh.supabase.co';
const SUPABASE_KEY = 'sb_publishable_P4MfzbM_TXR5v-0cy9mv7w_qdJ8ryvJ';
let supabase = null;
function getSupabase() {
  if (!supabase && window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
  return supabase;
}

// ── TRANSLATIONS ──
const translations = {
  en: {
    // Nav
    navCourts: 'Courts',
    navReserve: 'Reserve',
    navShop: 'Shop',
    navRules: 'Rules & Info',
    navTournaments: 'Tournaments',

    // Hero
    heroLocation: 'Germia · Prishtina, Kosova',
    heroSubtitle: 'TENNIS COURTS',
    heroDescription: 'Two premium courts nestled in Germia Park. Book your game, grab your gear, and join the community.',
    heroReserve: 'Reserve a Court',
    heroShop: 'Shop Merch',

    // Courts
    courtsTitle: 'Our Courts',
    courtsSubtitle: 'Two premium courts in the heart of Germia Park',
    court1Name: 'Court Dielli',
    court1Desc: 'Our flagship court with tournament-grade surface, excellent lighting for evening play, and a perfect view of Germia\'s greenery.',
    court1Feat1: 'Tournament-grade surface',
    court1Feat2: 'Floodlights for evening play',
    court1Feat3: 'Benches & shade area',
    court2Name: 'Court Hëna',
    court2Desc: 'A slightly more sheltered court ideal for practice sessions and beginners. Same premium surface, just a touch more privacy.',
    court2Feat1: 'Premium surface',
    court2Feat2: 'Floodlights for evening play',
    court2Feat3: 'Practice wall available',

    // Reserve
    reserveTitle: 'Reserve a Court',
    reserveSubtitle: '€5 per hour · Book 1 or 2 hours · Open daily 7:00 – 22:00',
    labelCourt: 'Choose Court',
    labelHours: 'Number of Hours',
    labelDate: 'Date',
    labelTime: 'Start Time',
    labelName: 'Full Name',
    labelEmail: 'Email',
    labelPhone: 'Phone Number',
    selectCourt: '— Select —',
    optionCourt1: 'Court Dielli (01)',
    optionCourt2: 'Court Hëna (02)',
    optionHours1: '1 Hour — €5',
    optionHours2: '2 Hours — €10',
    totalLabel: 'Total:',
    summaryNote: 'Payment is made in cash at the courts. Please arrive 10 minutes early.',
    reserveBtn: 'Confirm Reservation',
    confirmTitle: 'Reservation Confirmed!',
    confirmSent: 'We\'ve sent a confirmation to your email. See you on the court! 🎾',
    confirmBookAnother: 'Book Another',
    fillAllFields: 'Please fill in all fields.',
    timeError: 'Courts are open from 7:00 to 22:00. Last booking starts at 21:00.',

    // Shop
    shopTitle: 'DIELLI X Merch',
    shopSubtitle: 'Represent the court. All prices in EUR.',
    addToCart: 'Add to Cart',
    addedFeedback: '✓ Added!',
    cartTitle: '🛒 Your Cart',
    cartEmpty: 'Your cart is empty.',
    cartEach: 'each',
    cartTotal: 'Total:',
    checkoutBtn: 'Checkout',
    cartNote: 'Pick up your merch at the courts — we\'ll have it ready!',
    checkoutAlert: '🛒 Order Summary:\n\n{items}\n\nTotal: €{total}\n\nPick up your merch at DIELLI X courts in Germia Park. We\'ll have it ready for you! Show this on your phone when you arrive.\n\nPayment: Cash or card at pickup.',
    itemPlural: 'item',
    itemPluralS: 'items',

    // Products
    prod1name: 'DIELLI X T-Shirt',
    prod1desc: 'Premium cotton tee with bold DIELLI X print',
    prod2name: 'DIELLI X Hoodie',
    prod2desc: 'Warm fleece hoodie — perfect for chilly Germia evenings',
    prod3name: 'DIELLI X Towel',
    prod3desc: 'Quick-dry sports towel with embroidered logo',
    prod4name: 'DIELLI X Skirt',
    prod4desc: 'Lightweight tennis skirt with built-in shorts',
    prod5name: 'DIELLI X Cap',
    prod5desc: 'Adjustable snapback — keep the sun out of your eyes',
    prod6name: 'DIELLI X Wristbands',
    prod6desc: 'Set of 2 absorbent wristbands with DIELLI X branding',
    prod7name: 'DIELLI X Water Bottle',
    prod7desc: '750ml insulated bottle — stay hydrated on court',
    prod8name: 'DIELLI X Duffel Bag',
    prod8desc: 'Spacious bag for all your tennis gear',

    // Rules
    rulesTitle: 'Rules & Information',
    rulesHeading: '📋 Court Rules',
    rule1: 'You must bring your own tennis rackets and tennis balls. We do not provide equipment.',
    rule2: 'No animals allowed on or near the courts.',
    rule3: 'Proper tennis attire required — tennis shoes only (no black-soled shoes that mark the court).',
    rule4: 'Respect the schedule: Arrive on time. Late arrivals still finish at the booked end time.',
    rule5: 'Maximum 4 players per court at any time.',
    rule6: 'No food or drinks (except water) on the court surface.',
    rule7: 'Keep noise down — respect other players and the park environment.',
    rule8: 'Clean up after yourself. Leave the court as you found it.',
    rule9: 'Weather policy: Courts are outdoor. No refunds for rain, but we\'ll reschedule if available.',
    tipsHeading: '🎾 How to Play: Tips',
    tipForehandTitle: 'The Forehand',
    tipForehand: 'Start with your racket back, body turned sideways. Step into the ball with your front foot, swing low-to-high, and follow through over your opposite shoulder. Keep your eyes on the ball through contact. The forehand is your power shot — use it to dictate play.',
    tipBackhandTitle: 'The Backhand',
    tipBackhand: 'For a two-handed backhand, grip the racket with your dominant hand lower and non-dominant hand above it. Rotate your shoulders, step in, and swing through the ball with both hands. For one-handed, extend your non-dominant arm back for balance. Finish high.',
    tipServeTitle: 'The Serve',
    tipServe: 'Stand sideways behind the baseline. Toss the ball slightly in front and above your hitting shoulder. Arch your back, reach up, and snap your wrist through contact. Aim for the service box diagonally opposite. A consistent serve wins matches.',
    tipVolleyTitle: 'The Volley',
    tipVolley: 'At the net, keep your racket up and in front. No backswing — just punch through the ball with a short, firm motion. Stay on your toes and ready to move. Volleys are about reflexes and positioning, not power.',
    tipScoringTitle: 'Scoring Basics',
    tipScoring: 'Points: Love (0) → 15 → 30 → 40 → Game. If tied at 40-40 ("deuce"), win two points in a row to take the game. Games → Set: First to 6 games, win by 2. At 6-6, a tiebreak is usually played. Sets → Match: Best of 3 or best of 5 sets depending on the tournament.',

    // Tournaments
    tournamentsTitle: 'Tournaments',
    tournamentsSubtitle: 'Compete, connect, and level up your game',
    tournament1Badge: 'Upcoming',
    tournament1Name: 'DIELLI X Summer Open',
    tournament1Date: '📅 July 15–20, 2026',
    tournament1Info: 'Singles & Doubles · All levels welcome · Prize pool: €500',
    tournament1Fee: 'Entry fee: €15 per player',
    tournament2Badge: 'Coming Soon',
    tournament2Name: 'Germia Junior Cup',
    tournament2Date: '📅 August 2026',
    tournament2Info: 'Ages 10–17 · Singles only · Trophies & medals',
    tournament2Fee: 'Entry fee: €10 per player',
    registerTitle: 'Register for a Tournament',
    labelTournament: 'Tournament',
    labelCategory: 'Category',
    labelTName: 'Full Name',
    labelTEmail: 'Email',
    labelTPhone: 'Phone',
    labelLevel: 'Skill Level',
    selectTournament: '— Select —',
    optionTournament1: 'DIELLI X Summer Open (July 15–20)',
    optionTournament2: 'Germia Junior Cup (August 2026)',
    selectCategory: '— Select —',
    optionSingles: 'Singles',
    optionDoubles: 'Doubles',
    selectLevel: '— Select —',
    optionBeginner: 'Beginner',
    optionIntermediate: 'Intermediate',
    optionAdvanced: 'Advanced',
    registerBtn: 'Register for Tournament',
    tournamentConfirmTitle: 'Registered!',
    tournamentConfirmMsg: 'Check your email for tournament details and payment instructions.',

    // Footer
    footerBrand: 'Tennis courts in Germia Park, Prishtina, Kosova',
    footerQuick: 'Quick Links',
    footerContact: 'Contact',
    footerAddress: '📍 Germia Park, Prishtina',
    footerHours: 'Hours',
    footerEveryDay: 'Every day',
    footerHourRate: '€5 / hour',
    footerCopyright: '© 2026 DIELLI X. All rights reserved. | Germia, Prishtina, Kosova',

    // Lang toggle
    langLabel: 'EN',
  },

  sq: {
    // Nav
    navCourts: 'Fushat',
    navReserve: 'Rezervo',
    navShop: 'Dyqani',
    navRules: 'Rregullat',
    navTournaments: 'Turnetë',

    // Hero
    heroLocation: 'Germi · Prishtinë, Kosovë',
    heroSubtitle: 'FUSHA TENISI',
    heroDescription: 'Dy fusha premium në zemër të Parkut të Gërmisë. Rezervo lojën tënde, merr pajisjet dhe bashkohu me komunitetin.',
    heroReserve: 'Rezervo një Fushë',
    heroShop: 'Blej Produkte',

    // Courts
    courtsTitle: 'Fushat Tona',
    courtsSubtitle: 'Dy fusha premium në zemër të Parkut të Gërmisë',
    court1Name: 'Fusha Dielli',
    court1Desc: 'Fusha jonë kryesore me sipërfaqe të nivelit turne, ndriçim të shkëlqyeshëm për lojë në mbrëmje dhe pamje perfekte të gjelbërimit të Gërmisë.',
    court1Feat1: 'Sipërfaqe e nivelit turne',
    court1Feat2: 'Drita për lojë në mbrëmje',
    court1Feat3: 'Stola dhe zonë me hije',
    court2Name: 'Fusha Hëna',
    court2Desc: 'Një fushë pak më e mbrojtur, ideale për seanca stërvitore dhe fillestarë. E njëjta sipërfaqe premium, vetëm pak më shumë privatësi.',
    court2Feat1: 'Sipërfaqe premium',
    court2Feat2: 'Drita për lojë në mbrëmje',
    court2Feat3: 'Muri i stërvitjes në dispozicion',

    // Reserve
    reserveTitle: 'Rezervo një Fushë',
    reserveSubtitle: '€5 për orë · Rezervo 1 ose 2 orë · Hapur çdo ditë 7:00 – 22:00',
    labelCourt: 'Zgjidh Fushën',
    labelHours: 'Numri i Orëve',
    labelDate: 'Data',
    labelTime: 'Ora e Fillimit',
    labelName: 'Emri i Plotë',
    labelEmail: 'Emaili',
    labelPhone: 'Numri i Telefonit',
    selectCourt: '— Zgjidh —',
    optionCourt1: 'Fusha Dielli (01)',
    optionCourt2: 'Fusha Hëna (02)',
    optionHours1: '1 Orë — €5',
    optionHours2: '2 Orë — €10',
    totalLabel: 'Totali:',
    summaryNote: 'Pagesa bëhet me para në dorë te fushat. Ju lutemi ejani 10 minuta më herët.',
    reserveBtn: 'Konfirmo Rezervimin',
    confirmTitle: 'Rezervimi u Konfirmua!',
    confirmSent: 'Ju kemi dërguar një konfirmim në email. Shihemi në fushë! 🎾',
    confirmBookAnother: 'Rezervo Tjetër',
    fillAllFields: 'Ju lutemi plotësoni të gjitha fushat.',
    timeError: 'Fushat janë të hapura nga ora 7:00 deri në 22:00. Rezervimi i fundit fillon në orën 21:00.',

    // Shop
    shopTitle: 'Produktet DIELLI X',
    shopSubtitle: 'Përfaqëso fushën. Të gjitha çmimet në EUR.',
    addToCart: 'Shto në Shportë',
    addedFeedback: '✓ U Shtua!',
    cartTitle: '🛒 Shporta Juaj',
    cartEmpty: 'Shporta juaj është e zbrazët.',
    cartEach: 'copë',
    cartTotal: 'Totali:',
    checkoutBtn: 'Paguaj',
    cartNote: 'Merrni produktet tuaja te fushat — do t\'i kemi gati!',
    checkoutAlert: '🛒 Përmbledhja e Porosisë:\n\n{items}\n\nTotali: €{total}\n\nMerrni produktet tuaja te fushat DIELLI X në Parkun e Gërmisë. Do t\'i kemi gati për ju! Tregoni këtë në telefon kur të vini.\n\nPagesa: Para në dorë ose kartelë gjatë marrjes.',
    itemPlural: 'produkt',
    itemPluralS: 'produkte',

    // Products
    prod1name: 'Blluzë DIELLI X',
    prod1desc: 'Blluzë premium pambuku me stampë të theksuar DIELLI X',
    prod2name: 'Xhup DIELLI X',
    prod2desc: 'Xhup i ngrohtë — perfekt për mbrëmjet e freskëta në Gërmi',
    prod3name: 'Peshqir DIELLI X',
    prod3desc: 'Peshqir sportiv që thahet shpejt me logo të qëndisur',
    prod4name: 'Fund DIELLI X',
    prod4desc: 'Fund i lehtë tenisi me pantallona të shkurtra të integruara',
    prod5name: 'Kapelë DIELLI X',
    prod5desc: 'Kapelë e rregullueshme — mbaj diellin larg syve',
    prod6name: 'Shirita Dore DIELLI X',
    prod6desc: 'Set me 2 shirita absorbues me markën DIELLI X',
    prod7name: 'Shishe Uji DIELLI X',
    prod7desc: 'Shishe e izoluar 750ml — qëndro i hidratuar në fushë',
    prod8name: 'Çantë DIELLI X',
    prod8desc: 'Çantë e gjerë për të gjitha pajisjet e tenisit',

    // Rules
    rulesTitle: 'Rregullat & Informacionet',
    rulesHeading: '📋 Rregullat e Fushës',
    rule1: 'Duhet të sillni reketat dhe topat tuaj të tenisit. Ne nuk ofrojmë pajisje.',
    rule2: 'Nuk lejohen kafshët në ose afër fushave.',
    rule3: 'Kërkohet veshje e duhur tenisi — vetëm këpucë tenisi (jo këpucë me taban të zi që njollosin fushën).',
    rule4: 'Respektoni orarin: Ejani në kohë. Vonesat përfundojnë në orën e caktuar të mbarimit.',
    rule5: 'Maksimumi 4 lojtarë për fushë në çdo kohë.',
    rule6: 'Nuk lejohet ushqim ose pije (përveç ujit) në sipërfaqen e fushës.',
    rule7: 'Mbani zhurmën ulët — respektoni lojtarët e tjerë dhe mjedisin e parkut.',
    rule8: 'Pastroni pas vetes. Lëreni fushën siç e gjetët.',
    rule9: 'Politika e motit: Fushat janë të jashtme. Nuk ka rimbursim për shi, por do të riplanifikojmë nëse ka disponueshmëri.',
    tipsHeading: '🎾 Si të Luash: Këshilla',
    tipForehandTitle: 'Forehand (Goditja e Djathtë)',
    tipForehand: 'Fillo me reketën mbrapa, trupin e kthyer anash. Hap para me këmbën e përparme, lëviz nga poshtë-lart dhe përfundo mbi supin e kundërt. Mbaji sytë te topi gjatë goditjes. Forehand është goditja jote e fuqisë — përdore për të diktuar lojën.',
    tipBackhandTitle: 'Backhand (Goditja e Majtë)',
    tipBackhand: 'Për backhand me dy duar, kap reketën me dorën dominuese poshtë dhe dorën tjetër sipër. Rrotullo shpatullat, hap para dhe lëviz përmes topit me të dyja duart. Për backhand me një dorë, zgjat dorën tjetër prapa për ekuilibër. Përfundo lart.',
    tipServeTitle: 'Servisi',
    tipServe: 'Qëndro anash prapa vijës fundore. Hidhe topin pak përpara dhe mbi supin e goditjes. Harko shpinën, shtrihu lart dhe këput kyçin gjatë kontaktit. Syno kutinë e servisit diagonalisht përballë. Një servis i qëndrueshëm fiton ndeshje.',
    tipVolleyTitle: 'Voleja',
    tipVolley: 'Te rrjeta, mbaje reketën lart dhe përpara. Asnjë lëvizje mbrapa — vetëm godit përmes topit me një lëvizje të shkurtër dhe të fortë. Qëndro në majë të gishtave dhe gati për të lëvizur. Voletë kanë të bëjnë me reflekset dhe pozicionimin, jo fuqinë.',
    tipScoringTitle: 'Bazat e Pikëve',
    tipScoring: 'Pikët: Love (0) → 15 → 30 → 40 → Lojë. Nëse barazohet në 40-40 ("deuce"), fito dy pikë radhazi për të marrë lojën. Lojërat → Set: I pari në 6 lojëra, fito me 2 diferencë. Në 6-6, zakonisht luhet tiebreak. Setet → Ndeshje: Më i miri nga 3 ose 5 sete në varësi të turnit.',

    // Tournaments
    tournamentsTitle: 'Turnetë',
    tournamentsSubtitle: 'Garo, lidhu dhe ngrit nivelin e lojës',
    tournament1Badge: 'Së Shpejti',
    tournament1Name: 'DIELLI X Summer Open',
    tournament1Date: '📅 15–20 Korrik, 2026',
    tournament1Info: 'Singles & Doubles · Të gjitha nivelet · Fondi i çmimeve: €500',
    tournament1Fee: 'Tarifa e hyrjes: €15 për lojtar',
    tournament2Badge: 'Vjen Së Shpejti',
    tournament2Name: 'Germia Junior Cup',
    tournament2Date: '📅 Gusht 2026',
    tournament2Info: 'Moshat 10–17 · Vetëm Singles · Trofe dhe medalje',
    tournament2Fee: 'Tarifa e hyrjes: €10 për lojtar',
    registerTitle: 'Regjistrohu për një Turn',
    labelTournament: 'Turni',
    labelCategory: 'Kategoria',
    labelTName: 'Emri i Plotë',
    labelTEmail: 'Emaili',
    labelTPhone: 'Telefoni',
    labelLevel: 'Niveli',
    selectTournament: '— Zgjidh —',
    optionTournament1: 'DIELLI X Summer Open (15–20 Korrik)',
    optionTournament2: 'Germia Junior Cup (Gusht 2026)',
    selectCategory: '— Zgjidh —',
    optionSingles: 'Singles',
    optionDoubles: 'Doubles',
    selectLevel: '— Zgjidh —',
    optionBeginner: 'Fillestar',
    optionIntermediate: 'Mesatar',
    optionAdvanced: 'I Avancuar',
    registerBtn: 'Regjistrohu për Turn',
    tournamentConfirmTitle: 'U Regjistruat!',
    tournamentConfirmMsg: 'Kontrolloni emailin tuaj për detajet e turnit dhe udhëzimet e pagesës.',

    // Footer
    footerBrand: 'Fushat e tenisit në Parkun e Gërmisë, Prishtinë, Kosovë',
    footerQuick: 'Lidhje të Shpejta',
    footerContact: 'Kontakti',
    footerAddress: '📍 Parku i Gërmisë, Prishtinë',
    footerHours: 'Orari',
    footerEveryDay: 'Çdo ditë',
    footerHourRate: '€5 / orë',
    footerCopyright: '© 2026 DIELLI X. Të gjitha të drejtat e rezervuara. | Gërmi, Prishtinë, Kosovë',

    // Lang toggle
    langLabel: 'SQ',
  }
};

// ── CURRENT LANGUAGE ──
let currentLang = localStorage.getItem('diellix-lang') || 'en';

function t(key) {
  return translations[currentLang][key] || translations['en'][key] || key;
}

function switchLang(lang) {
  if (currentLang === lang) return;
  currentLang = lang;
  localStorage.setItem('diellix-lang', lang);
  applyTranslations();
  renderShop();
  updateCartUI();
  updateLangButtons();
}

function updateLangButtons() {
  document.getElementById('langEn').classList.toggle('active', currentLang === 'en');
  document.getElementById('langSq').classList.toggle('active', currentLang === 'sq');
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key === 'html') return; // skip raw html keys handled in JS
    const text = t(key);
    if (text !== undefined && text !== 'html') {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else if (el.tagName === 'OPTION') {
        el.textContent = text;
      } else {
        el.textContent = text;
      }
    }
  });
  // Update document title
  document.title = currentLang === 'sq'
    ? 'DIELLI X — Fushat e Tenisit · Gërmi, Prishtinë'
    : 'DIELLI X — Tennis Courts · Germia, Prishtina';
}

// ── MERCH PRODUCTS ──
function getProducts() {
  return [
    { id: 1, nameKey: 'prod1name', descKey: 'prod1desc', price: 19.99, emoji: '👕' },
    { id: 2, nameKey: 'prod2name', descKey: 'prod2desc', price: 39.99, emoji: '🧥' },
    { id: 3, nameKey: 'prod3name', descKey: 'prod3desc', price: 14.99, emoji: '🪥' },
    { id: 4, nameKey: 'prod4name', descKey: 'prod4desc', price: 24.99, emoji: '👗' },
    { id: 5, nameKey: 'prod5name', descKey: 'prod5desc', price: 12.99, emoji: '🧢' },
    { id: 6, nameKey: 'prod6name', descKey: 'prod6desc', price: 6.99, emoji: '🎗️' },
    { id: 7, nameKey: 'prod7name', descKey: 'prod7desc', price: 9.99, emoji: '🧴' },
    { id: 8, nameKey: 'prod8name', descKey: 'prod8desc', price: 34.99, emoji: '🎒' },
  ];
}

// ── CART STATE ──
let cart = [];

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  // Language buttons
  updateLangButtons();
  document.getElementById('langEn').addEventListener('click', () => switchLang('en'));
  document.getElementById('langSq').addEventListener('click', () => switchLang('sq'));

  applyTranslations();
  renderShop();
  updateCartUI();
  setupNavScroll();
  setupMobileNav();
  setupReservationForm();
  setupTournamentForm();
  setupCheckout();
  setMinDate();
});

// ── NAV: SCROLL EFFECT ──
function setupNavScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ── NAV: MOBILE TOGGLE ──
function setupMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });
}

// ── SET MIN DATE TO TODAY ──
function setMinDate() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('dateInput').setAttribute('min', today);
}

// ── RESERVATION FORM ──
function setupReservationForm() {
  const form = document.getElementById('reservationForm');
  const hoursSelect = document.getElementById('hoursSelect');
  const totalPrice = document.getElementById('totalPrice');

  hoursSelect.addEventListener('change', () => {
    const hours = parseInt(hoursSelect.value);
    if (hours) {
      totalPrice.textContent = `€${hours * 5}`;
    } else {
      totalPrice.textContent = '€0';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const court = document.getElementById('courtSelect').value;
    const hours = document.getElementById('hoursSelect').value;
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const phone = document.getElementById('phoneInput').value.trim();

    if (!court || !hours || !date || !time || !name || !email || !phone) {
      alert(t('fillAllFields'));
      return;
    }

    const [h, m] = time.split(':').map(Number);
    if (h < 7 || (h === 21 && m > 0) || h > 21) {
      alert(t('timeError'));
      return;
    }

    const total = parseInt(hours) * 5;
    const endHour = (h + parseInt(hours)).toString().padStart(2, '0');
    const endTime = `${endHour}:${m.toString().padStart(2, '0')}`;
    const hourWord = hours === '1' ? (currentLang === 'sq' ? 'orë' : 'hour') : (currentLang === 'sq' ? 'orë' : 'hours');

    // Save to Supabase
    supabase.from('reservations').insert([{
      court, hours: parseInt(hours), date, time,
      name, email, phone, total_euros: total
    }]).then(({ error }) => {
      if (error) console.error('Supabase error:', error);
    });

    const details = document.getElementById('confirmationDetails');
    details.innerHTML = `
      <strong>${name}</strong><br>
      📍 ${court}<br>
      📅 ${formatDate(date)} · ${time} – ${endTime}<br>
      ⏱ ${hours} ${hourWord} · <strong>€${total}</strong><br>
      📧 ${email} · 📞 ${phone}
    `;

    document.getElementById('confirmTitle').setAttribute('data-i18n', 'confirmTitle');
    document.getElementById('confirmSent').setAttribute('data-i18n', 'confirmSent');
    document.getElementById('confirmBookAnother').setAttribute('data-i18n', 'confirmBookAnother');
    applyTranslations();

    form.classList.add('hidden');
    document.getElementById('confirmationMessage').classList.remove('hidden');
    document.getElementById('confirmationMessage').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// ── FORMAT DATE ──
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  const locale = currentLang === 'sq' ? 'sq-AL' : 'en-GB';
  return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

// ── SHOP RENDERING ──
function renderShop() {
  const grid = document.getElementById('shopGrid');
  const products = getProducts();
  grid.innerHTML = products.map(p => `
    <div class="shop-item">
      <div class="shop-item-image">${p.emoji}</div>
      <div class="shop-item-body">
        <h4>${t(p.nameKey)}</h4>
        <p class="shop-item-price">€${p.price.toFixed(2)}</p>
        <button class="btn btn-primary" onclick="addToCart(${p.id}, this)">${t('addToCart')}</button>
      </div>
    </div>
  `).join('');
}

// ── CART LOGIC ──
function addToCart(productId, btnElement) {
  const products = getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();

  const btn = btnElement || document.querySelector(`button[onclick*="addToCart(${productId})"]`);
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = t('addedFeedback');
    btn.style.background = 'var(--court-green)';
    btn.style.borderColor = 'var(--court-green)';
    btn.style.color = 'white';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 1000);
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const itemWord = totalItems === 1 ? t('itemPlural') : t('itemPluralS');
  cartCount.textContent = `${totalItems} ${itemWord}`;
  cartTotal.textContent = `€${totalPrice.toFixed(2)}`;
  checkoutBtn.disabled = totalItems === 0;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="cart-empty">${t('cartEmpty')}</p>`;
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h5>${t(item.nameKey)} ${item.qty > 1 ? `×${item.qty}` : ''}</h5>
          <p>€${item.price.toFixed(2)} ${t('cartEach')}</p>
        </div>
        <span class="cart-item-price">€${(item.price * item.qty).toFixed(2)}</span>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">×</button>
      </div>
    `).join('');
  }
}

// ── CHECKOUT ──
function setupCheckout() {
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const items = cart.map(item => `${t(item.nameKey)} ×${item.qty}`).join(', ');
    const msg = t('checkoutAlert')
      .replace('{items}', items)
      .replace('{total}', total.toFixed(2));
    alert(msg);

    // Save to Supabase
    const orderItems = cart.map(item => ({
      name: t(item.nameKey), price: item.price, qty: item.qty
    }));
    supabase.from('orders').insert([{
      items: orderItems, total_euros: total
    }]).then(({ error }) => {
      if (error) console.error('Supabase error:', error);
    });

    cart = [];
    updateCartUI();
  });
}

// ── TOURNAMENT REGISTRATION ──
function setupTournamentForm() {
  const form = document.getElementById('tournamentForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tournament = document.getElementById('tournamentSelect').value;
    const category = document.getElementById('categorySelect').value;
    const name = document.getElementById('tNameInput').value.trim();
    const email = document.getElementById('tEmailInput').value.trim();
    const phone = document.getElementById('tPhoneInput').value.trim();
    const level = document.getElementById('tLevelInput').value;

    if (!tournament || !category || !name || !email || !phone || !level) {
      alert(t('fillAllFields'));
      return;
    }

    const details = document.getElementById('tournamentDetails');
    details.innerHTML = `
      <strong>${name}</strong><br>
      🏆 ${tournament}<br>
      🎾 ${category} · ${level}<br>
      📧 ${email} · 📞 ${phone}
    `;

    // Save to Supabase
    supabase.from('tournament_registrations').insert([{
      tournament, category, name, email, phone, skill_level: level
    }]).then(({ error }) => {
      if (error) console.error('Supabase error:', error);
    });

    form.reset();
    document.getElementById('tournamentConfirmation').classList.remove('hidden');
    document.getElementById('tournamentConfirmation').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
