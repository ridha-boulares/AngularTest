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
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy Angular app files to the container
COPY dist/my-app /usr/src/app

# Install http-server globally
RUN npm install -g http-server

# Expose port 8085
EXPOSE 8085

# Start the http-server to serve the Angular app
CMD ["http-server", "-p", "8085"]
