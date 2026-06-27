/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Huile d\'Olive de Kabylie - Premium',
    tagline: 'Liquid olive gold.',
    description: 'First cold-pressed extra virgin olive oil from the mountain groves of Beni Yenni. Earthy, buttery, and unfiltered.',
    longDescription: 'Extracted exclusively from handpicked Chemlal olives in the high-altitude groves of Kabylie, this extra virgin olive oil represents centuries of traditional craftsmanship. Pressed within hours of harvest using stone-milled traditional methods, it features an incredibly low acidity level (<0.5%), a brilliant deep golden-green color, and a uniquely rustic peppery finish.',
    price: 1600,
    category: 'Olive oil',
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['100% Unfiltered Extra Virgin', 'Earthy & Peppery Finish', 'Acidity below 0.5%', 'Beni Yenni Estate Grown']
  },
  {
    id: 'p2',
    name: 'Cuvée Précoce - Early Harvest Oil',
    tagline: 'Fresh harvest intensity.',
    description: 'Rich, high-antioxidant green olive oil pressed from early autumn crops. Intensely aromatic and robust.',
    longDescription: 'Our early harvest "Cuvée Précoce" is pressed in mid-October when the olives are green and buzzing with biological vitality. It takes twice as many handpicked olives to yield this precious oil. It bursts with aromas of cut grass, fresh green apple, and has an intense, satisfyingly peppery kick on the throat.',
    price: 2600,
    category: 'Olive oil',
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Early October Crop', 'Rich in Polyphenols', 'Vibrant Green Shade', 'Excellent Raw Dressing']
  },
  {
    id: 'p3',
    name: 'Olives Vertes Marinées au Zaatar',
    tagline: 'Sun-kissed aromas.',
    description: 'Plump green olives cured in spring water and steeped in wild mountain thyme, hand-sliced garlic, and cold-pressed oil.',
    longDescription: 'Selected from the finest Sigoise olive varieties, these olives are naturally cured for weeks, then lightly cracked and marinated. We steep them in dry wild thyme (Zaatar) collected on the rocky slopes of Djurdjura, raw garlic cloves, fresh lemon slices, and a bath of our own extra virgin olive oil.',
    price: 550,
    category: 'Table olives',
    imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Sigoise Variety Olives', 'Wild Djurdjura Zaatar', '100% Natural Preservatives', '500g Glass Jar']
  },
  {
    id: 'p4',
    name: 'Olives Noires Séchées au Sel',
    tagline: 'Deep, concentrated earth.',
    description: 'Wrinkled black olives naturally cured with coarse sea salt and coated with olive oil. Salty, rich, and intensely savory.',
    longDescription: 'Harvested fully ripe in late winter, these black olives are cured using the ultimate ancient recipe: layered with coarse Mediterranean sea salt in breathable baskets. This draws out bitterness and concentrates the deep, savory umami flavors. We finish them with a gentle rinse and a generous sheen of olive oil.',
    price: 650,
    category: 'Table olives',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1000',
    features: ['Naturally Sea Salt Cured', 'Rich Umami Flavor Profile', 'No Artificial Colorants', '500g Artisan Pack']
  },
  {
    id: 'p5',
    name: 'Figues Sèches de Béni Maouche AOP',
    tagline: 'Algerian sun-dried sweetness.',
    description: 'Renowned dried figs of the Soummam Valley. Thin-skinned, sweet, and sun-dried on traditional reed mats.',
    longDescription: 'Our figs carry the prestigious Béni Maouche geographical indication (AOP). Gently dried under the bright Kabylie sun on elevated natural bamboo and reed screens, they retain an incredibly soft and jammy honey-like interior while the skin remains delightfully thin and tender. An ancestral delicacy rich in fiber and minerals.',
    price: 1950,
    category: 'Dried figs',
    imageUrl: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Béni Maouche AOP Certified', 'No Added Sugar or Sulfites', 'Sun-dried on Bamboo Trays', '1kg Handcrafted Basket']
  },
  {
    id: 'p6',
    name: 'Figues Mûries à l\'Huile d\'Olive',
    tagline: 'The winter elixir.',
    description: 'Dried figs stored in a luxurious bath of organic extra virgin olive oil. A traditional remedy and rich gourmet breakfast.',
    longDescription: 'An ancient remedy from Algerian households: soft Béni Maouche dried figs cut open, seasoned with a whisper of wild thyme, and fully submerged in our gold-standard extra virgin olive oil. Let them steep to absorb the rich fats, creating a luxurious spread or morning wellness spoonful to fortify the body.',
    price: 1450,
    category: 'Dried figs',
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=1000',
    features: ['Ancestral Immunity Booster', 'Infused with Wild Thyme', 'Premium Glass Storage Jar', '750g Net Weight']
  },
  {
    id: 'p7',
    name: 'Miel Sauvage de l\'Atlas Co.',
    tagline: 'From mountain wildflower fields.',
    description: 'Pure, raw mountain forest honey harvested from wild thyme, cedar, and acacia blooms in the Atlas Mountains.',
    longDescription: 'Spun from remote apiaries nestled high up in the Blida Atlas Mountains, this honey remains completely unpasteurized and unfiltered. It features a complex, woody herbal flavor with notes of balsamic pine and warm molasses, representing the deep botanical variety of the Algerian highlands.',
    price: 4900,
    category: 'Local products',
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1000',
    features: ['100% Raw Wildflower Honey', 'High Botanical Density', 'Unfiltered & Crystallized Naturally', '1kg Stoneware Jar']
  },
  {
    id: 'p8',
    name: 'Pâte de Dattes - Deglet Nour',
    tagline: 'Sweetness from Biskra.',
    description: '100% pure dates, stone-rolled into an incredibly smooth, silky paste for pastries and baking.',
    longDescription: 'Extracted from the absolute elite date variety—Deglet Nour ("queen of dates")—from the sun-drenched palm oases of Tolga near Biskra. We steam and roll them into a velvety-smooth paste with no added cane sugars, oils, or artificial texturizers. Ideal for making traditional Algerian cookies like Makrout and Bradj.',
    price: 450,
    category: 'Local products',
    imageUrl: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=1000',
    features: ['Tolga Deglet Nour Dates', 'Silky, Seedless Texture', 'Zero Preservatives or Gums', '1kg Solid Block']
  },
  {
    id: 'p9',
    name: 'Eau Purifiée de Fleurs d\'Oranger',
    tagline: 'Scent of the Mitidja.',
    description: 'Traditional wood-fired double distillation of bitter orange blossoms. Delicate, therapeutic, and aromatic.',
    longDescription: 'Distilled during the crisp spring mornings in a copper alembic in the Mitidja plains, this botanical water captures the pure, soothing essence of fresh orange blossoms. Beloved in the Algerian kitchen to perfume sweet doughs, mint tea, and to calm the senses on warm evenings.',
    price: 900,
    category: 'Local products',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3bb64d0bc55?auto=format&fit=crop&q=80&w=1000',
    features: ['Traditional Copper Distilled', 'Bitter Orange Blossom (Neroli)', 'Food-Grade & Therapeutic', '500ml Frosted Bottle']
  },
  {
    id: 'p10',
    name: 'Pressage d\'Olives sur Meule en Pierre',
    tagline: 'Ancestral cold milling.',
    description: 'Milling service for small-holding olive growers. Cold press extraction on authentic granite wheels.',
    longDescription: 'Bring your seasonal crop to our mill for customized cold extraction. We utilize slow-spinning volcanic granite stones to crush your olives without heating them, maintaining maximum flavor, antioxidants, and olive oil quality. We provide physical filtering and raw bottling into sterile modern tanks.',
    price: 15000,
    category: 'Agricultural services',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1000',
    features: ['Slow Granite Stones (<26°C)', 'Physical In-line Filtration', 'Bottling & Acidity Lab Diagnostic', 'Priced per batch of 500kg']
  },
  {
    id: 'p11',
    name: 'Taille & Entretien de Verger d\'Oliviers',
    tagline: 'Optimizing ancient timber.',
    description: 'Expert tree pruning and soil regeneration service for orchards by agricultural specialists.',
    longDescription: 'Make your grove flourish with our hands-on professional service. Our agronomists specialize in olive tree physiology, delivering custom structure pruning to maximize sunlight ingress, prevent olive knot disease, and boost bi-annual crop yields. Includes organic olive pumice soil fertilization planning.',
    price: 25000,
    category: 'Agricultural services',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=1000',
    features: ['Done by Certified Agronomists', 'Anti-disease Tree Treatment', 'Organic Mulching Demonstration', 'Covers up to 50 Trees']
  },
  {
    id: 'p12',
    name: 'Diagnostic de Sol & Climat Oasien',
    tagline: 'Modern science for ancient soils.',
    description: 'Comprehensive soil chemistry screening and sustainable drip-irrigation layout engineering.',
    longDescription: 'Our mobile laboratory visits your farmland or orchard to analyze salinity, nitrogen balances, organic matter depth, and moisture retention. We supply a highly detailed, actionable agronomist roadmap to cure soil deficits and design a water-conservative automated subsurface drip network.',
    price: 35000,
    category: 'Agricultural services',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=1000',
    features: ['Mobile Soil Lab visit', 'NPK & Salinity Breakdown Sheet', 'Irrigation blueprint CAD file', 'Soil Cure Action Plan']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: "Le Rituel de la Cueillette en Kabylie",
    date: "November 14, 2025",
    excerpt: "Why the winter olive harvest is the heartbeat of mountain communities.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
        "When the first cold mist descents upon the Djurdjura mountains of Algeria, a quiet revolution begins in the village groves. Families gather beneath the ancient gnarled trunks of Chemlal olive trees, carrying simple hand-baskets, blankets, and ladders. The annual harvest is not a chore; it is a sacred gathering of generations."
      ),
      React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
        "For weeks, the rhythmic 'tap-tap' of wooden tapping rods kissing the heavy olive branches echoes across the slopes. Plump, dark-purple and bright-green fruit rain down onto handwoven cloths spread over the wild clover. There is no heavy machinery here—only the quiet care of human palms."
      ),
      React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
        "\"The olive tree is a patient grandfather. It remembers whoever planted it and blesses whoever cures it.\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "At the end of each afternoon, bags are loaded onto carts and taken down to the village oil mill where cold steam and stone crushers unleash the glowing peppery nectar. Warm home-baked flatbreads (Aghroum) are dipped into the hot, lime-green oil—a taste of pure winter sunlight."
      )
    )
  },
  {
    id: 2,
    title: "Le Vent de Béni Maouche",
    date: "September 08, 2025",
    excerpt: "Ancestral air-drying secrets that yield Algeria's most luxurious candied figs.",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "Drying figs is not merely standard dehydration; it is a conversation with the dry mountain drafts. In the Soummam valley, dry air and endless summer sunshine create the ultimate climate for curing sweetness."
      ),
      React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
        "\"The secret lies in the reeds,\" local grower Slimane tells us as he tends to his meticulously arranged racks. Dried on handmade structures woven from local river reeds, the figs breathe from above and below, absorbing no plastic or carbon odors. Their sugars caramelize softly, giving them that signature honey-glass core."
      ),
      React.createElement("div", { className: "my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center" },
        React.createElement("p", null, "The southern wind blow hot"),
        React.createElement("p", null, "The purple skin tears slow."),
        React.createElement("p", null, "A river of pure summer sugar"),
        React.createElement("p", null, "Seals the fruit in winter glow."),
        React.createElement("p", null, "This is the patience"),
        React.createElement("p", null, "Of the mountain soils.")
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "Our gourmet selection represents this ancestral craft. Hand-packed in palm-leaf baskets, they convey the warmth, dust, and sweetness of the high valleys directly to your dining table."
      )
    )
  },
  {
    id: 3,
    title: "The Art of Traditional Soil Balance",
    date: "December 05, 2025",
    excerpt: "How ancient companion planting protects Mediterranean soils and boosts orchards.",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "Before chemical fertilizers partitioned the soil, Algerian farmers relied on a complex woodland interlock. Broad beans (Fèves) and wild clover were grown directly surrounding tree basins. This was not random; it is nature’s perfect nitrogen factory."
      ),
      React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
        "By leaving mountain sheep to graze on dry summer grasses beneath the trees, the soil is enriched, weed infestation is cleared naturally, and the olive root systems receive critical organic mulch that insulates them against bitter winter snows."
      )
    )
  }
];

export const BRAND_NAME = 'Blady';
export const SUB_BRAND = 'Terroir d\'Algérie';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';
export const CURRENCY = 'DA';
