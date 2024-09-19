import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 200 })
  description: string;

  @Column({ type: 'text' })
  imageUrl: string;

  @Column({ type: 'varchar', length: 300 })
  moreInfo: string;
}
