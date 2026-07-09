import type { City } from './cityTypes';
export type { City, FlavorProfile, Specialty, Legend } from './cityTypes';

export const originalCities: City[] = [
  {
    id: 'lucknow',
    name: 'Lucknow',
    country: 'India',
    region: 'Uttar Pradesh',
    tagline: 'The City of Nawabs & Slow-Cooked Soul',
    heroImage:
      'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cardImage:
      'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1200',
     
    shortDescription:
      'Where Mughal grandeur meets Awadhi patience — biryani layered in dum, kebabs that melt before you chew.',
    longDescription:
      'Lucknow, the capital of Awadh, is a city where cooking is an act of devotion. The Nawabs transformed cuisine into courtly art, pioneering the dum pukht technique — sealing pots with dough and slow-cooking over embers for hours so every spice bloomed without ever boiling away. To eat in Lucknow is to taste centuries of restraint, poetry, and stubborn perfectionism.',
    sensoryTags: ['#Melt-in-the-mouth', '#Aromatic', '#Slow-cooked', '#Royal'],
    flavorProfile: { spice: 70, umami: 88, richness: 95, tanginess: 35 },
    youtubeId: '3JcFy7wQy2E',
    specialties: [
      {
        name: 'Tunday Kebabi',
        description:
          'Galahoti kebabs of minced mutton, raw papaya, and 160 spices — so tender they dissolve on the tongue without a chew.',
        image:
          'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Melt-in-the-mouth', '#Smoky', '#Aromatic'],
        originStory:
          'Born in the 17th century for an aging Nawab who loved meat but had no teeth, royal khansamas pounded mutton with raw papaya and over 160 spices into a paste so soft it needed no chewing. The legendary Tunday shop in old Lucknow still guards the recipe — allegedly the only dish the Nawab could enjoy in his final years.',
      },
      {
        name: 'Lucknowi Dum Biryani',
        description:
          'Long-grain basmati and marinated meat layered in a sealed deg, slow-cooked over dying embers — the pukki style where rice and meat are cooked separately then married.',
        image:
          'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Aromatic', '#Slow-cooked', '#Rich'],
        originStory:
          'Dum pukht — the breath of the pot — was perfected in Awadh\'s royal kitchens. A dough seal locks steam inside the deg so aromatics cannot escape; the pot is never opened until the moment of serving. The technique turns a meal into a ceremony, each grain of rice carrying the weight of saffron, rose, and time.',
      },
      {
        name: 'Kakori Kebab',
        description:
          'Skewered minced mutton kebabs, finer and softer than seekh, perfumed with cardamom, cloves, and a whisper of kewra.',
        image:
          'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Melt-in-the-mouth', '#Aromatic'],
        originStory:
          'Named for the village of Kakori, this kebab was created as a softer, more refined cousin of seekh kebab — designed to melt instantly and leave a floral aftertaste of green cardamom. It remains a benchmark of Awadhi skill: a chef is judged by whether the kakori holds its skewer yet dissolves the instant it meets the palate.',
      },
    ],
    historicalLore: [
      {
        era: '18th Century',
        title: 'The Nawab\'s Court Kitchen',
        body: 'Under the Nawabs of Awadh, the royal kitchen (bawarchi khana) employed hundreds of specialists — a halwai for sweets, a kebabchi for grills, a nanbai for breads. Each dish could take a full day. The Nawab Wajid Ali Shah famously ate from gold plates while poets composed verses about the biryani\'s aroma.',
      },
      {
        era: '19th Century',
        title: 'The Siege of the Residency',
        body: 'During the 1857 revolt, Lucknow\'s British Residency was besieged for 147 days. Rations dwindled, but the city\'s reputation for hospitality endured — survivors wrote of Awadhi cooks who continued preparing elaborate meals even as shells fell, an act of cultural defiance as fierce as any musket.',
      },
      {
        era: '20th Century to Today',
        title: 'From Palace to Pavement',
        body: 'When the Nawabs fell, royal cooks opened street stalls, democratizing recipes once reserved for kings. Today the lanes of Chowk and Aminabad serve the same galahoti kebabs a Nawab once savored — for the price of a few rupees, anyone can taste a vanished empire.',
      },
    ],
    legends: [
      {
        name: 'Wajid Ali Shah',
        title: 'The Last Nawab of Awadh',
        era: '1822–1887',
        bio: 'A poet, patron, and gourmet whose court made cuisine a performing art. He hosted feasts of 300 dishes and composed masnavi poems about biryani.',
        legacy: 'His patronage codified Awadhi cuisine; the dum pukht tradition bears his fingerprint. Deposed by the British, he carried his chefs to Matiya Burj in Calcutta, seeding Lucknowi cuisine across India.',
        image:
          'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Haji Murad Ali',
        title: 'The One-Armed Kebab Master',
        era: 'Late 19th Century',
        bio: 'Legend says Murad Ali fell from a roof and lost an arm, yet continued making kebabs with one hand — perfecting the galahoti so finely it needed no chewing.',
        legacy: 'His shop, Tunday Kababi, became a Lucknow institution. The technique of tenderizing mutton with raw papaya is attributed to his relentless one-handed refinement.',
        image:
          'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Awadhi chefs use over 30 spices in a single biryani, each bloomed separately.',
      'The dough seal on a dum pot is called the "gila hua aata" — it hisses when the dish is ready.',
      'Tunday kebabs reportedly contain 160 spices, many ground by hand on a sil-batta.',
    ],
  },
  {
    id: 'naples',
    name: 'Naples',
    country: 'Italy',
    region: 'Campania',
    tagline: 'Where Pizza Was Born in a Volcano\'s Shadow',
    heroImage:
      'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'The chaotic, sun-struck birthplace of pizza — where San Marzano tomatoes grow in volcanic soil and mozzarella is born at dawn.',
    longDescription:
      'Naples is a city that cooks with its hands and shouts with its heart. Here, pizza is not food — it is identity, declared a UNESCO Intangible Heritage. The volcanic soil of Mount Vesuvius feeds the sweet, low-acid San Marzano tomato; the buffalo of Campania give mozzarella di bufala its milky tang. Neapolitan cuisine is defiantly simple, built on the conviction that two perfect ingredients beat twenty good ones.',
    sensoryTags: ['#Wood-fired', '#Crispy-chewy', '#Tangy', '#Simple'],
    flavorProfile: { spice: 25, umami: 72, richness: 68, tanginess: 85 },
    youtubeId: 'mT2r1Z9gH2M',
    specialties: [
      {
        name: 'Pizza Margherita',
        description:
          'San Marzano tomato, fior di latte mozzarella, basil, and olive oil on a 90-second wood-fired crust — blistered, foldable, alive.',
        image:
          'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Wood-fired', '#Crispy-chewy', '#Tangy'],
        originStory:
          'In June 1889, pizzaiolo Raffaele Esposito crafted three pizzas for Queen Margherita of Savoy. She favored the one topped with tomato (red), mozzarella (white), and basil (green) — the colors of the new Italian flag. He named it in her honor, and the Pizza Margherita became the definitive Neapolitan pie, later codified by the Associazione Verace Pizza Napoletana.',
      },
      {
        name: 'Spaghetti alle Vongole',
        description:
          'Fresh clams, garlic, white wine, parsley, and a drift of olive oil — the sea on a plate, finished in seven minutes.',
        image:
          'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Tangy', '#Fresh', '#Briny'],
        originStory:
          'Born of Naples\'s fishing quarter, this dish proves the Neapolitan creed: perfect ingredients, minimal interference. Clams were so abundant in the Bay of Naples that fishermen\'s wives could make a feast from the morning\'s leftover catch, the wine and garlic doing nothing but letting the clam speak.',
      },
      {
        name: 'Sfogliatella',
        description:
          'A shell-shaped pastry of flaky ridged dough cradling semolina-custard, orange, and cinnamon — shatteringly crisp outside, warm cream within.',
        image:
          'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Crispy', '#Flaky', '#Sweet'],
        originStory:
          'Created in the 17th century by cloistered nuns of Santa Rosa in Conca dei Marini, who shaped leftover semolina and dried fruit into a monk\'s cowl. The recipe escaped the convent a century later and reached Naples, where pastry chefs refined it into the riccia — the ridged "leaf" pastry that crackles with every bite.',
      },
    ],
    historicalLore: [
      {
        era: '18th Century',
        title: 'The Pizza of the Lazzaroni',
        body: 'Pizza began as street food for Naples\'s poorest, the lazzaroni — day laborers who bought flatbreads topped with tomato (then considered peasant fare, even poisonous by some). Sold from open stalls, folded in half, and eaten with the hands, pizza was the food of the street long before it sat on a queen\'s table.',
      },
      {
        era: '1889',
        title: 'A Queen, a Flag, a Pie',
        body: 'When Queen Margherita visited Naples, pizzaiolo Raffaele Esposito of Pizzeria Brandi was summoned. His tricolor pie — red tomato, white mozzarella, green basil — so delighted her that the royal court sent a thank-you letter that still hangs in the pizzeria today. The dish was immortalized as the Pizza Margherita.',
      },
      {
        era: '2017',
        title: 'UNESCO Heritage',
        body: 'The art of the pizzaiuolo — twirling, slapping, and wood-firing dough in a 485°C dome oven — was inscribed on UNESCO\'s Intangible Cultural Heritage list. The recognition enshrined not just the pizza but the gestures, the oven, and the oral apprenticeship that passes from master to apprentice across generations.',
      },
    ],
    legends: [
      {
        name: 'Raffaele Esposito',
        title: 'The Pizzaiolo of the Queen',
        era: '1850–1923',
        bio: 'Owner of Pizzeria Pietro e Basta Cosi (today Pizzeria Brandi), he is called the "father of the Margherita" for his 1889 creation for Queen Margherita of Savoy.',
        legacy: 'His royal letter of thanks is preserved at Brandi. He elevated pizza from alley food to national symbol, proving that a pizzaiolo could be an artisan equal to any court chef.',
        image:
          'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Enzo Coccia',
        title: 'The Keeper of Tradition',
        era: 'Modern',
        bio: 'A third-generation pizzaiolo and food historian who runs La Notizia, Coccia teaches the discipline of vera pizza napoletana — 24-hour fermentation, hand-slapped dough, a 60–90 second bake.',
        legacy: 'He championed the UNESCO bid and trains a new generation of pizzaioli, insisting that the art is in the hands, never the recipe book. His oven runs at 485°C and never sits idle.',
        image:
          'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'True Neapolitan pizza dough must ferment for at least 24 hours and bake in 60–90 seconds.',
      'San Marzano tomatoes grow only in the volcanic soil on Mount Vesuvius\'s slopes.',
      'There are an estimated 3,000+ pizzerias in Naples alone — roughly one per 1,000 residents.',
    ],
  },
  {
    id: 'oaxaca',
    name: 'Oaxaca',
    country: 'Mexico',
    region: 'Oaxaca',
    tagline: 'The Land of Seven Moles & Smoked Agave',
    heroImage:
      'https://images.pexels.com/photos/5848478/pexels-photo-5848478.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/5848478/pexels-photo-5848478.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'Mexico\'s culinary heart — where seven moles, smoke-kissed mezcal, and pre-Hispanic markets still burn with chile and corn.',
    longDescription:
      'Oaxaca is a state where cuisine is layered like its geography — valleys, mountains, and coast each contributing ingredients to one of the world\'s deepest food traditions. The "seven moles" are really hundreds, each a complex architecture of chiles, seeds, and spice ground on a metate. Mezcal, distilled from smoked agave hearts in clay or copper, carries the taste of the land itself. To eat in Oaxaca is to taste a civilization that never stopped cooking.',
    sensoryTags: ['#Smoky', '#Spicy', '#Earthy', '#Complex'],
    flavorProfile: { spice: 88, umami: 80, richness: 75, tanginess: 70 },
    youtubeId: 'L8mDjv2gQkY',
    specialties: [
      {
        name: 'Mole Negro',
        description:
          'The king of moles — 30+ ingredients including charred chilhuacle, mulato, and pasilla chiles, chocolate, and burnt seeds for its midnight-black depth.',
        image:
          'https://images.pexels.com/photos/5848478/pexels-photo-5848478.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Complex', '#Smoky', '#Bittersweet'],
        originStory:
          'Mole negro is said to have been perfected in the 17th century by Sister Andrea de la Asunción at the Convent of Santa Rosa in Puebla — though Oaxaca claims it as its own. Each chile is toasted, each seed charred, the paste toasted again, then simmered for hours until it turns the black of midnight. The recipe is so revered that families hand it down like a surname.',
      },
      {
        name: 'Tlayuda con Tasajo',
        description:
          'A huge crispy-smoky tortilla smeared with asiento, black beans, tasajo beef, cabbage, and a drizzle of mezcal-spiked salsa — Oaxaca\'s midnight meal.',
        image:
          'https://images.pexels.com/photos/5409027/pexels-photo-5409027.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Crispy', '#Smoky', '#Hearty'],
        originStory:
          'The tlayuda is the Oaxacan pizza — a tortilla so large and thin it is grilled until semi-crisp over a comal, then carried folded through the markets of the Central Valley. Originating with Zapotec farmers who needed portable food, it evolved into the late-night icon of Oaxaca\'s calendas and street stalls, topped with tasajo — thin salted beef grilled over mesquite.',
      },
      {
        name: 'Mezcal',
        description:
          'Smoke-kissed spirit distilled from roasted agave hearts — espadín, tobalá, tepeztate — each carrying the wildness of its hillside.',
        image:
          'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Smoky', '#Earthy', '#Herbal'],
        originStory:
          'Mezcal predates tequila by centuries — the Spanish brought distillation, but indigenous Oaxacans had already roasted agave hearts in pit ovens for pulque. The smoke of the pit, the wild yeast of the palenque, and the hands of the mezcalero make each batch unrepeatable. "Para todo mal, mezcal; para todo bien, también."',
      },
    ],
    historicalLore: [
      {
        era: 'Pre-Hispanic',
        title: 'The Metate and the Corn Goddess',
        body: 'Before the Spanish arrived, Zapotec and Mixtec cooks ground corn, chiles, and cacao on stone metates — a tool unchanged for 3,000 years. Corn was sacred, deified as Chicomecóatl, and nixtamalization (treating corn with lime) was already ancient, unlocking the niacin that sustained Mesoamerican civilization.',
      },
      {
        era: '16th Century',
        title: 'When the Convent Met the Comal',
        body: 'Spanish nuns brought Old World spices — clove, cinnamon, sesame — and fused them with indigenous chiles and chocolate. In convent kitchens, mole was born: a bridge between two worlds, layered over days. The nuns\' prayers and the cooks\' grinding became inseparable, and mole became Oaxaca\'s Sunday centerpiece.',
      },
      {
        era: '20th–21st Century',
        title: 'Mezcal Goes Global',
        body: 'Once a rural peasant drink, mezcal surged in the 2000s as artisanal single-village bottlings reached the world. Oaxaca now protects its denominations of origin — yet the heart of mezcal remains the small palenque, where a mezcalero roasts agave in a pit and tastes each distillation by hand.',
      },
    ],
    legends: [
      {
        name: 'Abigail Mendoza Ruiz',
        title: 'The Guardian of the Metate',
        era: 'Modern',
        bio: 'A Zapotec cook from Teotitlán del Valle, Abigail grinds moles by hand on a metate as her ancestors did, preserving recipes spoken in Zapotec. She runs Tlamanalli, a restaurant honoring pre-Hispanic technique.',
        legacy: 'She is a living bridge to pre-Hispanic cuisine, teaching that mole must be felt in the hands, not measured in grams. Her work has made the metate a symbol of Oaxacan culinary identity rather than a relic.',
        image:
          'https://images.pexels.com/photos/5848481/pexels-photo-5848481.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Doña Soledad',
        title: 'The Mezcalera of San Baltazar',
        era: 'Modern',
        bio: 'One of the few female mezcaleras in a male-dominated craft, Doña Soledad roasts agave in clay pots over an earthen pit, distilling by taste and smoke rather than hydrometer.',
        legacy: 'Her single-village mezcal proves the craft belongs to the household, not the factory. She trains her daughters, ensuring the palenque tradition — and the women who kept it alive in the shadows — finally receive their due.',
        image:
          'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'A single mole negro can require 30+ ingredients and two days of grinding and simmering.',
      'Oaxaca produces around 85% of the world\'s mezcal, from over 20 agave varieties.',
      'The "seven moles" is a marketing simplification — Oaxaca has hundreds of regional mole variations.',
    ],
  },
];

import { eastAsiaCities } from './citiesEastAsia';
import { eastAsiaCities2 } from './citiesEastAsia2';
import { menaCities } from './citiesMena';
import { europeCities } from './citiesEurope';
import { europeCities2 } from './citiesEurope2';
import { americasCities } from './citiesAmericas';
import { africaCities } from './citiesAfrica';

export const cities: City[] = [
  ...originalCities,
  ...eastAsiaCities,
  ...eastAsiaCities2,
  ...menaCities,
  ...europeCities,
  ...europeCities2,
  ...americasCities,
  ...africaCities,
];

export const getCityById = (id: string): City | undefined =>
  cities.find((c) => c.id === id);

export const totalCities = cities.length;
