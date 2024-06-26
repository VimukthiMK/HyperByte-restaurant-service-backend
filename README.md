# HyperByte-restaurant-service-backend

A RESTful API for a restaurant service application.

## How to Run the Docker Container

1. **Clone Git Repository**:
    ```sh
    git clone https://github.com/VimukthiMK/HyperByte-restaurant-service-backend.git
    ```

2. **Open your terminal**

3. **Navigate to the directory containing the application**:
    ```sh
    cd path/to/HyperByte-restaurant-service-backend
    ```

4. **Build the Docker Image**:
    ```sh
    docker build -t backend-app .
    ```

5. **Run the Docker Container**:
    ```sh
    docker run -p 8000:8000 backend-app
    ```

Backend application is running on [http://localhost:8000](http://localhost:8000)  inside the Docker container.
