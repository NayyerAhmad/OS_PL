FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Set environment variable
ENV REACT_APP_API_URL http://localhost:3001

# Expose the React app port
EXPOSE 3000

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start"]
