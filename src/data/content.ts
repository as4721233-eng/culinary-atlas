export type QuizQuestion = {
  id: string;
  type: 'trivia' | 'visual';
  prompt: string;
  image?: string;
  options: string[];
  correctIndex: number;
  originStory: string;
  fact: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'trivia',
    prompt:
      'Which volcanic soil gives the San Marzano tomato its famously sweet, low-acidity flavor?',
    options: ['Vesuvius ash', 'Etna pumice', 'Santorini tuff', 'Stromboli lava'],
    correctIndex: 0,
    originStory:
      'The San Marzano tomato grows only on the volcanic slopes of Mount Vesuvius, outside Naples. The mineral-rich ash soil drains perfectly and sweetens the fruit, giving it a dense, low-acid flesh that makes it the only legally protected tomato for vera pizza napoletana.',
    fact: 'San Marzano seeds are descended from seeds planted by the ancient Romans.',
  },
  {
    id: 'q2',
    type: 'visual',
    prompt: 'Which city is the birthplace of this pizza?',
    image:
      'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800',
    options: ['Rome', 'Naples', 'Florence', 'Milan'],
    correctIndex: 1,
    originStory:
      'Naples is the undisputed birthplace of pizza. In 1889, pizzaiolo Raffaele Esposito created the Margherita — tomato, mozzarella, and basil mirroring the Italian flag — for Queen Margherita of Savoy. The wood-fired, 90-second bake became gospel.',
    fact: 'The art of the Neapolitan pizzaiuolo was inscribed on UNESCO\'s Intangible Heritage list in 2017.',
  },
  {
    id: 'q3',
    type: 'trivia',
    prompt:
      'The legendary Tunday kebab of Lucknow was created for a Nawab with what unusual condition?',
    options: [
      'He had no teeth',
      'He was vegetarian',
      'He was allergic to spice',
      'He could not smell',
    ],
    correctIndex: 0,
    originStory:
      'In the 17th century, an aging Nawab of Awadh lost his teeth but refused to give up meat. Royal khansamas pounded mutton with raw papaya and over 160 spices into a paste so tender it dissolved without chewing — the galahoti, later sold as Tunday kebab.',
    fact: 'Tunday Kababi in old Lucknow still guards the original recipe, reportedly with 160 spices.',
  },
  {
    id: 'q4',
    type: 'trivia',
    prompt: 'How many distinct moles is Oaxaca famously said to have?',
    options: ['Three', 'Five', 'Seven', 'Twelve'],
    correctIndex: 2,
    originStory:
      'Oaxaca is marketed as the "Land of Seven Moles" — negro, colorado, amarillo, verde, chichilo, manchamantel, and rojo — though in reality there are hundreds of regional variations. Each mole is a multi-day ritual of toasting, grinding, and simmering chiles, seeds, and spice.',
    fact: 'A single mole negro can require 30+ ingredients and two days of preparation.',
  },
  {
    id: 'q5',
    type: 'visual',
    prompt: 'Guess the Oaxacan dish from this image.',
    image:
      'https://images.pexels.com/photos/5848478/pexels-photo-5848478.jpeg?auto=compress&cs=tinysrgb&w=800',
    options: ['Tlayuda', 'Mole Negro', 'Chiles en Nogada', 'Pozole'],
    correctIndex: 1,
    originStory:
      'Mole negro is the midnight-black king of Oaxacan moles — over 30 ingredients including charred chilhuacle, mulato, and pasilla chiles, chocolate, and burnt seeds, simmered for hours until it turns the color of night. Each family guards its recipe like a surname.',
    fact: 'Mole negro is said to have been perfected by nuns in a 17th-century Puebla convent.',
  },
  {
    id: 'q6',
    type: 'trivia',
    prompt: 'What does the Awadhi term "dum pukht" literally mean?',
    options: [
      'Breath of the pot',
      'Fire of the king',
      'Spice of the gods',
      'Steam of the street',
    ],
    correctIndex: 0,
    originStory:
      'Dum pukht — "the breath of the pot" — is Lucknow\'s signature slow-cooking technique. A pot is sealed with dough so steam cannot escape, then cooked over dying embers for hours. The seal hisses when the dish is ready, an audible signal of perfection.',
    fact: 'Nawab Wajid Ali Shah\'s court codified dum pukht into a near-religious technique.',
  },
  {
    id: 'q7',
    type: 'trivia',
    prompt: 'What gives mezcal its signature smoky flavor?',
    options: [
      'Oak barrel aging',
      'Roasting agave hearts in a pit',
      'Smoking with mesquite wood chips',
      'A smoked-clay still',
    ],
    correctIndex: 1,
    originStory:
      'Mezcal gets its smoke from the horno — an earthen pit where agave hearts (piñas) are roasted over hot stones and wood for days. The smoke penetrates the agave fibers before fermentation even begins, making mezcal taste of the land itself.',
    fact: 'Oaxaca produces roughly 85% of the world\'s mezcal from over 20 agave varieties.',
  },
  {
    id: 'q8',
    type: 'visual',
    prompt: 'Which spice market street is this scene most likely from?',
    image:
      'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=800',
    options: ['Marrakech, Morocco', 'Istanbul, Türkiye', 'Lucknow, India', 'Aleppo, Syria'],
    correctIndex: 2,
    originStory:
      'Lucknow\'s old bazaars — Chowk and Aminabad — overflow with the cardamom, saffron, and clove that define Awadhi cuisine. When the Nawabs fell, royal cooks opened stalls here, democratizing recipes once reserved for kings.',
    fact: 'An Awadhi biryani can use over 30 spices, each bloomed separately before layering.',
  },
  {
    id: 'q9',
    type: 'trivia',
    prompt: 'What molecule in Sichuan peppercorns creates the famous "numbing" (málà) sensation?',
    options: [
      'Capsaicin',
      'Hydroxy-alpha-sanshool',
      'Piperine',
      'Gingerol',
    ],
    correctIndex: 1,
    originStory:
      'Sichuan peppercorns contain hydroxy-alpha-sanshool, a molecule that literally vibrates the nerve endings on your lips at 50 times per second. Unlike capsaicin (which burns), sanshool creates a tingling, buzzing numbness — the "má" in málà. Chengdu was the world\'s first UNESCO City of Gastronomy.',
    fact: 'Chengdu was named the world\'s first UNESCO City of Gastronomy in 2010.',
  },
  {
    id: 'q10',
    type: 'trivia',
    prompt: 'Pad Thai was deliberately invented by the government in the 1930s for what purpose?',
    options: [
      'To promote tourism',
      'To reduce rice consumption during wartime',
      'To compete with Chinese restaurants',
      'To honor the king\'s birthday',
    ],
    correctIndex: 1,
    originStory:
      'Prime Minister Plaek Phibunsongkhram engineered pad Thai in the 1930s as a national dish to unify Thailand and reduce rice consumption during wartime shortages. The government distributed noodle carts and recipes, turning a political project into the world\'s most recognized Thai dish.',
    fact: 'Bangkok has over 100,000 street food vendors serving 6 million meals daily.',
  },
  {
    id: 'q11',
    type: 'trivia',
    prompt: 'Tacos al pastor were adapted in Mexico City from which immigrant cuisine?',
    options: ['Italian', 'Lebanese shawarma', 'Greek gyro', 'Turkish döner'],
    correctIndex: 1,
    originStory:
      'Lebanese immigrants fleeing the Ottoman Empire arrived in Puebla and Mexico City in the 1920s–30s, bringing shawarma vertical spits. Mexican cooks adapted it: pork (not lamb), achiote marinade, and pineapple — creating tacos al pastor ("shepherd style").',
    fact: 'Mexico City\'s El Califa de León earned a Michelin star in 2024 — the first for a taco stand.',
  },
  {
    id: 'q12',
    type: 'trivia',
    prompt: 'Which city holds the Guinness World Record for most Michelin-starred restaurants?',
    options: ['Paris', 'Tokyo', 'New York', 'San Sebastián'],
    correctIndex: 1,
    originStory:
      'Tokyo holds over 200 Michelin stars — more than any city on Earth. Yet its food soul lives in basement ramen shops where a single bowl\'s broth simmers for 18 hours, and at Toyosu fish market where the world\'s best tuna auctions begin at 5 AM.',
    fact: 'Umami, the fifth taste, was discovered in Tokyo in 1908 by chemist Kikunae Ikeda.',
  },
  {
    id: 'q13',
    type: 'trivia',
    prompt: 'The "jollof wars" — a fierce culinary rivalry over jollof rice — are fought between which two nations?',
    options: ['Senegal and Mali', 'Nigeria and Ghana', 'Ivory Coast and Cameroon', 'Ethiopia and Kenya'],
    correctIndex: 1,
    originStory:
      'The "jollof wars" between Nigeria and Ghana over whose jollof rice is superior are a beloved cultural rivalry. Nigerian jollof is smokier (cooked over wood as "party rice"), spicier, and redder. Jollof originated with the Wolof people of the Jolof Empire (modern Senegal, 14th–16th century).',
    fact: 'Suya\'s yaji spice blend is each Lagos grill master\'s secret — never written down.',
  },
  {
    id: 'q14',
    type: 'trivia',
    prompt: 'Which city has the world\'s highest concentration of Michelin stars per capita?',
    options: ['Tokyo', 'Paris', 'San Sebastián', 'New York'],
    correctIndex: 2,
    originStory:
      'San Sebastián, a Basque city of 186,000, has 3 three-star Michelin restaurants — the highest star density on Earth. Its food soul is the txikiteo: a pintxos bar crawl where you eat one bite and drink one txakoli at each bar, napkins thrown on the floor as proof of your visit.',
    fact: 'The Gilda pintxo — anchovy, olive, and pickled pepper on a toothpick — was named after Rita Hayworth\'s 1946 film.',
  },
  {
    id: 'q15',
    type: 'trivia',
    prompt: 'Singapore holds the record for the world\'s cheapest what?',
    options: [
      'Street food meal',
      'Michelin-starred meal',
      'Hawker center dish',
      'Five-star hotel dinner',
    ],
    correctIndex: 1,
    originStory:
      'Hawker Chan\'s soya sauce chicken rice in Singapore earned a Michelin star in 2016 — costing $2.50, the world\'s cheapest Michelin meal. Singapore\'s hawker culture is a UNESCO Intangible Cultural Heritage, with 110+ centers and 6,000+ stalls.',
    fact: 'Singapore has 110+ hawker centers with over 6,000 stalls serving 6,000+ dishes daily.',
  },
  {
    id: 'q16',
    type: 'trivia',
    prompt: 'Peru has over 4,000 native varieties of which crop — the most in the world?',
    options: ['Corn', 'Quinoa', 'Potato', 'Tomato'],
    correctIndex: 2,
    originStory:
      'Peru is the birthplace of the potato — over 4,000 native varieties grow in the Andes. The Inca cultivated and preserved them through freeze-drying (chuño) at high altitude. Lima\'s restaurant Central was named the world\'s best in 2023, with a menu organized by altitude.',
    fact: 'Lima has over 9,000 chifa (Chinese-Peruvian) restaurants — more than any city outside China.',
  },
  {
    id: 'q17',
    type: 'trivia',
    prompt: 'What is the strict rule at Osaka kushikatsu bars?',
    options: [
      'No phones at the counter',
      'No double-dipping in the sauce',
      'Eat in under 5 minutes',
      'Order at least 10 skewers',
    ],
    correctIndex: 1,
    originStory:
      'At Osaka kushikatsu bars, the communal sauce vat has one strict rule: no double-dipping. Violate it and the entire bar will call you out. Born in 1929 in Osaka\'s Shinsekai district as cheap food for workers, kushikatsu is as much about etiquette as flavor.',
    fact: 'Osaka\'s motto is kuidaore — "eat until you drop."',
  },
];

