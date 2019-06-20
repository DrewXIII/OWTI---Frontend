export interface Address {
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  streetAddress: string;
}

export interface AuthInfo {
  accessToken: string;
  email: string;
  expiresIn: number;
  refreshToken: string;
  uuid: string;
}

export interface Capacity {
  capacity: number;
  createdAt: any;
}

export interface Contact {
  email: string;
  phoneNumber: string;
}

export interface Details {
  maxCapacity: number;
  openingHours: string;
}
export interface Error {
  id: string;
  links: any;
  status: string;
  code: string;
  title: string;
  detail: string;
  source: {
    pointer: string;
    parameter: string;
  };
  meta: any;
  data: ErrorData;
}

export interface ErrorData {
  pattern: any;
  value: string;
  key: string;
  label: string;
}

export interface FinalLocal {
  userProfile: {
    details: {
      maxCapacity: number;
      openingHours: string;
    };
    address: {
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      streetAddress: string;
    };
    preferences: {
      twitter: string;
      instagram: string;
      facebook: string;
      web: string;
      description: string;
    };
    contact: {
      email: string;
      phoneNumber: string;
    };
    avatarUrl: string;
    uuid: string;
    fullName: string;
  };
  userCapacityProfile: {
    uuid: string;
    capacity: number;
  };
  percentage: number;
}

export interface Local {
  avatarUrl: string;
  fullName: string;
  details: Details;
  email: string;
  address: Address;
  preferences: Preferences;
  contact: Contact;
}

export interface OwtiUser extends Local {
  uuid: string;
}

export interface Percentage {
  percentage: number;
}

export interface Preferences {
  twitter?: string;
  instagram?: string;
  facebook?: string;
  web?: string;
  description: string;
}

export interface SearchResult {
  uuid: string;
  fullName: string;
}
