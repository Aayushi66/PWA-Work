FROM node:10
WORKDIR /app /app

COPY package*.json ./app

RUN npm install

COPY . .
EXPOSE 8080
CMD [ "node", "app/server.js" ]


RUN adduser user

USER user