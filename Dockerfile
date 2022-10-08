FROM node:16.13.1-alpine
RUN npm i -g @nestjs/cli

WORKDIR /api

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "start:dev"]
