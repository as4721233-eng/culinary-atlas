import type { City } from './cityTypes';

export const americasCities: City[] = [
  {
    id: 'mexico-city',
    name: 'Mexico City',
    country: 'Mexico',
    region: 'CDMX',
    tagline: 'Where Tacos Al Pastor Spin on Lebanese-Style Spits',
    heroImage:
      'https://images.pexels.com/photos/8448180/pexels-photo-8448180.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/8448180/pexels-photo-8448180.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A megalopolis where tacos al pastor spin on vertical spits, tortillas are pressed by hand, and every corner has a 2 AM taquería.',
    longDescription:
      'Mexico City (CDMX) is one of the world\'s great street food cities — UNESCO recognized Mexican cuisine as Intangible Cultural Heritage in 2010. The city\'s taco culture is its heartbeat: al pastor pork shaved from a vertical spit (adapted from Lebanese shawarma), suadero (brisket), and cochinita pibil. Tortillas are pressed by hand from nixtamalized corn, a 3,500-year-old Mesoamerican process.',
    sensoryTags: ['#Street-tacos', '#Chili-hot', '#Corn-ground', '#Citrus'],
    flavorProfile: { spice: 85, umami: 78, richness: 65, tanginess: 70 },
    youtubeId: 'L8mDjv2gQkY',
    specialties: [
      {
        name: 'Tacos al Pastor',
        description:
          'Marinated pork shaved from a vertical spit (trompo) — topped with pineapple, cilantro, onion, and salsa on a small corn tortilla.',
        image:
          'https://images.pexels.com/photos/8448180/pexels-photo-8448180.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Spit-roasted', '#Sweet-spicy', '#Citrus'],
        originStory:
          'Tacos al pastor were born in the 1930s when Lebanese immigrants brought shawarma (vertical spit) to Puebla and Mexico City. Mexican cooks adapted it: pork (not lamb), achiote-marinated (not yogurt), and a slice of pineapple from the top of the spit. The name "al pastor" ("shepherd style") references the Lebanese origin.',
      },
      {
        name: 'Tacos de Suadero',
        description:
          'Brisket slow-fried in its own fat until crispy outside, tender inside — served on small tortillas with salsa verde and guacamole.',
        image:
          'https://images.pexels.com/photos/8448180/pexels-photo-8448180.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Crispy-tender', '#Fatty', '#Savory'],
        originStory:
          'Suadero is the brisket cut, slow-fried in a copper cauldron (centra) filled with its own rendered fat — a technique born in Mexico City\'s working-class neighborhoods. The meat is chopped fine, creating a texture that\'s crispy on the edges and melting within.',
      },
      {
        name: 'Chilaquiles',
        description:
          'Tortilla chips simmered in green or red salsa, topped with crema, queso fresco, onion, and a fried egg — Mexico\'s ultimate hangover breakfast.',
        image:
          'https://images.pexels.com/photos/8448180/pexels-photo-8448180.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Crunchy-soggy', '#Salsa-bathed', '#Comforting'],
        originStory:
          'Chilaquiles come from the Nahuatl "chil-a-quilitl" (chilis and greens) — an Aztec dish designed to use stale tortillas. The chips are lightly fried, then briefly simmered in salsa so they soften but retain crunch — a precise texture balance.',
      },
    ],
    historicalLore: [
      {
        era: 'Pre-Hispanic (Before 1521)',
        title: 'The Corn Civilization',
        body: 'Mesoamerican civilizations built their cuisine on nixtamalized corn, a process (treating corn with slaked lime) that unlocks niacin and makes corn digestible. Without nixtamalization, Mesoamerican civilization could not have existed. The tortilla, tamale, and pozole all date to this period.',
      },
      {
        era: '1930s',
        title: 'The Lebanese-Shawarma Tacos',
        body: 'Lebanese immigrants fleeing the Ottoman Empire arrived in Puebla and CDMX in the 1920s–30s, bringing shawarma vertical spits. Mexican cooks adapted the technique to pork, achiote marinade, and pineapple — creating tacos al pastor.',
      },
      {
        era: '2010 & 2024',
        title: 'UNESCO Heritage + Michelin Tacos',
        body: 'Mexican cuisine was inscribed on UNESCO\'s Intangible Cultural Heritage in 2010. In 2024, the Michelin Guide debuted in Mexico, and El Califa de León — a tiny CDMX taco stand — earned a star. It was the first Michelin star for a taco stand.',
      },
    ],
    legends: [
      {
        name: 'Enrique Olvera',
        title: 'The Chef Who Put Mexican Fine Dining on the Map',
        era: 'Modern',
        bio: 'Chef of Pujol in Mexico City, consistently ranked among the world\'s top 10 restaurants. He elevated Mexican ingredients to fine dining without European imitation.',
        legacy: 'Olvera proved Mexican cuisine could be avant-garde without losing its roots. His signature dish — a "mole madre" aged for 1,000+ days — is a meditation on time and tradition.',
        image:
          'https://images.pexels.com/photos/8448180/pexels-photo-8448180.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Tacos al pastor were adapted from Lebanese shawarma — a Middle Eastern technique turned Mexican icon.',
      'Nixtamalization is a 3,500-year-old process that made Mesoamerican civilization possible.',
      'Mexico City has over 20,000 taquerías — and one with a Michelin star (El Califa de León, 2024).',
    ],
  },
  {
    id: 'lima',
    name: 'Lima',
    country: 'Peru',
    region: 'Lima Province',
    tagline: 'The ceviche Capital & the Fusion of Three Continents',
    heroImage:
      'https://images.pexels.com/photos/31495669/pexels-photo-31495669.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/31495669/pexels-photo-31495669.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where ceviche is cured by citrus at dawn, and Japanese-Peruvian fusion (Nikkei) changed global cuisine.',
    longDescription:
      'Lima is South America\'s culinary capital, home to 3 of the world\'s top 50 restaurants (Central, Maido, Astrid y Gastón). Peruvian cuisine is a unique fusion of indigenous Inca ingredients (potatoes, corn, quinoa), Spanish colonial technique, African influence, Chinese immigration (chifa), and Japanese immigration (Nikkei). The result is cuisine found nowhere else: ceviche cured in lime and ají, lomo saltado stir-fried in a wok.',
    sensoryTags: ['#Ceviche-fresh', '#Citrus-cured', '#Nikkei-fusion', '#Ají-spiced'],
    flavorProfile: { spice: 65, umami: 82, richness: 55, tanginess: 88 },
    youtubeId: 'mT2r1Z9gH2M',
    specialties: [
      {
        name: 'Ceviche',
        description:
          'Fresh white fish cured in lime juice, ají amarillo chili, red onion, and cilantro — served with sweet potato and choclo (giant corn). Peru\'s national dish.',
        image:
          'https://images.pexels.com/photos/31495669/pexels-photo-31495669.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Citrus-cured', '#Fresh', '#Ají-spiced'],
        originStory:
          'Ceviche is 2,000+ years old — the Moche culture (100–700 CE) cured fish with fermented banana passionfruit juice. The Spanish introduced limes and onions in the 16th century. Peru\'s ceviche is unique: the fish is cured briefly (minutes, not hours), the leche de tigre (the citrus-fish marinade) is drunk as a shot. Peru\'s National Ceviche Day is June 28.',
      },
      {
        name: 'Lomo Saltado',
        description:
          'Beef stir-fried with onions, tomatoes, and ají amarillo in a wok — served with fries and rice. The Chinese-Peruvian (chifa) dish that defines fusion.',
        image:
          'https://images.pexels.com/photos/31495669/pexels-photo-31495669.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Wok-fired', '#Savory', '#Fusion'],
        originStory:
          'Lomo saltado is chifa — Chinese-Peruvian fusion born when Cantonese immigrants arrived in Peru in the 1850s as laborers. They brought the wok and stir-fry technique, which Peruvians adapted with local ingredients: ají amarillo, Andean beef, and a side of fries.',
      },
      {
        name: 'Ají de Gallina',
        description:
          'Shredded chicken in a creamy sauce of ají amarillo, bread, walnuts, and Parmesan — served with rice and olives. The "comfort food" of Lima.',
        image:
          'https://images.pexels.com/photos/31495669/pexels-photo-31495669.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Creamy', '#Mildly-spiced', '#Comforting'],
        originStory:
          'Ají de gallina evolved from Catalan fricandó, brought by Spanish colonists. Peruvian cooks replaced European ingredients with ají amarillo (the signature yellow chili), bread (instead of flour), and evaporated milk.',
      },
    ],
    historicalLore: [
      {
        era: 'Pre-Columbian',
        title: '4,000 Potatoes & the Inca Pantry',
        body: 'Peru is the birthplace of the potato — over 4,000 native varieties grow in the Andes. The Inca cultivated potatoes, quinoa, corn, and ají chilis, preserving them through freeze-drying (chuño) at high altitude.',
      },
      {
        era: '1850s–1900s',
        title: 'Chinese & Japanese Immigration',
        body: 'Chinese laborers arrived in the 1850s, bringing woks and Cantonese stir-fry — creating chifa, now a national institution with over 9,000 chifa restaurants in Lima alone. Japanese immigrants arrived in 1899, creating Nikkei cuisine (Japanese-Peruvian fusion).',
      },
      {
        era: 'Modern Era',
        title: 'The Lima Renaissance',
        body: 'In the 2010s, Lima became South America\'s food capital. Central (by Virgilio Martínez) was named the world\'s best restaurant in 2023. Maido (Nikkei) and Astrid y Gastón round out 3 world-top-50 restaurants.',
      },
    ],
    legends: [
      {
        name: 'Virgilio Martínez',
        title: 'The Chef Who Cooks Altitude',
        era: 'Modern',
        bio: 'Chef of Central in Lima, named the world\'s best restaurant in 2023. His "Mater Iniciativa" researches Andean ingredients from sea level to 4,500m.',
        legacy: 'Martínez\'s Altitudes menu takes diners from 25m below sea level to 4,100m above, each dish tied to a specific elevation. He proved that Peruvian cuisine could be the world\'s most innovative without imitation.',
        image:
          'https://images.pexels.com/photos/31495669/pexels-photo-31495669.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Peru has over 4,000 native potato varieties — the potato originated in the Andes.',
      'Lima has over 9,000 chifa (Chinese-Peruvian) restaurants — more than any city outside China.',
      'Central in Lima was named the world\'s best restaurant in 2023.',
    ],
  },
  {
    id: 'new-orleans',
    name: 'New Orleans',
    country: 'USA',
    region: 'Louisiana',
    tagline: 'Where French, African & Spanish Flavors Simmer in One Pot',
    heroImage:
      'https://images.pexels.com/photos/16694957/pexels-photo-16694957.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/16694957/pexels-photo-16694957.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'The Crescent City where gumbo, po\' boys, and beignets tell the story of Creole and Cajun survival.',
    longDescription:
      'New Orleans is America\'s most distinctive food city — a place where French, Spanish, African, and Caribbean cuisines fused over 300 years into Creole and Cajun traditions. Gumbo, a slow-rouxed stew, is the city\'s dish: each family\'s recipe is a lineage. Po\' boys — overstuffed sandwiches on French bread — were born to feed striking streetcar workers.',
    sensoryTags: ['#Roux-based', '#Creole-spiced', '#Fried', '#Sweet'],
    flavorProfile: { spice: 60, umami: 78, richness: 88, tanginess: 45 },
    youtubeId: '3JcFy7wQy2E',
    specialties: [
      {
        name: 'Gumbo',
        description:
          'A slow-cooked stew of dark roux, okra or filé, and Andouille sausage with chicken or seafood — the dish that defines New Orleans.',
        image:
          'https://images.pexels.com/photos/16694957/pexels-photo-16694957.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Roux-based', '#Slow-cooked', '#Deep-flavored'],
        originStory:
          'Gumbo is a true melting pot: the name comes from the Bantu (West African) word "ki ngombo" (okra), the roux from French cuisine, the filé (sassafras) from Choctaw Indians, and the spice from Spanish and Caribbean traditions. A New Orleans gumbo roux is cooked slowly — up to an hour — until it turns the color of dark chocolate.',
      },
      {
        name: 'Shrimp Po\' Boy',
        description:
          'Fried shrimp overstuffed into New Orleans French bread with lettuce, tomato, pickle, and remoulade — the sandwich that fed striking workers.',
        image:
          'https://images.pexels.com/photos/16694957/pexels-photo-16694957.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Fried', '#Overstuffed', '#Crispy'],
        originStory:
          'The po\' boy was born in 1929 during a streetcar conductor strike. Benny and Clovis Martin, former streetcar workers turned bakers, fed free sandwiches to the "poor boys" on the picket line. "Dressed" means with lettuce, tomato, pickle, and mayo.',
      },
      {
        name: 'Beignets',
        description:
          'Square fried dough pillows buried in powdered sugar — served hot with chicory coffee at Café du Monde since 1862.',
        image:
          'https://images.pexels.com/photos/16694957/pexels-photo-16694957.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Fried', '#Sweet', '#Powdered'],
        originStory:
          'Beignets were brought to New Orleans by French colonists and Acadians (Cajuns) expelled from Canada in 1755. Café du Monde, open since 1862 in the French Market, has served the same beignets and chicory coffee for 163 years.',
      },
    ],
    historicalLore: [
      {
        era: '18th Century',
        title: 'Creole vs. Cajun',
        body: 'New Orleans food is split between Creole (city-born, French-Spanish-African urban cuisine with tomatoes and complex sauces) and Cajun (rural, French-Acadian, rustic one-pot cooking). Creole gumbo uses tomatoes; Cajun gumbo uses a darker roux and no tomatoes.',
      },
      {
        era: '1929',
        title: 'The Sandwich that Fed a Strike',
        body: 'During the 1929 streetcar strike, the Martin brothers — former conductors turned bakers — fed free sandwiches to striking "poor boys." The po\' boy was born: overstuffed fried seafood on New Orleans French bread.',
      },
      {
        era: '1862–Present',
        title: 'Café du Monde & the 3 AM Beignet',
        body: 'Café du Monde has served beignets and chicory coffee in the French Market since 1862 — 163 years of continuous operation. Open 24 hours (except Christmas), it is the city\'s late-night ritual.',
      },
    ],
    legends: [
      {
        name: 'Leah Chase',
        title: 'The Queen of Creole Cuisine',
        era: '1923–2019',
        bio: 'Chef of Dooky Chase\'s Restaurant in New Orleans\' Tremé, a Creole institution that fed the Civil Rights Movement. She cooked for Martin Luther King Jr., Thurgood Marshall, and Barack Obama.',
        legacy: 'Leah Chase turned a segregated restaurant into a meeting place for civil rights leaders — strategy was planned over her gumbo. She inspired Disney\'s Princess Tiana.',
        image:
          'https://images.pexels.com/photos/16694957/pexels-photo-16694957.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'The po\' boy was invented to feed striking streetcar workers in 1929.',
      'Café du Monde has served beignets and chicory coffee 24/7 since 1862 — 163 years.',
      'A proper New Orleans gumbo roux is cooked for up to an hour until it turns dark chocolate brown.',
    ],
  },
  {
    id: 'new-york',
    name: 'New York',
    country: 'USA',
    region: 'New York',
    tagline: 'The City Where Every Cuisine on Earth Collides',
    heroImage:
      'https://images.pexels.com/photos/31706370/pexels-photo-31706370.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/31706370/pexels-photo-31706370.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where a $3 dollar pizza slice and a $400 omakase coexist, and the bagel is a religion perfected by immigrant hands.',
    longDescription:
      'New York is the world\'s most diverse food city — 800+ languages and every cuisine on Earth. The dollar slice is a civic institution, the bagel is boiled-then-baked to a chewy perfection found nowhere else (blame the water), and Katz\'s pastrami has been hand-carved since 1888. From Dominican chimichurri carts in Washington Heights to hand-pulled noodles in Flushing\'s Chinatown, New York is a culinary atlas in one borough-spanning grid.',
    sensoryTags: ['#Pizza-foldable', '#Deli-stacked', '#Bagel-boiled', '#Global-fusion'],
    flavorProfile: { spice: 40, umami: 75, richness: 72, tanginess: 60 },
    youtubeId: 'mT2r1Z9gH2M',
    specialties: [
      {
        name: 'New York Pizza Slice',
        description:
          'A thin, foldable slice with a crisp-chewy crust — cheese to the edge, eaten standing up, folded lengthwise. The city\'s most democratic meal.',
        image:
          'https://images.pexels.com/photos/31706370/pexels-photo-31706370.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Foldable', '#Crisp-chewy', '#Street-eaten'],
        originStory:
          'New York pizza was born in 1905 when Gennaro Lombardi opened Lombardi\'s on Spring Street — America\'s first pizzeria — adapting Neapolitan pizza for coal-oven baking. The result: a larger, thinner, foldable slice with a crust that\'s crisp on the bottom and chewy within.',
      },
      {
        name: 'Pastrami on Rye',
        description:
          'Hand-carved, peppercorn-crusted pastrami piled inches high on rye bread with mustard — Katz\'s has been curing it since 1888.',
        image:
          'https://images.pexels.com/photos/31706370/pexels-photo-31706370.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Peppery', '#Smoky', '#Stacked-high'],
        originStory:
          'Pastrami arrived with Romanian-Jewish immigrants in the 1880s. The Romanian "pastramă" was adapted by New York delis: brined, seasoned with coriander and black pepper, smoked, and steamed. Katz\'s Delicatessen, open since 1888, cures pastrami for 30 days and hand-carves each sandwich.',
      },
      {
        name: 'New York Bagel',
        description:
          'A bagel boiled in water before baking — dense, chewy, with a crisp crust — topped with cream cheese and lox. The water theory.',
        image:
          'https://images.pexels.com/photos/31706370/pexels-photo-31706370.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Boiled-then-baked', '#Chewy', '#Dense'],
        originStory:
          'Bagels came to New York with Eastern European Jewish immigrants in the late 1800s. The New York bagel is distinguished by boiling before baking — a process that gelatinizes the starch and creates the signature chewy interior and crisp crust. The "New York water theory" holds that the city\'s soft tap water produces superior gluten.',
      },
    ],
    historicalLore: [
      {
        era: '1880s–1920s',
        title: 'The Great Immigration Food Wave',
        body: 'Between 1880 and 1924, 2.4 million immigrants — mostly Italian, Jewish, and Eastern European — passed through Ellis Island into New York. Each brought their cuisine: pizza, bagels, pastrami, knishes. These foods were survival tools that evolved into "New York" food.',
      },
      {
        era: '1905',
        title: 'The First American Pizza',
        body: 'Gennaro Lombardi opened Lombardi\'s on Spring Street in 1905 — America\'s first licensed pizzeria. He adapted Neapolitan pizza for New York\'s coal ovens: larger, thinner, foldable. The slice (not the whole pie) became the unit of New York pizza in the 1940s.',
      },
      {
        era: 'Modern Era',
        title: 'The Borough Food Atlas',
        body: 'New York\'s 800+ languages map onto its food. Flushing\'s Chinatown has the best hand-pulled noodles outside China. Washington Heights sells Dominican chimichurri burgers. Jackson Heights has Colombian arepas, Tibetan momos, and Indian chaat on one block. New York is the only city where every cuisine on Earth coexists.',
      },
    ],
    legends: [
      {
        name: 'Jake Dell',
        title: 'The Keeper of Katz\'s',
        era: 'Modern',
        bio: 'Third-generation owner of Katz\'s Delicatessen, the 1888 Lower East Side pastrami temple. He preserves the hand-carving, the ticket system, and the 30-day curing process.',
        legacy: 'Katz\'s has survived 137 years by refusing to mechanize. Pastrami is still cured for 30 days, hand-carved, and piled inches high. The ticket system (lose it and pay $50) is iconic.',
        image:
          'https://images.pexels.com/photos/31706370/pexels-photo-31706370.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'New York pizza was born in 1905 at Lombardi\'s — America\'s first pizzeria.',
      'Katz\'s Delicatessen has hand-carved pastrami since 1888 — 137 years of the same recipe.',
      'New York bagels are boiled before baking — the "water theory" blames/credits NYC tap water.',
    ],
  },
];
