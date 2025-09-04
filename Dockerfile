# Build stage
FROM node:20-bookworm-slim AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY tsconfig.json ./
COPY src ./src

# Build TypeScript (prebuild hook já otimiza imagens)
RUN npm run build

# Copy static assets into dist
RUN mkdir -p dist/public dist/views \
 && cp -r src/public/* dist/public/ \
 && cp -r src/views/* dist/views/


# Runtime stage
FROM node:20-bookworm-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app

# Copy only what is needed to run
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/server.js"]


