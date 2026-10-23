
const SERVICES_DB = {
  1: {
    id: 1,
    slug: 'wash-and-fold-service',
    title: 'Wash & Fold Everyday Bag',
    badge: 'Everyday Care',
    category: 'Wash & Fold',
    tag: 'Everyday Wash',
    rating: 4.9,
    reviews: 142,
    image: 'assets/laundry-wash-fold.jpg',
    storyImg1: 'assets/about-sustainability.jpg',
    storyImg2: 'assets/about-folded-linens.jpg',
    price: '$18',
    tagline: '"Everyday garments washed in pure, hypoallergenic suds and folded with boutique precision."',
    shortDesc: 'A complete weight-based wash and fold service for daily cottons, casuals, and linens. Cleaned in pH-balanced eco-detergents, tumble-dried at safe temperatures, and crisply bundled.',
    benefitsIntro: 'Discover the ease of effortless everyday laundry — professionally separated by color and fabric weight, sanitized, and returned neatly stacked.',
    benefits: [
      { icon: 'droplets', title: 'pH-Neutral Detergents', desc: 'Plant-derived enzymes break down perspiration and grime without harsh bleaching agents or fabric wear.' },
      { icon: 'shield', title: 'Color-Safe Separation', desc: 'Darks, whites, and delicates are washed in independent cycles to prevent color bleeding and lint transfer.' },
      { icon: 'wind', title: 'Low-Temp Tumble Dry', desc: 'Controlled moisture-sensing dryers preserve natural cotton elasticity and eliminate shrinkage risks.' },
      { icon: 'sparkles', title: 'Boutique Precision Fold', desc: 'Every shirt, trouser, and towel is hand-aligned and folded square for immediate wardrobe transfer.' },
      { icon: 'heart', title: 'Hypoallergenic Finish', desc: 'Zero artificial perfumes or optical brighteners — completely safe for sensitive skin and infant wear.' },
      { icon: 'package', title: 'Breathable Eco Bags', desc: 'Returned in reusable cotton-lined laundry packaging that protects fabrics against moisture and dust.' },
    ],
    pricing: { essential: '$18', signature: '$32', luxury: '$48' },
    skinTypes: [
      { icon: 'leaf', name: 'Cotton & Linens', desc: 'Ideal for daily t-shirts, dress shirts, chinos, and organic cotton bedsheets.', match: 'high', recommended: true },
      { icon: 'droplets', name: 'Athletic Synthetics', desc: 'Deep moisture-wicking cleanse removes stubborn sweat odors without coating fibers.', match: 'high', recommended: true },
      { icon: 'sparkles', name: 'Casual Denim', desc: 'Cold wash cycle protects indigo dyes and prevents hardware abrasion.', match: 'medium', recommended: false },
      { icon: 'flower2', name: 'Mixed Blends', desc: 'Gentle agitated cycle preserves tensile strength across rayon and poly-cotton blends.', match: 'medium', recommended: false },
    ],
    related: [2, 3, 6],
  },
  2: {
    id: 2,
    slug: 'formal-dry-cleaning',
    title: 'Suits & Formal Dry Cleaning',
    badge: 'Dry Cleaning',
    category: 'Dry Cleaning',
    tag: 'Dry Cleaning',
    rating: 4.9,
    reviews: 98,
    image: 'assets/laundry-dry-clean.jpg',
    storyImg1: 'assets/process-inspection.jpg',
    storyImg2: 'assets/about-garment-care.jpg',
    price: '$34',
    tagline: '"Specialized organic solvent dry cleaning that revives structured tailoring without fiber stress."',
    shortDesc: 'Artisanal hydrocarbon dry cleaning designed for wool suits, evening gowns, coats, and formalwear. Gently lifts soil, restores textile drape, and finishes with hand contour pressing.',
    benefitsIntro: 'Experience museum-grade dry cleaning — non-toxic solvent circulation combined with tailored finishing for your most valuable garments.',
    benefits: [
      { icon: 'shield', title: 'Pure Hydrocarbon Solvent', desc: 'Odorless, non-toxic cleaning fluid safeguards delicate wools, silk linings, and structural interfacings.' },
      { icon: 'eraser', title: 'Targeted Stain Lift', desc: 'Pre-spotting masters evaluate wine, grease, and ink under specialized lighting before gentle extraction.' },
      { icon: 'refresh-cw', title: 'Lapel Roll & Drape', desc: 'Tailored contour steam forms preserve bespoke chest canvas and shoulder curvature without flattening.' },
      { icon: 'sun', title: 'Zero Chemical Odor', desc: 'Clean, neutral garment return — completely free from petroleum fumes or stale dry-clean odors.' },
      { icon: 'sparkles', title: 'Button & Trim Protection', desc: 'Mother-of-pearl buttons and metallic accents are foil-wrapped or hand-shielded throughout the cycle.' },
      { icon: 'crown', title: 'Custom Cedar Hangers', desc: 'Delivered on contoured, broad-shoulder hangers protected inside breathable cotton garment covers.' },
    ],
    pricing: { essential: '$34', signature: '$58', luxury: '$85' },
    skinTypes: [
      { icon: 'crown', name: 'Wool & Cashmere', desc: 'Perfect for Super 120s-180s worsted wool suits, heavy winter overcoats, and knitwear.', match: 'high', recommended: true },
      { icon: 'sparkles', name: 'Evening Gowns & Silk', desc: 'Intricate beadwork, chiffon, and pleats treated with zero-agitation dry extraction.', match: 'high', recommended: true },
      { icon: 'shield', name: 'Structured Blazers', desc: 'Maintains tailored shoulder pads and interlinings crisp without bubbling.', match: 'medium', recommended: false },
      { icon: 'flower2', name: 'Tweed & Herringbone', desc: 'Deep-weave vacuum and solvent rinse prevents dust trapping and insect damage.', match: 'medium', recommended: false },
    ],
    related: [3, 5, 8],
  },
  3: {
    id: 3,
    slug: 'steam-ironing-pressing',
    title: 'Executive Steam Ironing',
    badge: 'Steam Pressing',
    category: 'Steam Ironing',
    tag: 'Steam Pressing',
    rating: 4.9,
    reviews: 211,
    image: 'assets/process-pressing.jpg',
    storyImg1: 'assets/laundry-steam-iron.jpg',
    storyImg2: 'assets/process-packaging.jpg',
    price: '$22',
    tagline: '"High-pressure micro-steam pressing that creates mirror-sharp creases and velvet-smooth drape."',
    shortDesc: 'Precision hand steam pressing using vacuum-equipped tables and Italian iron heads. Removes every crease from dress shirts, trousers, pleats, and blouses without glazing or fiber scorch.',
    benefitsIntro: 'Our executive steam ironing ritual delivers boardroom-ready crispness — eliminating wrinkles while relaxing and reviving individual fabric weaves.',
    benefits: [
      { icon: 'wind', title: 'Controlled Micro-Steam', desc: 'High-velocity dry steam penetrates deep into fibers, instantly flattening creases without moisture dampness.' },
      { icon: 'shield', title: 'Zero Fabric Glazing', desc: 'Teflon-coated shoe plates prevent shiny burn marks on dark wools, gabardine, and fine poplin.' },
      { icon: 'sparkles', title: 'Razor-Sharp Creasing', desc: 'Symmetrical leg and sleeve creases set with industrial vacuum tables for all-day sharpness.' },
      { icon: 'sun', title: 'Thermal Sanitization', desc: 'Penetrating 140°C dry steam kills 99.9% of bacteria and allergens while neutralizing lingering odors.' },
      { icon: 'heart', title: 'Collar & Cuff Shaping', desc: 'Dedicated pneumatic presses contour collar points, cuffs, and plackets with bespoke precision.' },
      { icon: 'package', title: 'Wardrobe-Ready Return', desc: 'Packed on non-slip arched hangers with collar stays and protective shoulder shields.' },
    ],
    pricing: { essential: '$22', signature: '$42', luxury: '$68' },
    skinTypes: [
      { icon: 'sun', name: 'Cotton Poplin & Twill', desc: 'Restores crisp, razor-clean front plackets and collar band structure to dress shirts.', match: 'high', recommended: true },
      { icon: 'droplets', name: 'Linen Ensembles', desc: 'Softens stiff linen weaves while locking in relaxed, elegant drape without stiffness.', match: 'high', recommended: true },
      { icon: 'sparkles', name: 'Pleated Silks', desc: 'Hand steam wand alignment preserves accordion pleats without crushing delicate ribbing.', match: 'medium', recommended: false },
      { icon: 'leaf', name: 'Fine Knitwear', desc: 'Light hover steaming relaxes wool and cashmere fibers without stretching garment silhouette.', match: 'medium', recommended: false },
    ],
    related: [1, 2, 5],
  },
  4: {
    id: 4,
    slug: 'curtain-drapery-cleaning',
    title: 'Curtain & Drapery Cleaning',
    badge: 'Home Textile',
    category: 'Home Textile',
    tag: 'Home Textile',
    rating: 5.0,
    reviews: 327,
    image: 'assets/laundry-curtains.jpg',
    storyImg1: 'assets/about-atelier-hero.jpg',
    storyImg2: 'assets/laundry-valet-hero.jpg',
    price: '$45',
    tagline: '"Comprehensive deep-fiber dust, allergen, and pollution extraction for luxury window treatments."',
    shortDesc: 'On-rail or atelier deep cleaning for blackout curtains, velvet drapes, sheers, and pelmets. Removes airborne soot, dust mites, and stubborn atmospheric stains with guaranteed zero shrinkage.',
    benefitsIntro: 'Restore light, freshness, and indoor air purity — comprehensive drapery rejuvenation that preserves pleating geometry and rich textile luster.',
    benefits: [
      { icon: 'wind', title: 'Allergen Extraction', desc: 'Industrial HEPA extraction removes deep dust mite colonies, outdoor pollen, and pet dander.' },
      { icon: 'shield', title: 'Guaranteed Zero Shrinkage', desc: 'Moisture-controlled low-temperature cleaning prevents hem puckering or lining distortion.' },
      { icon: 'droplets', title: 'Solvent & Steam Refresh', desc: 'Gentle solvent mist dissolves oily atmospheric soot and smoke residue without water spotting.' },
      { icon: 'sparkles', title: 'Pinch-Pleat Restoration', desc: 'Every heading pleat is hand-steamed and trained back into architectural column folds.' },
      { icon: 'sun', title: 'UV Barrier Preservation', desc: 'Protective treatments coat sun-exposed drapery fibers, slowing down solar fading and brittle decay.' },
      { icon: 'package', title: 'Complete Takedown & Rehang', desc: 'Optional white-glove service handles unhooking, weighted hem calibration, and precise rehanging.' },
    ],
    pricing: { essential: '$45', signature: '$85', luxury: '$140' },
    skinTypes: [
      { icon: 'leaf', name: 'Heavy Velvets & Jacquards', desc: 'Deep pile dry extraction removes trapped dust while brushing velvet fibers back into a rich pile.', match: 'high', recommended: true },
      { icon: 'droplets', name: 'Linen & Silk Drapes', desc: 'Tension-controlled drying maintains drop height and hem symmetry without stretching.', match: 'high', recommended: true },
      { icon: 'sparkles', name: 'Sheer Voiles', desc: 'Ultrasonic micro-mist bath removes yellowing and restores crystal-clear translucency.', match: 'high', recommended: true },
      { icon: 'flower2', name: 'Blackout Thermal Linings', desc: 'Specially calibrated solvent cleans face fabric without delaminating rubberized thermal backings.', match: 'medium', recommended: false },
    ],
    related: [7, 2, 5],
  },
  5: {
    id: 5,
    slug: 'delicate-garment-care',
    title: 'Delicate Garment Care',
    badge: 'Couture & Silk',
    category: 'Delicate Care',
    tag: 'Delicate Care',
    rating: 4.8,
    reviews: 189,
    image: 'assets/laundry-delicates.jpg',
    storyImg1: 'assets/journal-eco-science.jpg',
    storyImg2: 'assets/journal-cashmere.jpg',
    price: '$28',
    tagline: '"Museum-grade wet-clean and gentle hand-immersion wash for silk, lace, cashmere, and heirloom pieces."',
    shortDesc: 'A specialized gentle wash protocol tailored for fragile silks, beaded lace, pure cashmere, and vintage heirlooms. Washed in neutral saponins with zero mechanical friction, flat-dried, and finished by hand.',
    benefitsIntro: 'Protect irreplaceable textiles with gentle artisanal care — safeguarding color luminosity, tensile strength, and intricate ornamentation.',
    benefits: [
      { icon: 'heart', title: 'Zero-Friction Immersion', desc: 'Gentle submerged acoustic baths clean without the abrasive rubbing or tumbling of conventional machines.' },
      { icon: 'shield', title: 'Silk Saponin Bath', desc: 'pH-calibrated plant saponins condition protein fibers, preventing silk dulling and brittle cracking.' },
      { icon: 'leaf', title: 'Mesh Encasement', desc: 'Fine embroideries, beadwork, and sequins are secured within cushioned silk envelopes during rinsing.' },
      { icon: 'wind', title: 'Cradle Tension Flat-Dry', desc: 'Delicates are laid flat on breathable mesh hammocks in temperature-stabilized drying chambers.' },
      { icon: 'sparkles', title: 'Luster Revival Finish', desc: 'Natural organic conditioning agents restore natural sheen to raw silk, organza, and velvet.' },
      { icon: 'package', title: 'Acid-Free Tissue Fold', desc: 'Delivered wrapped in archival acid-free tissue paper to prevent oxidation and crease marking.' },
    ],
    pricing: { essential: '$28', signature: '$54', luxury: '$95' },
    skinTypes: [
      { icon: 'sparkles', name: 'Raw Silk & Satin', desc: 'Preserves the luminous drape and natural fiber oils of mulberry silk slip dresses and blouses.', match: 'high', recommended: true },
      { icon: 'leaf', name: 'Cashmere & Alpaca', desc: 'Maintains fluffy loft and soft hand without matting, pilling, or dimensional distortion.', match: 'high', recommended: true },
      { icon: 'heart', name: 'Chantilly & Guipure Lace', desc: 'Prevents thread snagging and fiber breakage across heirloom bridal and evening pieces.', match: 'high', recommended: true },
      { icon: 'flower2', name: 'Vintage & Heirlooms', desc: 'Customized spot-testing ensures fragile dyes and aged threads remain completely stable.', match: 'medium', recommended: false },
    ],
    related: [2, 3, 7],
  },
  6: {
    id: 6,
    slug: 'express-doorstep-laundry',
    title: 'Express 24H Turnaround',
    badge: 'Express Service',
    category: 'Express Laundry',
    tag: 'Express Service',
    rating: 4.9,
    reviews: 76,
    image: 'assets/laundry-express.jpg',
    storyImg1: 'assets/process-washing.jpg',
    storyImg2: 'assets/process-packaging.jpg',
    price: '$25',
    tagline: '"Priority scheduled pickup, express cleaning protocol, and doorstep return in as little as 24 hours."',
    shortDesc: 'Rapid turnaround service for busy professionals, travelers, and urgent occasions. Seamless door-to-door courier routing with real-time digital order tracking and meticulous inspection.',
    benefitsIntro: 'Fast-paced living without compromising on laundry excellence — guaranteed 24-hour return with full garment sanitization and tailored presentation.',
    benefits: [
      { icon: 'clock', title: 'Guaranteed 24H Return', desc: 'Picked up morning or afternoon and returned clean, crisp, and ready within 24 hours.' },
      { icon: 'zap', title: 'Dedicated Rapid Line', desc: 'Express items enter dedicated processing drums immediately upon arrival at our atelier.' },
      { icon: 'map-pin', title: 'Live Courier Tracking', desc: 'Track your doorstep pickup and dropoff window with direct digital dispatch notifications.' },
      { icon: 'shield', title: 'Zero Compromise on Quality', desc: 'Every express item undergoes our standard 7-point visual inspection and hand folding.' },
      { icon: 'package', title: 'Waterproof Travel Pack', desc: 'Packed in weather-resistant, sealed protective bags ideal for business trips and commuters.' },
      { icon: 'heart', title: 'Flexible Pickup Windows', desc: 'Choose 1-hour convenience pickup slots from early morning through late evening.' },
    ],
    pricing: { essential: '$25', signature: '$45', luxury: '$75' },
    skinTypes: [
      { icon: 'sparkles', name: 'Business Wardrobes', desc: 'Rapid turnaround for suits, shirts, and ties needed for short-notice presentations.', match: 'high', recommended: true },
      { icon: 'leaf', name: 'Travelers & Luggage', desc: 'Clean, fold, and sanitize entire travel bags immediately after hotel check-in or return.', match: 'high', recommended: true },
      { icon: 'flower2', name: 'Occasion Outfits', desc: 'Fast turnaround for cocktail dresses, black-tie suits, and wedding guest attire.', match: 'medium', recommended: false },
      { icon: 'waves', name: 'Emergency Stains', desc: 'Urgent spot treatment for freshly spilled wine, coffee, or makeup within hours.', match: 'medium', recommended: false },
    ],
    related: [1, 2, 3],
  },
  7: {
    id: 7,
    slug: 'bedding-linen-sanitization',
    title: 'Bedding & Duvet Care',
    badge: 'Bedding Care',
    category: 'Bedding & Linen',
    tag: 'Bedding Care',
    rating: 4.8,
    reviews: 154,
    image: 'assets/journal-linen-care.jpg',
    storyImg1: 'assets/laundry-bedding.jpg',
    storyImg2: 'assets/about-folded-linens.jpg',
    price: '$38',
    tagline: '"Deep thermal sanitization and restorative fluffing for down duvets, wool blankets, and luxury sheets."',
    shortDesc: 'A hygiene-certified cleaning regimen for down comforters, quilts, mattress protectors, and Egyptian cotton sheet sets. Eliminates 99.9% of allergens and dust mites with natural plant softens.',
    benefitsIntro: 'Transform your sleep sanctuary — hospital-grade thermal sanitization combined with featherweight fluffing for serene, clean bedding.',
    benefits: [
      { icon: 'shield', title: '99.9% Allergen Thermal Eradication', desc: 'High-temperature hygienic rinse kills bed mites, mold spores, and airborne allergens.' },
      { icon: 'wind', title: 'Down Loft Restoration', desc: 'Specialized wool-ball tumble cycles separate and re-fluff down clusters to full original loft.' },
      { icon: 'droplets', title: 'Eco Enzyme Rinse', desc: 'Biodegradable detergents lift night oils and yellowing without stiffening fabric fibers.' },
      { icon: 'sun', title: 'Hypoallergenic Freshness', desc: 'Rinsed with purified deionized water to ensure zero soapy residue touches your skin during rest.' },
      { icon: 'sparkles', title: 'Hand Ironed Bed Linens', desc: 'Fitted and flat sheets are rotary-pressed with satin smoothness for hotel-grade luxury.' },
      { icon: 'package', title: 'Vacuum or Breathable Storage', desc: 'Packed in seasonal vacuum bags or breathable zipped cotton duffle cases for easy closet storage.' },
    ],
    pricing: { essential: '$38', signature: '$68', luxury: '$110' },
    skinTypes: [
      { icon: 'wind', name: 'Goose Down & Feathers', desc: 'Restores natural insulating loft and distribution without feather clump damage.', match: 'high', recommended: true },
      { icon: 'droplets', name: 'Egyptian Cotton & Sateen', desc: 'Calender-rolled to restore ultra-smooth high-thread-count sheen and softness.', match: 'high', recommended: true },
      { icon: 'sun', name: 'Heavy Quilts & Bedspreads', desc: 'Extra-capacity drum washing ensures complete soaking, washing, and moisture extraction.', match: 'high', recommended: true },
      { icon: 'leaf', name: 'Woolen & Cashmere Blankets', desc: 'Gentle lanolin-replenishing wash prevents shrinking, felting, or edge warping.', match: 'medium', recommended: false },
    ],
    related: [1, 4, 2],
  },
  8: {
    id: 8,
    slug: 'leather-footwear-revival',
    title: 'Leather & Footwear Revival',
    badge: 'Leather & Suede',
    category: 'Leather Care',
    tag: 'Leather Care',
    rating: 5.0,
    reviews: 93,
    image: 'assets/laundry-shoes.jpg',
    storyImg1: 'assets/about-garment-care.jpg',
    storyImg2: 'assets/contact-consultation.jpg',
    price: '$48',
    tagline: '"Handcrafted cleaning, conditioning, edge refinishing, and waterproofing for fine leather goods and sneakers."',
    shortDesc: 'Artisanal spa treatment for luxury leather shoes, suede boots, designer sneakers, and leather bags. Cleans surfaces, nourishes dried leather with beeswax balms, and applies invisible weather protection.',
    benefitsIntro: 'Restore dignity and longevity to your finest footwear and accessories — master cobbler cleaning, custom color re-waxing, and stain shielding.',
    benefits: [
      { icon: 'sparkles', title: 'Gentle Saddle Foam Cleansing', desc: 'Neutral botanical cleaning foam lifts embedded grime and street salt from porous leathers.' },
      { icon: 'droplets', title: 'Deep Beeswax Conditioning', desc: 'Natural carnauba and beeswax balms replenish moisture, preventing cracking and creasing.' },
      { icon: 'shield', title: 'Invisible Hydrophobic Shield', desc: 'Nano-polymer barrier repels rainwater, coffee spills, and street slush without altering texture.' },
      { icon: 'wind', title: 'Deodorizing Ozone Chamber', desc: 'Insoles and interiors sanitized with active ozone to eliminate odor-causing bacteria.' },
      { icon: 'sun', title: 'Edge Dress & Heel Polish', desc: 'Scuffed soles, heel stacks, and welt stitching hand-burnished to rich factory luster.' },
      { icon: 'package', title: 'Custom Shoe Trees & Bags', desc: 'Returned with cedar aroma pouches in soft flannel drawstring footwear bags.' },
    ],
    pricing: { essential: '$48', signature: '$82', luxury: '$135' },
    skinTypes: [
      { icon: 'crown', name: 'Calfskin & Dress Shoes', desc: 'Deep nourishing creams restore high mirror shines to oxfords, brogues, and loafers.', match: 'high', recommended: true },
      { icon: 'leaf', name: 'Suede & Nubuck', desc: 'Soft brass brushing and dry-solvent eraser blocks revive matte velvet nap without matting.', match: 'high', recommended: true },
      { icon: 'sparkles', name: 'Luxury Designer Sneakers', desc: 'Detailed sole un-yellowing, mesh de-staining, and lace washing restore factory freshness.', match: 'high', recommended: true },
      { icon: 'shield', name: 'Leather Handbags & Belts', desc: 'Gentle conditioning and hardware polishing preserve collector luxury pieces.', match: 'medium', recommended: false },
    ],
    related: [2, 5, 3],
  },
};

function getServiceIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  return id && SERVICES_DB[id] ? id : 1; // default to 1 if not found
}

function populateHero(service) {

  document.getElementById('sd-page-title').textContent = `${service.title} — WashAura`;
  const metaDesc = document.getElementById('sd-meta-desc');
  if (metaDesc) metaDesc.setAttribute('content', service.shortDesc);

  const breadcrumbCurrent = document.getElementById('sd-breadcrumb-current');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = service.title;

  const badge = document.getElementById('sd-hero-badge');
  if (badge) badge.textContent = service.badge;

  const ratingVal = document.getElementById('sd-rating-val');
  const ratingCount = document.getElementById('sd-rating-count');
  if (ratingVal) ratingVal.textContent = service.rating;
  if (ratingCount) ratingCount.textContent = `(${service.reviews} reviews)`;

  const stars = document.getElementById('sd-rating-stars');
  if (stars) {
    const fullCount = Math.floor(service.rating);
    let starsHTML = '';
    for (let i = 0; i < fullCount; i++) {
      starsHTML += '<i data-lucide="star" aria-hidden="true"></i> ';
    }
    stars.innerHTML = starsHTML;
  }

  const title = document.getElementById('sd-hero-title');
  if (title) title.textContent = service.title;

  const tagline = document.getElementById('sd-hero-tagline');
  if (tagline) tagline.textContent = service.tagline;

  const desc = document.getElementById('sd-hero-desc');
  if (desc) desc.textContent = service.shortDesc;

  const price = document.getElementById('sd-price-val');
  if (price) price.textContent = service.price;

  const img = document.getElementById('sd-hero-img');
  if (img) {
    img.src = service.image;
    img.alt = service.title;
  }

  const cardInfoTitle = document.getElementById('sd-card-info-title');
  const cardInfoSub = document.getElementById('sd-card-info-sub');
  if (cardInfoTitle) cardInfoTitle.textContent = service.title;
  if (cardInfoSub) cardInfoSub.textContent = `${service.tag} \u2022 Certified`;

  const bgLayer = document.getElementById('sd-hero-bg-img');
  if (bgLayer) bgLayer.style.backgroundImage = `url('${service.image}')`;
  
  if (window.lucide) window.lucide.createIcons();
}

