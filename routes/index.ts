import { isArray } from 'class-validator';
import * as express from 'express';
import { fetchAndCacheData, database, cache } from '../utils/helpers';
const router = express.Router();


router.get('/movies', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {

    const movieId = req.query.id as any;
    const {limit, page} = req.query as any;
    
    const data = await fetchAndCacheData(movieId, limit, page)

    return res.send({message: 'Data has been fetched successfully', data: !movieId ? data[0] : data, total: !movieId ? data[1] : 1})

  }catch(error) {
    res.statusCode = 500;
    return res.send({message: error});
  }

})

router.get('/search', async (req: express.Request, res: express.Response) => {
  try {

    const searchQuery = req.query.q as any;
    
    const data = await database.search(searchQuery);

    return res.send({message: 'Data has been fetched successfully', data})

  }catch(error) {
    res.statusCode = 500;
    return res.send({message: error});
  }

})

router.get('/populate', async(req: express.Request, res: express.Response) => {
  try{
    // seed data to the database
    await database.seedData()

    // purge cache to reflect new seed
    await cache.purge('all')

    // return response
    return res.send({message: 'Data has been seeded to the database'})

  }catch(error) {
    res.statusCode = 500;
    return res.send({message: error || 'Invalid request'});
  }

})

export { router };
