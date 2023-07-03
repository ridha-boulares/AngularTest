# Stage 1
FROM node:16.16.0 as node
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build --prod
# Stage 2ng s
FROM nginx:alpine
COPY --from=node /app/dist/test /usr/share/nginx/html
