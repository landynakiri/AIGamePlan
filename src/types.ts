export interface GameMetadata {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  submodulePath: string;
  status: 'Development' | 'Alpha' | 'Beta' | 'Release';
}