function populateBenefits(service) {
  const grid = document.getElementById('sd-benefits-grid');
  const intro = document.getElementById('sd-benefits-intro');

  if (intro) intro.textContent = service.benefitsIntro;

  if (!grid) return;
  grid.innerHTML = '';

  service.benefits.forEach((benefit) => {
    const card = document.createElement('div');
    card.className = 'sd-benefit-card';
    card.innerHTML = `
      <div class="sd-benefit-icon">
        <i data-lucide="${benefit.icon}" aria-hidden="true"></i>
      </div>
      <h3 class="sd-benefit-title">${benefit.title}</h3>
      <p class="sd-benefit-desc">${benefit.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function populateStory(service) {
  const img1 = document.getElementById('sd-story-img-1');
  const img2 = document.getElementById('sd-story-img-2');

  if (img1) { img1.src = service.storyImg1 || 'assets/about-sustainability.jpg'; img1.alt = 'Crafted with Advanced Eco-Solvent Care'; }
  if (img2) { img2.src = service.storyImg2 || 'assets/about-garment-care.jpg'; img2.alt = service.title + ' atelier protocol'; }
}

function populatePricing(service) {
  const essentialPrice = document.getElementById('sd-plan-price-essential');
  const signaturePrice = document.getElementById('sd-plan-price-signature');
  const luxuryPrice = document.getElementById('sd-plan-price-luxury');

  if (essentialPrice) essentialPrice.textContent = service.pricing.essential;
  if (signaturePrice) signaturePrice.textContent = service.pricing.signature;
  if (luxuryPrice) luxuryPrice.textContent = service.pricing.luxury;

  const bookBtns = ['sd-book-essential', 'sd-book-signature', 'sd-book-luxury'];
  bookBtns.forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        window.location.href = `contact.html?service=${encodeURIComponent(service.title)}`;
      });
    }
  });
}

function populateSkinTypes(service) {
  const grid = document.getElementById('sd-skintype-grid');
  if (!grid) return;
  grid.innerHTML = '';

  service.skinTypes.forEach((skin) => {
    const card = document.createElement('div');
    card.className = `sd-skin-card sd-match-${skin.match}${skin.recommended ? ' sd-skin-recommended' : ''}`;

    card.innerHTML = `
      ${skin.recommended ? '<span class="sd-skin-recommended-badge">✓ Best Match</span>' : ''}
      <div class="sd-skin-icon" aria-hidden="true"><i data-lucide="${skin.icon || 'sparkles'}" aria-hidden="true"></i></div>
      <h3 class="sd-skin-name">${skin.name}</h3>
      <p class="sd-skin-desc">${skin.desc}</p>
      <div class="sd-skin-match">
        <span class="sd-skin-match-dot"></span>
        <span>${skin.match === 'high' ? 'Excellent Match' : skin.match === 'medium' ? 'Good Match' : 'Works Well'}</span>
      </div>
    `;
    grid.appendChild(card);
  });
  if (window.lucide) window.lucide.createIcons();
}

function populateRelated(service) {
  const grid = document.getElementById('sd-related-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const relatedIds = (service.related || []).slice(0, 3);
  relatedIds.forEach((id) => {
    const related = SERVICES_DB[id];
    if (!related) return;

    const card = document.createElement('article');
    card.className = 'sd-related-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View ${related.title}`);
    card.innerHTML = `
      <div class="sd-related-img-wrap">
        <img src="${related.image}" alt="${related.title}" class="sd-related-img" loading="lazy" />
        <div class="sd-related-overlay"></div>
        <span class="sd-related-badge-tag"><i data-lucide="sparkles" aria-hidden="true"></i> ${related.tag}</span>
      </div>
      <div class="sd-related-body">
        <div class="sd-related-meta">
          <span class="sd-related-rating">&#9733; ${related.rating || '4.9'}</span>
          <span class="sd-related-price">${related.price}</span>
        </div>
        <h3 class="sd-related-title">${related.title}</h3>
        <p class="sd-related-desc">${related.shortDesc ? related.shortDesc.slice(0, 85) + '...' : 'Artisanal garment care crafted for fabric longevity and pristine freshness.'}</p>
        <span class="sd-related-btn">
          <span>View Service</span> <i data-lucide="arrow-right" aria-hidden="true"></i>
        </span>
      </div>
    `;

    card.addEventListener('click', () => {
      sessionStorage.setItem('selectedService', JSON.stringify(related));
      sessionStorage.setItem('selectedServiceId', related.id);
      window.location.href = `servicedetail.html?id=${related.id}&service=${related.slug}`;
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') card.click();
    });

    grid.appendChild(card);
  });
}

