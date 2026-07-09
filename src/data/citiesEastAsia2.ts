import type { City } from './cityTypes';

export const eastAsiaCities2: City[] = [
  {
    id: 'chengdu',
    name: 'Chengdu',
    country: 'China',
    region: 'Sichuan',
    tagline: 'The City of Numbing Spice & Boiling Hot Pot',
    heroImage:
      'https://images.pexels.com/photos/18764184/pexels-photo-18764184.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/18764184/pexels-photo-18764184.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'UNESCO\'s first City of Gastronomy — where Sichuan peppercorns numb your lips and chili oil sets the pot ablaze.',
    longDescription:
      'Chengdu was named the world\'s first UNESCO City of Gastronomy in 2010. Sichuan cuisine is built on málà — the numbing-spicy combination of Sichuan peppercorns and chili that creates a tingling, buzzing sensation on the lips. Hot pot is a religion here: a vat of bubbling chili oil shared among friends, where you cook your own meats, tofu, and vegetables in the fiery broth. Chengdu\'s teahouse culture and street snacks make it one of China\'s most vibrant food cities.',
    sensoryTags: ['#Málà-numbing', '#Fiery', '#Tingling', '#Complex'],
    flavorProfile: { spice: 98, umami: 82, richness: 75, tanginess: 55 },
    youtubeId: 'MjMXaISO6Gk',
    specialties: [
      {
        name: 'Sichuan Hot Pot',
        description:
          'A split pot of fiery red chili-and-peppercorn broth and mild bone broth — you cook thin meats, tripe, lotus root, and tofu in the bubbling vat at your table.',
        image:
          'https://images.pexels.com/photos/18764184/pexels-photo-18764184.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Fiery', '#Málà-numbing', '#Communal'],
        originStory:
          'Sichuan hot pot originated with Chongqing dock workers in the 19th century who cooked offal in spicy broth to make cheap cuts palatable. Chengdu refined it, adding the split pot (yuanyang) so diners could choose spicy or mild. The málà sensation — literally "numbing-spicy" — is unique to Sichuan peppercorns, which contain a molecule that literally vibrates your lip nerves at 50 times per second.',
      },
      {
        name: 'Mapo Tofu',
        description:
          'Silken tofu in a fiery sauce of doubanjiang (fermented broad bean paste), ground beef, Sichuan peppercorn, and chili oil — the dish that means "pockmarked grandmother."',
        image:
          'https://images.pexels.com/photos/18764184/pexels-photo-18764184.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Málà-numbing', '#Umami-bomb', '#Silky'],
        originStory:
          'Created in 1862 by a pockmarked widow (má pó) in Chengdu who served it to passing oil porters. The name "Mapo Tofu" literally means "pockmarked grandmother\'s tofu." The dish is a masterclass in Sichuan flavor layering: the doubanjiang provides umami depth, the peppercorn numbs, the chili burns, and the silken tofu cools — seven sensations in one bite.',
      },
      {
        name: 'Kung Pao Chicken',
        description:
          'Diced chicken stir-fried with peanuts, dried chilies, Sichuan peppercorns, and a sweet-sour sauce — the Sichuan dish the world adopted.',
        image:
          'https://images.pexels.com/photos/18764184/pexels-photo-18764184.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Sweet-spicy', '#Nutty', '#Wok-fired'],
        originStory:
          'Named after Ding Baozhen, a Qing Dynasty official (1820–1886) whose title was Gong Bao (palace guardian). His personal chef created the dish. It traveled the world via Chinese diaspora, though Western versions often substitute the peppercorns with black pepper — a sin that Chengdu natives consider culinary heresy.',
      },
    ],
    historicalLore: [
      {
        era: 'Qing Dynasty',
        title: 'The Seven Flavors of Sichuan',
        body: 'Sichuan cuisine codified seven distinct flavor profiles — málà (numbing-spicy), yuxiang (fish-fragrant), guaiwei (strange-flavor), suanla (sour-spicy), jiangxiang (sauce-fragrant), xiangla (fragrant-spicy), and jiaotiao (peppery). No other cuisine formalizes this many layered tastes, making Sichuan the most complex flavor system in Chinese cooking.',
      },
      {
        era: '2010',
        title: 'UNESCO City of Gastronomy',
        body: 'Chengdu became the first Asian city designated a UNESCO City of Gastronomy, recognized for its 3,000+ years of continuous culinary tradition, its 20+ official flavor profiles, and its teahouse-and-snack culture that sustains over 10,000 restaurants in a single city.',
      },
      {
        era: 'Modern Era',
        title: 'The Málà Diaspora',
        body: 'Sichuan hot pot and málà flavors exploded globally in the 2020s, with chains like Haidilao becoming international empires. Chengdu\'s peppercorn farms now export worldwide, and the "tingling lip" sensation — once unknown outside Sichuan — has become a global flavor trend.',
      },
    ],
    legends: [
      {
        name: 'Chen Mapo',
        title: 'The Pockmarked Grandmother',
        era: '1862',
        bio: 'A Chengdu widow whose face bore pockmarks (má pó) who served tofu and beef to passing oil porters from her modest shop near the Wanfu Bridge in 1862.',
        legacy: 'Her Mapo Tofu became one of Sichuan\'s most globally recognized dishes. The name is literal — "pockmarked grandmother\'s tofu" — and the restaurant she founded still operates in Chengdu, run by her descendants, serving the original 1862 recipe.',
        image:
          'https://images.pexels.com/photos/18764184/pexels-photo-18764184.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Sichuan peppercorns contain a molecule (hydroxy-alpha-sanshool) that vibrates lip nerves at 50 Hz.',
      'Chengdu was the world\'s first UNESCO City of Gastronomy, designated in 2010.',
      'Sichuan cuisine has 7+ official flavor profiles — the most of any Chinese regional cuisine.',
    ],
  },
  {
    id: 'penang',
    name: 'Penang',
    country: 'Malaysia',
    region: 'Penang',
    tagline: 'The Street Food Capital of Asia\'s Spice Crossroads',
    heroImage:
      'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'An island where Malay, Chinese, and Indian cooking merged over centuries — producing hawker dishes found nowhere else on Earth.',
    longDescription:
      'Penang is consistently ranked Asia\'s best street food city. George Town, its capital, is a UNESCO World Heritage site where Malay, Hokkien Chinese, Tamil Indian, and Peranakan (Baba-Nyonya) cuisines cross-pollinated over 200 years. The result is food that exists nowhere else: char kway teow with wok hei, assam laksa with mackerel and tamarind, and nasi kandar — rice flooded with a dozen curries. A single hawker stall may have a 90-minute queue and serve the same dish for 40 years.',
    sensoryTags: ['#Wok-hei', '#Spicy', '#Tangy', '#Coconut'],
    flavorProfile: { spice: 80, umami: 78, richness: 70, tanginess: 75 },
    youtubeId: '6UKN1YpVweg',
    specialties: [
      {
        name: 'Char Kway Teow',
        description:
          'Flat rice noodles stir-fried over extreme heat with prawns, cockles, bean sprouts, Chinese sausage, and egg — infused with smoky wok hei.',
        image:
          'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Wok-hei', '#Smoky', '#Savory'],
        originStory:
          'Brought to Penang by Hokkien Chinese immigrants, char kway teow was originally a laborer\'s meal — cheap noodles cooked fast over intense heat. The dish\'s signature wok hei (breath of the wok) can only be achieved with a wok heated to near-incandescence, which is why the best Penang hawkers cook one plate at a time. The most famous stall, Siam Road, has a 2-hour wait and was featured by Anthony Bourdain.',
      },
      {
        name: 'Assam Laksa',
        description:
          'A tart, fish-based broth of mackerel, tamarind, lemongrass, and galangal poured over rice noodles — topped with mint, pineapple, and torch ginger flower.',
        image:
          'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Tangy', '#Fishy', '#Aromatic'],
        originStory:
          'Penang assam laksa is a Peranakan fusion — Chinese noodle soup reimagined with Malay souring agents (tamarind, assam) and local fish. It ranked #7 on CNN\'s "World\'s 50 Most Delicious Foods." The broth is simmered for hours with locally caught mackerel, then strained, producing a deep, tangy, complex soup unlike the coconut-based laksa of southern Malaysia.',
      },
      {
        name: 'Nasi Kandar',
        description:
          'Steamed rice flooded with a dozen different curries — the signature "kuah campur" (mixed gravy) pour that coats every grain with spice.',
        image:
          'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Spicy', '#Complex', '#Gravy-flooded'],
        originStory:
          'Brought by Tamil Indian Muslim traders (Mamak) who carried rice and curry in baskets (kandar) on shoulder poles through Penang\'s streets in the 19th century. The tradition of flooding rice with multiple curries — "kuah campur" — was born because the traders served whatever curries they had that day. It\'s now Penang\'s most iconic comfort food, with chains like Nasi Kandar Beratur queuing past midnight.',
      },
    ],
    historicalLore: [
      {
        era: '18th–19th Century',
        title: 'The Spice Crossroads',
        body: 'Penang was founded in 1786 by the British East India Company as a free port, drawing Malay, Chinese, Indian, and Arab traders. Its cuisine is the literal product of this migration — Hokkien noodles, Tamil curries, Malay spices, and Peranakan (Straits-born Chinese) technique all merging in George Town\'s hawker stalls.',
      },
      {
        era: '2008',
        title: 'UNESCO World Heritage',
        body: 'George Town was inscribed as a UNESCO World Heritage site, recognized for its living cultural fusion — including its food. The designation preserved the hawker stall culture that makes Penang Asia\'s street food capital, with stall owners often 4th-generation descendants of the original cooks.',
      },
      {
        era: 'Modern Era',
        title: 'Bourdain\'s Blessing',
        body: 'Anthony Bourdain called Penang "the greatest food city in Asia" after visiting in 2008. The attention turned Siam Road char kway teow and Air Itam assam laksa into international pilgrimages. Yet the best stalls still cost under $3, and the hawker masters still cook by hand over screaming-hot woks.',
      },
    ],
    legends: [
      {
        name: 'Tan Chai Hong',
        title: 'The Siam Road Noodle Master',
        era: 'Modern',
        bio: 'A char kway teow hawker who has cooked the same dish from a single cart on Siam Road, George Town, for over 40 years — one plate at a time, over charcoal.',
        legacy: 'His stall has a 2-hour wait and was featured by Anthony Bourdain. He cooks only one plate at a time to preserve wok hei, refusing to expand or franchise. He embodies the hawker ideal: mastery of a single dish, for a lifetime.',
        image:
          'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Penang assam laksa ranked #7 on CNN\'s "World\'s 50 Most Delicious Foods."',
      'The best char kway teow hawkers cook one plate at a time to preserve wok hei.',
      'Nasi kandar means "rice on shoulder poles" — named for 19th-century Tamil traders who carried it.',
    ],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    region: 'Central',
    tagline: 'The Michelin-Starred Hawker City',
    heroImage:
      'https://images.pexels.com/photos/37265042/pexels-photo-37265042.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/37265042/pexels-photo-37265042.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city-state where the world\'s cheapest Michelin-starred meal costs $3 — hawker centers are the national dining room.',
    longDescription:
      'Singapore\'s hawker culture was inscribed on UNESCO\'s Intangible Cultural Heritage list in 2020. These open-air food centers house hundreds of stalls, each specializing in one dish, often for decades. The city has the world\'s cheapest Michelin-starred meal — a $3 soya sauce chicken rice from Hawker Chan. Singapore\'s food is a fusion of Chinese, Malay, and Indian traditions, producing dishes found nowhere else: Hainanese chicken rice, chili crab, and laksa.',
    sensoryTags: ['#Hawker-style', '#Chili-hot', '#Coconut', '#Comforting'],
    flavorProfile: { spice: 70, umami: 80, richness: 72, tanginess: 65 },
    youtubeId: 'OdbSrx4l8rM',
    specialties: [
      {
        name: 'Hainanese Chicken Rice',
        description:
          'Poached chicken at room temperature over fragrant rice cooked in chicken fat and broth — with chili-ginger sauce and dark soy. Singapore\'s national dish.',
        image:
          'https://images.pexels.com/photos/37265042/pexels-photo-37265042.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Comforting', '#Fragrant', '#Clean'],
        originStory:
          'Brought to Singapore by Hainanese immigrants in the 19th century, adapted from Hainan\'s Wenchang chicken. The rice — cooked in chicken fat, ginger, and garlic — is the true star, not the chicken. Every hawker has a secret rice recipe. Tian Tian Hainanese Chicken Rice at Maxwell Food Centre was crowned the best by Anthony Bourdain, and the queue never ends.',
      },
      {
        name: 'Chili Crab',
        description:
          'Whole mud crab wok-fried in a thick, sweet-spicy tomato-chili sauce — eaten with hands, with fried mantou buns to soak up the sauce.',
        image:
          'https://images.pexels.com/photos/37265042/pexels-photo-37265042.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Chili-hot', '#Sweet-savory', '#Messy'],
        originStory:
          'Invented in 1956 by Cher Yam Tian, a Singaporean housewife who stir-fried crabs with bottled chili sauce. Her street cart became the Red House seafood restaurant. The dish evolved into a thick, eggy, tomato-chili sauce that was declared a UNESCO Intangible Heritage dish. It\'s messy, hands-on, and universally considered Singapore\'s most iconic plate.',
      },
      {
        name: 'Katong Laksa',
        description:
          'Rice noodles in a rich, coconut curry broth with prawns, fish cake, and cockles — topped with a laksa leaf. The Katong version is cut into short pieces so you eat it with a spoon alone.',
        image:
          'https://images.pexels.com/photos/37265042/pexels-photo-37265042.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Coconut', '#Spicy', '#Rich'],
        originStory:
          'Laksa is a Peranakan (Straits-born Chinese) fusion of Chinese noodles and Malay coconut curry. The Katong style, from Singapore\'s east coast, cuts noodles short so the entire bowl is eaten with just a spoon — no chopsticks needed. The broth is thick with ground dried shrimp and coconut milk, a dish that exists only in this corner of the world.',
      },
    ],
    historicalLore: [
      {
        era: '19th Century',
        title: 'The Hawker Origins',
        body: 'Singapore\'s hawkers began as itinerant street sellers in the 1800s, carrying food on poles through the port city. The government began consolidating them into hawker centers in the 1970s for hygiene, unintentionally creating the world\'s most concentrated street food ecosystem. There are now 110+ hawker centers with over 6,000 stalls.',
      },
      {
        era: '2016',
        title: 'The $3 Michelin Star',
        body: 'Hawker Chan\'s soya sauce chicken rice stall in Chinatown Complex earned a Michelin star in 2016 — the world\'s cheapest Michelin meal at $2.50. It proved that Michelin recognition could extend to hawker food, transforming Singapore\'s street food reputation overnight.',
      },
      {
        era: '2020',
        title: 'UNESCO Intangible Heritage',
        body: 'Singapore\'s hawker culture was inscribed on UNESCO\'s Intangible Cultural Heritage list, recognizing the community dining, the multi-generational craft, and the role hawkers play in Singaporean identity. The designation put hawker centers alongside French gastronomy and washoku as globally significant food traditions.',
      },
    ],
    legends: [
      {
        name: 'Chan Hon Meng',
        title: 'The Michelin-Starred Hawker',
        era: 'Modern',
        bio: 'A hawker who earned a Michelin star for his $2.50 soya sauce chicken rice at Chinatown Complex in 2016 — the world\'s cheapest Michelin meal.',
        legacy: 'His stall, Hawker Chan, proved that street food could achieve fine-dining recognition. He still cooks his chicken daily, marinated in a 30-year-old master sauce. The Michelin star drew global attention to Singapore\'s hawker culture and its UNESCO heritage.',
        image:
          'https://images.pexels.com/photos/37265042/pexels-photo-37265042.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Singapore has the world\'s cheapest Michelin-starred meal — $2.50 chicken rice from Hawker Chan.',
      'Singapore has 110+ hawker centers with over 6,000 stalls, serving 6,000+ dishes daily.',
      'Hawker culture is a UNESCO Intangible Cultural Heritage, inscribed in 2020.',
    ],
  },
  {
    id: 'osaka',
    name: 'Osaka',
    country: 'Japan',
    region: 'Kansai',
    tagline: 'Japan\'s Kitchen — Where Kuidaore Means "Eat Until You Drop"',
    heroImage:
      'https://images.pexels.com/photos/28460875/pexels-photo-28460875.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/28460875/pexels-photo-28460875.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city so obsessed with food that its motto is kuidaore — "eat until you drop." Street food is a religion here.',
    longDescription:
      'Osaka is Japan\'s street food soul. The city has a saying — kuidaore — meaning "eat until you drop (and can\'t stand)." Unlike Tokyo\'s precision, Osaka celebrates bold, hearty, affordable food: takoyaki balls blistering from the grill, okonomiyaki sizzling on tabletop iron plates, and kushikatsu — deep-fried skewers dunked in shared sauce. The Dotonbori district is a neon-lit canyon of food signs, and Kuromon market is the pantry that feeds the city.',
    sensoryTags: ['#Street-grilled', '#Crispy', '#Savory', '#Comforting'],
    flavorProfile: { spice: 25, umami: 88, richness: 78, tanginess: 55 },
    youtubeId: '3zLvByt52go',
    specialties: [
      {
        name: 'Takoyaki',
        description:
          'Spherical dumplings of wheat batter stuffed with diced octopus, pickled ginger, and scallion — topped with a lattice of sauce, mayo, and dancing bonito flakes.',
        image:
          'https://images.pexels.com/photos/28460875/pexels-photo-28460875.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Street-grilled', '#Crispy-creamy', '#Savory'],
        originStory:
          'Invented in Osaka in 1935 by Tomekichi Endo, who took the recipe from akashiyaki (a smaller, broth-dipped dumpling from nearby Akashi) and added octopus and the signature toppings. Takoyaki is cooked in special cast-iron molds with hemispherical indentations, flipped rapidly with skewers. Every Osaka neighborhood has its local stand, and the best ones have queues at every hour.',
      },
      {
        name: 'Okonomiyaki',
        description:
          'A savory cabbage-and-batter pancake loaded with pork belly, squid, or cheese — griddled at your table and topped with sauce, mayo, and bonito.',
        image:
          'https://images.pexels.com/photos/28460875/pexels-photo-28460875.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Table-griddled', '#Hearty', '#Savory'],
        originStory:
          'Okonomiyaki means "grilled as you like it" — a post-WWII invention born of food scarcity, when flour and cabbage were cheap and plentiful. Osaka style mixes the cabbage and batter together before griddling, while Hiroshima style layers them. It\'s cooked on a teppan (iron plate) built into the table, so diners watch their pancake sizzle. Every Osaka household has a family recipe.',
      },
      {
        name: 'Kushikatsu',
        description:
          'Skewered meat, seafood, and vegetables breaded in panko and deep-fried golden — dunked in a shared tonkatsu-style sauce, with one strict rule: no double-dipping.',
        image:
          'https://images.pexels.com/photos/28460875/pexels-photo-28460875.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Crispy', '#Deep-fried', '#Crunchy'],
        originStory:
          'Born in 1929 at a small shop in Osaka\'s Shinsekai district, kushikatsu was cheap food for the working class. The communal sauce vat — with the "no double-dipping" rule enforced by signs and social pressure — is the defining ritual. Violate it and the entire bar will call you out. It\'s a dish that\'s as much about etiquette as flavor.',
      },
    ],
    historicalLore: [
      {
        era: 'Edo Period',
        title: 'The Kuidaore Spirit',
        body: 'Osaka was Japan\'s rice trade capital during the Edo period (1603–1868), earning the nickname "the nation\'s kitchen" (tenka no daidokoro). The merchant class, unlike samurai who disdained indulgence, celebrated eating as a virtue. The phrase "Kyotoites are ruined by overspending on clothing, Osakans by overspending on food" (kuidaore) became the city\'s identity.',
      },
      {
        era: 'Post-WWII',
        title: 'Scarcity Births Invention',
        body: 'After WWII, flour and cabbage were the cheapest staples in devastated Osaka. From scarcity came okonomiyaki (cabbage pancakes) and takoyaki (octopus dumplings) — hearty, affordable street food that rebuilt the city\'s spirit. Both dishes are now global Japanese food icons, but their soul remains in Osaka\'s alleyway stalls.',
      },
      {
        era: 'Modern Era',
        title: 'Dotonbori\'s Neon Cathedral',
        body: 'Dotonbori is a canal-side street in central Osaka lined with giant, moving food signs — a 6-foot crab, a huge sushi roll, a dragon — making it one of the most photographed food streets on Instagram. The district\'s kuidaore spirit (eat until you drop) is literal: you can graze takoyaki, okonomiyaki, kushikatsu, and taiyaki within a single 500-meter walk.',
      },
    ],
    legends: [
      {
        name: 'Tomekichi Endo',
        title: 'The Father of Takoyaki',
        era: '1935',
        bio: 'An Osaka street vendor who invented takoyaki in 1935 by adapting akashiyaki (a smaller dumpling from Akashi) and adding octopus, pickled ginger, and the signature sauce-and-bonito toppings.',
        legacy: 'His creation became Osaka\'s most iconic street food, sold from thousands of stalls across Japan and now worldwide. The original Endo shop still operates in Osaka, using the same cast-iron molds and the same 1935 batter recipe.',
        image:
          'https://images.pexels.com/photos/28460875/pexels-photo-28460875.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Osaka\'s motto is kuidaore — "eat until you drop."',
      'Takoyaki was invented in Osaka in 1935 and is cooked in special hemispherical molds.',
      'Kushikatsu has a strict "no double-dipping" rule — violators are called out by the whole bar.',
    ],
  },
];
