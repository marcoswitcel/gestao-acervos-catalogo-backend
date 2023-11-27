import { Product } from 'src/products/entities/product.interface';
import type { Catalog as CatalogInterface } from './catalog.interface';

export class Catalog implements CatalogInterface {
  title: string;
  description?: string;
  publicado: boolean;
  id: string;
  itens: Product[];
}
