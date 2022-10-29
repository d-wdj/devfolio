FROM node:16-bullseye

WORKDIR /app

COPY . /app
RUN npm config set unsafe-perm true &&\
    npm install -g gatsby-cli &&\
    npm cache clean --force &&\
    npm install &&\
    mkdir node_modules/.cache && chmod -R 777 node_modules/.cache &&\
    gatsby build --prefix-paths

WORKDIR /app
EXPOSE 8000
CMD ["gatsby", "serve", "-H", "0.0.0.0", "-p", "8000" ]
