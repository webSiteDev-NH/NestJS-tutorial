FROM node:16.14.2-alpine

# 使用ポート
EXPOSE 3333

WORKDIR /app

# Alpine Linux package management 更新
RUN apk update && \
    apk upgrade

CMD ["npm", "run", "dev"]
