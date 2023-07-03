# Use a base image with Node.js and npm pre-installed
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend source code
COPY . .

# Build the React app
RUN npm run build

# Set environment variables (if required)
# ENV VAR_NAME=value

# Expose a port (if required)
EXPOSE 3000

# Start a web server to serve the built static files
CMD ["npm", "start"]
