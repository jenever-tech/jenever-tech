FROM node:22-alpine AS base

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source
COPY . .

# Development
FROM base AS dev
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Build
FROM base AS builder
RUN npm run build

# Production (serve static export with lightweight server)
FROM node:22-alpine AS prod
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/out ./out
EXPOSE 3000
CMD ["serve", "out", "-l", "3000"]
