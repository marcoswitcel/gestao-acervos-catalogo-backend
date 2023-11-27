import { Product } from 'src/products/entities/product.interface';
import type { Catalog as CatalogInterface } from './catalog.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Catalog implements CatalogInterface {
  
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 275 })
  title: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  description?: string;

  @Column({ type: 'boolean' })
  publicado: boolean;

  itens: Product[];
}