export const leaderboardUsers = [
  { name: 'Sofia Ricci', title: 'Grand Master Chef', avatar: 'SR', score: 8420, country: '🇮🇹', streak: 42 },
  { name: 'Arjun Mehta', title: 'Spice Sage', avatar: 'AM', score: 7980, country: '🇮🇳', streak: 38 },
  { name: 'Lucía Mendoza', title: 'Mole Maestro', avatar: 'LM', score: 7650, country: '🇲🇽', streak: 35 },
  { name: 'Kenji Tanaka', title: 'Umami Hunter', avatar: 'KT', score: 7120, country: '🇯🇵', streak: 29 },
  { name: 'Aisha Khan', title: 'Flavor Nomad', avatar: 'AK', score: 6890, country: '🇵🇰', streak: 27 },
  { name: 'Marco Bianchi', title: 'Dough Whisperer', avatar: 'MB', score: 6450, country: '🇮🇹', streak: 24 },
  { name: 'Yara Haddad', title: 'Spice Caravan', avatar: 'YH', score: 5980, country: '🇱🇧', streak: 20 },
  { name: 'Ngozi Okoro', title: 'Heat Seeker', avatar: 'NO', score: 5340, country: '🇳🇬', streak: 18 },
];

export type Short = {
  id: string;
  title: string;
  caption: string;
  thumbnail: string;
  youtubeId: string;
  city: string;
  likes: string;
  chef: string;
};

