FROM node:10.16.0-alpine

ENV PORT 8080
EXPOSE 8080

RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install
COPY . /app

CMD ["yarn", "run", "start"]
