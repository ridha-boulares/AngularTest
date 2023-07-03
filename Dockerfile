FROM ubuntu:latest
MAINTAINER mohamedridhaa

# Install dependencies
RUN apt-get update && apt-get install -y curl nodejs npm

# Install Angular CLI globally
RUN npm install -g @angular/cli@13.0.0

# Install http-server globally
RUN npm install -g http-server

# Set working directory
WORKDIR /usr/apps/docker-test

# Copy only the necessary files (e.g., the 'dist' directory)
COPY dist/test /usr/apps/docker-test/dist

RUN ng serve

# Expose the port on which the application will run
EXPOSE 8080

# Run the http-server command
CMD ["http-server", "-s"]
