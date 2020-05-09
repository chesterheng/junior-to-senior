FROM node:carbon

EXPOSE 3000

WORKDIR /app

ADD server.js /app/server.js

ADD package.json /app/package.json

RUN npm install

ENTRYPOINT ["node"]
CMD ["server.js"]