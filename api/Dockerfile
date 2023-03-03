FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Set environment variables
ENV NODE_ENV production

# Expose the API port
EXPOSE 3001

# Start the app
CMD ["node", "index.js"]
