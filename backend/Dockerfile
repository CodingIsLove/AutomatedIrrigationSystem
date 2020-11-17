FROM node:15.2.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# if you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY  . .

RUN npm run build
COPY .env ./dist
WORKDIR ./dist

EXPOSE 8080
CMD node src/app.js
