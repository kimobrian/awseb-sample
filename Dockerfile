FROM node:6.0.0

RUN npm install -g forever@0.15.1

WORKDIR /app

ADD . /app

RUN cd /app && npm install

EXPOSE 3000

CMD forever ./server.js