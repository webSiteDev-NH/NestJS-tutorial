FROM node:16.13.1-alpine

WORKDIR /api

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "start:dev"]
