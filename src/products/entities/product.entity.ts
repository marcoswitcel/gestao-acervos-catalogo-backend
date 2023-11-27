import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import type { Product as ProductInterface } from './product.interface';

@Entity()
export class Product implements ProductInterface {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 275 })
  title: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  description: string;

  @Column({ type: 'boolean' })
  rascunho: boolean;

  @Column({ type: 'varchar', length: 275, nullable: true })
  foto: string;
}
