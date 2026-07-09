import type { City } from './cityTypes';

export const eastAsiaCities: City[] = [
  {
    id: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    region: 'Central Thailand',
    tagline: 'Where Every Street Corner Sizzles with Sweet, Sour, and Fire',
    heroImage:
      'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where wok hei rises from night markets and every bite balances sweet, sour, salty, and heat in a single breath.',
    longDescription:
      'Bangkok is a city that cooks in public. From floating markets to soi-side carts, the wok is a stage and the cook a performer. Thai cuisine is built on the principle of balancing four pillars — sweet, sour, salty, and spicy — in every dish. A single spoonful of pad kra pao should make you sweat, smile, and reach for more, all at once. This is food engineered for addiction.',
    sensoryTags: ['#Wok-fired', '#Spicy', '#Sweet-and-sour', '#Aromatic'],
    flavorProfile: { spice: 90, umami: 75, richness: 60, tanginess: 85 },
    youtubeId: 'MY3Qy6vAbZQ',
    specialties: [
      {
        name: 'Pad Thai',
        description:
          'Rice noodles stir-fried with tamarind paste, fish sauce, palm sugar, and lime — topped with crushed peanuts, bean sprouts, and a wedge of charred lime.',
        image:
          'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Sweet-and-sour', '#Wok-fired', '#Tangy'],
        originStory:
          'Pad Thai was engineered in the 1930s by Prime Minister Plaek Phibunsongkhram as a national dish to unify Thailand and reduce rice consumption during wartime shortages. The government distributed noodle carts and recipes, turning a political project into the world\'s most recognized Thai dish — a lesson in how cuisine can be nation-building.',
      },
      {
        name: 'Tom Yum Goong',
        description:
          'A hot-and-sour soup of lemongrass, galangal, kaffir lime, bird\'s-eye chili, and river prawns — fragrant, fierce, and restorative.',
        image:
          'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Spicy', '#Aromatic', '#Tangy'],
        originStory:
          'Tom yum is centuries old, born in the waterway communities of central Thailand where freshwater prawns and aromatic herbs were abundant. Its name comes from the Thai word for "boiling" and the Lao word for "salad" — a dish that is both cooked and raw, fierce and fragrant, capturing the duality of Thai cuisine itself.',
      },
      {
        name: 'Mango Sticky Rice (Khao Niao Mamuang)',
        description:
          'Sweet glutinous rice soaked in salted coconut cream, paired with sun-ripe Nam Dok Mai mango — the dessert that broke the internet.',
        image:
          'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Sweet', '#Creamy', '#Coconut'],
        originStory:
          'A street dessert that became a global Instagram phenomenon. During mango season (March–June), Bangkok\'s best vendors queue from dawn for the perfect Nam Dok Mai mangoes — so ripe they yield to a spoon. The combination of warm coconut rice and cool, fragrant fruit is a study in temperature and texture contrast.',
      },
    ],
    historicalLore: [
      {
        era: 'Ayutthaya Era',
        title: 'The Royal Spice Route',
        body: 'Thai cuisine absorbed Indian, Chinese, and Malay influences through centuries of trade via the Ayutthaya kingdom (1351–1767). Royal kitchens codified the balance of flavors, and the chili pepper — brought by Portuguese traders in the 16th century — transformed Thai food forever, becoming the backbone of its heat.',
      },
      {
        era: '1930s–40s',
        title: 'The Invention of Pad Thai',
        body: 'Prime Minister Phibunsongkhram sought a national dish to modernize Thailand and reduce rice dependency. The government distributed noodle recipes and carts to citizens, promoting "pad Thai" as patriotic cuisine. It worked — pad Thai became synonymous with Thai identity worldwide.',
      },
      {
        era: 'Modern Era',
        title: 'Street Food Capital of the World',
        body: 'Bangkok was named the world\'s best street food city by CNN multiple times. Yaowarat (Chinatown) and Khao San Road are nightly pilgrimages, where a single cart may serve 300 portions an hour. In 2024, Bangkok earned its first Michelin-starred street food vendor.',
      },
    ],
    legends: [
      {
        name: 'Jay Fai',
        title: 'The Ski-Goggle Wok Queen',
        era: 'Modern',
        bio: 'A street cook who earned a Michelin star for her crab omelettes cooked over charcoal in a soi-side shop. She wears ski goggles to shield her eyes from splattering oil.',
        legacy: 'Jay Fai proved street food could rival fine dining. Her signature dish — a golden crab omelette — costs 1,000 baht, yet the queue wraps around the block. She refused to franchise, cooking every omelette herself.',
        image:
          'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Bangkok has over 100,000 street food vendors serving an estimated 6 million meals daily.',
      'The chili pepper was introduced to Thailand by Portuguese traders in the 16th century.',
      'A proper pad Thai is judged by "wok hei" — the breath of the wok, a smoky flavor only achievable at extreme heat.',
    ],
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    region: 'Kantō',
    tagline: 'Precision on a Plate — Where Umami Was Born',
    heroImage:
      'https://images.pexels.com/photos/24811708/pexels-photo-24811708.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/24811708/pexels-photo-24811708.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where a ramen master spends 18 hours on a single bowl, and a sushi apprentice grinds rice for years before touching fish.',
    longDescription:
      'Tokyo holds the most Michelin stars of any city on Earth, yet its greatest food lives in basement ramen shops and predawn fish auctions. Japanese cuisine is built on restraint — the belief that perfection is the absence of the unnecessary. A bowl of ramen can take 18 hours to make; a single piece of nigiri sushi a lifetime to master. Tokyo is where umami, the fifth taste, was identified and named.',
    sensoryTags: ['#Umami-bomb', '#Precise', '#Comforting', '#Brothy'],
    flavorProfile: { spice: 30, umami: 98, richness: 70, tanginess: 40 },
    youtubeId: 'An6cuIMTgxo',
    specialties: [
      {
        name: 'Tonkotsu Ramen',
        description:
          'Pork bone broth simmered for 18+ hours until milky and collagen-rich, with springy noodles, chashu pork, ajitama egg, and scallions.',
        image:
          'https://images.pexels.com/photos/24811708/pexels-photo-24811708.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Umami-bomb', '#Rich', '#Comforting'],
        originStory:
          'Tonkotsu ramen originated in Hakata (Fukuoka) in the 1930s when a ramen shop owner accidentally overcooked pork bones, discovering that prolonged boiling extracted collagen and turned the broth milky white. Tokyo adopted and elevated it, with shops like Ippudo and Ichiran turning the humble bowl into a global obsession.',
      },
      {
        name: 'Edomae Nigiri Sushi',
        description:
          'Hand-pressed vinegared rice topped with marinated or briefly cured fish — tuna, amberjack, eel — each piece seasoned differently.',
        image:
          'https://images.pexels.com/photos/24811708/pexels-photo-24811708.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Precise', '#Umami-bomb', '#Clean'],
        originStory:
          'Edomae sushi was invented in early 19th-century Edo (Tokyo) as fast food — finger food sold from carts. Chef Hanaya Yohei (1799–1858) is credited with popularizing nigiri: pressing fish onto rice by hand, serving it instantly. Before refrigeration, fish was marinated in vinegar, boiled, or soy-cured to preserve it — techniques that became signature flavors.',
      },
      {
        name: 'Tonkatsu',
        description:
          'A thick pork cutlet panko-crusted and deep-fried until shatteringly crisp, served with shredded cabbage and a tangy tonkatsu sauce.',
        image:
          'https://images.pexels.com/photos/24811708/pexels-photo-24811708.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Crispy', '#Crunchy', '#Savory'],
        originStory:
          'Tonkatsu was invented in Tokyo\'s Rengatei restaurant in 1899 as a yoshoku (Western-style Japanese) dish — Japan\'s take on European breaded cutlet. It evolved into a national staple, with the panko crust and tangy Worcestershire-based sauce becoming uniquely Japanese. Every bowl of katsudon (tonkatsu over rice with egg) is a comfort food icon.',
      },
    ],
    historicalLore: [
      {
        era: 'Early 1800s',
        title: 'Sushi as Fast Food',
        body: 'In Edo (old Tokyo), nigiri sushi was street food — sold from carts and eaten standing up. Chef Hanaya Yohei popularized the hand-pressed style around 1824. There was no refrigeration, so fish was cured in vinegar or soy. The dish was so fast it was called "fast food of Edo."',
      },
      {
        era: '1908',
        title: 'The Discovery of Umami',
        body: 'Tokyo Imperial University chemist Kikunae Ikeda identified the fifth taste — umami — while studying kombu (kelp) broth. He isolated glutamate as the source and patented monosodium glutamate (MSG), transforming global cuisine. Umami is now recognized alongside sweet, sour, salty, and bitter.',
      },
      {
        era: 'Modern Era',
        title: 'The Michelin Capital',
        body: 'Tokyo holds the Guinness World Record for most Michelin-starred restaurants — over 200. Yet its food soul lives in tiny counters where a single chef serves 8 guests, in ramen shops where tickets are bought from vending machines, and at the Toyosu fish market where the world\'s best tuna auctions begin at 5 AM.',
      },
    ],
    legends: [
      {
        name: 'Jiro Ono',
        title: 'The Sushi Shokunin',
        era: 'Modern',
        bio: 'Subject of the documentary "Jiro Dreams of Sushi," Ono is a 10-seat Sukiyabashi Jiro chef who has been making sushi since age 9. He served Obama and Shinzo Abe in 2014.',
        legacy: 'Jiro embodies shokunin — the craftsman\'s lifelong pursuit of mastery. At 98, he still stands at his counter daily. His apprentices spend years learning to fold towels before touching rice, and a decade before making tamagoyaki (egg sushi).',
        image:
          'https://images.pexels.com/photos/24811708/pexels-photo-24811708.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Tokyo holds the world record for most Michelin-starred restaurants — over 200.',
      'A tonkotsu ramen broth is simmered for 18+ hours until pork bones dissolve into milky collagen.',
      'Umami, the fifth taste, was discovered in Tokyo in 1908 by chemist Kikunae Ikeda studying kombu broth.',
    ],
  },
  {
    id: 'seoul',
    name: 'Seoul',
    country: 'South Korea',
    region: 'Seoul Capital Area',
    tagline: 'Fire, Fermentation & the Sizzle of Tabletop BBQ',
    heroImage:
      'https://images.pexels.com/photos/5773960/pexels-photo-5773960.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/5773960/pexels-photo-5773960.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where kimchi ferments for months, pork belly sizzles at your table, and gochujang brings the heat to everything.',
    longDescription:
      'Seoul\'s food runs on fermentation and fire. Korean cuisine is one of the world\'s most fermented — kimchi, gochujang, doenjang (soybean paste), and makgeolli all depend on months of patient microbial transformation. At Korean BBQ joints, the table is the kitchen: grills are built into the tables, and diners cook their own samgyeopsal (pork belly) wrapped in lettuce with ssamjang and garlic. The energy is communal, loud, and unapologetically spicy.',
    sensoryTags: ['#Fermented', '#Spicy', '#Table-grilled', '#Garlicky'],
    flavorProfile: { spice: 82, umami: 85, richness: 65, tanginess: 72 },
    youtubeId: 'ljf8yxDQ1d0',
    specialties: [
      {
        name: 'Samgyeopsal (Korean BBQ)',
        description:
          'Thick pork belly slices grilled at your table over charcoal, wrapped in lettuce with ssamjang, raw garlic, kimchi, and green chili.',
        image:
          'https://images.pexels.com/photos/5773960/pexels-photo-5773960.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Table-grilled', '#Smoky', '#Garlicky'],
        originStory:
          'Samgyeopsal ("three-layer flesh") became a phenomenon in post-war South Korea when pork became affordable in the 1970s. The communal table-grill format is uniquely Korean — the act of cooking together, wrapping ssam (lettuce wraps), and drinking soju turns a meal into a social ritual. It\'s now a global export, with Korean BBQ restaurants in every major city.',
      },
      {
        name: 'Bibimbap',
        description:
          'A bowl of rice topped with seasoned vegetables, beef, fried egg, and gochujang — mixed vigorously before eating so every bite carries all flavors.',
        image:
          'https://images.pexels.com/photos/5773960/pexels-photo-5773960.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Colorful', '#Spicy', '#Nutty'],
        originStory:
          'Bibimbap ("mixed rice") dates to the Joseon Dynasty (14th century), originally served as a royal dish and during the lunar new year to use up leftover banchan (side dishes). The Jeonju version — with beef tartare, raw egg yolk, and bean sprout broth — is considered the gold standard. Its visual harmony of five colors (obangsaek) reflects Korean aesthetic philosophy.',
      },
      {
        name: 'Tteokbokki',
        description:
          'Chewy rice cakes simmered in a fiery gochujang sauce with fish cakes, scallions, and sometimes cheese — Korea\'s #1 street snack.',
        image:
          'https://images.pexels.com/photos/5773960/pexels-photo-5773960.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Spicy', '#Chewy', '#Sweet-heat'],
        originStory:
          'Originally a royal court dish called gungjung tteokbokki made with soy sauce and vegetables — not spicy. The gochujang version was born in 1953 at Seoul\'s Sindang-dong by Madam Ma Bok-rim, who added chili paste after tasting a leftover rice cake dish. It exploded into Korea\'s most beloved street food, and the Sindang-dong Tteokbokki Town still exists.',
      },
    ],
    historicalLore: [
      {
        era: 'Joseon Dynasty (1392–1897)',
        title: 'The Art of Fermentation',
        body: 'Korean fermentation culture was born from necessity — long winters required preserved food. Kimjang, the communal autumn kimchi-making ritual, was inscribed on UNESCO\'s Intangible Heritage list in 2013. A traditional Korean meal includes 3–12 banchan (side dishes), most fermented, each a tiny explosion of umami.',
      },
      {
        era: '1953',
        title: 'The Birth of Spicy Tteokbokki',
        body: 'After the Korean War, Madam Ma Bok-rim in Seoul\'s Sindang-dong reinvented a mild royal rice cake dish by adding gochujang. The spicy tteokbokki became the defining street food of modern Korea — affordable, addictive, and now a global export thanks to K-drama and K-pop exposure.',
      },
      {
        era: 'Modern Era',
        title: 'The K-Food Wave',
        body: 'Driven by the Korean Wave (Hallyu), Korean food became a global phenomenon. Mukbang (eating broadcasts) on YouTube and TikTok turned dishes like corn dogs, cheese tteokbokki, and samgyeopsal into viral sensations. Seoul\'s Myeongdong street food alley is now a tourist pilgrimage site.',
      },
    ],
    legends: [
      {
        name: 'Madam Ma Bok-rim',
        title: 'The Mother of Spicy Tteokbokki',
        era: '1933–2015',
        bio: 'A Seoul street vendor who, in 1953, added gochujang to a mild royal rice cake dish and accidentally invented the spicy tteokbokki that became Korea\'s national street snack.',
        legacy: 'Her small cart in Sindang-dong grew into Tteokbokki Town — an entire district of tteokbokki shops. She proved that a single recipe change could create a cultural icon. Every spicy rice cake eaten today traces back to her experiment.',
        image:
          'https://images.pexels.com/photos/5773960/pexels-photo-5773960.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'There are over 200 documented varieties of kimchi in Korea.',
      'Koreans eat an average of 40 lbs of kimchi per person per year.',
      'Kimjang, the communal kimchi-making ritual, is a UNESCO Intangible Cultural Heritage.',
    ],
  },
  {
    id: 'hanoi',
    name: 'Hanoi',
    country: 'Vietnam',
    region: 'Red River Delta',
    tagline: 'The Birthplace of Pho & a Cuisine of Quiet Elegance',
    heroImage:
      'https://images.pexels.com/photos/34683316/pexels-photo-34683316.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/34683316/pexels-photo-34683316.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'Where pho was born — a clear, fragrant broth simmered for hours, served with rice noodles and a pile of fresh herbs.',
    longDescription:
      'Hanoi\'s cuisine is the quiet, precise north to Saigon\'s bold, sweet south. Northern Vietnamese food uses less heat and sugar, letting the purity of each ingredient speak. Pho, the national dish, originated here in the early 20th century — a fragrant beef broth simmered for hours with charred ginger, star anise, and cinnamon. Hanoi\'s old quarter is a maze of 36 streets, each historically named for the single craft — and dish — it sold.',
    sensoryTags: ['#Fragrant', '#Brothy', '#Fresh', '#Herbal'],
    flavorProfile: { spice: 45, umami: 78, richness: 55, tanginess: 60 },
    youtubeId: 'Wc_F_BesIT0',
    specialties: [
      {
        name: 'Pho Bo',
        description:
          'A clear, fragrant beef broth simmered for 8+ hours with charred ginger, star anise, and cinnamon — served with rice noodles, thin beef slices, and a mountain of fresh herbs.',
        image:
          'https://images.pexels.com/photos/34683316/pexels-photo-34683316.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Fragrant', '#Brothy', '#Comforting'],
        originStory:
          'Pho originated in the early 1900s in northern Vietnam, near Hanoi, as a fusion of Chinese noodle soup and French pot-au-feu (beef stew). The name "pho" may derive from the French "pot-au-feu" or the Chinese "fen" (rice noodles). Vendors in Nam Dinh and Hanoi\'s old quarter perfected it, serving it from carts at dawn. After 1954 division, southern Vietnamese added sweeter broth and hoisin sauce — but Hanoi\'s original remains pure and clear.',
      },
      {
        name: 'Bun Cha',
        description:
          'Grilled pork patties and belly over cold rice noodles with herbs, dipping sauce of fish sauce, vinegar, and sugar — the dish Obama and Anthony Bourdain ate together.',
        image:
          'https://images.pexels.com/photos/34683316/pexels-photo-34683316.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Smoky', '#Sweet-savory', '#Fresh'],
        originStory:
          'Bun cha is Hanoi\'s signature lunch, born in the old quarter\'s market stalls. The pork is grilled over charcoal on bamboo skewers, giving it a distinctive smokiness. In 2016, President Obama and Anthony Bourdain ate bun cha at Huu Lung restaurant in Hanoi, paying $6 — the photo went viral and put bun cha on every food traveler\'s list.',
      },
      {
        name: 'Egg Coffee (Cà Phê Trứng)',
        description:
          'Whipped egg yolk and condensed milk folded into a dense, custard-like foam over robusta coffee — a Hanoi original born of milk shortage.',
        image:
          'https://images.pexels.com/photos/34683316/pexels-photo-34683316.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Sweet', '#Creamy', '#Bold'],
        originStory:
          'Invented in 1946 at Hanoi\'s Giang Café when milk was scarce under French colonial rule. Barista Nguyen Giang whisked egg yolk with condensed milk as a cream substitute, creating a dessert-like coffee. It survived war, poverty, and decades to become Hanoi\'s most Instagrammable drink — served in a bowl of hot water to keep the foam warm.',
      },
    ],
    historicalLore: [
      {
        era: 'Early 1900s',
        title: 'Pho is Born from Colonial Collision',
        body: 'Pho emerged in northern Vietnam around 1900–1930 as a collision of cultures: Chinese rice noodles, Vietnamese beef (traditionally, Vietnamese rarely ate beef — oxen were working animals), and French pot-au-feu technique. The result was a dish uniquely Vietnamese, born of colonial disruption.',
      },
      {
        era: '1954',
        title: 'The Division of Pho',
        body: 'After Vietnam\'s 1954 partition, northern pho refugees brought the dish south, where Saigon cooks added sweeter broth, hoisin sauce, and bean sprouts. Hanoi\'s pho remains the purist\'s version — clear, fragrant, minimal garnish — while southern pho is bolder and sweeter. The two styles are a culinary map of a divided nation.',
      },
      {
        era: 'Modern Era',
        title: 'The 36 Streets of the Old Quarter',
        body: 'Hanoi\'s old quarter has 36 streets, each historically named for the single product it sold — Hang Bun (noodle street), Hang Bo (cardboard), Hang Ca (fish). Many still specialize. Bun cha, pho, and egg coffee were all born in these few blocks, making the old quarter one of the world\'s densest culinary districts.',
      },
    ],
    legends: [
      {
        name: 'Nguyen Giang',
        title: 'The Father of Egg Coffee',
        era: '1946',
        bio: 'A Hanoi barista who invented cà phê trứng (egg coffee) in 1946 when milk was scarce under colonial rule, whisking egg yolk with condensed milk as a cream substitute.',
        legacy: 'His family\'s Giang Café still serves the original recipe in Hanoi\'s old quarter. Egg coffee survived war and poverty to become Hanoi\'s signature drink — a symbol of Vietnamese ingenuity under constraint.',
        image:
          'https://images.pexels.com/photos/34683316/pexels-photo-34683316.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Hanoi pho broth simmers for 8+ hours with charred ginger and star anise for its signature clarity.',
      'Hanoi\'s old quarter has 36 streets, each historically named for a single craft or dish.',
      'Egg coffee was invented in 1946 as a milk substitute and is now a Hanoi Instagram icon.',
    ],
  },
];
