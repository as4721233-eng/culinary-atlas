export type FlavorProfile = {
  spice: number;
  umami: number;
  richness: number;
  tanginess: number;
};

export type Specialty = {
  name: string;
  description: string;
  image: string;
  sensoryTags: string[];
  originStory: string;
};

export type Legend = {
  name: string;
  title: string;
  era: string;
  bio: string;
  legacy: string;
  image: string;
};

export type City = {
  id: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  heroImage: string;
  cardImage: string;
  shortDescription: string;
  longDescription: string;
  sensoryTags: string[];
  flavorProfile: FlavorProfile;
  youtubeId: string;
  specialties: Specialty[];
  historicalLore: {
    era: string;
    title: string;
    body: string;
  }[];
  legends: Legend[];
  funFacts: string[];
};
