import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Home {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
