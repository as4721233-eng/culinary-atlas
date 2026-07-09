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
    youtubeId: 'QoG1-v1xagU',
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
        body: 'In the late 1800s, fishermen around the Galata Bridge began grilling their catch on their boats, stuffing it into bread for dock workers and ferry
