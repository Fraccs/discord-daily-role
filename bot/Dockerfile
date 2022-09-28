FROM node:16.14.0

WORKDIR /bot

COPY . .
RUN mv .env.prod .env
RUN npm i --silent

CMD ["node", "./src/index.js"]
