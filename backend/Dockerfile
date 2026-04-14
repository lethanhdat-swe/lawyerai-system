FROM node:25-slim

# Cài đặt các thư viện hệ thống cần thiết cho native modules
RUN apt-get update && apt-get install -y \
    python3 make g++ libgomp1 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install && \
    npm install --platform=linux --arch=x64 sharp

RUN npx prisma generate

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "dev" ]
