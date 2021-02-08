FROM node:12.18-alpine

LABEL app="movie-api"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build 

CMD [ "node", "dist/index" ]
