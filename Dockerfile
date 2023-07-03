FROM ubuntu:latest
MAINTAINER mohamedridhaa

# Install dependencies
RUN apt-get update && apt-get install -y curl nodejs npm

# Install Angular CLI globally
RUN npm install -g @angular/cli@13.0.0

# Install http-server globally
RUN npm install -g http-server

# Set working directory
WORKDIR /usr/apps/docker-test/dist/test

# Copy only the necessary files (e.g., the 'dist' directory)
COPY dist/test /usr/apps/docker-test/dist/test

# Expose the port on which the application will run
EXPOSE 8181

# Run the http-server command to serve the application
CMD ["http-server", "-s"]