function initBookButton(service) {
  const bookBtn = document.getElementById('sd-book-btn');
  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      window.location.href = `contact.html?service=${encodeURIComponent(service.title)}`;
    });
  }

  const quizBtn = document.getElementById('sd-quiz-btn');
  if (quizBtn) {
    quizBtn.addEventListener('click', () => {
      window.location.href = 'contact.html';
    });
  }
}

function initScrollAnimations() {
  const animatable = document.querySelectorAll(
    '.sd-benefit-card, .sd-story-block, .sd-pricing-card, .sd-skin-card, .sd-related-card, .sd-skintype-cta'
  );

  animatable.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
  });

  document.querySelectorAll('.sd-benefit-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });

  document.querySelectorAll('.sd-pricing-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  document.querySelectorAll('.sd-skin-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });

  document.querySelectorAll('.sd-related-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  animatable.forEach((el) => observer.observe(el));
}

function initHeroAnimation() {
  const heroInfo = document.querySelector('.sd-hero-info');
  const heroImgWrap = document.querySelector('.sd-hero-img-wrap');

  if (heroInfo) {
    heroInfo.style.opacity = '0';
    heroInfo.style.transform = 'translateX(-30px)';
    heroInfo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(() => {
      heroInfo.style.opacity = '1';
      heroInfo.style.transform = 'translateX(0)';
    }, 200);
  }

  if (heroImgWrap) {
    heroImgWrap.style.opacity = '0';
    heroImgWrap.style.transform = 'translateX(30px) scale(0.96)';
    heroImgWrap.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
    setTimeout(() => {
      heroImgWrap.style.opacity = '1';
      heroImgWrap.style.transform = 'translateX(0) scale(1)';
    }, 100);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const serviceId = getServiceIdFromURL();
  const service = SERVICES_DB[serviceId];

  if (!service) {
    console.error('Service not found, redirecting...');
    window.location.href = 'services.html';
    return;
  }

  populateHero(service);
  populateBenefits(service);
  populateStory(service);
  populatePricing(service);
  populateSkinTypes(service);
  populateRelated(service);
  initBookButton(service);

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  setTimeout(() => {
    initHeroAnimation();
    initScrollAnimations();
    initActiveNavLinks();
  }, 100);
});

function initActiveNavLinks() {
  const rawPath = window.location.pathname.split('/').pop().toLowerCase();
  const currentPath = (rawPath === '' || rawPath === 'index.html') ? 'index.html' : rawPath;

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefBase = href.split('/').pop().toLowerCase();

    if (hrefBase === currentPath) {
      link.classList.add('active');
    } else if (currentPath === 'servicedetail.html' && hrefBase === 'services.html') {
      link.classList.add('active');
    } else if (currentPath === 'journals detail.html' && hrefBase === 'journals.html') {
      link.classList.add('active');
    } else if ((currentPath === 'index.html' || currentPath === 'home2.html') && link.id === 'nav-home') {
      link.classList.add('active');
    } else if (href.includes('.html') && hrefBase !== currentPath) {
      link.classList.remove('active');
    }
  });

  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-sublink');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefBase = href.split('/').pop().toLowerCase();

    if (hrefBase === currentPath) {
      link.classList.add('active');
    } else if (currentPath === 'servicedetail.html' && hrefBase === 'services.html') {
      link.classList.add('active');
    } else if (currentPath === 'journals detail.html' && hrefBase === 'journals.html') {
      link.classList.add('active');
    }
  });
}
