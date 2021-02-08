import {MigrationInterface, QueryRunner} from "typeorm";

export class SetupMovieTable1612755158783 implements MigrationInterface {
    name = 'SetupMovieTable1612755158783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "shortDescription" character varying(255) NOT NULL, "duration" character varying(255) NOT NULL, "releaseDate" TIMESTAMP NOT NULL DEFAULT now(), "images" text array NOT NULL, "genres" text array NOT NULL, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movie"`);
    }

}
