import type { City } from './cityTypes';

export const africaCities: City[] = [
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    region: 'Western Cape',
    tagline: 'Where the Braai Meets the Cape Malay Spice Route',
    heroImage:
      'https://images.pexels.com/photos/4078164/pexels-photo-4078164.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/4078164/pexels-photo-4078164.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where the braai (BBQ) is a national ritual and Cape Malay curry tells the story of spice-route exiles.',
    longDescription:
      'Cape Town\'s food is a collision of African, Dutch, Malay, and Indian traditions. The braai (barbecue) is South Africa\'s national social ritual — meat grilled over wood, never gas. Cape Malay cuisine, born of enslaved people brought from Indonesia and Malaysia by the Dutch East India Company, gave the city its signature bobotie (spiced mince bake) and aromatic curries. The Winelands surrounding Cape Town produce some of the Southern Hemisphere\'s best wines.',
    sensoryTags: ['#Wood-grilled', '#Cape-Malay-spiced', '#Braai', '#Fruity'],
    flavorProfile: { spice: 55, umami: 72, richness: 70, tanginess: 60 },
    youtubeId: 'jM80u2ZtkI8',
    specialties: [
      {
        name: 'Bobotie',
        description:
          'Spiced minced meat baked with a golden egg custard topping, raisins, and curry — Cape Town\'s national dish, served with yellow rice and chutney.',
        image:
          'https://images.pexels.com/photos/4078164/pexels-photo-4078164.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Spiced', '#Sweet-savory', '#Custard-topped'],
        originStory:
          'Bobotie is Cape Malay in origin — created by enslaved people brought from Indonesia and Malaysia to the Cape by the Dutch East India Company in the 17th century. The dish adapts Indonesian bobotok (meat steamed in banana leaf) with Cape spices, raisins, and a baked egg custard topping. It is South Africa\'s unofficial national dish, a product of displacement and ingenuity.',
      },
      {
        name: 'Braai (Wood-Fire BBQ)',
        description:
          'Lamb chops, boerewors sausage, and steak grilled over wood coals — never gas. The braai is a social ritual, not just a cooking method.',
        image:
          'https://images.pexels.com/photos/4078164/pexels-photo-4078164.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Wood-grilled', '#Smoky', '#Communal'],
        originStory:
          'The braai (from the Afrikaans "braaivleis" — roast meat) is South Africa\'s national social institution. It is always cooked over wood (never gas — gas is considered cheating), and the braaimaster is a position of respect. National Braai Day (Sept 24) is a public holiday. Boerewors ("farmer\'s sausage") is the obligatory coil, made with coriander, nutmeg, and cloves.',
      },
      {
        name: 'Malva Pudding',
        description:
          'A warm, sticky sponge pudding soaked in apricot jam syrup — served with custard or ice cream. South Africa\'s favorite dessert.',
        image:
          'https://images.pexels.com/photos/4078164/pexels-photo-4078164.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Sticky-sweet', '#Warm', '#Spongy'],
        originStory:
          'Malva pudding has Cape Dutch origins, named after the malvasia wine that originally accompanied it. The pudding is baked, then soaked in a hot syrup of cream, butter, and sugar, making it impossibly moist. It is South Africa\'s most beloved dessert — served at every braai, every Sunday lunch, and every restaurant from Cape Town to Johannesburg.',
      },
    ],
    historicalLore: [
      {
        era: '17th Century',
        title: 'The Cape Malay Diaspora',
        body: 'The Dutch East India Company brought enslaved people from Indonesia, Malaysia, and India to the Cape starting in 1658. These displaced communities created Cape Malay cuisine — fusing Indonesian techniques with African ingredients and Dutch baking. Bobotie, denningvleis, and koeksisters are all products of this forced migration, now national dishes.',
      },
      {
        era: '19th Century',
        title: 'The Boer War & Biltong',
        body: 'During the Anglo-Boer War (1899–1902), Afrikaner fighters needed portable meat that wouldn\'t spoil. They cured beef with vinegar, salt, and coriander, drying it in the African sun — creating biltong. It is now South Africa\'s national snack, sold in every gas station, bar, and grocery store.',
      },
      {
        era: 'Modern Era',
        title: 'The Winelands & the New Cuisine',
        body: 'Cape Town\'s surrounding Winelands (Stellenbosch, Franschhoek) produce world-class wines — South Africa is the 8th largest wine producer. The region\'s restaurants (La Colombe, The Test Kitchen Fridge) regularly appear on the World\'s 50 Best list, pioneering a new "Cape cuisine" that braids indigenous, Malay, and Dutch traditions with modern technique.',
      },
    ],
    legends: [
      {
        name: 'Jan Braai',
        title: 'The Patron Saint of the Braai',
        era: 'Modern',
        bio: 'A South African food personality who founded National Braai Day (Sept 24) and campaigns to make the braai South Africa\'s shared national ritual, across all cultures.',
        legacy: 'Jan Braai turned a cooking method into a national unity project. His books and TV shows codified braai technique for a global audience, and National Braai Day is now a public holiday. He argues that the braai — not politics — is what unites South Africans.',
        image:
          'https://images.pexels.com/photos/4078164/pexels-photo-4078164.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'A true braai is always cooked over wood — never gas. Gas is considered cheating.',
      'Bobotie was created by enslaved people from Indonesia brought to the Cape in the 17th century.',
      'South Africa is the 8th largest wine producer, with vines dating to 1659.',
    ],
  },
  {
    id: 'lagos',
    name: 'Lagos',
    country: 'Nigeria',
    region: 'Lagos State',
    tagline: 'The Home of Jollof, Suya & West Africa\'s Boldest Flavors',
    heroImage:
      'https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where jollof rice is a matter of national pride, suya sizzles on street corners, and the food is as bold as the nightlife.',
    longDescription:
      'Lagos is West Africa\'s food capital — a city of 20 million where the cuisine is as loud and bold as its music scene. Jollof rice, the signature dish, is a matter of national pride (the "jollof wars" between Nigeria and Ghana are a recurring diplomatic joke). Suya — spicy grilled meat skewers rubbed with yaji (a peanut-chili spice blend) — is the street food king, sold from open charcoal grills after dark. Lagos\'s bukas (street canteens) serve pounded yam with egusi soup at all hours.',
    sensoryTags: ['#Chili-bold', '#Peanut-spiced', '#Smoky-grilled', '#Party-food'],
    flavorProfile: { spice: 88, umami: 75, richness: 65, tanginess: 60 },
    youtubeId: 'SnyKLOgtDxg',
    specialties: [
      {
        name: 'Jollof Rice',
        description:
          'Rice cooked in a deeply reduced tomato-pepper-onion base with stock, curry, and thyme — smoky, spicy, and the subject of a national rivalry.',
        image:
          'https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Smoky', '#Spicy', '#Comforting'],
        originStory:
          'Jollof rice originated with the Wolof people of Senegal (the "Jolof" Empire, 14th–16th century) and spread across West Africa. The Nigerian version — cooked in a single pot with a deeply reduced tomato base — is the most globally famous. The "jollof wars" between Nigeria and Ghana over whose version is superior are a beloved cultural rivalry. Nigerian jollof is smokier (the "party rice" cooked over wood), spicier, and redder.',
      },
      {
        name: 'Suya',
        description:
          'Thinly sliced beef rubbed with yaji (ground peanut, chili, ginger, and spice) and grilled over open charcoal — served in newspaper with onions and tomatoes.',
        image:
          'https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Chili-bold', '#Peanut-spiced', '#Charcoal-grilled'],
        originStory:
          'Suya was created by the Hausa people of northern Nigeria, traditionally made by butchers who grilled their leftover cuts. The yaji spice blend — ground roasted peanuts, chili pepper, ginger, and secret spices — is each suya master\'s signature. Lagos suya stalls ("mali" stalls) open at dusk and grill through the night, the smoke visible blocks away.',
      },
      {
        name: 'Egusi Soup with Pounded Yam',
        description:
          'A rich soup of ground melon seeds, leafy greens, palm oil, and assorted meats — eaten by swallowing balls of pounded yam dipped in the soup.',
        image:
          'https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Rich', '#Nutty', '#Hearty'],
        originStory:
          'Egusi soup is one of Nigeria\'s most traditional dishes — ground melon (egusi) seeds thicken a soup of palm oil, bitter leaf or waterleaf, dried fish, and meats. It is eaten with pounded yam (yam boiled and pounded in a mortar until stretchy and smooth). The technique of pounding yam — rhythmic, communal, in a wooden mortar — is itself a cultural ritual, passed through generations.',
      },
    ],
    historicalLore: [
      {
        era: '14th–16th Century',
        title: 'The Jolof Empire & the Birth of Jollof',
        body: 'Jollof rice originated with the Wolof people of the Jolof Empire (modern Senegal), spreading across West Africa via trade. Each nation adapted it: Nigeria made it smoky and spicy (party rice, cooked over wood), Ghana made it sweeter. The "jollof wars" — a cultural rivalry over whose version is best — are now a beloved West African cultural phenomenon.',
      },
      {
        era: 'Hausa Tradition',
        title: 'The Butchers\' Suya',
        body: 'Suya was created by Hausa butchers in northern Nigeria who grilled leftover cuts over open charcoal, rubbing them with ground peanut and chili. The yaji spice blend is each suya master\'s secret, passed through families. In Lagos, suya stalls open at dusk, their smoke a nighttime landmark — the dish is the city\'s most popular late-night street food.',
      },
      {
        era: 'Modern Era',
        title: 'The Afrobeats Food Wave',
        body: 'As Afrobeats (Burna Boy, Wizkid, Tems) went global in the 2020s, Nigerian food followed. Jollof rice, suya, and puff-puff became Instagram and TikTok staples. Lagos\'s food scene — from bukas (street canteens) to fine dining (Nok by Alara) — is now a global food pilgrimage, and Nigerian restaurants are opening in London, New York, and Tokyo.',
      },
    ],
    legends: [
      {
        name: 'The Suya Masters of Mallam Musa',
        title: 'The Hausa Grill Kings',
        era: 'Generations',
        bio: 'Lagos\'s suya stalls are run by Hausa grill masters, often named Musa, who guard their yaji spice blend as a family secret and grill from dusk to dawn.',
        legacy: 'The suya masters are Lagos\'s nighttime food institution. Their yaji — ground roasted peanuts, chili, ginger, and secret spices — is never written down. The best stalls (University of Lagos gate, Yaba) have queues of students, musicians, and night owls until 4 AM, the charcoal smoke perfuming entire blocks.',
        image:
          'https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'The "jollof wars" between Nigeria and Ghana over whose jollof rice is better are a beloved cultural rivalry.',
      'Suya\'s yaji spice blend is each grill master\'s secret — never written down, passed through families.',
      'Pounded yam is made by rhythmically pounding boiled yam in a wooden mortar until stretchy and smooth.',
    ],
  },
  {
    id: 'delhi',
    name: 'Delhi',
    country: 'India',
    region: 'Delhi NCR',
    tagline: 'The Mughal Street Food Capital of India',
    heroImage:
      'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where chaat is an art form, parathas are stuffed with everything imaginable, and Mughal flavors still rule the old city lanes.',
    longDescription:
      'Delhi is India\'s street food capital — a city where Mughal-era cuisine meets Punjabi gusto and South Indian spice. Old Delhi (Chandni Chowk) is a maze of food lanes: paratha gali (paratha street) where each shop stuffs a different filling, karim\'s serving mughlai curries since 1913, and chaat walls selling gol gappa (pani puri) by the dozen. Delhi\'s chaat — a category of tangy, crunchy, sweet-spicy snacks — is a culinary philosophy unto itself.',
    sensoryTags: ['#Chaat-tangy', '#Mughal-rich', '#Stuffed-fried', '#Spicy'],
    flavorProfile: { spice: 85, umami: 80, richness: 78, tanginess: 82 },
    youtubeId: 'qc7iiJE027o',
    specialties: [
      {
        name: 'Chole Bhature',
        description:
          'Spiced chickpea curry served with puffed, deep-fried bread (bhatura) — Delhi\'s iconic breakfast, eaten with pickled green chili and raw onion.',
        image:
          'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Spicy', '#Fried-puffy', '#Comforting'],
        originStory:
          'Chole bhature is a Delhi-Punjab fusion — the chole (chickpea curry) is Mughal-influenced with its black tea and spice base, while the bhatura (leavened fried bread) is Punjabi. The dish became Delhi\'s signature breakfast, served from morning stalls in Sitaram Bazaar and Connaught Place. The bhatura must be fried to order — puffed, crisp, and eaten immediately before it deflates.',
      },
      {
        name: 'Gol Gappa (Pani Puri)',
        description:
          'Hollow crispy shells filled with spiced potato, chickpeas, tamarind chutney, and mint-coriander water — eaten in one explosive bite. Delhi\'s favorite chaat.',
        image:
          'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Crunchy', '#Tangy-explosive', '#Street-classic'],
        originStory:
          'Gol gappa (also called pani puri in Mumbai, puchka in Kolkata) is India\'s most beloved street snack. The Delhi version uses spiced potato and chickpea filling, with a tamarind-mint water (pani) that is simultaneously spicy, tangy, sweet, and cooling. The vendor hands you each puri one at a time — you eat it in a single bite, the shell cracking and the flavored water flooding your mouth.',
      },
      {
        name: 'Daulat ki Chaat',
        description:
          'A cloud-like foam of sweetened milk, threaded cream (nimish), and saffron — sold only in winter in Old Delhi. A dessert called "chaat."',
        image:
          'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Foamy', '#Saffron-sweet', '#Melting'],
        originStory:
          'Daulat ki Chaat ("wealth of the chaat") is a winter-only Delhi dessert — despite the name, it is sweet, not savory. Milk is churned overnight in the cool winter air until it separates into a foam (nimish), then topped with saffron, pistachio, and khoya. It is sold only in Old Delhi\'s lanes from December to February, and the foam collapses within hours — it cannot be stored or transported.',
      },
    ],
    historicalLore: [
      {
        era: 'Mughal Empire (1526–1857)',
        title: 'The Imperial Kitchen',
        body: 'Delhi was the Mughal capital, and the empire\'s kitchens brought Persian, Central Asian, and Indian techniques together. Kebabs, biryani, and korma all evolved here. Old Delhi (Shahjahanabad) was built by Shah Jahan in 1648, and its food lanes — Chandni Chowk, Jama Masjid — still serve dishes directly descended from Mughal palace recipes.',
      },
      {
        era: '1947 Partition',
        title: 'The Punjabi Influx',
        body: 'After Partition in 1947, Punjabi refugees flooded Delhi, bringing tandoori cooking, butter chicken, and sarson ka saag. The collision of Mughal old Delhi cuisine with Punjabi refugee food created modern Delhi food — chole bhature, butter chicken, and dal makhani all became Delhi signatures through this migration.',
      },
      {
        era: 'Modern Era',
        title: 'The Chaat Capital',
        body: 'Delhi is India\'s chaat capital — the word "chaat" (from "chatna," to lick) describes a category of tangy, crunchy, explosive snacks. From gol gappa to aloo tikki to papdi chaat, Delhi\'s chaat walls are artists of sweet-sour-spicy balance. The city has over 100,000 street food vendors, and Old Delhi\'s food walks are now a global tourist pilgrimage.',
      },
    ],
    legends: [
      {
        name: 'Karimuddin',
        title: 'The Keeper of the Mughal Flame',
        era: '1913',
        bio: 'A descendant of the Mughal imperial kitchen staff who opened Karim\'s in Old Delhi in 1913, near Jama Masjid, serving recipes from the Mughal court that his family had guarded since the empire fell.',
        legacy: 'Karim\'s is now a 112-year-old institution with multiple locations, but the original — a tiny shop in a Galli off Jama Masjid — still serves the same mutton korma, seekh kebab, and biryani from the original Mughal recipes. It is a direct culinary link to the 1857 end of the Mughal Empire.',
        image:
          'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Daulat ki Chaat — a sweet milk foam dessert — is sold only in Old Delhi\'s winter, and collapses within hours.',
      'Karim\'s in Old Delhi has served Mughal palace recipes since 1913 — a direct link to the 1857 empire.',
      'Delhi has over 100,000 street food vendors, and Old Delhi food walks are a global pilgrimage.',
    ],
  },
];
