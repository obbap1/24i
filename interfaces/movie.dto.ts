import {
    IsDate,
    IsString,
    IsNotEmpty,
    IsNumber,
    IsArray,
  } from 'class-validator';
import { IMovieImages } from './movie.interface';
  
  export class MovieDTO {
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;
  
    @IsString()
    @IsNotEmpty()
    shortDescription: string;
  
    @IsNumber()
    @IsNotEmpty()
    duration: number;

    @IsDate()
    @IsNotEmpty()
    releaseDate: Date;
  
    @IsArray()
    @IsNotEmpty()
    images: string[];

    @IsArray()
    genres: string[];
  }