FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json .
RUN npm install --quiet

COPY . .
RUN npm run build

EXPOSE 3001

VOLUME [ "/usr/src/app" ]

