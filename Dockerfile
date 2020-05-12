FROM node:10.16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
CMD npm start
