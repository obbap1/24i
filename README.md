# Movie Api
To start this api, simply run 
```
docker-compose up --build
```
This is running the `postgres-service`, the `redis-service` and the `movie-api`.

The `postgres-service` runs on port `5532`.
The `redis-service` runs on port `6390`.
The `movie-api` runs on port `9000`.
The project runs on `Typescript`

It has `pagination`, `search` and `single movie id` queries.

## ORM
This project uses `TypeORM`. To run migrations, please use:
```
npm run typeorm:run
```

## Input validation
All input validation is done with the `class-validator` module.

## Populating/Seeding the DB.
This is done by making a `GET` request to the `http://localhost:9000/populate` route.

## Tests
To run unit tests use:
```
npm run test
```
To run integration tests use:
```
npm run test:e2e
```

## CI
This project uses the Github Actions CI. It runs on `push` where linting and testing jobs are run.

## Lint
This project uses standardx for linting and husky pre commit hooks for formatting before committing.
To lint, run:
```
npm run lint
```
To lint and fix, run:
```
npm run lint:fix
```

## Swagger API (Open API)
To access the swagger API docs use:
`http://localhost:9000/api-docs`

## Image uploads and downloads
The `aws-sdk` is used to handle image uploads and retrieval. 

## Documentation
An exported postman collection is on the repository

## Logger
`morgan` is used for logging.

## Postman Export
The postman exported documentation is `24i-movie-api.postman_collection.json`