# Use a base image with Node.js pre-installed
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend source code
COPY . .

# Set environment variables (if required)
# ENV VAR_NAME=value

# Expose a port (if required)
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
