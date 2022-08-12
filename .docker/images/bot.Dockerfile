## base
FROM node:18 as base

WORKDIR /opt/app

## Build
FROM base as build

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build:bot


## Production
FROM base as production

COPY package.json ./
COPY --from=build /opt/app/dist ./dist
COPY --from=build /opt/app/node_modules ./node_modules

CMD [ "yarn", "prod:bot" ]
