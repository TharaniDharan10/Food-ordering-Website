# We are using docker base image with alpine-21 version
FROM node:21-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD [ "npm" , "start" ]

# docker build -t node-app:1.0 . 
# docker images -a 
# docker run -d -p 8000:8000 node-app:1.0
# docker logs docker_name
# docker ps

