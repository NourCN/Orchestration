FROM node:17.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install react

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]