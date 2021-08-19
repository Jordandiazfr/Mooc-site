FROM node:14.13.0-alpine

WORKDIR /app/

COPY . .

RUN npm install 

ENTRYPOINT ["node","ace","serve", "--watch"]