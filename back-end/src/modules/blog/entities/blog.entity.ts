import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('blog')
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 200 })
  description: string;

  @Column({ type: 'text' })
  imageUrl: string;
}
