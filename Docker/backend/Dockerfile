FROM node:16.13.1-alpine

# 使用ポート
EXPOSE 3000

WORKDIR /api

# Alpine Linux package management 更新
RUN apk update && \
    apk upgrade

COPY ../../backend/package*.json ./

RUN npm install

CMD ["npm", "run", "start:dev"]
