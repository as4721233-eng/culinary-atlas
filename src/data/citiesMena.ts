import type { City } from './cityTypes';

export const menaCities: City[] = [
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Türkiye',
    region: 'Marmara',
    tagline: 'Where Two Continents Meet Over Simit, Kebab & Baklava',
    heroImage:
      'https://images.pexels.com/photos/37424474/pexels-photo-37424474.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/37424474/pexels-photo-37424474.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city straddling Europe and Asia, where Ottoman palace cuisine meets street-side simit carts and the world\'s best baklava.',
    longDescription:
      'Istanbul is the only city on Earth spanning two continents, and its food reflects that geography. Ottoman palace cuisine — refined over 600 years — layered Persian, Byzantine, Arab, and Central Asian techniques into a tradition of staggering complexity. On the street, simit (sesame bread rings) are sold from red carts, balık ekmek (fish sandwiches) are grilled on boats along the Bosphorus, and baklava shops layer 40 sheets of dough with pistachio and syrup. Turkish breakfast (kahvaltı) is a legendary multi-dish ritual.',
    sensoryTags: ['#Ottoman', '#Grilled', '#Honeyed', '#Spiced'],
    flavorProfile: { spice: 55, umami: 75, richness: 80, tanginess: 50 },
    youtubeId: '3JcFy7wQy2E',
    specialties: [
      {
        name: 'Baklava',
        description:
          '40+ layers of paper-thin yufka dough brushed with clarified butter, layered with Antep pistachios, and soaked in lemon-scented syrup — each piece a crackle.',
        image:
          'https://images.pexels.com/photos/37424474/pexels-photo-37424474.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Honeyed', '#Crispy', '#Nutty'],
        originStory:
          'Baklava\'s origins are contested — Greeks, Turks, and Syrians all claim it — but it was perfected in the Ottoman palace kitchens of Istanbul\'s Topkapı Palace in the 15th century. The sultan\'s baklava procession (Baklava Alayı) every Ramadan sent trays of baklava from palace to barracks, a tradition revived in modern Türkiye. Gaziantep, in southeast Türkiye, holds the UNESCO designation for the world\'s best pistachio baklava.',
      },
      {
        name: 'Balık Ekmek',
        description:
          'A grilled mackerel or sea bass fillet stuffed into crusty bread with onion, lettuce, and a squeeze of lemon — sold from rocking boats on the Bosphorus.',
        image:
          'https://images.pexels.com/photos/37424474/pexels-photo-37424474.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Grilled', '#Fresh', '#Street-classic'],
        originStory:
          'Balık ekmek ("fish bread") was born in the late Ottoman era when fishermen on the Galata Bridge began grilling their catch on their boats and stuffing it into bread for dock workers. The rocking boat grills of Eminönü are now an Istanbul landmark — dozens of wooden vessels painted in red and white, each grilling fish over charcoal while the Bosphorus current sways them.',
      },
      {
        name: 'Kahvaltı (Turkish Breakfast)',
        description:
          'A sprawling table of 15+ small plates: olives, white cheese, honey-kaymak, menemen (scrambled eggs with tomato and pepper), sucuk, jams, and endless çay.',
        image:
          'https://images.pexels.com/photos/37424474/pexels-photo-37424474.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Communal', '#Abundant', '#Variety'],
        originStory:
          'Kahvaltı means "before coffee" — a meal designed to be eaten slowly, with family, on weekends. The ritual dates to the Ottoman era but exploded into its current lavish form in 20th-century Istanbul. A proper Turkish breakfast is not a plate but a table: 15–25 small dishes, replenished constantly, served with tulip glasses of black çay (tea). It\'s the most photographed Turkish meal on Instagram.',
      },
    ],
    historicalLore: [
      {
        era: 'Ottoman Empire (1453–1922)',
        title: 'The Palace Kitchen That Fed an Empire',
        body: 'Topkapı Palace employed hundreds of chefs organized by specialty — kebabcı, helvacı (sweets), börekçi (pastries). Recipes were guarded state secrets, and the palace kitchen fed up to 10,000 people daily. Many dishes invented there — including refined baklava and hünkar beğendi (sultan\'s delight) — filtered to the streets over centuries.',
      },
      {
        era: '19th Century',
        title: 'The Bosphorus Boat Grills',
        body: 'In the late 1800s, fishermen around the Galata Bridge began grilling their catch on their boats, stuffing it into bread for dock workers and ferrymen. The balık ekmek tradition was born — cheap, fresh, portable. The rocking boat grills of Eminönü are now one of the most photographed street food scenes in the world.',
      },
      {
        era: 'Modern Era',
        title: 'The Kahvaltı Renaissance',
        body: 'Istanbul\'s Turkish breakfast culture exploded in the 2010s, with cafes in neighborhoods like Beşiktaş and Moda turning kahvaltı into a 3-hour weekend ritual. Instagram made the spread of small dishes globally viral, and Turkish breakfast is now one of the world\'s most photographed meals.',
      },
    ],
    legends: [
      {
        name: 'Gaziantep Baklava Masters',
        title: 'The Keepers of the Pistachio',
        era: 'Generations',
        bio: 'The baklava masters of Gaziantep (southeast Türkiye) have refined pistachio baklava over generations, using only the early-harvest "boz" pistachio and clarified butter from local cows.',
        legacy: 'Gaziantep baklava is a geographically protected product (like Champagne). The masters layer dough so thin you can read through it — 40+ sheets in a single tray. Their craft was recognized by UNESCO in 2023.',
        image:
          'https://images.pexels.com/photos/37424474/pexels-photo-37424474.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Turkish baklava can have 40+ layers of dough, each thinner than a page.',
      'Gaziantep pistachio baklava is a geographically protected product, like Champagne.',
      'Istanbul\'s balık ekmek has been sold from rocking boat grills on the Bosphorus since the 1800s.',
    ],
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    country: 'Morocco',
    region: 'Marrakech-Safi',
    tagline: 'The Spice-Scented Maze of Tagines & Mint Tea',
    heroImage:
      'https://images.pexels.com/photos/30068445/pexels-photo-30068445.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/30068445/pexels-photo-30068445.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where the call to prayer mixes with spice market aromas, and tagines simmer for hours beneath conical clay lids.',
    longDescription:
      'Marrakech\'s Jemaa el-Fnaa square is a UNESCO Masterpiece of Oral and Intangible Heritage — by day a market of spices, tagines, and orange juice carts; by night a vast open-air food festival with 100+ stalls cooking harira soup, grilled lamb, and snail broth. Moroccan cuisine is a Berber-Arab-Andalusian fusion, built on the tagine (a conical clay pot that slow-cooks meat with preserved lemon, olives, and dried fruit), couscous, and the ritual of mint tea poured from a height to aerate the brew.',
    sensoryTags: ['#Spiced', '#Slow-cooked', '#Fragrant', '#Sweet-savory'],
    flavorProfile: { spice: 60, umami: 70, richness: 75, tanginess: 55 },
    youtubeId: 'L8mDjv2gQkY',
    specialties: [
      {
        name: 'Lamb Tagine with Prunes',
        description:
          'Lamb shoulder slow-cooked in a conical clay tagine with prunes, almonds, sesame, cinnamon, and honey — a study in sweet-savory balance.',
        image:
          'https://images.pexels.com/photos/30068445/pexels-photo-30068445.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Slow-cooked', '#Sweet-savory', '#Fragrant'],
        originStory:
          'The tagine is both a dish and a vessel — a conical clay pot that traps steam and slow-cooks meat and fruit into melting tenderness. The combination of lamb with prunes, almonds, and honey is a classic Moroccan wedding dish, symbolizing the balance of savory and sweet that defines Moroccan cuisine.',
      },
      {
        name: 'Couscous Royale',
        description:
          'Hand-rolled semolina steamed three times over a stew of lamb, chicken, and seven vegetables — Morocco\'s Friday ritual, served after prayers.',
        image:
          'https://images.pexels.com/photos/30068445/pexels-photo-30068445.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Steamed', '#Hearty', '#Communal'],
        originStory:
          'Couscous is Berber in origin, dating to at least the 13th century. The name may derive from the Berber word "seksu" (well-formed). It is traditionally hand-rolled, steamed three times in a couscoussière, and served on Fridays after prayers. UNESCO inscribed couscous as Intangible Cultural Heritage in 2020.',
      },
      {
        name: 'Moroccan Mint Tea',
        description:
          'Gunpowder green tea steeped with fresh spearmint and sugar, poured from a silver teapot held high to create a foam — the ritual of Moroccan hospitality.',
        image:
          'https://images.pexels.com/photos/30068445/pexels-photo-30068445.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Sweet', '#Minty', '#Ritual'],
        originStory:
          'Moroccans call mint tea "Moroccan whiskey" — it\'s the national drink, poured from a height to aerate the tea and create a foam (the "crown"). The ritual of pouring from the teapot held high is a sign of hospitality and skill; a poor pour is a social embarrassment.',
      },
    ],
    historicalLore: [
      {
        era: 'Berber Origins',
        title: 'The Tagine and the Desert',
        body: 'The tagine vessel was invented by Berber nomads for desert cooking — its conical lid condenses steam and returns moisture, allowing hours of slow cooking with minimal water. The dish and the vessel are inseparable: cooking in anything else produces a stew, not a tagine. Berber cuisine is the foundation of all Moroccan food.',
      },
      {
        era: 'Andalusian Refuge (1492)',
        title: 'The Exiles Who Brought Flavor',
        body: 'When Muslims and Jews were expelled from Spain in 1492, many settled in Marrakech and Fez, bringing Andalusian techniques — preserved lemons, almond pastries, and complex spice blends. This migration fused with Berber and Arab traditions, producing the layered, sweet-savory Moroccan cuisine recognized today.',
      },
      {
        era: 'Modern Era',
        title: 'Jemaa el-Fnaa — The Night Kitchen',
        body: 'Marrakech\'s Jemaa el-Fnaa square transforms at sunset into a vast open-air food festival. Numbered stalls cook harira soup, grilled lamb skewers, tagines, and snail broth. The square is a UNESCO Masterpiece of Oral Heritage — the only market in the world where the food, the storytellers, and the musicians are protected as intangible heritage.',
      },
    ],
    legends: [
      {
        name: 'The Tagine Grandmothers',
        title: 'The Daida Keepers',
        era: 'Generations',
        bio: 'In Moroccan culture, tagine mastery is passed mother-to-daughter. The "daida" (grandmother) is the keeper of the family tagine recipe, which can include 20+ spices and a specific layering order.',
        legacy: 'Every Moroccan family has a grandmother\'s tagine recipe — a lineage of taste. The spice blend (ras el hanout, "top of the shop") is personal, often containing 20–30 spices. This matriarchal transmission is why no two tagines taste alike.',
        image:
          'https://images.pexels.com/photos/30068445/pexels-photo-30068445.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'The tagine\'s conical lid was designed for desert cooking — it recycles steam with minimal water.',
      'Jemaa el-Fnaa is a UNESCO Masterpiece of Oral Heritage — the only protected food market of its kind.',
      'Moroccan mint tea is poured from a height to create a foam called the "crown."',
    ],
  },
  {
    id: 'beirut',
    name: 'Beirut',
    country: 'Lebanon',
    region: 'Beirut Governorate',
    tagline: 'The Levantine Mezze Capital of the World',
    heroImage:
      'https://images.pexels.com/photos/29253332/pexels-photo-29253332.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/29253332/pexels-photo-29253332.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where a single meal can be 30 small plates — mezze is not a course, it\'s a philosophy of abundance and conversation.',
    longDescription:
      'Beirut\'s food culture runs on mezze — a sprawling ritual of small plates (hummus, baba ganoush, tabbouleh, kibbeh, fattoush) designed to extend conversation, not end it. Lebanese cuisine is built on olive oil, lemon, garlic, and fresh herbs, with the Levant\'s best produce — tomatoes, eggplant, pomegranate — playing starring roles. Beirut\'s restaurants range from high-end fine dining to corner shawarma stands, and the city\'s resilience is reflected in its food: no matter what, the mezze table is set.',
    sensoryTags: ['#Mezze', '#Fresh', '#Garlicky', '#Olive-oiled'],
    flavorProfile: { spice: 50, umami: 70, richness: 65, tanginess: 80 },
    youtubeId: 'mT2r1Z9gH2M',
    specialties: [
      {
        name: 'Hummus Beiruti',
        description:
          'Chickpeas and tahini whipped with lemon, garlic, and ice water until impossibly smooth — topped with olive oil, paprika, and pine nuts.',
        image:
          'https://images.pexels.com/photos/29253332/pexels-photo-29253332.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Creamy', '#Garlicky', '#Tangy'],
        originStory:
          'Hummus has been made in the Levant for centuries — the earliest known recipe appears in a 13th-century Cairo cookbook. The Lebanese version, hummus beiruti, is distinguished by extra lemon, extra garlic, and the secret of ice water, which makes the tahini whip up lighter and smoother.',
      },
      {
        name: 'Shawarma',
        description:
          'Vertical-spit lamb or chicken shaved into thin, crispy-edges strips — wrapped in saj bread with garlic toum, pickles, and fries inside the wrap.',
        image:
          'https://images.pexels.com/photos/29253332/pexels-photo-29253332.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Grilled', '#Garlicky', '#Street-classic'],
        originStory:
          'Shawarma (from the Turkish "çevirme," meaning "turning") was brought to Beirut by Ottoman-era spit-roasters. The Lebanese version distinguishes itself with toum — a whipped garlic sauce that is fiendishly difficult to emulsify — and the inclusion of fries inside the wrap. Beirut\'s shawarma stands are open until 4 AM.',
      },
      {
        name: 'Tabbouleh',
        description:
          'A salad of mountains of flat-leaf parsley, bulgur, tomato, mint, lemon, and olive oil — where parsley is the main ingredient, not bulgur.',
        image:
          'https://images.pexels.com/photos/29253332/pexels-photo-29253332.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Fresh', '#Herbal', '#Tangy'],
        originStory:
          'Tabbouleh originated in the mountains of Lebanon and Syria. The Lebanese version is parsley-forward (the correct ratio is 3:1 parsley to bulgur), unlike Western versions which often reverse it. Lebanon holds the Guinness World Record for the largest tabbouleh (3,532 kg, made in 2009).',
      },
    ],
    historicalLore: [
      {
        era: 'Ottoman Era',
        title: 'The Mezze Philosophy',
        body: 'Lebanese mezze evolved from the Ottoman tradition of small plates, but Beirut elevated it to an art form — 30+ dishes served in a specific order, each designed to prolong conversation. The word "mezze" may come from the Persian "maza" (taste/relish). A Beirut mezze meal can last 4 hours, and the table is never empty.',
      },
      {
        era: 'Phoenician Roots',
        title: 'The Olive and the Vine',
        body: 'Lebanon\'s food foundations — olive oil, wine, and flatbread — date to the Phoenicians (1500–300 BCE), who cultivated olives and grapes along the Levantine coast 3,000+ years ago. The Phoenicians introduced the alphabet and wine to the Mediterranean.',
      },
      {
        era: 'Modern Era',
        title: 'Resilience on a Plate',
        body: 'Beirut has survived civil war, occupation, and economic collapse, yet its restaurants never closed for long. Food is the city\'s defiance — the mezze table is always set. In 2020, after the Beirut port explosion, restaurants were among the first to reopen, feeding rescue workers.',
      },
    ],
    legends: [
      {
        name: 'Kamal Mouzawak',
        title: 'The Founder of Souk el Tayeb',
        era: 'Modern',
        bio: 'A Lebanese food activist who founded Souk el Tayeb, Lebanon\'s first organic farmers\' market, in 2004 — preserving traditional Lebanese food and supporting small farmers through crisis.',
        legacy: 'Mouzawak proved that food could be a tool for peace and preservation in a war-scarred country. Souk el Tayeb grew into Tawlet, a network of communal kitchens where rural women cook their regional specialties.',
        image:
          'https://images.pexels.com/photos/29253332/pexels-photo-29253332.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'A traditional Beirut mezze can have 30+ small plates and last 4 hours.',
      'Lebanon holds the Guinness World Record for the largest tabbouleh — 3,532 kg.',
      'Lebanese toum (garlic sauce) is so difficult to emulsify that chefs consider it a benchmark of skill.',
    ],
  },
];
