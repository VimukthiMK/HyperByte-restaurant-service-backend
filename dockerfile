# Use an official Node.js runtime as a parent image
FROM node:16

# We use nodemon to restart the server every time there's a change
RUN npm install -g nodemon

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code to the working directory
COPY . .

# Set environment variables
ENV PORT=8000
ENV DATABASE_URL="mongodb+srv://DBUser:W1kiqOFmzvRloAs5@cluster0.o1mcgm4.mongodb.net/ResturantService?retryWrites=true&w=majority&appName=Cluster0"
ENV CLIENT_URL=http://localhost:5173

# Expose the port the app runs on
EXPOSE 8000

# Command to run the app
CMD ["npm", "run", "dev"]
