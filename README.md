# BookHive

BookHive is a RESTful API designed to manage a collection of books and users' reading lists. This API allows users to fetch book details, manage their reading lists, and handle user authentication efficiently.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Technologies](#technologies)
- [License](#license)

## Features

- Fetch details of all books and specific books.
- Retrieve all categories and books by category.
- Manage reading lists (add books to reading list, check reading list status).
- User authentication and profile management.

## Project Overview

The BookHive API is built to provide a robust backend service for a book management application. It leverages MongoDB for data storage, allowing for flexible and scalable data management. The API supports CRUD operations for books and users, and includes JWT-based authentication to ensure secure access to user-specific endpoints.

Key components include:

- **Books**: Manage a collection of books with details such as title, author, category, description, image, and rating.
- **Categories**: Organize books into various categories.
- **Reading Lists**: Allow users to add books to their personal reading lists and check the status of their reading lists.
- **User Management**: Handle user registration, login, and profile management with secure JWT authentication.

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/dev-mhshakil/book-hive
   cd book-hive
   ```

2. Clone the server repository:

   ```
   git clone https://github.com/dev-mhshakil/book-hive-server
   cd book-hive-server
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Set up your MongoDB database and configure the connection URI.

5. Start the server:
   ```
   npm run dev
   ```

The server will be running on `https://book-hive-server.onrender.com` or `http://localhost:5173/`.

## Technologies

### Backend

- Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine, used to build scalable network applications.
- Express: Fast, unopinionated, minimalist web framework for Node.js, used to build the API.
- MongoDB: NoSQL database for storing book and user data, providing high performance, high availability, and easy scalability.

### Authentication

- Firebase : For Login, SignUp,
- JWT (JSON Web Tokens): Securely transmit information between parties as a JSON object. Used for authentication and information exchange.

### HTTP Client

- Axios: Promise-based HTTP client for the browser and Node.js, used to make HTTP requests from the frontend to the backend API.

### Frontend

- React: JavaScript library for building user interfaces. Used to create the frontend of the application.
- React Icons: Include popular icons in your React projects easily.
- React Hot Toast
- React Router DOM
- TailwindCSS

## License

### This project is licensed under the MIT License. See the LICENSE file for details.