export const shorts: Short[] = [
  {
    id: 's1',
    title: 'Wood-Fired Margherita in 90 Seconds',
    caption: '485°C dome oven. 90 seconds. Blistered perfection.',
    thumbnail:
      'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: '3JcFy7wQy2E',
    city: 'Naples',
    likes: '12.4K',
    chef: 'Pizzaiolo Enzo',
  },
  {
    id: 's2',
    title: 'Dum Biryani Seal Cracked Open',
    caption: 'The dough seal hisses. The aroma hits. Pure Awadh.',
    thumbnail:
      'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'L8mDjv2gQkY',
    city: 'Lucknow',
    likes: '9.8K',
    chef: 'Chef Imtiaz',
  },
  {
    id: 's3',
    title: 'Grinding Mole Negro on a Metate',
    caption: '30 ingredients. Two days. Midnight-black magic.',
    thumbnail:
      'https://images.pexels.com/photos/5848481/pexels-photo-5848481.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'L8mDjv2gQkY',
    city: 'Oaxaca',
    likes: '15.2K',
    chef: 'Doña Abigail',
  },
  {
    id: 's4',
    title: 'Tunday Kebab Melting on a Skewer',
    caption: '160 spices. Zero chewing required.',
    thumbnail:
      'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: '3JcFy7wQy2E',
    city: 'Lucknow',
    likes: '7.6K',
    chef: 'Haji Murad Ali',
  },
  {
    id: 's5',
    title: 'Mezcal Poured from a Clay Jug',
    caption: 'Smoked agave hearts. Wild yeast. The land in a glass.',
    thumbnail:
      'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'L8mDjv2gQkY',
    city: 'Oaxaca',
    likes: '11.1K',
    chef: 'Doña Soledad',
  },
  {
    id: 's6',
    title: 'Bangkok Pad Thai at 2 AM',
    caption: 'Wok screaming. Tamarind tang. The night market never sleeps.',
    thumbnail:
      'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: '3JcFy7wQy2E',
    city: 'Bangkok',
    likes: '18.3K',
    chef: 'Street Wok Master',
  },
  {
    id: 's7',
    title: '18-Hour Tonkotsu Broth Pour',
    caption: 'Pork bones dissolved into milky collagen. Pure umami.',
    thumbnail:
      'https://images.pexels.com/photos/24811708/pexels-photo-24811708.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'mT2r1Z9gH2M',
    city: 'Tokyo',
    likes: '22.1K',
    chef: 'Ramen Master',
  },
  {
    id: 's8',
    title: 'Sichuan Hot Pot Bubbling Red',
    caption: 'Málà numb. Lips buzzing at 50 Hz. Can you handle it?',
    thumbnail:
      'https://images.pexels.com/photos/18764184/pexels-photo-18764184.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'L8mDjv2gQkY',
    city: 'Chengdu',
    likes: '16.7K',
    chef: 'Hot Pot Mama',
  },
  {
    id: 's9',
    title: 'Tacos al Pastor Shaved Off the Trompo',
    caption: 'Pineapple on top. Achiote pork. Lebanese roots, Mexican soul.',
    thumbnail:
      'https://images.pexels.com/photos/8448180/pexels-photo-8448180.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'L8mDjv2gQkY',
    city: 'Mexico City',
    likes: '19.5K',
    chef: 'Taquero Luis',
  },
  {
    id: 's10',
    title: 'Lagos Suya Over Charcoal at Midnight',
    caption: 'Yaji spice. Open flame. The Hausa grill kings never sleep.',
    thumbnail:
      'https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'mT2r1Z9gH2M',
    city: 'Lagos',
    likes: '14.2K',
    chef: 'Mali Suya Master',
  },
];

