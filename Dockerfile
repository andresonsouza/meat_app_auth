FROM node:latest

WORKDIR /api

COPY . . 

RUN npm i
RUN npm i --quiet

RUN npm i nodemon -g --quiet

CMD nodemon -L --watch . index.js

EXPOSE 3000