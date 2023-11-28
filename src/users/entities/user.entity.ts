import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 275 })
  email: string;

  // @todo A senha precisaria ser armazenada criptografada
  @Column({ type: 'varchar', length: 275 })
  password: string;
}