export const heroSlides = [
  {
    image:
      'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1920',
    kicker: 'Lucknow, India',
    title: 'Where Biryani Breathes',
    subtitle: 'Slow-cooked under a dough-sealed lid for hours — the breath of the pot.',
  },
  {
    image:
      'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1920',
    kicker: 'Naples, Italy',
    title: 'Born in a Volcano\'s Shadow',
    subtitle: 'San Marzano tomatoes, 485°C ovens, and a 90-second bake.',
  },
  {
    image:
      'https://images.pexels.com/photos/5848478/pexels-photo-5848478.jpeg?auto=compress&cs=tinysrgb&w=1920',
    kicker: 'Oaxaca, Mexico',
    title: 'The Land of Seven Moles',
    subtitle: 'Thirty ingredients, two days, and the color of midnight.',
  },
  {
    image:
      'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1920',
    kicker: 'Bangkok, Thailand',
    title: 'Sweet, Sour, and Fire in One Bite',
    subtitle: 'Wok hei rising from night markets that never close.',
  },
  {
    image:
      'https://images.pexels.com/photos/24811708/pexels-photo-24811708.jpeg?auto=compress&cs=tinysrgb&w=1920',
    kicker: 'Tokyo, Japan',
    title: 'Where Umami Was Born',
    subtitle: '18-hour broths, lifetime sushi mastery, and 200+ Michelin stars.',
  },
  {
    image:
      'https://images.pexels.com/photos/8448180/pexels-photo-8448180.jpeg?auto=compress&cs=tinysrgb&w=1920',
    kicker: 'Mexico City, Mexico',
    title: 'Tacos Spin on Lebanese Spits',
    subtitle: 'Al pastor pork, hand-pressed tortillas, and 20,000 taquerías.',
  },
  {
    image:
      'https://images.pexels.com/photos/18764184/pexels-photo-18764184.jpeg?auto=compress&cs=tinysrgb&w=1920',
    kicker: 'Chengdu, China',
    title: 'Numbing Spice & Boiling Hot Pot',
    subtitle: 'Peppercorns that vibrate your lips at 50 Hz. UNESCO\'s first food city.',
  },
];
