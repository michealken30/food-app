FROM node:18

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
# RUN npm rebuild bcrypt --build-from-source  # Rebuild bcrypt for the container's environment

# Copy application code
COPY . .

# Expose the application's port
EXPOSE 4000

# Start the application
CMD ["npm", "run", "start"]
