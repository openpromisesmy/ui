FROM node:12-alpine
WORKDIR /app
COPY ./app/package*.json ./
RUN npm install -g @vue/cli
RUN npm ci
CMD npm run serve
