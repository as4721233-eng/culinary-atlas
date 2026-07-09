import type { City } from './cityTypes';

export const europeCities: City[] = [
  {
    id: 'bologna',
    name: 'Bologna',
    country: 'Italy',
    region: 'Emilia-Romagna',
    tagline: 'La Grassa — The Fat One, Where Pasta Was Perfected',
    heroImage:
      'https://images.pexels.com/photos/13640223/pexels-photo-13640223.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/13640223/pexels-photo-13640223.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'The city Italians call "La Grassa" (The Fat One) — birthplace of ragù, tortellini, and the world\'s richest pasta tradition.',
    longDescription:
      'Bologna is the food capital of Italy. The city is nicknamed "La Grassa" (The Fat One) for its rich, pork-driven cuisine. Emilia-Romagna, its region, is Italy\'s culinary engine: Parmigiano-Reggiano, balsamic vinegar, and prosciutto di Parma all come from within 60 miles. Bologna\'s ragù — slow-cooked meat sauce — became "Bolognese" worldwide, though the real version bears little resemblance to what you\'ve had.',
    sensoryTags: ['#Rich', '#Slow-cooked', '#Hand-rolled', '#Comforting'],
    flavorProfile: { spice: 15, umami: 82, richness: 92, tanginess: 40 },
    youtubeId: '51jow8wJ0JA',
    specialties: [
      {
        name: 'Tagliatelle al Ragù',
        description:
          'Hand-rolled egg pasta ribbons served with ragù — a slow-simmered sauce of beef, pork, pancetta, soffritto, and milk. The real "Bolognese."',
        image:
          'https://images.pexels.com/photos/13640223/pexels-photo-13640223.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Rich', '#Slow-cooked', '#Hand-rolled'],
        originStory:
          'Ragù was born in Bologna\'s noble kitchens in the 18th century, influenced by French ragoût. The authentic Bolognese uses milk (not cream) to tenderize the meat, a touch of nutmeg, and no garlic. The Accademia Italiana della Cucina deposited the official recipe with the Bologna Chamber of Commerce in 2006.',
      },
      {
        name: 'Tortellini in Brodo',
        description:
          'Tiny ring-shaped pasta stuffed with mortadella, prosciutto, and Parmigiano — served in a clear capon-consommé broth. Bologna\'s Christmas dish.',
        image:
          'https://images.pexels.com/photos/13640223/pexels-photo-13640223.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Delicate', '#Brothy', '#Comforting'],
        originStory:
          'Legend says tortellini was invented in Bologna, inspired by the navel of Venus. The filling — mortadella, prosciutto, Parmigiano — is strictly codified by the Confraternita del Tortellino. The dish is served in brodo (in broth), a clear capon consommé that takes hours to prepare.',
      },
      {
        name: 'Mortadella',
        description:
          'A silky, rose-pink cured pork sausage studded with pistachios — the ancestor of American "bologna," but immeasurably better.',
        image:
          'https://images.pexels.com/photos/13640223/pexels-photo-13640223.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Silky', '#Nutty', '#Cured'],
        originStory:
          'Mortadella dates to the 14th century in Bologna, named after the Roman "farcimen murtatum" (sausage with myrtle berries). It is cured pork shoulder studded with pistachios, cooked for hours in brick ovens. Italian immigrants brought it to America, where it was degraded into "bologna."',
      },
    ],
    historicalLore: [
      {
        era: 'Middle Ages',
        title: 'The University that Fed the City',
        body: 'Bologna\'s university, founded in 1088, is the world\'s oldest. Students from across Europe brought their food traditions, and the city\'s taverns fed them for centuries. This constant influx made Bologna a natural culinary crossroads.',
      },
      {
        era: '18th Century',
        title: 'The Birth of Ragù',
        body: 'Bolognese nobles, influenced by French cuisine, adapted the French ragoût into an Italian pasta sauce. The original Bolognese ragù uses milk, nutmeg, and no garlic — a far cry from the tomato-heavy "spaghetti Bolognese" served worldwide.',
      },
      {
        era: 'Modern Era',
        title: 'The Food Valley',
        body: 'Emilia-Romagna is called "Italy\'s Food Valley." Within 60 miles of Bologna: Parmigiano-Reggiano (Parma), balsamic vinegar (Modena), prosciutto di Parma, and mortadella. The region has more PDO/PGI protected food products than any other in Europe.',
      },
    ],
    legends: [
      {
        name: 'Pellegrino Artusi',
        title: 'The Father of Italian Home Cooking',
        era: '1820–1911',
        bio: 'A Florentine-Bolognese merchant who, at age 71, compiled "Science in the Kitchen and the Art of Eating Well" — Italy\'s first national cookbook, codifying ragù and tortellini for the masses.',
        legacy: 'Artusi\'s 1891 cookbook unified Italy\'s regional recipes into a national cuisine. His ragù recipe is the benchmark still used in Bologna. The book is still in print, with over 100 editions.',
        image:
          'https://images.pexels.com/photos/13640223/pexels-photo-13640223.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Authentic ragù uses milk, not cream, and is always served with tagliatelle — never spaghetti.',
      'Emilia-Romagna has more PDO/PGI protected foods than any region in Europe.',
      'Bologna is nicknamed "La Grassa" (The Fat One) and "La Dotta" (The Learned One).',
    ],
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    region: 'Catalonia',
    tagline: 'Catalan Creativity Meets Mediterranean Tapas',
    heroImage:
      'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'A city where avant-garde chefs reinvented Spanish cuisine, and La Boqueria market feeds the world\'s best tapas crawl.',
    longDescription:
      'Barcelona is the cradle of molecular gastronomy — Ferran Adrià\'s elBulli, just up the coast, was named the world\'s best restaurant a record 5 times. But the city\'s food soul lives in La Boqueria, the 800-year-old market off Las Ramblas, and in the tapas bars of El Born and Gràcia. Catalan cuisine combines Mediterranean seafood, mountain pork, and a fearless willingness to experiment.',
    sensoryTags: ['#Tapas', '#Mediterranean', '#Avant-garde', '#Seafood'],
    flavorProfile: { spice: 30, umami: 75, richness: 65, tanginess: 60 },
    youtubeId: '3JcFy7wQy2E',
    specialties: [
      {
        name: 'Pa amb Tomàquet',
        description:
          'Toasted bread rubbed with ripe tomato, drizzled with olive oil, and sprinkled with salt — the Catalan foundation, eaten with everything.',
        image:
          'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Simple', '#Olive-oiled', '#Fresh'],
        originStory:
          'Pa amb tomàquet ("bread with tomato") was invented in late 19th-century rural Catalonia as a way to revive stale bread. The tomato is rubbed directly onto the bread (never blended), leaving the pulp and juice behind. It is the Catalan national dish — the base of every meal.',
      },
      {
        name: 'Crema Catalana',
        description:
          'A custard with a caramelized burnt-sugar crust — Catalonia\'s version of crème brûlée, traditionally flavored with lemon zest and cinnamon.',
        image:
          'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Sweet', '#Caramelized', '#Creamy'],
        originStory:
          'Crema catalana dates to the 14th century — predating French crème brûlée by centuries. Catalan nuns made it for St. Joseph\'s Day (March 19). The custard is flavored with lemon zest and cinnamon (not vanilla), and the crust is caramelized with a hot iron.',
      },
      {
        name: 'Fideuà',
        description:
          'A Catalan paella made with short vermicelli pasta instead of rice — cooked in a wide pan with seafood and saffron, crispy at the edges.',
        image:
          'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Seafood', '#Saffron', '#Crispy-edged'],
        originStory:
          'Invented in the 1930s in Gandía (south of Barcelona) by a fisherman who forgot to bring rice on board and used pasta instead. The dish became a Catalan specialty, cooked in a paella pan with the same socarrat (crispy bottom) as paella but with a lighter, more textured base.',
      },
    ],
    historicalLore: [
      {
        era: '1217',
        title: 'La Boqueria: The 800-Year Market',
        body: 'La Boqueria, Barcelona\'s central market, began as an open-air meat market in 1217 outside the city walls. It became a covered market in 1840 and is now one of the world\'s most famous food markets — 200+ stalls selling jamón, seafood, mushrooms, and exotic fruit cups that are an Instagram staple.',
      },
      {
        era: 'Late 20th Century',
        title: 'The Molecular Revolution',
        body: 'Ferran Adrià\'s elBulli (north of Barcelona) was named the world\'s best restaurant 5 times (2002–2009). Adrià invented spherification, foams, and gel manipulation — techniques that transformed global fine dining.',
      },
      {
        era: 'Modern Era',
        title: 'The Tapas Crawl Culture',
        body: 'Barcelona\'s tapas crawl (ir de tapas) is a nightly ritual — hopping from bar to bar in El Born and Gràcia, eating 1-2 small plates and a drink at each. The culture is social: you stand at the bar, not sit, and the best spots have a floor littered with napkins and shellfish shells — a sign of authenticity.',
      },
    ],
    legends: [
      {
        name: 'Ferran Adrià',
        title: 'The Father of Molecular Gastronomy',
        era: 'Modern',
        bio: 'Chef of elBulli (1984–2011), named the world\'s best restaurant 5 times. He invented spherification, culinary foams, and deconstruction — transforming fine dining globally.',
        legacy: 'Adrià closed elBulli at its peak in 2011 to found elBulliFoundation, a culinary research lab. His techniques are now standard in fine dining worldwide. He proved cooking could be a creative art equal to painting or music.',
        image:
          'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'elBulli received 1–2 million reservation requests per year for 50 seats.',
      'Crema catalana predates French crème brûlée by centuries, dating to the 14th century.',
      'La Boqueria market has operated continuously since 1217 — over 800 years.',
    ],
  },
  {
    id: 'lyon',
    name: 'Lyon',
    country: 'France',
    region: 'Auvergne-Rhône-Alpes',
    tagline: 'The Gastronomic Capital of France',
    heroImage:
      'https://images.pexels.com/photos/14537662/pexels-photo-14537662.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/14537662/pexels-photo-14537662.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortDescription:
      'The city Paul Bocuse made the world\'s gastronomic capital — where bouchons serve pork in every form and the Rhône flows with wine.',
    longDescription:
      'Lyon is France\'s official gastronomic capital, a title earned through centuries of culinary excellence and codified by Paul Bocuse, the century\'s most famous chef. The city\'s bouchons — traditional taverns — serve hearty pork-driven cuisine born from the silk workers (canuts) who needed cheap, filling food. The nearby Beaujolais and Côtes du Rhône vineyards provide the wine.',
    sensoryTags: ['#Bistro-classic', '#Buttery', '#Pork-driven', '#Wine-paired'],
    flavorProfile: { spice: 20, umami: 80, richness: 95, tanginess: 45 },
    youtubeId: 'fsFtfZT-6Hc',
    specialties: [
      {
        name: 'Coq au Vin',
        description:
          'Rooster (or chicken) braised in red Burgundy wine with lardons, mushrooms, pearl onions, and garlic — the emblem of French comfort cooking.',
        image:
          'https://images.pexels.com/photos/14537662/pexels-photo-14537662.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Wine-braised', '#Rich', '#Comforting'],
        originStory:
          'Coq au vin is an ancient dish — its origins trace to Gaul (pre-Roman France), where tough old roosters were tenderized by slow braising in wine. Julia Child made it America\'s most famous French dish in "Mastering the Art of French Cooking" (1961).',
      },
      {
        name: 'Quenelle de Brochet',
        description:
          'A delicate pike fish mousseline shaped into an oval and poached — served in a creamy Nantua sauce (crayfish-based). A Lyon bouchon signature.',
        image:
          'https://images.pexels.com/photos/14537662/pexels-photo-14537662.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Silky', '#Delicate', '#Creamy'],
        originStory:
          'The quenelle is a test of a Lyon chef\'s skill — a mixture of pike fish, panada (paste), cream, and egg that must be light enough to float but hold its shape. It originated in the 18th century as a way to stretch expensive pike.',
      },
      {
        name: 'Salade Lyonnaise',
        description:
          'Frisée lettuce tossed with lardons, croutons, and a poached egg — the classic Lyon starter, where the egg yolk becomes the dressing.',
        image:
          'https://images.pexels.com/photos/14537662/pexels-photo-14537662.jpeg?auto=compress&cs=tinysrgb&w=1200',
        sensoryTags: ['#Bitter-sweet', '#Eggy', '#Classic'],
        originStory:
          'The salade lyonnaise is the quintessential bouchon opener — bitter frisée, salty lardons, crispy croutons, and a runny poached egg whose yolk emulsifies with the vinaigrette. It represents the Lyonnais genius: taking peasant ingredients and combining them into something greater than the sum.',
      },
    ],
    historicalLore: [
      {
        era: '16th Century',
        title: 'Catherine de\' Medici\'s Legacy',
        body: 'When Catherine de\' Medici came from Florence to marry the French king Henri II in 1533, she brought Italian chefs and a fork (previously unknown in France). Her court in Lyon fused Italian refinement with French ingredients, planting the seed of French haute cuisine.',
      },
      {
        era: '19th Century',
        title: 'The Mères Lyonnaises',
        body: 'In the 19th century, a group of women — the Mères Lyonnaises (Lyon mothers) — ran the city\'s best restaurants. They were working-class cooks who elevated peasant food to art. Mère Brazier became the first woman to earn 3 Michelin stars (1933), and trained a young Paul Bocuse.',
      },
      {
        era: 'Modern Era',
        title: 'Bocuse\'s Empire',
        body: 'Paul Bocuse (1926–2018) made Lyon the world\'s gastronomic capital. His restaurant l\'Auberge du Pont de Collonges held 3 Michelin stars for 55 consecutive years — a record. He invented nouvelle cuisine, built a global restaurant empire, and created the Bocuse d\'Or, the "Olympics of cooking."',
      },
    ],
    legends: [
      {
        name: 'Paul Bocuse',
        title: 'The Pope of Gastronomy',
        era: '1926–2018',
        bio: 'A Lyonnais chef who held 3 Michelin stars for 55 consecutive years — a world record. He invented nouvelle cuisine, trained generations of chefs, and created the Bocuse d\'Or competition.',
        legacy: 'Bocuse made Lyon the world\'s gastronomic capital. His soupe aux truffes was created for President Valéry Giscard d\'Estaing at the Élysée Palace in 1975. He is to French food what Picasso is to art.',
        image:
          'https://images.pexels.com/photos/14537662/pexels-photo-14537662.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    funFacts: [
      'Paul Bocuse held 3 Michelin stars for 55 consecutive years — the longest reign in history.',
      'Mère Brazier, a Lyon chef, was the first woman to earn 3 Michelin stars, in 1933.',
      'A traditional Lyon bouchon must be certified — only 20 restaurants hold the authentic label.',
    ],
  },
];
