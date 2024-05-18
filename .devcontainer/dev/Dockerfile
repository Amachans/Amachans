FROM node:20-alpine

RUN apk update && apk upgrade
RUN apk add curl  \ 
    git \
    make \
    gcc \
    g++ \
    python3

RUN npm install -g pnpm
RUN pnpm config set store-dir /tmp/pnpm/store