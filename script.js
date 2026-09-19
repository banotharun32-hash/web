/**
 * PRIYA RESTAURANT - Modern 3D Luxury Interactive Experience
 * Technologies: Three.js, GSAP, Web Audio API, Vanilla JS
 */

// ==========================================
// 1. DATA COLLECTIONS
// ==========================================

const SPECIALITIES_DATA = [
  {
    id: "spec-1",
    name: "Hyderabadi Biryani",
    category: "Biryani",
    desc: "Slow-cooked dum biryani layered with fragrant aged basmati rice, tender royal spices & saffron aroma.",
    price: "From ₹380",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "spec-2",
    name: "South Indian Delights",
    category: "South Indian",
    desc: "Crispy ghee roast dosas, steamed idlis, spicy medu vadas served with authentic coastal chutneys.",
    price: "From ₹180",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "spec-3",
    name: "North Indian Curries",
    category: "North Indian",
    desc: "Rich, velvety gravies simmered in slow-simmered handi pots with rich churned white butter.",
    price: "From ₹290",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "spec-4",
    name: "Tandoori Starters",
    category: "Starters",
    desc: "Smoky clay-oven kebabs marinated overnight in crushed spices and mustard oil infusions.",
    price: "From ₹320",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "spec-5",
    name: "Indo-Chinese Wok",
    category: "Chinese",
    desc: "High-flame wok creations bursting with fresh scallions, fiery Sichuan pepper & crispy textures.",
    price: "From ₹240",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "spec-6",
    name: "Royal Nizam Desserts",
    category: "Desserts",
    desc: "Traditional saffron rabri, warm gulab jamun, and artisanal kulfi plated with edible gold leaf.",
    price: "From ₹160",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "spec-7",
    name: "Craft Beverages",
    category: "Beverages",
    desc: "Thick royal faloodas, refreshing kesar badam milk, infused spiced coolers and lassis.",
    price: "From ₹140",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=80"
  }
];

const SIGNATURE_DISHES = [
  {
    id: "sig-1",
    name: "Special Chicken Biryani",
    category: "Biryani",
    price: 420,
    desc: "Long grain aged basmati rice cooked on charcoal dum with tender marinated chicken, saffron & fried onions.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    tag: "Chef Special"
  },
  {
    id: "sig-2",
    name: "Paneer Butter Masala",
    category: "Indian",
    price: 340,
    desc: "Cottage cheese simmered in a velvet tomato gravy finished with fresh cream, kasuri methi & farm butter.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=80",
    tag: "Bestseller"
  },
  {
    id: "sig-3",
    name: "Charcoal Chicken Tikka",
    category: "Starters",
    price: 380,
    desc: "Boneless chicken chunks marinated in hung curd, Kashmiri deggi mirch, grilled in traditional clay oven.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80",
    tag: "Smoky"
  },
  {
    id: "sig-4",
    name: "Royal Masala Dosa",
    category: "Indian",
    price: 190,
    desc: "Crispy fermented crepe smeared with house spicy podi, stuffed with spiced potato mash, served with 3 chutneys.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80",
    tag: "Crispy"
  },
  {
    id: "sig-5",
    name: "Crispy Veg Manchurian",
    category: "Chinese",
    price: 260,
    desc: "Golden vegetable dumplings tossed in tangy soy-garlic glaze with bell peppers and spring scallions.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=80",
    tag: "Spicy"
  },
  {
    id: "sig-6",
    name: "Garlic Butter Naan",
    category: "Indian",
    price: 90,
    desc: "Leavened refined flour flatbread baked on tandoor walls, brushed generously with garlic butter and fresh coriander.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
    tag: "Hot & Fresh"
  },
  {
    id: "sig-7",
    name: "Warm Shahi Gulab Jamun",
    category: "Desserts",
    price: 160,
    desc: "Soft fried mawa dumplings soaked in green cardamom and saffron rose syrup, crowned with roasted pistachios.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=800&auto=format&fit=crop&q=80",
    tag: "Sweet Classic"
  },
  {
    id: "sig-8",
    name: "Priya Special Royal Falooda",
    category: "Drinks",
    price: 220,
    desc: "Layered rose syrup, vermicelli, sabja seeds, creamy rabri, dry fruits, topped with rich malai kulfi scoop.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=80",
    tag: "Decadent"
  }
];

