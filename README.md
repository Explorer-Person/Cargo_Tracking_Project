Articway Logistic API Documentation
Table of Contents


Overview

Architecture

Technologies Used

Database

Security Features

Frontend

Error Handling

Overview
The Articway Logistic API is a robust and scalable backend system designed to manage logistics operations for ArticwayLogistic.com. The API uses an MVC architecture with Express.js as the server-side framework.

Architecture

MVC Architecture: The API follows the Model-View-Controller (MVC) pattern, separating concerns between data storage, business logic, and presentation.

Express.js Server: The Express.js framework is used to handle server communications, providing a lightweight and efficient way to manage requests and responses.

Technologies Used

Node.js: The API is built using Node.js as the runtime environment.

Express.js: Express.js is used as the server-side framework for handling requests and responses.

MySQL Server: A MySQL database server is used for storing and managing data.

mysql2 Package: The mysql2 package is used to interact with the MySQL database from the API.

Database
The API uses a MySQL database server to store and manage logistics-related data. The database schema is designed to support high-performance queries and optimized for data retrieval.

Security Features
To ensure secure communication between the client and server, we have implemented:


CORS: Cross-Origin Resource Sharing (CORS) is enabled to allow requests from different domains.

Helmet: Helmet middleware is used to add security headers to the API responses.

Input Validation: Client-side input validation is performed using Redux Toolkit's createSlice method to prevent harm and malicious inputs.

Server-Side Error Handling: A global error handler is implemented to catch server-side errors and return meaningful error messages.

XSS Protection: Server-side protection against Cross-Site Scripting (XSS) attacks is enabled.

SQL Injection Protection: The API uses parameterized queries to prevent SQL injection attacks.

Frontend
The Articway Logistic API has two separate frontend clients:

Admin Panel: A React.ts-based admin panel is used for managing admins and contents inside the ArticwayLogistic.com platform.

Cargo Tracking Panel: Another client app, written in React using TypeScript (.ts files), provides a user-friendly interface for interacting with the API.

Requesting Tool: Used @reduxjs/toolkit for query creating and getting response datas to slice automatically.

Error Handling
To handle errors on both server-side and client-side, we have implemented:


Global Error Handler: A global error handler is used to catch and return meaningful error messages from the API.

Redux Toolkit Slices: Redux Toolkit's createSlice method is used to manage requests and slices in a centralized way.

We hope this documentation provides valuable insights into our API architecture, technologies used, and security features!
