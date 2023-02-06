import { IImage } from './IImage';

export interface IPost {
  title: string;
  pubDate?: string;
  description: string;
  author: string;
  image: IImage;
  tags: string[];
  url: string;
}