const FULL_MENU_ITEMS = [
  ...SIGNATURE_DISHES,
  {
    id: "menu-9",
    name: "Mutton Dum Biryani (Hyderabadi)",
    category: "Biryani",
    price: 520,
    desc: "Prime tender cuts of lamb slow cooked with aromatic spices, caramelized onions, and aged basmati rice.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "menu-10",
    name: "Paneer Tikka Angara",
    category: "Starters",
    price: 310,
    desc: "Marinated malai paneer cubes, capsicum and onions grilled to perfection over coal embers.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "menu-11",
    name: "Dal Makhani Royale",
    category: "Main Course",
    price: 290,
    desc: "Black lentils slow-cooked overnight on tandoor embers with churned butter and fresh cream.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "menu-12",
    name: "Murgh Butter Chicken",
    category: "Main Course",
    price: 390,
    desc: "Tandoori chicken pieces simmered in an indulgent buttery makhani gravy with fenugreek leaves.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "menu-13",
    name: "Chilli Garlic Hakka Noodles",
    category: "Chinese",
    price: 240,
    desc: "Wok-tossed noodles with shredded seasonal veggies, garlic, green chilies and dark soy sauce.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "menu-14",
    name: "Schezwan Chicken Fried Rice",
    category: "Chinese",
    price: 280,
    desc: "Jasmine rice stir-fried in fiery homemade red chili schezwan paste with chicken cubes and eggs.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "menu-15",
    name: "Hyderabadi Double Ka Meetha",
    category: "Desserts",
    price: 180,
    desc: "Crisp fried bread slices soaked in thickened saffron rabri milk, topped with silver vark & nuts.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "menu-16",
    name: "Mango Kesar Lassi",
    category: "Drinks",
    price: 150,
    desc: "Creamy churned curd blended with sweet Alphonso mango pulp and infused with fragrant saffron threads.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800&auto=format&fit=crop&q=80"
  }
];

const CHEFS_DATA = [
  {
    name: "Chef Sanjay Kapoor",
    role: "Executive Master Chef",
    speciality: "Royal Awadhi & Dum Cooking",
    experience: "22+ Years in Luxury Banquets",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Chef Lakshmi Narayanan",
    role: "Culinary Director",
    speciality: "Nizam Biryanis & Heritage Spices",
    experience: "18+ Years in Hyderabadi Cuisine",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Chef Rajesh Chen",
    role: "Head Wok Master",
    speciality: "Contemporary Pan-Asian & Tandoor",
    experience: "15+ Years in Wok Gastronomy",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Chef Ananya Sen",
    role: "Pastry & Dessert Alchemist",
    speciality: "Traditional Indian Confections",
    experience: "12+ Years in Artisanal Sweets",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=800&auto=format&fit=crop&q=80"
  }
];

const EXPERIENCES_DATA = [
  {
    title: "Family Dining",
    desc: "Spacious luxury booths, warm ambient acoustics, and custom multi-course thalis for cherished family memories.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    features: ["Dedicated Family Cabins", "Child-friendly Custom Spicing", "Large Sharing Platters"]
  },
  {
    title: "Romantic Dining",
    desc: "Dimmed candlelight, rose petals, acoustic strings, and an intimate secluded setting designed for two.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&auto=format&fit=crop&q=80",
    features: ["Candlelit Table Decor", "Chef's Surprise Tasting Course", "Complimentary Mocktails"]
  },
  {
    title: "Birthday Celebrations",
    desc: "Turn birthdays into royal spectacles with signature celebration sparklers, customized music, and handcrafted desserts.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80",
    features: ["Complimentary Chef Cake", "Celebration Theme Decor", "Photo Souvenir Keepsake"]
  },
  {
    title: "Corporate Events",
    desc: "High-speed Wi-Fi, audio-visual presentation equipment, quiet dining enclaves, and prompt professional service.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
    features: ["Private Conference Dining", "Pre-set Executive Menus", "Invoice & Billing Assist"]
  },
  {
    title: "Private Parties",
    desc: "Full or partial hall bookings for anniversaries, engagements, and kitty parties with custom catering stations.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80",
    features: ["Custom Live Counters", "Dedicated Banquet Host", "Flexible Seating Layouts"]
  }
];

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80",
    caption: "Grand Nizam Dining Hall",
    category: "Ambiance",
    size: "wide"
  },
  {
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    caption: "Authentic Dum Biryani Plating",
    category: "Food",
    size: "normal"
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
    caption: "State-of-the-art Live Kitchen",
    category: "Kitchen",
    size: "tall"
  },
  {
    src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&auto=format&fit=crop&q=80",
    caption: "Master Chef in Action",
    category: "Chef",
    size: "normal"
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    caption: "Guests Relishing Dinner",
    category: "Guests",
    size: "normal"
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&auto=format&fit=crop&q=80",
    caption: "Romantic Candlelight Corner",
    category: "Ambiance",
    size: "wide"
  },
  {
    src: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80",
    caption: "Tandoori Chicken Skewers",
    category: "Food",
    size: "normal"
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80",
    caption: "Royal Birthday Banquet",
    category: "Events",
    size: "tall"
  }
];

const REVIEWS_DATA = [
  {
    name: "Vikramaditya Rao",
    role: "Food Critic & Hyderabad Resident",
    review: "Excellent food, beautiful atmosphere, and friendly service. The Hyderabadi Dum Biryani brings back the original royal nostalgia of old Nizami feasts.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
  },
  {
    name: "Deepika Chandran",
    role: "Culinary Enthusiast",
    review: "The biryani was delicious and the presentation was amazing. The charcoal tandoori starters and the Paneer Butter Masala are unmatched in flavor and consistency.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
  },
  {
    name: "Arun & Sneha Sharma",
    role: "Regular Diners",
    review: "A perfect place for family dining. Impeccable staff hospitality, warm interiors, and lightning-fast service even on crowded weekends. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
  }
];

