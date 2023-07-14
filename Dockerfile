FROM node:18-alpine
WORKDIR /code
#COPY package.json /code
ADD . /code
RUN npm install --silent
