import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity
} from 'typeorm'
import { IMovieImages } from '../interfaces/movie.interface';

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  title: string

  @Column('varchar', { length: 255 })
  description: string;

  @Column('varchar', { length: 255 })
  shortDescription: string;

  @Column('varchar', { length: 200 })
  duration: string;

  @CreateDateColumn()
  releaseDate: string;

  @Column('text', {array: true})
  images: string[];

  @Column('text', {array: true})
  genres: string[];


}