const SPECIAL_OFFERS = [
  {
    badge: "Limited Weekend",
    title: "Weekend Family Combo",
    desc: "Enjoy 2 Biryanis, 2 Tandoori Starters, 4 Butter Naans & a complimentary dessert platter.",
    code: "FAMILY20",
    discount: "Flat 20% OFF"
  },
  {
    badge: "Weekdays 12-4 PM",
    title: "Executive Lunch Special",
    desc: "Royal Thali feast with unlimited fragrant rice, choices of 3 curries, freshly baked breads & dessert.",
    code: "ROYALLUNCH",
    discount: "Just ₹499"
  },
  {
    badge: "Celebration",
    title: "Birthday & Anniversary Joy",
    desc: "Book a table of 6 or more and receive a chef-crafted celebration cake + special table styling free.",
    code: "PRIYACELEBRATE",
    discount: "Complimentary Cake"
  },
  {
    badge: "Evening Romance",
    title: "Couple Candlelight Feast",
    desc: "A romantic 4-course curated tasting menu with handcrafted royal mocktails in our secluded cove.",
    code: "COUPLELOVE",
    discount: "Save ₹600"
  }
];

// ==========================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================

let cart = JSON.parse(localStorage.getItem("priya_cart") || "[]");
let appliedDiscount = 0;
let currentMenuCategory = "All";
let currentMenuDiet = "all";
let currentSearchQuery = "";
let currentLightboxIndex = 0;

function saveCart() {
  localStorage.setItem("priya_cart", JSON.stringify(cart));
  updateCartUI();
}

// Gentle synthetic chime using Web Audio API
function playChime(freq = 587.33, duration = 0.25) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + duration);
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio context may be restricted before user gesture
  }
}

// Toast notification
function showToast(message, icon = "check") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span style="color: var(--gold-primary); font-size: 1.2rem;">✦</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  playChime();
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// 3. THREE.JS 3D HERO CANVAS & PARTICLES
// ==========================================

