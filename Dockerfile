FROM node:9.3.0
COPY . /react
WORKDIR /react
RUN npm install
CMD ["node", "docker_development/server.js"]