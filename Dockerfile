FROM node:16.17.1-alpine3.15
RUN mkdir -p /usr/src/api

WORKDIR /usr/src/api

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]