function initThreeHero() {
  const container = document.getElementById("hero-3d-canvas");
  if (!container || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 1.5, 6);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  // Group for floating elements
  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // Luxury Gold Materials
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    metalness: 0.88,
    roughness: 0.22,
    envMapIntensity: 1.5
  });

  const darkPlateMaterial = new THREE.MeshStandardMaterial({
    color: 0x14161f,
    metalness: 0.5,
    roughness: 0.4
  });

  const spiceMaterial = new THREE.MeshStandardMaterial({
    color: 0xc2410c,
    metalness: 0.1,
    roughness: 0.6
  });

  const starAniseMaterial = new THREE.MeshStandardMaterial({
    color: 0x78350f,
    metalness: 0.2,
    roughness: 0.5
  });

  const saffronPollenMaterial = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.3,
    roughness: 0.3
  });

  // 1. Serving Platter (Plate)
  const plateBaseGeo = new THREE.CylinderGeometry(2.1, 1.7, 0.1, 48);
  const plate = new THREE.Mesh(plateBaseGeo, darkPlateMaterial);
  plate.position.y = -0.6;
  mainGroup.add(plate);

  // Golden Rim around the plate
  const rimGeo = new THREE.TorusGeometry(2.12, 0.05, 16, 64);
  rimGeo.rotateX(Math.PI / 2);
  const rim = new THREE.Mesh(rimGeo, goldMaterial);
  rim.position.y = -0.55;
  mainGroup.add(rim);

  // 2. Royal Cloche (Dome Cover)
  const clocheGeo = new THREE.SphereGeometry(1.6, 36, 18, 0, Math.PI * 2, 0, Math.PI * 0.5);
  const cloche = new THREE.Mesh(clocheGeo, goldMaterial);
  cloche.position.y = -0.5;
  mainGroup.add(cloche);

  // Cloche Knob Handle
  const knobGeo = new THREE.SphereGeometry(0.2, 24, 24);
  const knob = new THREE.Mesh(knobGeo, goldMaterial);
  knob.position.y = 1.15;
  mainGroup.add(knob);

  // Golden Orbit Rings
  const orbitRing1 = new THREE.Mesh(
    new THREE.TorusGeometry(2.7, 0.02, 16, 64),
    goldMaterial
  );
  orbitRing1.rotation.x = Math.PI / 3;
  orbitRing1.rotation.y = Math.PI / 6;
  mainGroup.add(orbitRing1);

  const orbitRing2 = new THREE.Mesh(
    new THREE.TorusGeometry(3.1, 0.015, 16, 64),
    goldMaterial
  );
  orbitRing2.rotation.x = -Math.PI / 4;
  orbitRing2.rotation.z = Math.PI / 4;
  mainGroup.add(orbitRing2);

  // Floating Spice Elements (Cardamoms & Star Anise & Chili peppers)
  const floatingObjects = [];

  // Floating cardamoms (capsules/stretched spheres)
  for (let i = 0; i < 7; i++) {
    const cardamomGeo = new THREE.OctahedronGeometry(0.18, 2);
    cardamomGeo.scale(0.8, 1.4, 0.8);
    const cardamom = new THREE.Mesh(cardamomGeo, saffronPollenMaterial);
    const angle = (i / 7) * Math.PI * 2;
    const radius = 2.4 + Math.random() * 0.8;
    cardamom.position.set(
      Math.cos(angle) * radius,
      (Math.random() - 0.5) * 2 + 0.5,
      Math.sin(angle) * radius
    );
    cardamom.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    mainGroup.add(cardamom);
    floatingObjects.push({
      mesh: cardamom,
      speedX: (Math.random() - 0.5) * 0.015,
      speedY: (Math.random() - 0.5) * 0.015,
      speedRot: 0.01 + Math.random() * 0.02,
      baseY: cardamom.position.y,
      phase: Math.random() * Math.PI * 2
    });
  }

  // Floating Star Anise
  for (let i = 0; i < 5; i++) {
    const starGeo = new THREE.DodecahedronGeometry(0.22, 0);
    const star = new THREE.Mesh(starGeo, starAniseMaterial);
    const angle = (i / 5) * Math.PI * 2 + 0.5;
    const radius = 2.6 + Math.random() * 0.6;
    star.position.set(
      Math.cos(angle) * radius,
      (Math.random() - 0.5) * 2.2 + 0.2,
      Math.sin(angle) * radius
    );
    mainGroup.add(star);
    floatingObjects.push({
      mesh: star,
      speedX: (Math.random() - 0.5) * 0.01,
      speedY: (Math.random() - 0.5) * 0.01,
      speedRot: 0.015 + Math.random() * 0.01,
      baseY: star.position.y,
      phase: Math.random() * Math.PI * 2
    });
  }

  // Floating culinary spice dust particles
  const particleCount = 140;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 7;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

    // Golden / Amber shimmer
    colors[i * 3] = 0.85 + Math.random() * 0.15;
    colors[i * 3 + 1] = 0.7 + Math.random() * 0.2;
    colors[i * 3 + 2] = 0.2 + Math.random() * 0.2;
  }

  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  const particles = new THREE.Points(particleGeo, particleMat);
  mainGroup.add(particles);

  // Cinematic Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xfffaed, 2.2);
  mainLight.position.set(5, 8, 5);
  scene.add(mainLight);

  const goldSpotlight = new THREE.PointLight(0xd4af37, 3.5, 12);
  goldSpotlight.position.set(-3, 3, 2);
  scene.add(goldSpotlight);

  const rimLight = new THREE.DirectionalLight(0xe879f9, 0.6);
  rimLight.position.set(0, -4, -3);
  scene.add(rimLight);

  // Mouse Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Responsive Resize
  window.addEventListener("resize", () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Damped mouse rotation
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    mainGroup.rotation.y = elapsedTime * 0.18 + targetX * 0.6;
    mainGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.08 - targetY * 0.4;
    mainGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;

    // Rings rotate on opposite axes
    orbitRing1.rotation.z = elapsedTime * 0.25;
    orbitRing2.rotation.x = -elapsedTime * 0.2;

    // Cloche breathes gently
    cloche.rotation.y = Math.sin(elapsedTime * 0.5) * 0.2;

    // Animate floating spices
    floatingObjects.forEach((item) => {
      item.mesh.rotation.x += item.speedRot;
      item.mesh.rotation.y += item.speedRot * 0.8;
      item.mesh.position.y = item.baseY + Math.sin(elapsedTime * 1.5 + item.phase) * 0.18;
    });

    // Animate particles
    particles.rotation.y = elapsedTime * 0.03;

    renderer.render(scene, camera);
  }

  animate();
}

