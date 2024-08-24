Articway Logistic API Documentation
Table of Contents
Overview
Architecture
Technologies Used
Database
Security Features
Frontend
Requesting Tool
Error Handling
Usage
Overview
The Articway Logistic API provides a comprehensive backend solution for managing logistics operations at ArticwayLogistic.com. Built using a robust MVC architecture and Express.js, the API ensures efficient management of logistics data and seamless interactions between the server and clients.

Architecture
MVC Architecture
The API follows the Model-View-Controller (MVC) design pattern, which separates the application into three interconnected components:

Model: Handles data logic and interactions with the database.
View: Manages the presentation layer (not directly involved in this API but interacts with frontend clients).
Controller: Manages user input, interacts with the Model, and renders the appropriate response.
Express.js Server
The API uses Express.js as the server-side framework. Express.js simplifies the creation of robust APIs by providing:

Middleware Support: For handling requests, responses, and other aspects of HTTP communication.
Routing: To define routes and manage incoming requests.
Application Structure
Controllers: Define the logic for handling various routes and actions.
Models: Represent the data structure and handle database interactions.
Routes: Map HTTP requests to specific controller actions.
Middleware: Manage additional processing such as authentication and logging.
Technologies Used
Node.js: Serves as the runtime environment for executing JavaScript code on the server side.
Express.js: Framework used to build and manage API endpoints.
MySQL: Relational database management system used for data storage.
mysql2 Package: Provides a promise-based API for interacting with MySQL databases.
Database
The API leverages a MySQL database to store and manage logistics data. Key features of the database include:

Schema Design: Optimized for high-performance queries and efficient data retrieval.
Tables: Include essential entities such as Users, Deliveries, Routes, and Orders.
Indexes: Applied to frequently queried fields to enhance query performance.
Security Features
To ensure secure communication and data protection, the API includes:

CORS: Cross-Origin Resource Sharing is enabled to permit requests from different domains.
Helmet: Middleware for setting security headers to protect against common vulnerabilities.
Input Validation: Client-side validation to prevent harmful or malicious inputs using Redux Toolkit.
Server-Side Error Handling: Global error handler for catching and returning meaningful error messages.
XSS Protection: Guards against Cross-Site Scripting (XSS) attacks.
SQL Injection Protection: Uses parameterized queries to avoid SQL injection attacks.
Frontend
The API supports two distinct frontend applications:

Admin Panel: Built with React and TypeScript, it provides a management interface for administrators.
Cargo Tracking Panel: A user-facing application also built with React and TypeScript, allowing users to interact with the API for tracking cargo.
Requesting Tool
The API utilizes @reduxjs/toolkit for managing queries and responses:

createSlice: Automates the creation of Redux slices for handling API responses and state management.
Error Handling
Effective error handling is implemented both server-side and client-side:

Global Error Handler: Captures and formats server-side errors for client consumption.
Redux Toolkit Slices: Manages request states and errors in a centralized manner using createSlice.
Usage
To start using the Articway Logistic API:

Clone the Repository:

bash

git clone https://github.com/Explorer-Person/Cargo_Tracking_Project.git
Install Dependencies: Navigate to the project directory and install the necessary packages:

bash

-Start Admin Panel Api:
cd Cargo_Tracking_Project/Admin_Panel_of_Articwa_Logistic
npm install
npm start

-Start Admin Panel Client: 
cd Cargo_Tracking_Project/Admin_Panel_of_Articwa_Logistic/client
npm install
npm run dev
//or build for production;

---------------------------

-Start Cargo Track Api:
cd Cargo_Tracking_Project/Artcicwa_Logistic.com
npm install
npm start

-Start Cargo Track Client:
cd Cargo_Tracking_Project/Artcicwa_Logistic.com/client
npm install
npm run dev // or build for production

Run the API: Start the server with:

bash

npm start
Access API Documentation: Explore the API endpoints and their usage. Documentation is provided within the codebase and available at /docs.

Frontend Setup: For the frontend applications, follow the setup instructions in their respective directories.

Global Error Handler: A global error handler is used to catch and return meaningful error messages from the API.

Redux Toolkit Slices: Redux Toolkit's createSlice method is used to manage requests and slices in a centralized way.

We hope this documentation provides valuable insights into our API architecture, technologies used, and security features!
