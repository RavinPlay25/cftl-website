export interface Branch {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  address: string;
  phoneNumbers: string[];
  email: string;
  openingHours: string;
  mapEmbedUrl: string;
  googleMapsUrl: string;
  coverImage: string;
  photos: string[];
  facilities: string[];
  programsAvailable: string[];
  branchHighlights: string[];
}