// Background Ambient Golden Particle Canvas
function initBackgroundParticles() {
  const canvas = document.getElementById("bg-particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 0.8,
    speedY: Math.random() * 0.4 + 0.15,
    speedX: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.2
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.y -= p.speedY;
      p.x += p.speedX;

      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(212, 175, 55, 0.4)";
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// ==========================================
// 4. CARD 3D TILT EFFECT
// ==========================================

function attachTiltListeners() {
  const cards = document.querySelectorAll(".tilt-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
}

// ==========================================
// 5. DOM RENDERING LOGIC
// ==========================================

function renderSpecialities() {
  const container = document.getElementById("specialities-grid");
  if (!container) return;

  container.innerHTML = SPECIALITIES_DATA.map((item) => `
    <div class="speciality-card tilt-card" onclick="filterMenuByCategory('${item.category}')">
      <img src="${item.image}" alt="${item.name}" class="speciality-bg" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80'">
      <div class="speciality-overlay">
        <span class="section-tag" style="margin-bottom: 4px; font-size: 0.75rem;">${item.category}</span>
        <h3 class="speciality-name">${item.name}</h3>
        <p class="speciality-desc">${item.desc}</p>
        <div class="speciality-footer">
          <span class="speciality-price">${item.price}</span>
          <span style="color: var(--gold-primary); font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 4px;">
            Explore Menu →
          </span>
        </div>
      </div>
    </div>
  `).join("");
}

function renderSignatureDishes() {
  const container = document.getElementById("signature-dishes-grid");
  if (!container) return;

  container.innerHTML = SIGNATURE_DISHES.map((dish) => `
    <div class="dish-card tilt-card">
      <div class="dish-image-wrap">
        <img src="${dish.image}" alt="${dish.name}" class="dish-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80'">
        <div class="diet-badge ${dish.isVeg ? 'veg' : 'non-veg'}">
          <span class="diet-dot"></span>
          <span>${dish.isVeg ? 'VEG' : 'NON-VEG'}</span>
        </div>
        ${dish.tag ? `<div style="position: absolute; top: 14px; right: 14px; background: var(--gold-gradient); color: #0b0c10; font-size: 0.7rem; font-weight: 800; padding: 4px 10px; border-radius: var(--radius-full); text-transform: uppercase;">${dish.tag}</div>` : ''}
      </div>
      <div class="dish-details">
        <div class="dish-header">
          <h3 class="dish-title">${dish.name}</h3>
          <span class="dish-price">₹${dish.price}</span>
        </div>
        <p class="dish-desc">${dish.desc}</p>
        <button class="add-to-cart-btn" onclick="addToCart('${dish.id}')">
          <span>+ Add to Order</span>
        </button>
      </div>
    </div>
  `).join("");
}

function renderMenuGrid() {
  const container = document.getElementById("menu-items-grid");
  if (!container) return;

  let filtered = FULL_MENU_ITEMS.filter((item) => {
    const matchesCategory =
      currentMenuCategory === "All" ||
      item.category.toLowerCase() === currentMenuCategory.toLowerCase() ||
      (currentMenuCategory === "Indian" && (item.category === "Indian" || item.category === "Biryani" || item.category === "Main Course"));

    const matchesDiet =
      currentMenuDiet === "all" ||
      (currentMenuDiet === "veg" && item.isVeg) ||
      (currentMenuDiet === "non-veg" && !item.isVeg);

    const matchesSearch =
      !currentSearchQuery ||
      item.name.toLowerCase().includes(currentSearchQuery) ||
      item.desc.toLowerCase().includes(currentSearchQuery);

    return matchesCategory && matchesDiet && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-family: var(--font-serif); color: #ffffff; margin-bottom: 8px;">No delectable dishes match your search</p>
        <p style="font-size: 0.9rem;">Try selecting another category or clearing your search term.</p>
        <button class="btn btn-outline-gold" style="margin-top: 18px;" onclick="resetMenuFilters()">Clear Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((item) => `
    <div class="dish-card tilt-card" style="animation: fadeIn 0.4s ease;">
      <div class="dish-image-wrap">
        <img src="${item.image}" alt="${item.name}" class="dish-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80'">
        <div class="diet-badge ${item.isVeg ? 'veg' : 'non-veg'}">
          <span class="diet-dot"></span>
          <span>${item.isVeg ? 'VEG' : 'NON-VEG'}</span>
        </div>
      </div>
      <div class="dish-details">
        <div class="dish-header">
          <h3 class="dish-title">${item.name}</h3>
          <span class="dish-price">₹${item.price}</span>
        </div>
        <p class="dish-desc">${item.desc}</p>
        <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
          <span>+ Add to Order</span>
        </button>
      </div>
    </div>
  `).join("");

  attachTiltListeners();
}

function renderChefs() {
  const container = document.getElementById("chefs-grid");
  if (!container) return;

  container.innerHTML = CHEFS_DATA.map((chef) => `
    <div class="chef-card tilt-card">
      <div class="chef-img-wrap">
        <img src="${chef.image}" alt="${chef.name}" class="chef-img" loading="lazy">
        <div class="chef-badge">${chef.role}</div>
      </div>
      <div class="chef-info">
        <h3 class="chef-name">${chef.name}</h3>
        <p class="chef-role">${chef.speciality}</p>
        <p class="chef-exp">${chef.experience}</p>
      </div>
    </div>
  `).join("");
}

function renderExperiences() {
  const container = document.getElementById("experiences-grid");
  if (!container) return;

  container.innerHTML = EXPERIENCES_DATA.map((exp) => `
    <div class="exp-card tilt-card">
      <div class="exp-img-wrap">
        <img src="${exp.image}" alt="${exp.title}" class="exp-img" loading="lazy">
      </div>
      <div class="exp-content">
        <h3 class="exp-title">${exp.title}</h3>
        <p class="exp-desc">${exp.desc}</p>
        <ul class="exp-features">
          ${exp.features.map(f => `<li class="exp-feature-item"><span>✦</span> ${f}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

function renderGallery(filter = "All") {
  const container = document.getElementById("gallery-grid");
  if (!container) return;

  const items = filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.category.toLowerCase() === filter.toLowerCase());

  container.innerHTML = items.map((item, idx) => `
    <div class="gallery-item ${item.size || ''}" onclick="openLightbox(${idx})">
      <img src="${item.src}" alt="${item.caption}" class="gallery-img" loading="lazy">
      <div class="gallery-hover">
        <span class="gallery-category-tag">${item.category}</span>
        <h4 class="gallery-caption">${item.caption}</h4>
        <span style="color: var(--gold-light); font-size: 1.4rem;">⊕</span>
      </div>
    </div>
  `).join("");
}

function renderReviews() {
  const container = document.getElementById("reviews-grid");
  if (!container) return;

  container.innerHTML = REVIEWS_DATA.map((rev) => `
    <div class="review-card tilt-card">
      <div>
        <div class="review-stars">
          ${Array(rev.rating).fill("★").join("")}
        </div>
        <p class="review-quote">"${rev.review}"</p>
      </div>
      <div class="review-author">
        <img src="${rev.avatar}" alt="${rev.name}" class="author-avatar" loading="lazy">
        <div>
          <h4 class="author-name">${rev.name}</h4>
          <span class="author-role">${rev.role}</span>
        </div>
      </div>
    </div>
  `).join("");
}

function renderSpecialOffers() {
  const container = document.getElementById("offers-grid");
  if (!container) return;

  container.innerHTML = SPECIAL_OFFERS.map((offer) => `
    <div class="offer-card tilt-card">
      <span class="offer-badge">${offer.badge}</span>
      <h3 class="offer-title">${offer.title}</h3>
      <p class="offer-desc">${offer.desc}</p>
      <div class="offer-footer">
        <div>
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">PROMO CODE</span>
          <span class="offer-code">${offer.code}</span>
        </div>
        <button class="btn btn-outline-gold" style="padding: 8px 18px; font-size: 0.85rem;" onclick="applyPromoFromOffer('${offer.code}')">
          Apply Offer
        </button>
      </div>
    </div>
  `).join("");
}

// ==========================================
// 6. CART FUNCTIONALITY
// ==========================================

function addToCart(dishId) {
  const allDishes = [...SIGNATURE_DISHES, ...FULL_MENU_ITEMS];
  const dish = allDishes.find((d) => d.id === dishId);
  if (!dish) return;

  const existing = cart.find((item) => item.id === dishId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      isVeg: dish.isVeg,
      quantity: 1
    });
  }

  saveCart();
  showToast(`Added "${dish.name}" to your order!`);
  openCartDrawer();
}

function updateCartQuantity(dishId, change) {
  const item = cart.find((i) => i.id === dishId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter((i) => i.id !== dishId);
  }
  saveCart();
}

function removeFromCart(dishId) {
  const item = cart.find((i) => i.id === dishId);
  cart = cart.filter((i) => i.id !== dishId);
  saveCart();
  if (item) {
    showToast(`Removed "${item.name}" from order.`);
  }
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.add("open");
    overlay.classList.add("open");
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
  }
}

function updateCartUI() {
  const badge = document.getElementById("cart-badge");
  const itemsContainer = document.getElementById("cart-items-list");
  const subtotalEl = document.getElementById("cart-subtotal");
  const taxEl = document.getElementById("cart-tax");
  const discountEl = document.getElementById("cart-discount-row");
  const discountAmountEl = document.getElementById("cart-discount-amount");
  const totalEl = document.getElementById("cart-total");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (badge) {
    badge.textContent = totalItems;
    if (totalItems > 0) {
      badge.classList.add("has-items");
    } else {
      badge.classList.remove("has-items");
    }
  }

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <span style="font-size: 3rem; color: var(--border-gold);">🍽</span>
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: #ffffff;">Your order is empty</h4>
        <p style="font-size: 0.88rem;">Explore our royal menu and add your favorite delicacies.</p>
        <button class="btn btn-gold" onclick="closeCartDrawer(); document.getElementById('menu').scrollIntoView({behavior: 'smooth'})">
          Browse Menu
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₹0";
    if (taxEl) taxEl.textContent = "₹0";
    if (discountEl) discountEl.style.display = "none";
    if (totalEl) totalEl.textContent = "₹0";
    return;
  }

  itemsContainer.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80'">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-price">₹${item.price * item.quantity}</span>
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">−</button>
        <span class="qty-num">${item.quantity}</span>
        <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
      </div>
      <button class="cart-item-del-btn" onclick="removeFromCart('${item.id}')" title="Remove">✕</button>
    </div>
  `).join("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  let discount = 0;

  if (appliedDiscount > 0) {
    discount = Math.round((subtotal * appliedDiscount) / 100);
  }

  const finalTotal = Math.max(0, subtotal + taxes - discount);

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (taxEl) taxEl.textContent = `₹${taxes}`;

  if (discountEl && discountAmountEl) {
    if (discount > 0) {
      discountEl.style.display = "flex";
      discountAmountEl.textContent = `-₹${discount}`;
    } else {
      discountEl.style.display = "none";
    }
  }

  if (totalEl) totalEl.textContent = `₹${finalTotal}`;
}

function applyPromoCode() {
  const input = document.getElementById("promo-input");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === "FAMILY20" || code === "PRIYA20") {
    appliedDiscount = 20;
    showToast("Success! 20% discount applied to your order.");
    updateCartUI();
  } else if (code === "ROYALLUNCH" || code === "WELCOME10") {
    appliedDiscount = 10;
    showToast("10% discount applied to your order.");
    updateCartUI();
  } else {
    showToast("Invalid or expired coupon code.");
  }
}

function applyPromoFromOffer(code) {
  const input = document.getElementById("promo-input");
  if (input) input.value = code;
  openCartDrawer();
  applyPromoCode();
}

function handleCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty! Add items first.");
    return;
  }

  const orderId = "PRY-" + Math.floor(100000 + Math.random() * 900000);
  const total = document.getElementById("cart-total")?.textContent || "₹0";

  // Trigger celebration confetti
  if (typeof confetti === "function") {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  const modal = document.getElementById("confirmation-modal");
  const modalContent = document.getElementById("confirmation-modal-content");
  if (modal && modalContent) {
    modalContent.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <div style="width: 70px; height: 70px; margin: 0 auto 16px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 2px solid var(--gold-primary); display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--gold-primary);">
          ✓
        </div>
        <span class="section-tag">Order Received</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: #ffffff; margin-bottom: 8px;">Your Royal Feast is Being Prepared!</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 24px;">
          Order Reference: <strong style="color: var(--gold-light);">${orderId}</strong>
        </p>
        <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px; text-align: left;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9rem;">
            <span>Items Ordered:</span>
            <span style="color: #ffffff; font-weight: 600;">${cart.reduce((s, i) => s + i.quantity, 0)} dishes</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9rem;">
            <span>Total Paid/Payable:</span>
            <span style="color: var(--gold-light); font-weight: 700;">${total}</span>
          </div>
          <div style="display: flex; justify-content: space-between; color: var(--text-muted); font-size: 0.9rem;">
            <span>Estimated Prep Time:</span>
            <span style="color: #ffffff;">25 - 35 Minutes</span>
          </div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px;">
          Our kitchen master has begun crafting your spices. You will receive an SMS confirmation shortly.
        </p>
        <button class="btn btn-gold" onclick="closeConfirmationModal()">Back to Website</button>
      </div>
    `;
    modal.classList.add("active");
  }

  // Clear cart
  cart = [];
  appliedDiscount = 0;
  saveCart();
  closeCartDrawer();
}

function closeConfirmationModal() {
  const modal = document.getElementById("confirmation-modal");
  if (modal) modal.classList.remove("active");
}

// ==========================================
// 7. MENU FILTERING & SEARCH
// ==========================================

function filterMenuByCategory(category) {
  currentMenuCategory = category;

  // Update active pill
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category.toLowerCase() === category.toLowerCase());
  });

  renderMenuGrid();

  // Scroll smoothly to menu if clicked from specialities
  const menuEl = document.getElementById("menu");
  if (menuEl) {
    menuEl.scrollIntoView({ behavior: "smooth" });
  }
}

