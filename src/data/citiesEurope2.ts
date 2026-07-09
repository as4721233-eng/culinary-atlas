import type { City } from './cityTypes';

export const europeCities2: City[] = [
  {
    id: 'san-sebastian',
    name: 'San Sebastián',
    country: 'Spain',
    region: 'Basque Country',
    tagline: 'The City with More Michelin Stars per Capita Than Anywhere',
    heroImage:
      'https://images.pexels.com/photos/31148863/pexels-photo-31148863.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/31148863/pexels-photo-31148863.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A tiny Basque city with the world\'s highest Michelin-star density — and the pintxos bar crawl that\'s pure joy.',
    longDescription:
      'San Sebastián (Donostia) has the highest concentration of Michelin stars per capita on Earth — 3 three-star restaurants in a city of 186,000. But its food soul is the txikiteo: a pintxos bar crawl through the Parte Vieja (old town), where you eat one small bite and drink one txakoli (sparkling white wine) at each bar, leaving your napkins on the floor as proof of your visit.',
    sensoryTags: ['#Pintxos', '#Basque', '#Michelin-dense', '#Seafood'],
    flavorProfile: { spice: 25, umami: 80, richness: 70, tanginess: 65 },
    youtubeId: 'UrfVd6CUcY4',
    specialties: [
      {
        name: 'Gilda',
        description:
          'A toothpick-skewer of anchovy, olive, and pickled guindilla pepper — the original pintxo, named after Rita Hayworth\'s film character.',
        image:
          'https://images.pexels.com/photos/31148863/pexels-photo-31148863.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Salty', '#Tangy', '#Bite-sized'],
        originStory:
          'The Gilda was invented in 1946 at Bar Casa Vallés in San Sebastián, named after Rita Hayworth\'s film "Gilda" — because the bite is "seductive and a little spicy." It is three ingredients on a toothpick: anchovy, olive, pickled pepper. It launched the pintxos culture.',
      },
      {
        name: 'Txangurro',
        description:
          'Spider crab meat mixed with brandy, tomato, and onion, stuffed back into the shell, gratinéed — Basque seafood genius.',
        image:
          'https://images.pexels.com/photos/31148863/pexels-photo-31148863.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Seafood', '#Gratinéed', '#Brandy-rich'],
        originStory:
          'Txangurro is a Basque classic — spider crab removed from its shell, mixed with brandy, tomato, onion, and breadcrumbs, then returned to the shell and gratinéed. The dish reflects the Basque approach: respect the ingredient, enhance it minimally, present it dramatically.',
      },
      {
        name: 'Bacalao al Pil-Pil',
        description:
          'Salt cod emulsified with garlic and olive oil into a silky, custard-like sauce — shaken in the pan until the oil and fish collagen bind.',
        image:
          'https://images.pexels.com/photos/31148863/pexels-photo-31148863.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Silky', '#Emulsified', '#Garlicky'],
        originStory:
          'Bacalao al pil-pil is the test of a Basque chef. Salt cod is cooked slowly in olive oil with garlic, then the pan is shaken (the "pil-pil" sound) to emulsify the oil with the collagen released from the fish skin. The result is a silky, custard-like sauce from just three ingredients.',
      },
    ],
    historicalLore: [
      {
        era: '19th Century',
        title: 'The Basque Whalers\' Salt Cod',
        body: 'Basque whalers sailed to Newfoundland in the 16th century, returning with salt cod (bacalao). The fish became a staple — preserved, cheap, and lasting through long winters. Basque cuisine developed dozens of bacalao recipes, with al pil-pil the most revered.',
      },
      {
        era: '1946',
        title: 'The Invention of the Gilda',
        body: 'Bar Casa Vallés in San Sebastián invented the Gilda pintxo in 1946 — anchovy, olive, and pickled pepper on a toothpick. It launched the pintxos culture that now defines the Parte Vieja.',
      },
      {
        era: 'Modern Era',
        title: 'The Michelin Density Record',
        body: 'San Sebastián has the world\'s highest Michelin-star density: 3 three-star restaurants (Akelaŕe, Arzak, Martín Berasategui) in a city of 186,000. Arzak has held 3 stars since 1989.',
      },
    ],
    legends: [
      {
        name: 'Juan Mari Arzak',
        title: 'The Father of New Basque Cuisine',
        era: 'Modern',
        bio: 'Chef of Restaurant Arzak in San Sebastián, which has held 3 Michelin stars since 1989. He co-founded New Basque Cuisine, fusing tradition with innovation.',
        legacy: 'Arzak, with his daughter Elena, turned a family restaurant into one of the world\'s most influential kitchens. He proved that Basque cuisine could be avant-garde without losing its identity.',
        image:
          'https://images.pexels.com/photos/31148863/pexels-photo-31148863.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'San Sebastián has the world\'s highest Michelin-star density — 3 three-star restaurants in 186,000 people.',
      'The Gilda pintxo was named after Rita Hayworth\'s 1946 film character.',
      'Bacalao al pil-pil emulsion is made by shaking the pan until fish collagen binds with olive oil.',
    ],
  },
  {
    id: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    region: 'Lisbon',
    tagline: 'The City of Pastéis de Nata & Atlantic Seafood',
    heroImage:
      'https://images.pexels.com/photos/30846568/pexels-photo-30846568.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/30846568/pexels-photo-30846568.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where pastel de nata custard tarts are eaten warm at 10 PM, and grilled sardines perfume the summer streets.',
    longDescription:
      'Lisbon\'s food is Atlantic-driven — grilled sardines, salt cod (bacalhau), and the pastel de nata, the custard tart that has become a global pastry icon. The city\'s cafés and pastelarias (pastry shops) are on every corner, and the original Pastéis de Belém has been baking tarts from the same 1837 secret recipe for nearly 200 years.',
    sensoryTags: ['#Custard-sweet', '#Grilled-seafood', '#Cinnamon', '#Atlantic'],
    flavorProfile: { spice: 20, umami: 72, richness: 75, tanginess: 65 },
    youtubeId: 'FmDARXsO1Dg',
    specialties: [
      {
        name: 'Pastel de Nata',
        description:
          'A flaky custard tart with a caramelized, blistered top — dusted with cinnamon and eaten warm. The pastry that conquered Instagram.',
        image:
          'https://images.pexels.com/photos/30846568/pexels-photo-30846568.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Custard-sweet', '#Flaky', '#Caramelized'],
        originStory:
          'Invented before 1837 by Catholic monks at the Jerónimos Monastery in Belém (Lisbon). After religious orders were extinguished in 1834, the monks sold the recipe to a sugar refinery, which opened Pastéis de Belém in 1837. The original recipe is known to only 5–6 people in the world, kept in a locked room.',
      },
      {
        name: 'Bacalhau à Brás',
        description:
          'Shredded salt cod sautéed with thin potato matchsticks, onions, and eggs — garnished with black olives and parsley. One of Portugal\'s 365 bacalhau recipes.',
        image:
          'https://images.pexels.com/photos/30846568/pexels-photo-30846568.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Savory', '#Eggy', '#Comforting'],
        originStory:
          'Portugal has a saying: there are 365 bacalhau (salt cod) recipes, one for each day of the year. Bacalhau à Brás, from a Bairro Alto tavern, is among the most beloved. Salt cod was a staple of Portuguese ocean voyages during the Age of Discovery.',
      },
      {
        name: 'Grilled Sardines (Sardinhas Assadas)',
        description:
          'Whole fresh sardines charcoal-grilled with salt, served on crusty bread with roasted peppers — the smell of Lisbon summer.',
        image:
          'https://images.pexels.com/photos/30846568/pexels-photo-30846568.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Grilled', '#Smoky', '#Oily-rich'],
        originStory:
          'During Lisbon\'s Festas dos Santos Populares (Popular Saints festivals) in June, the streets fill with charcoal grills cooking fresh sardines. The tradition dates to the 18th century — sardines were cheap, abundant Atlantic fish, grilled outdoors during summer festivals.',
      },
    ],
    historicalLore: [
      {
        era: 'Age of Discovery (15th–16th Century)',
        title: 'The Spice Empire',
        body: 'Portugal\'s 15th–16th century voyages brought back spices from India, Brazil, Africa, and Japan — cinnamon, pepper, and sugar that transformed European cuisine. Pastel de nata\'s heavy use of sugar and cinnamon is a direct legacy. Portugal introduced tempura to Japan and chili peppers to India.',
      },
      {
        era: '1837',
        title: 'The Monks\' Custard Tart',
        body: 'Catholic monks at Lisbon\'s Jerónimos Monastery used egg whites to starch nuns\' habits, leaving surplus yolks. They developed pastel de nata as a way to use the yolks. After monasteries were closed in 1834, the monks sold the recipe to Pastéis de Belém, which opened in 1837.',
      },
      {
        era: 'Modern Era',
        title: 'The Pastry Renaissance',
        body: 'Lisbon\'s pastry culture is one of Europe\'s richest — over 200 traditional desserts, most created in convents as egg-yolk disposal solutions. In the 2010s, pastel de nata became a global phenomenon, with Portuguese bakery chains opening in London, Paris, and Tokyo.',
      },
    ],
    legends: [
      {
        name: 'The Belém Recipe Keepers',
        title: 'The Guardians of the 1837 Secret',
        era: '1837–Present',
        bio: 'The original pastel de nata recipe from Pastéis de Belém is known to only 5–6 people, who mix the custard in a locked room. No written recipe exists.',
        legacy: 'The Belém recipe keepers are a living culinary secret — a tradition of oral transmission that has survived 188 years. Pastéis de Belém sells over 20,000 tarts daily, all from the same locked-room recipe.',
        image:
          'https://images.pexels.com/photos/30846568/pexels-photo-30846568.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Portugal has 365 salt cod (bacalhau) recipes — one for each day of the year.',
      'Pastéis de Belém has baked the same custard tart recipe since 1837, known to fewer than 6 people.',
      'Portugal introduced tempura to Japan and chili peppers to India during the Age of Discovery.',
    ],
  },
  {
    id: 'athens',
    name: 'Athens',
    country: 'Greece',
    region: 'Attica',
    tagline: 'Where Souvlaki Meets the Acropolis & Olive Oil Flows',
    heroImage:
      'https://images.pexels.com/photos/38299607/pexels-photo-38299607.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/38299607/pexels-photo-38299607.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where souvlaki is eaten standing up at 2 AM, feta is a protected national treasure, and olive oil is older than democracy.',
    longDescription:
      'Athens\' food is Mediterranean at its most elemental — olive oil, lemon, oregano, and fire. The souvlaki stand is the city\'s heartbeat: pork skewers grilled over charcoal, wrapped in pita with tzatziki, tomato, and onion, eaten standing at midnight. Greek cuisine claims the world\'s oldest continuous culinary tradition — olive oil has been pressed in Greece for 5,000 years, feta for 3,000.',
    sensoryTags: ['#Grilled', '#Olive-oiled', '#Lemony', '#Mediterranean'],
    flavorProfile: { spice: 30, umami: 70, richness: 60, tanginess: 78 },
    youtubeId: 'ZOguslnn0dM',
    specialties: [
      {
        name: 'Souvlaki',
        description:
          'Charcoal-grilled pork skewers wrapped in warm pita with tzatziki, tomato, onion, and fries — eaten standing, any hour of the day or night.',
        image:
          'https://images.pexels.com/photos/38299607/pexels-photo-38299607.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Grilled', '#Smoky', '#Street-classic'],
        originStory:
          'Souvlaki is ancient — excavations in Santorini (destroyed in 1600 BCE) found stone skewer supports called "plateis" used to grill meat horizontally over coals. The word "souvlaki" (little skewer) is medieval, but the technique is 3,600+ years old. Modern Athens souvlaki is the city\'s defining street food, sold from thousands of stands for €3.',
      },
      {
        name: 'Moussaka',
        description:
          'Layered eggplant, spiced ground beef, and béchamel — baked golden. The Greek national dish, perfected by a Greek chef with French training.',
        image:
          'https://images.pexels.com/photos/38299607/pexels-photo-38299607.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Layered', '#Comforting', '#Béchamel'],
        originStory:
          'Moussaka\'s modern form was created in the 1920s by Tselementes, a Greek chef trained in French cuisine who added béchamel sauce to the traditional Ottoman-Arab dish. The original Arab "musaqqa\'a" was a simple eggplant and tomato stew.',
      },
      {
        name: 'Tzatziki',
        description:
          'Strained yogurt with cucumber, garlic, olive oil, and dill — the cooling counterpoint to every grilled meat in Greek cuisine.',
        image:
          'https://images.pexels.com/photos/38299607/pexels-photo-38299607.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Cooling', '#Garlicky', '#Tangy'],
        originStory:
          'Tzatziki derives from the Turkish "cacık," which derives from Persian "mast-o-khiar" (yogurt and cucumber) — a dish with roots across the Ottoman and Persian empires. The Greek version uses strained yogurt (much thicker) and significant garlic.',
      },
    ],
    historicalLore: [
      {
        era: 'Antiquity',
        title: 'The Olive and the Gods',
        body: 'Greek mythology says Athena gave the olive tree to Athens, winning the city\'s patronage over Poseidon. Olive oil has been pressed in Greece for 5,000+ years — the earliest known olive oil production site is in Crete (3500 BCE). The Mediterranean diet, now UNESCO-protected, was born here.',
      },
      {
        era: 'Ottoman Era (1453–1832)',
        title: 'The Empire\'s Culinary Legacy',
        body: 'Greece was under Ottoman rule for nearly 400 years, and Greek cuisine absorbed Turkish, Balkan, and Middle Eastern influences — moussaka, tzatziki, baklava, and dolmades all have Ottoman roots. Post-independence, Greek chefs like Tselementes deliberately "Europeanized" dishes to distinguish Greek from Ottoman cuisine.',
      },
      {
        era: 'Modern Era',
        title: 'The Souvlaki Republic',
        body: 'Athens has over 4,000 souvlaki stands — roughly one per 800 residents. The souvlaki wrap (with fries inside) is a 20th-century invention. In the 2010s, Greek food surged globally through Instagram — feta, tzatziki, and grilled octopus became staples of the "Mediterranean diet" trend.',
      },
    ],
    legends: [
      {
        name: 'Tselementes',
        title: 'The Chef Who Europeanized Greek Food',
        era: '1872–1958',
        bio: 'A Greek chef trained in Vienna who modernized Greek cuisine by introducing French techniques — béchamel in moussaka, velouté sauces — to distinguish Greek food from Ottoman.',
        legacy: 'Tselementes\' 1910 cookbook "Complete Cookbook" is still the most influential Greek cookbook ever published. His moussaka — with béchamel — is the version the world knows.',
        image:
          'https://images.pexels.com/photos/38299607/pexels-photo-38299607.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Olive oil has been pressed in Greece for 5,000+ years — the world\'s oldest continuous production.',
      'Feta is a PDO-protected product — only cheese from Greece can legally be called "feta."',
      'Souvlaki skewers date to 1600 BCE — stone skewer supports were found in Santorini ruins.',
    ],
  },
];
