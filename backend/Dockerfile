FROM node:15.2.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY  . .

# Typescript configs
RUN npm run build
COPY .env ./dist
WORKDIR ./dist

EXPOSE 3000

CMD node app.js
