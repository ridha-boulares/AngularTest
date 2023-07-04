# Stage 1
#FROM node:16.16.0 as node
#WORKDIR /app
#COPY . .
#RUN npm install --legacy-peer-deps
#RUN npm run build --prod
# Stage 2ng s
#FROM nginx:alpine
#COPY --from=node /app/dist/test /usr/share/nginx/html


# Base image
FROM nginx:latest

# Copy Angular app files to the Nginx web server directory
COPY dist/test /usr/share/nginx/html

# Change default Nginx port to 8085
EXPOSE 8085

