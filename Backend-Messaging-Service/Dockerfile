FROM node:24-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3334

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh
CMD ["sh", "./entrypoint.sh"]