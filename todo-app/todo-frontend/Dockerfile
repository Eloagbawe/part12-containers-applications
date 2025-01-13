FROM node:20 AS test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm test

# FROM node:20
FROM test-stage AS build-stage

WORKDIR /usr/src/app

COPY . .
# COPY --from=test-stage /usr/src/app .

RUN npm ci

ENV VITE_BACKEND_URL=http://localhost:8080/api/

RUN npm run build

# RUN npm install -g serve

# CMD ["serve", "dist"]

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
