# Multi-stage Dockerfile for Astro.js production deployment
# Stage 1: Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install build dependencies for native modules
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
    pixman-dev \
    pangomm-dev \
    libjpeg-turbo-dev \
    freetype-dev

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --production=false

# Copy application source
COPY . .

# Build the application
RUN yarn build

# Stage 2: Production stage
FROM node:20-alpine AS production

# Install runtime dependencies for canvas
RUN apk add --no-cache \
    cairo \
    jpeg \
    pango \
    giflib \
    pixman \
    pangomm \
    libjpeg-turbo \
    freetype \
    sqlite-libs

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Set working directory
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy package files
COPY package.json yarn.lock ./

# Copy node_modules from builder stage (already compiled with native modules)
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules

# Copy built application from builder stage
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/package.json ./

# Create all necessary runtime directories
RUN mkdir -p /app/data /app/uploads /app/db /app/migrations && \
    chown -R nodejs:nodejs /app/data /app/uploads /app/db /app/migrations

# Copy db directory contents from builder (config files, seed files)
# Using wildcard to handle case where directory might be sparse
COPY --from=builder --chown=nodejs:nodejs /app/db /app/db

# Copy migrations directory from builder (may be empty)
COPY --from=builder --chown=nodejs:nodejs /app/migrations /app/migrations

# Note: /app/data directory is intentionally created empty for runtime database files

# Switch to non-root user
USER nodejs

# Expose the default port
EXPOSE 4321

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:4321/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["node", "./dist/server/entry.mjs"]
