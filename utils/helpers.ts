import {Database} from '../repositories/database.repository';
import {Cache} from '../repositories/cache.repository';

const database = new Database()
const cache = new Cache()

export async function fetchAndCacheData(movieId?: string) {
      // check cache for all
      const cachedData = movieId ? await cache.get(movieId) : await cache.get('all');

      if(cachedData) return cachedData;

      const data = movieId ? await database.findOneMovie(movieId) : await database.findAll();

      console.log({data})

      const key = movieId || 'all'

      // cache data
      await cache.set(key, data)

      return data

}

export {database, cache}