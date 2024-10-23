FROM node:alpine

RUN mkdir /data-engine-test

WORKDIR /data-engine-test

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]
