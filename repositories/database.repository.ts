import { Movie } from "../entities/movie.entity";
import {createConnection, Connection} from "typeorm";
import { mockMovieData } from "../utils/mock-data";
import * as config from '../utils/ormconfig';

export class Database {
    private dbConnection: Connection
    
    async setupConnection() {
        if(!this.dbConnection) {
            this.dbConnection = await createConnection(config)
        }
        console.log({connection: this.dbConnection.options.entities})
        return this.dbConnection
    }

    async findOneMovie(id: string) {
        if(!this.dbConnection) await this.setupConnection()
        return this.dbConnection.getRepository(Movie).findOne(id)
    }

    async findAll() {
        if(!this.dbConnection) await this.setupConnection()
        return this.dbConnection.getRepository(Movie).find()
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