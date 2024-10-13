# Stage 1: Build the Backend
FROM node:22-alpine AS builder

ARG RAILWAY_ENVIRONMENT
ARG RAILWAY_SERVICE_NAME

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy root package.json, pnpm-workspace.yaml, and pnpm-lock.yaml
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

# Install all dependencies
RUN pnpm install

# Copy all workspace packages (includes API, Backend, Frontend)
COPY . .

# Build the Backend
RUN pnpm --filter backend run build

# Stage 2: Create the Production Image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy root package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install production dependencies for Backend
RUN pnpm install --prod --filter backend

# Copy the built Backend code from the builder stage
COPY --from=builder /app/Backend/dist ./Backend/dist

# Expose the port that the app runs on
EXPOSE 4000

# Start the application
CMD ["pnpm", "--filter", "backend", "start"]