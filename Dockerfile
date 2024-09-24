
# Stage 1: Build the project with full dependencies
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /build

# Install dependencies (including devDependencies)
COPY package*.json ./
RUN npm install  # Install all dependencies (including devDependencies)

# Copy the rest of the app's source code and build
COPY ./src ./src
RUN npm run build  # Build the app (this uses tsc)

# Stage 2: Create a lightweight image for running the app
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /build/package*.json ./
COPY --from=builder /build/node_modules ./node_modules/
COPY --from=builder /build/dist ./dist/

# Expose the port (optional)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]

