export interface Images {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description?: string;
  user: {
    name: string;
  };
  likes: number;
}