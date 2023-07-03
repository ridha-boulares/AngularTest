FROM ubuntu:latest
MAINTAINER mohamedridhaa
WORKDIR /usr/apps/docker-test
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm install -g @angular/cli@13.0.0
RUN npm install -g http-server
ADD . /usr/apps/docker-test
CMD ["http-server","-s"]
