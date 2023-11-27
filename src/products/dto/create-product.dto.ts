import type { Product as ProductInterface } from '../entities/product.interface';

export class CreateProductDto implements ProductInterface {
  title: string;
  description: string;
  rascunho: boolean;
  id: string;
  foto: string;
}
