# Root Dockerfile - builds the backend from the /server directory
FROM node:20-slim

# Install openssl for Prisma
RUN apt-get update -y && apt-get install -y openssl

# Set working directory
WORKDIR /app

# Copy server package files
COPY server/package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the server code
COPY server/ .

# Generate Prisma client
RUN npx prisma generate

# Expose port (Cloud Run sets PORT env var)
EXPOSE 8080

# Start the server
CMD ["node", "index.js"]
