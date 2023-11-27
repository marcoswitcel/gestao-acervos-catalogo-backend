import { Product } from 'src/products/entities/product.interface';
import type { Catalog as CatalogInterface } from '../entities/catalog.interface';

export class CreateCatalogDto implements CatalogInterface {
  title: string;
  description?: string;
  publicado: boolean;
  id: string;
  itens: Product[];
}
