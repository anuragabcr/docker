# Base library
FROM node:14-alpine

WORKDIR '/app'

# install dependences
COPY package.json .
RUN npm install
COPY . .

# default command
CMD [ "npm", "start" ]