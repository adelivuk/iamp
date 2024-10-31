FROM node:22-alpine

WORKDIR /app


# add yarn.lock if you are using yarn
COPY package.json ./

RUN yarn install

# RUN npm i -g serve

RUN yarn global add serve

COPY . .

# RUN npm run build

RUN yarn build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
