import { Movie } from "../entities/movie.entity";
import {createConnection, Connection, Like} from "typeorm";
import { mockMovieData } from "../utils/mock-data";
import * as config from '../utils/ormconfig';

export class Database {
    private dbConnection: Connection
    
    async setupConnection() {
        if(!this.dbConnection) {
            this.dbConnection = await createConnection(config)
        }
        return this.dbConnection
    }

    async findOneMovie(id: string) {
        if(!this.dbConnection) await this.setupConnection()
        return this.dbConnection.getRepository(Movie).findOne(id)
    }

    async findAll(take = 0, page = 0) {
        if(!this.dbConnection) await this.setupConnection()
        take = take || 3;
        page = page && page > 1 ? page * take : 1 
        return this.dbConnection.getRepository(Movie).findAndCount({
            take,
            skip: page
        })
    }

    async search(searchQuery: string) {
        if(!this.dbConnection) await this.setupConnection()
        return this.dbConnection.getRepository(Movie).find({
            where: {title: Like(`${searchQuery}%`)}
        })
    }

    async seedData() {
        if(!this.dbConnection) await this.setupConnection()
        return this.dbConnection.getRepository(Movie).createQueryBuilder().
                insert().
                into(Movie).
                values(mockMovieData as any).
                execute();
    }
}