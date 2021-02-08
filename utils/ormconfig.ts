import { ConnectionOptions } from 'typeorm';
import { Movie } from '../entities/movie.entity';

const config: ConnectionOptions = {
  type: 'postgres',
  synchronize: false,
  migrationsRun: true,
  logging: true,
  logger: 'advanced-console',
  host: process.env.POSTGRES_HOST || '127.0.0.1',
  port: parseInt(process.env.POSTGRES_PORT) || 5532,
  username: process.env.MOVIE_DB_USER || 'testUser',
  password: process.env.MOVIE_DB_PASSWORD || 'password123',
  database: process.env.MOVIE_DB_DATABASE || 'movie_db',
  entities: [Movie],

  migrations: [
    process.env.MOVIE_MIGRATIONS_FILES || 'migrations/movie/*.ts'
  ],
  cli: {
    migrationsDir:
      process.env.MOVIE_MIGRATIONS_DIR || 'migrations/movie'
  }
}

export = config;
