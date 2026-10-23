const ARTICLES_DATA = {
  'cashmere-wool-preservation': {
    title: 'The Art of Cashmere & Wool Preservation',
    excerpt: 'How cold-water enzyme baths, non-alkaline saponins, and precision flat-drying protect delicate animal fibers from shrinkage, fiber felting, and structural fatigue.',
    category: 'Garment Care',
    author: 'Amara Silva',
    authorRole: 'Master Textile Conservator',
    authorImg: 'assets/founder1.jpg',
    image: 'assets/journal-cashmere.jpg',
    date: 'Aug 15, 2026',
    readTime: '8 min read',
    views: '2.4k',
    gradient: 'linear-gradient(135deg, #6B4F8A 0%, #B9A7D6 35%, #DCD0E8 65%, #F3EBDD 100%)',
    featured: true,
    caption: 'Inspecting combed virgin merino wool and Mongolian cashmere fibers under polarized magnification at the WashAura Atelier.',
    toc: [
      { id: 'section-structure', label: 'Microscopic Wool Morphology' },
      { id: 'section-felting', label: 'Why Standard Washers Cause Felting' },
      { id: 'section-enzyme', label: 'Enzymatic Neutral Saponin Baths' },
      { id: 'section-drying', label: 'Flat-Block Air Drying Protocols' },
      { id: 'section-storage', label: 'Cedar & Linen Wardrobe Storage' }
    ],
    product: {
      title: 'Wool & Cashmere Conditioning',
      price: '$24/item',
      image: 'assets/about-folded-linens.jpg',
      rating: '5.0 (184 Reviews)',
      link: 'services.html'
    },
    relatedSlugs: ['closed-loop-dry-cleaning-science', 'cotton-shrinkage-and-ironing', 'curtain-and-interior-textile-care'],
    lead: 'Cashmere and virgin wool represent some of nature\'s most sophisticated thermodynamic engineering. Each strand of Capra hircus down possesses an exterior sheath of microscopic imbricated scales that expand or contract in response to humidity and temperature. When cleaned improperly, these delicate cuticle scales interlock irreversibly — causing shrinking, stiffening, and irreversible textile damage.',
    contentHtml: `
      <div class="jnd-content-section" id="section-structure">
        <h2 class="jnd-content-h2">Microscopic Wool Morphology</h2>
        <p class="jnd-content-p">
          Unlike synthetic fibers like polyester or acrylic which feature slick, uniform cylindrical surfaces, raw animal hair fibers are wrapped in overlapping keratin scales. Premium cashmere boasts an exceptionally low micron count — typically between 14 and 16 microns — giving it its weightless softness.
        </p>
        <blockquote class="jnd-blockquote">
          <p>"Natural animal fibers are living structures that respond dynamically to moisture, warmth, and mechanical torque. Preserve the cuticle scale alignment, and your knitwear will outlive generations."</p>
          <cite>— Amara Silva, Master Textile Conservator at WashAura</cite>
        </blockquote>
        <p class="jnd-content-p">
          At WashAura, our delicate wool care uses zero harsh synthetic alkaline cleaners. Traditional home detergents have a pH of 9 to 11, which strips away the fiber's natural lubricating lanolin waxes, leaving hairs brittle and dry. Our atelier uses specialized pH 7.0 neutral botanical washes that hydrate the keratin core while loosening ambient dirt.
        </p>
      </div>

      <div class="jnd-stats-strip">
        <div class="jnd-strip-stat"><span class="jnd-strip-num">15.5µ</span><span class="jnd-strip-label">Fiber Micron</span></div>
        <div class="jnd-strip-divider"></div>
        <div class="jnd-strip-stat"><span class="jnd-strip-num">0%</span><span class="jnd-strip-label">Agitation Friction</span></div>
        <div class="jnd-strip-divider"></div>
        <div class="jnd-strip-stat"><span class="jnd-strip-num">100%</span><span class="jnd-strip-label">pH Neutral</span></div>
        <div class="jnd-strip-divider"></div>
        <div class="jnd-strip-stat"><span class="jnd-strip-num">18°C</span><span class="jnd-strip-label">Hydro-Temp</span></div>
      </div>

      <div class="jnd-content-section" id="section-felting">
        <h2 class="jnd-content-h2">Why Standard Washers Cause Felting</h2>
        <p class="jnd-content-p">
          Felting occurs through the combination of three environmental stressors: elevated water temperature, mechanical agitation, and high pH chemistry. When submerged in hot water, the keratin scales open outward like pinecone scales. The rotational tumbling of a household washer rubs the strands against one another, locking the barbed edges into dense, compacted felt.
        </p>
        <div class="jnd-info-cards">
          <div class="jnd-info-card">
            <h4>Thermal Shock</h4>
            <p>Hot wash cycles force cuticle scales open, leaving the fiber core vulnerable to permanent collapse.</p>
          </div>
          <div class="jnd-info-card">
            <h4>Drum Agitation</h4>
            <p>Mechanical torque braids wet filaments together, causing catastrophic and irreversible shrinking.</p>
          </div>
          <div class="jnd-info-card">
            <h4>Alkaline Detergents</h4>
            <p>High pH solutions dissolve protective natural lanolin, stripping yarn of elastic tensile strength.</p>
          </div>
        </div>
        <p class="jnd-content-p">
          Our precision wool treatment avoids mechanical agitation entirely. Garments rest in temperature-regulated 18°C subterranean baths where micro-effervescent bubbles gently dislodge particulates without disturbing fiber geometry.
        </p>
      </div>

      <div class="jnd-content-section" id="section-enzyme">
        <h2 class="jnd-content-h2">Enzymatic Neutral Saponin Baths</h2>
        <p class="jnd-content-p">
          Commercial dry-cleaning facilities frequently run knits through heavy solvent cycles that dry out animal hair. At WashAura, our conservation team uses custom saponin baths derived from organic soapwort root and cold-pressed botanical oils.
        </p>
        <p class="jnd-content-p">
          Specific targeted proteases and lipases dissolve sweat proteins and sebum oils at biological room temperatures. The bath is maintained with reverse-osmosis purified water stripped of heavy minerals like calcium and magnesium, which cause stiffness in fine knits.
        </p>
        <div class="jnd-callout jnd-callout-tip">
          <div class="jnd-callout-icon"><i data-lucide="lightbulb" aria-hidden="true"></i></div>
          <div class="jnd-callout-body">
            <h4>The Myth of Fabric Softeners</h4>
            <p>Never apply conventional fabric softeners to cashmere. Cationic surfactants coat natural wool in an invisible petroleum silicone film that inhibits breathability, causes moisture entrapment, and accelerates fiber pilling.</p>
          </div>
        </div>
        <p class="jnd-content-p">
          Following the saponin bath, garments receive an infusion of reconstituted pharmaceutical-grade organic lanolin. This restores the protective natural barrier that was worn away by atmospheric friction and daily wear.
        </p>
      </div>

      <div class="jnd-content-section" id="section-drying">
        <h2 class="jnd-content-h2">Flat-Block Air Drying Protocols</h2>
        <p class="jnd-content-p">
          Drying fine knits requires as much discipline as the washing itself. Placing a wet wool sweater on a hanger stretches shoulder seams permanently under water weight. Machine tumble drying will shrink a garment by three sizes in minutes.
        </p>
        <div class="jnd-benefit-list">
          <div class="jnd-benefit-item">
            <div class="jnd-benefit-icon"><i data-lucide="layers" aria-hidden="true"></i></div>
            <div class="jnd-benefit-body">
              <h4>Absorbent Towel Roll</h4>
              <p>Excess moisture is extracted by rolling the garment inside heavy Egyptian cotton towels, pressing flat without twisting or wringing.</p>
            </div>
          </div>
          <div class="jnd-benefit-item">
            <div class="jnd-benefit-icon"><i data-lucide="maximize" aria-hidden="true"></i></div>
            <div class="jnd-benefit-body">
              <h4>Precision Blocking</h4>
              <p>Our specialists measure chest, sleeve, and torso dimensions against initial intake specifications, gently pinning seams on breathable mesh racks.</p>
            </div>
          </div>
          <div class="jnd-benefit-item">
            <div class="jnd-benefit-icon"><i data-lucide="wind" aria-hidden="true"></i></div>
            <div class="jnd-benefit-body">
              <h4>Indirect Climate Control</h4>
              <p>Garments dry in 45% ambient humidity and 20°C filtered laminar air circulation away from radiant heaters or direct ultraviolet sunlight.</p>
            </div>
          </div>
          <div class="jnd-benefit-item">
            <div class="jnd-benefit-icon"><i data-lucide="sparkles" aria-hidden="true"></i></div>
            <div class="jnd-benefit-body">
              <h4>Sonic De-Pilling Finish</h4>
              <p>Once dried, loose surface fuzz is lifted using German copper de-pilling blades that glide over ribs without cutting foundation yarns.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="jnd-content-section" id="section-storage">
        <h2 class="jnd-content-h2">Cedar &amp; Linen Wardrobe Storage</h2>
        <p class="jnd-content-p">
          Seasonal care is the final cornerstone of knitwear longevity. After your WashAura valet returns your cleaned cashmere, follow these essential preservation habits at home:
        </p>
        <div class="jnd-ritual-steps">
          <div class="jnd-ritual-step">
            <div class="jnd-step-num">01</div>
            <div class="jnd-step-body">
              <h4>Post-Season Cleanse</h4>
              <p>Always clean garments before packing them away. Invisible traces of skin lipids and food particles are the primary attractant for clothes moths.</p>
            </div>
          </div>
          <div class="jnd-ritual-step">
            <div class="jnd-step-num">02</div>
            <div class="jnd-step-body">
              <h4>Breathable Linen Envelopes</h4>
              <p>Store folded knitwear in unbleached cotton or linen storage pouches. Avoid plastic totes or vacuum-sealed bags, which trap condensation.</p>
            </div>
          </div>
          <div class="jnd-ritual-step">
            <div class="jnd-step-num">03</div>
            <div class="jnd-step-body">
              <h4>Aromatic Red Cedar</h4>
              <p>Place natural cedar blocks or dried lavender sachet pillows near folded garments. Lightly sand cedar every autumn to reactivate repellent terpenes.</p>
            </div>
          </div>
          <div class="jnd-ritual-step">
            <div class="jnd-step-num">04</div>
            <div class="jnd-step-body">
              <h4>Seasonal Aeration</h4>
              <p>Before putting on stored wool in autumn, hang garments in a well-ventilated room for two hours to allow crimped fibers to drink in ambient humidity.</p>
            </div>
          </div>
        </div>
        <div class="jnd-callout jnd-callout-note">
          <div class="jnd-callout-icon"><i data-lucide="info" aria-hidden="true"></i></div>
          <div class="jnd-callout-body">
            <h4>A Note on Moth Protection</h4>
            <p>Never store garments with synthetic mothballs containing naphthalene or paradichlorobenzene. These chemicals emit toxic vapors that chemically weaken animal protein fibers.</p>
          </div>
        </div>
      </div>
    `
  },

  'closed-loop-dry-cleaning-science': {
    title: 'Why Closed-Loop Dry Cleaning Protects Couture Silks',
    excerpt: 'A deep-dive into non-toxic modified alcohol and liquid silicone solvents that dissolve stubborn stains without stripping delicate dye pigments.',
    category: 'Textile Science',
    author: 'Dr. Nadia Chen',
    authorRole: 'Textile Chemist & Fiber Scientist',
    authorImg: 'assets/founder2.jpg',
    image: 'assets/journal-eco-science.jpg',
    date: 'Aug 10, 2026',
    readTime: '6 min read',
    views: '1.9k',
    gradient: 'linear-gradient(135deg, #6B4F8A 0%, #A8C5A0 50%, #F3EBDD 100%)',
    featured: false,
    caption: 'Precision distillation cylinders and closed-circuit filtration in WashAura eco dry-cleaning chambers.',
    toc: [
      { id: 'section-perc-history', label: 'The Decline of Harsh Chemicals' },
      { id: 'section-silicone-science', label: 'Liquid Silicone & Eco-Solvents' },
      { id: 'section-silk-fibers', label: 'Protecting Delicate Silk Fibroin' },
      { id: 'section-stain-removal', label: 'Targeted Ultrasonic Spotting' },
      { id: 'section-odor-elimination', label: 'Zero-Residue Freshness' }
    ],
    product: {
      title: 'Couture Silk Dry Cleaning',
      price: '$28/item',
      image: 'assets/laundry-dry-clean.jpg',
      rating: '4.9 (210 Reviews)',
      link: 'services.html'
    },
    relatedSlugs: ['cashmere-wool-preservation', 'sustainable-wardrobe-longevity', 'cotton-shrinkage-and-ironing'],
    lead: 'For over eight decades, traditional dry cleaning relied heavily on perchloroethylene (PERC) — a chlorinated hydrocarbon effective at stripping oils but notoriously aggressive toward natural fibers, dye binders, and the environment. WashAura has pioneered closed-loop liquid silicone dry cleaning, protecting luxury garments while achieving zero atmospheric emissions.',
    contentHtml: `
      <div class="jnd-content-section" id="section-perc-history">
        <h2 class="jnd-content-h2">The Decline of Harsh Chemicals</h2>
        <p class="jnd-content-p">
          PERC solvent dissolves natural fiber coatings, causing silks to feel crunchy and wool suits to lose their natural drape over successive cleanings. It also causes fragile trims like mother-of-pearl buttons, horn toggles, and sequins to dissolve or cloud.
        </p>
        <blockquote class="jnd-blockquote">
          <p>"Modern dry cleaning should restore textile integrity, not slowly erode fiber polymers with aggressive petrochemicals."</p>
          <cite>— Dr. Nadia Chen, Head Textile Chemist at WashAura</cite>
        </blockquote>
      </div>

      <div class="jnd-stats-strip">
        <div class="jnd-strip-stat"><span class="jnd-strip-num">0%</span><span class="jnd-strip-label">PERC Content</span></div>
        <div class="jnd-strip-divider"></div>
        <div class="jnd-strip-stat"><span class="jnd-strip-num">99.8%</span><span class="jnd-strip-label">Closed-Loop Recovery</span></div>
        <div class="jnd-strip-divider"></div>
        <div class="jnd-strip-stat"><span class="jnd-strip-num">100%</span><span class="jnd-strip-label">Odor-Free</span></div>
        <div class="jnd-strip-divider"></div>
        <div class="jnd-strip-stat"><span class="jnd-strip-num">Grade A</span><span class="jnd-strip-label">Silk Safety</span></div>
      </div>

      <div class="jnd-content-section" id="section-silicone-science">
        <h2 class="jnd-content-h2">Liquid Silicone &amp; Eco-Solvents</h2>
        <p class="jnd-content-p">
          WashAura uses Decamethylcyclopentasiloxane (pure liquid silicone D5) paired with biodegradable modified alcohols. Liquid silicone carries surface tension one-third that of water, allowing it to effortlessly penetrate micro-interstices between woven yarns without swelling individual filaments.
        </p>
        <div class="jnd-info-cards">
          <div class="jnd-info-card">
            <h4>No Fiber Swelling</h4>
            <p>Unlike water, liquid silicone does not cause yarn expansion, preventing distortion on delicate weaves.</p>
          </div>
          <div class="jnd-info-card">
            <h4>Color Fastness</h4>
            <p>Insoluble to vegetable and acid dyes, guaranteeing rich darks and pastels never bleed or fade.</p>
          </div>
          <div class="jnd-info-card">
            <h4>Pure Closed-Loop</h4>
            <p>After each cycle, 99.8% of solvent is distilled, vapor-condensed, and purified for immediate reuse.</p>
          </div>
        </div>
      </div>

      <div class="jnd-content-section" id="section-silk-fibers">
        <h2 class="jnd-content-h2">Protecting Delicate Silk Fibroin</h2>
        <p class="jnd-content-p">
          Mulberry silk consists of a crystalline protein called fibroin, bound naturally by sericin gum. Liquid silicone acts as a molecular cushion, lubricating the protein chains during low-RPM rotation. The result is silk that retains its original liquid luster, buttery hand-feel, and fluid movement.
        </p>
      </div>

      <div class="jnd-content-section" id="section-stain-removal">
        <h2 class="jnd-content-h2">Targeted Ultrasonic Spotting</h2>
        <p class="jnd-content-p">
          Before entering the dry-cleaning chamber, all garments undergo inspection on our vacuum spotting tables. Ultrasonic transducers oscillate at 40,000 Hz, breaking surface-bound tannin and lipid stains into microscopic particles without mechanical brushing or fabric rubbing.
        </p>
      </div>

      <div class="jnd-content-section" id="section-odor-elimination">
        <h2 class="jnd-content-h2">Zero-Residue Freshness</h2>
        <p class="jnd-content-p">
          Garments returned from traditional cleaners often smell strongly of chemical solvents. Because our closed-loop process completely evaporates and recovers all liquid silicone during high-vacuum drying cycles, your clothes return with zero chemical residue — completely neutral, clean, and breathable.
        </p>
      </div>
    `
  },

  'cotton-shrinkage-and-ironing': {
    title: 'Mastering Cotton Shrinkage & Professional Steam Ironing',
    excerpt: 'The thermodynamics of high-pressure micro-steam and why pressing at exact moisture levels restores crisp garment geometry.',
    category: 'Artisan Ironing',
    author: 'Aria Thorne',
    authorRole: 'Valet Operations Director',
    authorImg: 'assets/founder3.jpg',
    image: 'assets/process-pressing.jpg',
    date: 'Aug 5, 2026',
    readTime: '4 min read',
    views: '3.1k',
    gradient: 'linear-gradient(135deg, #6B4F8A 0%, #C9B8D8 50%, #F3EBDD 100%)',
    featured: false,
    caption: 'Hand-finished collar and placket pressing using Italian micro-boiler steam irons.',
    toc: [
      { id: 'section-hydrogen-bonds', label: 'Hydrogen Bonds in Plant Cellulose' },
      { id: 'section-steam-penetration', label: 'High-Pressure Steam vs Dry Heat' },
      { id: 'section-collar-cuff', label: 'Sculpting Perfect Collars & Cuffs' },
      { id: 'section-linen-creasing', label: 'Handling Natural European Linens' },
      { id: 'section-hanger-longevity', label: 'Contoured Hangers & Garment Rest' }
    ],
    product: {
      title: 'Hand-Finished Steam Press',
      price: '$8/shirt',
      image: 'assets/laundry-steam-iron.jpg',
      rating: '5.0 (320 Reviews)',
      link: 'services.html'
    },
    relatedSlugs: ['sustainable-wardrobe-longevity', 'cashmere-wool-preservation', 'curtain-and-interior-textile-care'],
    lead: 'Ever wonder why home ironing feels tedious while a shirt pressed at an artisan atelier glides on with sharp, enduring crispness? The difference lies in the thermodynamic relationship between cellulose polymers, controlled moisture vapor, and directional heat dissipation.',
    contentHtml: `
      <div class="jnd-content-section" id="section-hydrogen-bonds">
        <h2 class="jnd-content-h2">Hydrogen Bonds in Plant Cellulose</h2>
        <p class="jnd-content-p">
          Cotton and linen are comprised of crystalline cellulose held together by intermolecular hydrogen bonds. When clothes get washed and tumble-dried, these bonds break and reform in random, crumpled geometries. Dry home irons simply crush these misaligned bonds flat, resulting in shiny streaks and creases that reappear within an hour of wearing.
        </p>
      </div>

      <div class="jnd-content-section" id="section-steam-penetration">
        <h2 class="jnd-content-h2">High-Pressure Steam vs Dry Heat</h2>
        <p class="jnd-content-p">
          WashAura uses industrial 4.5-bar micro-steam boilers. The dry, superheated steam penetrates deep into the inner lumen of cotton fibers, temporarily unlocking hydrogen bonds. Our vacuum ironing tables then pull ambient air through the fabric instantaneously, cooling and locking the polymers in place.
        </p>
      </div>

      <div class="jnd-content-section" id="section-collar-cuff">
        <h2 class="jnd-content-h2">Sculpting Perfect Collars &amp; Cuffs</h2>
        <p class="jnd-content-p">
          Dress shirt collars contain interfacings that require calibrated pressure. Applying excessive heat bubbles the fusible glue lining. Our valets press collars from the outside tips inward to prevent unsightly gathering, ensuring razor-sharp roll points that look immaculate under tailored lapels.
        </p>
      </div>

      <div class="jnd-content-section" id="section-linen-creasing">
        <h2 class="jnd-content-h2">Handling Natural European Linens</h2>
        <p class="jnd-content-p">
          Pure flax linen possesses low fiber elasticity. We steam press linen while maintaining 12% residual fabric dampness. This yields a soft, fluid drape that resists harsh creasing throughout long summer days.
        </p>
      </div>

      <div class="jnd-content-section" id="section-hanger-longevity">
        <h2 class="jnd-content-h2">Contoured Hangers &amp; Garment Rest</h2>
        <p class="jnd-content-p">
          Immediately after pressing, hot cotton is allowed to rest on contoured cedar and wide-shoulder wooden hangers. This gives fiber crystalline structures 30 minutes to fully cure before bagging, preventing shoulder bumps and wrinkling during valet transit.
        </p>
      </div>
    `
  },

  'curtain-and-interior-textile-care': {
    title: 'Restoring Drapery: Cleaning Linen & Velvet Curtains',
    excerpt: 'How airborne particulates degrade heavyweight home fabrics and our specialized in-situ and atelier drape restoration protocols.',
    category: 'Household',
    author: 'Amara Silva',
    authorRole: 'Master Textile Conservator',
    authorImg: 'assets/founder1.jpg',
    image: 'assets/journal-linen-care.jpg',
    date: 'Jul 28, 2026',
    readTime: '7 min read',
    views: '1.4k',
    gradient: 'linear-gradient(135deg, #A8C5A0 0%, #B9A7D6 50%, #FAF8F2 100%)',
    featured: false,
    caption: 'Re-aligning triple-pinch pleats on custom Belgian linen drapery after low-moisture purification.',
    toc: [
      { id: 'section-drape-dust', label: 'Invisible Particulate Accumulation' },
      { id: 'section-velvet-crushing', label: 'Preventing Pile Crushing on Velvet' },
      { id: 'section-linen-relaxation', label: 'Managing Humidity Hemlines' },
      { id: 'section-uv-degradation', label: 'Solar Shields & Fabric Strength' },
      { id: 'section-valet-installation', label: 'WashAura White-Glove Re-Hanging' }
    ],
    product: {
      title: 'Drapery & Curtain Cleaning',
      price: '$45/panel',
      image: 'assets/laundry-curtains.jpg',
      rating: '4.9 (98 Reviews)',
      link: 'services.html'
    },
    relatedSlugs: ['closed-loop-dry-cleaning-science', 'cotton-shrinkage-and-ironing', 'cashmere-wool-preservation'],
    lead: 'Curtains and window draperies act as your home\'s largest passive air filters. Over months, they trap microscopic street dust, cooking aerosols, pet dander, and pollen. Without regular professional maintenance, these particulates combine with solar radiation to rot fine yarns from the inside out.',
    contentHtml: `
      <div class="jnd-content-section" id="section-drape-dust">
        <h2 class="jnd-content-h2">Invisible Particulate Accumulation</h2>
        <p class="jnd-content-p">
          A standard 9-foot drape panel can accumulate up to 250 grams of embedded airborne soil per year. When moisture in the air spikes, these microscopic dirt particles turn acidic, degrading the tensile strength of natural linen and silk threads.
        </p>
      </div>

      <div class="jnd-content-section" id="section-velvet-crushing">
        <h2 class="jnd-content-h2">Preventing Pile Crushing on Velvet</h2>
        <p class="jnd-content-p">
          Velvet drapes have an upright cut-pile construction that is easily bruised or crushed by standard dry-cleaning presses. Our technicians clean velvet upright using suspended solvent vapor misting, followed by directional hand-carding with brass-bristle velvet cards to restore uniform light reflectance.
        </p>
      </div>

      <div class="jnd-content-section" id="section-linen-relaxation">
        <h2 class="jnd-content-h2">Managing Humidity Hemlines</h2>
        <p class="jnd-content-p">
          Unlined Belgian linen naturally breathes, expanding and contracting with seasonal humidity. We record exact hemline heights upon pickup, pre-conditioning drapes in climate chambers to ensure your curtains return to the exact millimeter floor puddle or hover you designed.
        </p>
      </div>

      <div class="jnd-content-section" id="section-uv-degradation">
        <h2 class="jnd-content-h2">Solar Shields &amp; Fabric Strength</h2>
        <p class="jnd-content-p">
          Sunlight breaks down fiber lignins, making window-facing surfaces fragile. We test tensile fabric resistance across all drapery panels before cleaning, infusing an optional botanical UV-blocking conditioner that preserves pigment depth against harsh afternoon rays.
        </p>
      </div>

      <div class="jnd-content-section" id="section-valet-installation">
        <h2 class="jnd-content-h2">WashAura White-Glove Re-Hanging</h2>
        <p class="jnd-content-p">
          Never struggle with heavy stepladders and curtain rings again. WashAura valets carefully detach, transport, clean, and re-hang your draperies, hand-steaming each pleat on-site until the entire window looks architecturally flawless.
        </p>
      </div>
    `
  },

  'delicate-lingerie-and-lace-care': {
    title: 'Couture Lingerie & Delicate Lace: Washing Protocols',
    excerpt: 'Preserving fine elastane recovery, hand-stitched Calais lace, and French silk chiffon with zero-stretch wash techniques.',
    category: 'Delicates',
    author: 'Dr. Nadia Chen',
    authorRole: 'Textile Chemist & Fiber Scientist',
    authorImg: 'assets/founder2.jpg',
    image: 'assets/process-washing.jpg',
    date: 'Jul 22, 2026',
    readTime: '5 min read',
    views: '2.0k',
    gradient: 'linear-gradient(135deg, #6B4F8A 0%, #DCD0E8 50%, #FAF8F2 100%)',
    featured: false,
    caption: 'Sub-mesh protection bags and cold botanical conditioning for heirloom lace garments.',
    toc: [
      { id: 'section-elastane-decay', label: 'The Chemistry of Elastic Breakdown' },
      { id: 'section-lace-reinforcement', label: 'Protecting Hand-Woven Lace' },
      { id: 'section-underwire-preservation', label: 'Structural Care for Underwire' },
      { id: 'section-mesh-envelopes', label: 'Multi-Chamber Garment Protection' },
      { id: 'section-flat-lay-recovery', label: 'Restoring Elastic Tension' }
    ],
    product: {
      title: 'Intimate Apparel & Lace Care',
      price: '$18/garment',
      image: 'assets/laundry-delicates.jpg',
      rating: '5.0 (156 Reviews)',
      link: 'services.html'
    },
    relatedSlugs: ['cashmere-wool-preservation', 'closed-loop-dry-cleaning-science', 'sustainable-wardrobe-longevity'],
    lead: 'Intimate apparel is constructed from an intricate composite of polyurethane elastane, microscopic nylon meshes, silk charmeuse, and Calais-Caudry lace. Because these garments endure direct skin contact and perspiration, improper washing rapidly dissolves the delicate polyurethane elastane chains that provide shape and support.',
    contentHtml: `
      <div class="jnd-content-section" id="section-elastane-decay">
        <h2 class="jnd-content-h2">The Chemistry of Elastic Breakdown</h2>
        <p class="jnd-content-p">
          Heat and chlorine are the fatal enemies of elastane (Spandex). Temperatures above 30°C cause the rubbery soft segments in the polyurethane polymer to oxidize and snap, leading to loose, wavy elastic bands and loss of support.
        </p>
      </div>

      <div class="jnd-content-section" id="section-lace-reinforcement">
        <h2 class="jnd-content-h2">Protecting Hand-Woven Lace</h2>
        <p class="jnd-content-p">
          Fine lace features open filigree work where threads can catch on washing machine fins or hook-and-eye closures. WashAura encloses all delicate pieces in padded multi-chamber mesh envelopes before immersing them in cold enzyme baths.
        </p>
      </div>

      <div class="jnd-content-section" id="section-underwire-preservation">
        <h2 class="jnd-content-h2">Structural Care for Underwire</h2>
        <p class="jnd-content-p">
          Mechanical spin cycles warp coated steel underwires and rupture protective fabric channels. Our no-spin extraction utilizes gentle gravitational drainage followed by low-pressure absorbent sponge pressing.
        </p>
      </div>

      <div class="jnd-content-section" id="section-mesh-envelopes">
        <h2 class="jnd-content-h2">Multi-Chamber Garment Protection</h2>
        <p class="jnd-content-p">
          Each brassiere and lace bodysuit is assigned an individual velvet-lined wash pocket, preventing snagging with other garments and maintaining cup curvature.
        </p>
      </div>

      <div class="jnd-content-section" id="section-flat-lay-recovery">
        <h2 class="jnd-content-h2">Restoring Elastic Tension</h2>
        <p class="jnd-content-p">
          Delicates dry flat on shaded drying trays in clean, filtered air. Once dry, fabrics are steamed from a distance with lavender-infused vapor to relax the fibers without heat stress.
        </p>
      </div>
    `
  },

  'sustainable-wardrobe-longevity': {
    title: 'Extending Wardrobe Lifespans with Eco-Conscious Laundry',
    excerpt: 'The environmental and financial math behind wearing your garments three times longer through closed-loop care and gentle cleaning.',
    category: 'Sustainability',
    author: 'Aria Thorne',
    authorRole: 'Valet Operations Director',
    authorImg: 'assets/founder3.jpg',
    image: 'assets/about-atelier-hero.jpg',
    date: 'Jul 15, 2026',
    readTime: '7 min read',
    views: '4.2k',
    gradient: 'linear-gradient(135deg, #A8C5A0 0%, #6B4F8A 50%, #F3EBDD 100%)',
    featured: false,
    caption: 'Neatly folded organic cotton wardrobes prepared for emissions-free electric valet dispatch.',
    toc: [
      { id: 'section-fast-fashion-impact', label: 'The Hidden Cost of Premature Wear' },
      { id: 'section-over-washing', label: 'Why Less Washing Equals Better Longevity' },
      { id: 'section-water-temperature', label: 'Cold-Water Enzyme Breakthroughs' },
      { id: 'section-microplastic-filtering', label: 'WashAura 5-Micron Effluent Scrubbing' },
      { id: 'section-cost-per-wear', label: 'Calculating Your Garment Longevity ROI' }
    ],
    product: {
      title: 'Eco Wash & Fold Subscription',
      price: '$59/month',
      image: 'assets/laundry-wash-fold.jpg',
      rating: '4.9 (412 Reviews)',
      link: 'pricing.html'
    },
    relatedSlugs: ['cashmere-wool-preservation', 'closed-loop-dry-cleaning-science', 'cotton-shrinkage-and-ironing'],
    lead: 'Extending the life of a garment by just nine months reduces its combined carbon, waste, and water footprints by 20% to 30%. Yet modern home laundering practices — aggressive spinning, boiling wash cycles, and abrasive powder detergents — destroy clothes far faster than normal daily wear.',
    contentHtml: `
      <div class="jnd-content-section" id="section-fast-fashion-impact">
        <h2 class="jnd-content-h2">The Hidden Cost of Premature Wear</h2>
        <p class="jnd-content-p">
          Over 60% of clothing wear-and-tear occurs inside home appliances, not on your body. Lint filters in standard dryers are composed of pulverized textile fibers sheared off during violent tumble cycles.
        </p>
      </div>

      <div class="jnd-content-section" id="section-over-washing">
        <h2 class="jnd-content-h2">Why Less Washing Equals Better Longevity</h2>
        <p class="jnd-content-p">
          Unless soiled or stained, outerwear, jeans, and knitwear do not need aggressive laundering after every single wear. Our valet service offers steam-refresh and ozone sanitization options that kill 99.9% of bacteria without water immersion.
        </p>
      </div>

      <div class="jnd-content-section" id="section-water-temperature">
        <h2 class="jnd-content-h2">Cold-Water Enzyme Breakthroughs</h2>
        <p class="jnd-content-p">
          WashAura uses biotechnologically engineered cold-active plant enzymes that achieve hospital-grade cleanliness at 20°C. This saves energy while completely eliminating thermal fiber degradation.
        </p>
      </div>

      <div class="jnd-content-section" id="section-microplastic-filtering">
        <h2 class="jnd-content-h2">WashAura 5-Micron Effluent Scrubbing</h2>
        <p class="jnd-content-p">
          Synthetic garments shed thousands of microplastic fibers in every wash. Our commercial processing facility utilizes multi-stage 5-micron filtration membranes, capturing 98.7% of all microfibers before water enters municipal recycling.
        </p>
      </div>

      <div class="jnd-content-section" id="section-cost-per-wear">
        <h2 class="jnd-content-h2">Calculating Your Garment Longevity ROI</h2>
        <p class="jnd-content-p">
          Investing in professional garment maintenance drastically reduces cost-per-wear. A $300 luxury blazer cleaned properly lasts 10 to 15 years, reducing wardrobe replacement costs while preserving the pristine tailoring and fabric luster you fell in love with.
        </p>
      </div>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('article') || 'cashmere-wool-preservation';
  const article = ARTICLES_DATA[slug] || ARTICLES_DATA['cashmere-wool-preservation'];

  if (document.getElementById('jnd-page-title')) {
    document.getElementById('jnd-page-title').textContent = `${article.title} — WashAura Journal`;
  }

  const heroHeading = document.getElementById('jnd-hero-heading');
  if (heroHeading) heroHeading.textContent = article.title;

  const heroExcerpt = document.getElementById('jnd-hero-excerpt');
  if (heroExcerpt) heroExcerpt.textContent = article.excerpt;

  const categoryBadge = document.getElementById('jnd-category-badge');
  if (categoryBadge) categoryBadge.textContent = article.category;

  const authorName = document.getElementById('jnd-author-name');
  if (authorName) authorName.textContent = article.author;

  const dateEl = document.getElementById('jnd-date');
  if (dateEl) dateEl.textContent = article.date;

  const readTimeEl = document.getElementById('jnd-read-time');
  if (readTimeEl) readTimeEl.textContent = article.readTime;

  const heroBg = document.getElementById('jnd-hero-bg');
  if (heroBg) {
    const heroGradient = heroBg.querySelector('.jnd-hero-gradient');
    if (heroGradient) heroGradient.style.background = article.gradient;
  }

  const authorAvatarEl = document.getElementById('jnd-author-avatar');
  if (authorAvatarEl) authorAvatarEl.src = article.authorImg;

  const authorCardAvatarEl = document.getElementById('jnd-author-card-avatar');
  if (authorCardAvatarEl) authorCardAvatarEl.src = article.authorImg;

  const authorCardNameEl = document.getElementById('jnd-author-card-name');
  if (authorCardNameEl) authorCardNameEl.textContent = article.author;

  const authorCardRoleEl = document.getElementById('jnd-author-card-role');
  if (authorCardRoleEl) authorCardRoleEl.textContent = article.authorRole;

  const featuredBadge = document.getElementById('jnd-featured-badge');
  if (featuredBadge) {
    featuredBadge.style.display = article.featured ? 'inline-flex' : 'none';
  }

  const tocReadTime = document.getElementById('jnd-toc-read-time');
  if (tocReadTime) tocReadTime.textContent = article.readTime;

  renderTOC(article.toc);
  renderProductCard(article.product);
  renderArticleBody(article);
  renderRelatedArticles(article.relatedSlugs);
  initReadingProgress();
  initTOCHighlight(article.toc);

  if (typeof lucide !== 'undefined') lucide.createIcons();

  initScrollAnimations();
  initActiveNavLinks();
});

function renderTOC(tocItems) {
  const tocList = document.getElementById('jnd-toc-list');
  if (!tocList || !tocItems) return;

  tocList.innerHTML = tocItems.map((item, idx) => `
    <li>
      <a href="#${item.id}" class="jnd-toc-link ${idx === 0 ? 'jnd-toc-active' : ''}" onclick="scrollToSection(event, '${item.id}')">
        ${item.label}
      </a>
    </li>
  `).join('');
}

function renderProductCard(prod) {
  const card = document.querySelector('.jnd-toc-product-cta-card');
  if (!card || !prod) return;

  card.innerHTML = `
    <span class="jnd-toc-cta-tag"><i data-lucide="sparkles" aria-hidden="true"></i> FEATURED SERVICE</span>
    <div class="jnd-toc-cta-img-wrap">
      <img src="${prod.image}" alt="${prod.title}" class="jnd-toc-cta-img" />
      ${prod.price ? `<span class="jnd-toc-cta-price">${prod.price}</span>` : ''}
    </div>
    <div class="jnd-toc-cta-info">
      <h4 class="jnd-toc-cta-title">${prod.title}</h4>
      <p class="jnd-toc-cta-rating"><i data-lucide="star" aria-hidden="true"></i> <span>${prod.rating}</span></p>
      <a href="${prod.link || 'services.html'}" class="jnd-toc-cta-btn">
        <span>Explore Service</span>
        <i data-lucide="arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  `;
}

function renderArticleBody(article) {
  const articleContent = document.getElementById('jnd-article-content');
  if (!articleContent) return;

  articleContent.innerHTML = `
    <figure class="jnd-content-hero-img-box">
      <img src="${article.image}" alt="${article.title}" class="jnd-content-real-img" id="jnd-article-hero-img" />
      <figcaption class="jnd-img-caption">${article.caption || article.title}</figcaption>
    </figure>

    <p class="jnd-lead-para">${article.lead}</p>

    ${article.contentHtml}
  `;
}

function renderRelatedArticles(relatedSlugs) {
  const grid = document.querySelector('.jnd-related-grid');
  if (!grid || !relatedSlugs) return;

  grid.innerHTML = relatedSlugs.map(slug => {
    const item = ARTICLES_DATA[slug];
    if (!item) return '';
    return `
      <article class="jnd-related-card" onclick="openJournalDetail('${slug}')" tabindex="0" onkeydown="if(event.key==='Enter')openJournalDetail('${slug}')" aria-label="Read ${item.title}">
        <div class="jnd-related-img-wrap">
          <img src="${item.image}" alt="${item.title}" class="jnd-card-real-img" />
        </div>
        <div class="jnd-related-body">
          <span class="jnd-related-category">${item.category}</span>
          <h3 class="jnd-related-title-card">${item.title}</h3>
          <div class="jnd-related-meta">
            <span><i data-lucide="clock" aria-hidden="true"></i> ${item.readTime}</span>
            <span>${item.date}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function openJournalDetail(slug) {
  window.location.href = `journals detail.html?article=${slug}`;
}

function initReadingProgress() {
  const progressFill = document.getElementById('jnd-progress-fill');
  const articleContent = document.getElementById('jnd-article-content');
  const progressBar = document.querySelector('.jnd-progress-bar');

  if (!progressFill || !articleContent) return;

  function updateProgress() {
    const contentTop = articleContent.getBoundingClientRect().top + window.scrollY;
    const contentHeight = articleContent.offsetHeight;
    const scrolled = window.scrollY - contentTop;
    const progress = Math.max(0, Math.min(100, (scrolled / contentHeight) * 100));

    progressFill.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(progress));
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

function initTOCHighlight(tocItems) {
  if (!tocItems || !tocItems.length) return;
  const sections = tocItems.map(item => item.id);
  const tocLinks = document.querySelectorAll('.jnd-toc-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tocLinks.forEach(link => {
          link.classList.remove('jnd-toc-active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('jnd-toc-active');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

function scrollToSection(event, sectionId) {
  event.preventDefault();
  const target = document.getElementById(sectionId);
  if (target) {
    const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 84;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 20;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

function shareArticle() {
  const title = document.getElementById('jnd-hero-heading') ? document.getElementById('jnd-hero-heading').textContent : 'WashAura Garment Care Journal';
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({ title, url }).catch(() => copyArticleLink());
  } else {
    copyArticleLink();
  }
}

function shareToSocial(platform) {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.getElementById('jnd-hero-heading') ? document.getElementById('jnd-hero-heading').textContent : 'WashAura Garment Care Journal');

  const urls = {
    twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
  };

  if (urls[platform]) {
    window.open(urls[platform], '_blank', 'width=600,height=400,noopener');
  }
}

function copyArticleLink() {
  const btn = document.getElementById('jnd-copy-link-btn');
  navigator.clipboard.writeText(window.location.href).then(() => {
    if (btn) {
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<i data-lucide="check" style="color: var(--sage-green)"></i>';
      if (typeof lucide !== 'undefined') lucide.createIcons();
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }, 2000);
    }
  }).catch(() => {
    alert('Article URL: ' + window.location.href);
  });
}

function toggleBookmark(btn) {
  const isBookmarked = btn.dataset.bookmarked === 'true';
  btn.dataset.bookmarked = !isBookmarked;

  if (!isBookmarked) {
    btn.innerHTML = '<i data-lucide="bookmark-check" aria-hidden="true"></i><span>Saved!</span>';
    btn.style.background = 'rgba(168,197,160,0.3)';
    btn.style.borderColor = 'rgba(168,197,160,0.5)';
  } else {
    btn.innerHTML = '<i data-lucide="bookmark" aria-hidden="true"></i><span>Save</span>';
    btn.style.background = '';
    btn.style.borderColor = '';
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function handleMiniNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById('jnd-mini-email');
  const submitBtn = document.getElementById('jnd-mini-submit-btn');
  const successEl = document.getElementById('jnd-mini-nl-success');
  const email = emailInput.value.trim();

  if (!email || !email.includes('@')) {
    emailInput.style.borderBottom = '2px solid rgba(231,76,60,0.7)';
    emailInput.focus();
    setTimeout(() => { emailInput.style.borderBottom = ''; }, 2000);
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Subscribing…';

  setTimeout(() => {
    if (document.querySelector('.jnd-mini-form-group')) document.querySelector('.jnd-mini-form-group').style.display = 'none';
    if (document.querySelector('.jnd-mini-nl-note')) document.querySelector('.jnd-mini-nl-note').style.display = 'none';
    if (successEl) successEl.hidden = false;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }, 900);
}

function initScrollAnimations() {
  const observerOpts = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  const animEls = document.querySelectorAll(
    '.jnd-content-section, .jnd-stats-strip, .jnd-info-card, .jnd-benefit-item, .jnd-ritual-step, .jnd-related-card'
  );

  animEls.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

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