FROM node:12

WORKDIR /usr/src/app

copy package*.json ./

RUN npm install

COPY . .

EXPOSE 85

CMD ["node", "server.js" ]
