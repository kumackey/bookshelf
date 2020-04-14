FROM node:12.16.1-alpine3.9
COPY . /front
RUN yarn install
EXPOSE 3000
CMD yarn start
