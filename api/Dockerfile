FROM node:16.14.0

WORKDIR /api

COPY . .
RUN mv .env.prod .env
RUN npm i --silent

CMD ["npx", "ts-node", "./src/index.ts"]
