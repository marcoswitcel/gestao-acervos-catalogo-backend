import { Product } from 'src/products/entities/product.interface';

export interface Catalog {
  title: string;
  description?: string;
  publicado: boolean;
  id: string;
  itens: Product[];
}
