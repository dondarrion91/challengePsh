FROM node:fermium

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm i

CMD ["npm", "run", "dev"]