FROM node:10.16.0-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/

RUN npm install
COPY . /app

CMD ["npm", "run", "dev"]