function setupMenuControls() {
  // Category buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filterMenuByCategory(btn.dataset.category);
    });
  });

  // Veg / Non-veg toggle
  document.querySelectorAll(".diet-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".diet-toggle-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMenuDiet = btn.dataset.diet;
      renderMenuGrid();
    });
  });

  // Search input with debounce
  const searchInput = document.getElementById("menu-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderMenuGrid();
    });
  }
}

function resetMenuFilters() {
  currentMenuCategory = "All";
  currentMenuDiet = "all";
  currentSearchQuery = "";
  const searchInput = document.getElementById("menu-search");
  if (searchInput) searchInput.value = "";

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === "All");
  });

  document.querySelectorAll(".diet-toggle-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.diet === "all");
  });

  renderMenuGrid();
}

// ==========================================
// 8. TABLE BOOKING FORM VALIDATION
// ==========================================

function setupBookingForm() {
  const form = document.getElementById("booking-form");
  if (!form) return;

  // Set min date to today
  const dateInput = document.getElementById("book-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("book-name")?.value.trim();
    const phone = document.getElementById("book-phone")?.value.trim();
    const email = document.getElementById("book-email")?.value.trim();
    const date = document.getElementById("book-date")?.value;
    const time = document.getElementById("book-time")?.value;
    const guests = document.getElementById("book-guests")?.value;
    const request = document.getElementById("book-request")?.value.trim();

    // Validation
    if (!name || name.length < 3) {
      showToast("Please enter your full name.");
      return;
    }
    if (!phone || !/^[0-9+ ]{8,15}$/.test(phone)) {
      showToast("Please enter a valid phone number.");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Please enter a valid email address.");
      return;
    }
    if (!date) {
      showToast("Please select a reservation date.");
      return;
    }
    if (!time) {
      showToast("Please select a dining time slot.");
      return;
    }

    const bookingRef = "TBL-" + Math.floor(1000 + Math.random() * 9000);

    // Save to local storage
    const bookings = JSON.parse(localStorage.getItem("priya_bookings") || "[]");
    bookings.push({
      ref: bookingRef,
      name,
      phone,
      email,
      date,
      time,
      guests,
      request,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem("priya_bookings", JSON.stringify(bookings));

    // Show Confirmation Modal
    const modal = document.getElementById("confirmation-modal");
    const modalContent = document.getElementById("confirmation-modal-content");
    if (modal && modalContent) {
      modalContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
          <div style="width: 70px; height: 70px; margin: 0 auto 16px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 2px solid var(--gold-primary); display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--gold-primary);">
            ✓
          </div>
          <span class="section-tag">Reservation Confirmed</span>
          <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: #ffffff; margin-bottom: 8px;">Table Reserved for ${name}!</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 24px;">
            Booking Reference: <strong style="color: var(--gold-light);">${bookingRef}</strong>
          </p>
          <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 20px; margin-bottom: 24px; text-align: left;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9rem;">
              <span>Date & Time:</span>
              <span style="color: #ffffff; font-weight: 600;">${date} at ${time}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9rem;">
              <span>Number of Guests:</span>
              <span style="color: var(--gold-light); font-weight: 700;">${guests} Guests</span>
            </div>
            <div style="display: flex; justify-content: space-between; color: var(--text-muted); font-size: 0.9rem;">
              <span>Contact Phone:</span>
              <span style="color: #ffffff;">${phone}</span>
            </div>
            ${request ? `<div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(212, 175, 55, 0.2); font-size: 0.85rem; color: var(--text-muted);"><em>Request: "${request}"</em></div>` : ''}
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px;">
            We look forward to welcoming you to Priya Restaurant. A confirmation email and WhatsApp alert have been queued.
          </p>
          <button class="btn btn-gold" onclick="closeConfirmationModal()">Done</button>
        </div>
      `;
      modal.classList.add("active");
    }

    form.reset();
  });
}

// Contact form handling
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Thank you! Your message has been sent to our dining concierge.");
    form.reset();
  });
}

// ==========================================
// 9. LIGHTBOX MODAL
// ==========================================

function openLightbox(index) {
  currentLightboxIndex = index;
  const modal = document.getElementById("gallery-lightbox");
  const img = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");

  if (!modal || !img || !caption) return;

  const item = GALLERY_ITEMS[currentLightboxIndex];
  img.src = item.src;
  caption.textContent = item.caption;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("gallery-lightbox");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  openLightbox(currentLightboxIndex);
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % GALLERY_ITEMS.length;
  openLightbox(currentLightboxIndex);
}

function setupLightboxKeys() {
  window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("gallery-lightbox");
    if (!modal || !modal.classList.contains("active")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevLightbox();
    if (e.key === "ArrowRight") nextLightbox();
  });
}

// ==========================================
// 10. LIVE OPENING HOURS STATUS
// ==========================================

function updateLiveOpeningHours() {
  const pill = document.getElementById("live-status-pill");
  const text = document.getElementById("live-status-text");
  if (!pill || !text) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour + minute / 60;

  const isWeekend = day === 0 || day === 6;
  let isOpen = false;

  if (isWeekend) {
    // Saturday - Sunday: 10:00 AM - 11:30 PM (10.0 to 23.5)
    isOpen = currentTime >= 10.0 && currentTime < 23.5;
  } else {
    // Monday - Friday: 11:00 AM - 11:00 PM (11.0 to 23.0)
    isOpen = currentTime >= 11.0 && currentTime < 23.0;
  }

  if (isOpen) {
    pill.className = "status-live-pill open";
    text.textContent = "We Are Currently Open • Welcome to Dine-In & Delivery";
  } else {
    pill.className = "status-live-pill closed";
    text.textContent = "Currently Closed • Opens at " + (isWeekend ? "10:00 AM" : "11:00 AM");
  }
}

// ==========================================
// 11. GSAP SCROLL & COUNTER ANIMATIONS
// ==========================================

function initGsapAnimations() {
  if (typeof gsap === "undefined") return;

  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Sticky Navbar background reveal
  const navbar = document.getElementById("main-navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  // Animated numbers in About Section
  const counterElements = document.querySelectorAll(".counter-num[data-target]");
  counterElements.forEach((el) => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";

    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          let current = 0;
          const step = Math.ceil(target / 45);
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            el.textContent = current + suffix;
          }, 30);
        }
      });
    } else {
      el.textContent = target + suffix;
    }
  });

  // Active section indicator in navigation
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add("active");
      } else {
        document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.remove("active");
      }
    });
  });
}

// Mobile menu toggle
function setupMobileNav() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
      });
    });
  }
}

// ==========================================
// 12. INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initThreeHero();
  initBackgroundParticles();
  renderSpecialities();
  renderSignatureDishes();
  renderMenuGrid();
  renderChefs();
  renderExperiences();
  renderGallery();
  renderReviews();
  renderSpecialOffers();
  updateCartUI();
  setupMenuControls();
  setupBookingForm();
  setupContactForm();
  setupLightboxKeys();
  updateLiveOpeningHours();
  initGsapAnimations();
  setupMobileNav();
  attachTiltListeners();

  // Refresh Lucide icons if available
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }
});
