FROM node:12-alpine
WORKDIR /app
COPY app/package*.json ./
RUN npm ci
CMD npm run serve
