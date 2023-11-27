import type { Product as ProductInterface } from './product.interface';

export class Product implements ProductInterface {
  title: string;
  description: string;
  rascunho: boolean;
  id: string;
  foto: string;
}
