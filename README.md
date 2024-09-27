# Articway Logistic API

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Database](#database)
- [Security Features](#security-features)
- [Frontend](#frontend)
- [Requesting Tool](#requesting-tool)
- [Error Handling](#error-handling)
- [Usage](#usage)

## Overview

The Articway Logistic API provides a comprehensive backend solution for managing logistics operations at ArticwayLogistic.com. Built using a robust MVC architecture and Express.js, the API ensures efficient management of logistics data and seamless interactions between the server and clients.

## Architecture

### MVC Architecture

The API follows the Model-View-Controller (MVC) design pattern, which separates the application into three interconnected components:

- **Model**: Handles data logic and interactions with the database.
- **View**: Manages the presentation layer (not directly involved in this API but interacts with frontend clients).
- **Controller**: Manages user input, interacts with the Model, and renders the appropriate response.

### Express.js Server

The API uses Express.js as the server-side framework. Express.js simplifies the creation of robust APIs by providing:

- **Middleware Support**: For handling requests, responses, and other aspects of HTTP communication.
- **Routing**: To define routes and manage incoming requests.

### Application Structure

- **Controllers**: Define the logic for handling various routes and actions.
- **Models**: Represent the data structure and handle database interactions.
- **Routes**: Map HTTP requests to specific controller actions.
- **Middleware**: Manage additional processing such as authentication and logging.

## Technologies Used

- **Node.js**: Serves as the runtime environment for executing JavaScript code on the server side.
- **Express.js**: Framework used to build and manage API endpoints.
- **MySQL**: Relational database management system used for data storage.
- **mysql2 Package**: Provides a promise-based API for interacting with MySQL databases.

## Database

The API leverages a MySQL database to store and manage logistics data. Key features of the database include:

- **Schema Design**: Optimized for high-performance queries and efficient data retrieval.
- **Tables**: Include essential entities such as Users, Deliveries, Routes, and Orders.
- **Indexes**: Applied to frequently queried fields to enhance query performance.

## Security Features

To ensure secure communication and data protection, the API includes:

- **CORS**: Cross-Origin Resource Sharing is enabled to permit requests from different domains.
- **Helmet**: Middleware for setting security headers to protect against common vulnerabilities.
- **Input Validation**: Client-side validation to prevent harmful or malicious inputs using Redux Toolkit.
- **Server-Side Error Handling**: Global error handler for catching and returning meaningful error messages.
- **XSS Protection**: Guards against Cross-Site Scripting (XSS) attacks.
- **SQL Injection Protection**: Uses parameterized queries to avoid SQL injection attacks.

## Frontend

The API supports two distinct frontend applications:

- **Admin Panel**: Built with React and TypeScript, it provides a management interface for administrators.
- **Cargo Tracking Panel**: A user-facing application also built with React and TypeScript, allowing users to interact with the API for tracking cargo.

## Requesting Tool

The API utilizes `@reduxjs/toolkit` for managing queries and responses:

- **createSlice**: Automates the creation of Redux slices for handling API responses and state management.

## Error Handling

Effective error handling is implemented both server-side and client-side:

- **Global Error Handler**: Captures and formats server-side errors for client consumption.
- **Redux Toolkit Slices**: Manages request states and errors in a centralized manner using `createSlice`.

## Usage

To start using the Articway Logistic API:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Explorer-Person/Cargo_Tracking_Project.git
  
* Start Admin Panel Api:
  ```bash
   cd Cargo_Tracking_Project/Admin_Panel_of_Articwa_Logistic
   npm install
   npm start

* Start Admin Panel Client:
  ```bash
    cd Cargo_Tracking_Project/Admin_Panel_of_Articwa_Logistic/client
    npm install
    npm run dev
    ### or build for production


* Start Cargo Track API:
   ```bash
   cd Cargo_Tracking_Project/Artcicwa_Logistic.com
   npm install
   npm start

* Start Cargo Track Client:
   ```bash
   cd Cargo_Tracking_Project/Artcicwa_Logistic.com/client
   npm install
   npm run dev
   ### or build for production

* Access API Documentation: 
Explore the API endpoints and their usage. Documentation is provided within the codebase and available at /docs.

* Frontend Setup: 
For the frontend applications, follow the setup instructions in their respective directories.

- We hope this documentation provides valuable insights into our API architecture, technologies used, and security features!


images:

![Ekran görüntüsü 2024-09-06 202509](https://github.com/user-attachments/assets/47072c9c-975b-43e9-8a17-dceb47ed0405)

![Ekran görüntüsü 2024-09-06 204901](https://github.com/user-attachments/assets/22e3da29-d2c4-489e-aac8-eee2beea6c60)

![Ekran görüntüsü 2024-09-06 204940](https://github.com/user-attachments/assets/8a045014-63f5-48ce-9119-c75b857109eb)

![Ekran görüntüsü 2024-09-06 204953](https://github.com/user-attachments/assets/9fcd1433-ffbc-40c5-b433-67e5d7408847)

![Ekran görüntüsü 2024-09-06 205017](https://github.com/user-attachments/assets/16b4f4af-6a0a-487b-bae8-4d4628430117)

![Ekran görüntüsü 2024-09-06 205031](https://github.com/user-attachments/assets/17c4f61f-047e-4e00-8f13-2fbb34c48150)

![Ekran görüntüsü 2024-09-06 205201](https://github.com/user-attachments/assets/b8ed78d3-e57f-41b4-940d-81506e79f287)

![Ekran görüntüsü 2024-09-06 205222](https://github.com/user-attachments/assets/814d30fb-3cc3-421b-b42b-4b2a06799fb0)

![Ekran görüntüsü 2024-09-06 205236](https://github.com/user-attachments/assets/17ba181c-3aa5-4eb5-bfb6-ebd7e54f2567)

![Ekran görüntüsü 2024-09-06 205252](https://github.com/user-attachments/assets/78ae6c13-5706-412d-96d7-46058adb82c2)

![Ekran görüntüsü 2024-09-06 205850](https://github.com/user-attachments/assets/6d66547e-2e98-4ad0-b16e-69ddcb300859)

![Ekran görüntüsü 2024-09-06 205904](https://github.com/user-attachments/assets/01cbde84-fea2-4755-bbe4-0574c3312b81)

![Ekran görüntüsü 2024-09-06 205917](https://github.com/user-attachments/assets/c7b4d327-6c24-476f-8378-23b71e326671)

![Ekran görüntüsü 2024-09-06 205943](https://github.com/user-attachments/assets/3e4f23d2-a890-4c2e-b1d0-2c0e68dbaf94)

![Ekran görüntüsü 2024-09-06 210846](https://github.com/user-attachments/assets/87c46918-3578-442e-9d81-967894c65be6)

![Ekran görüntüsü 2024-09-06 210859](https://github.com/user-attachments/assets/36b4b1f3-ebe8-436d-b3ed-038bfc86bad4)

![Ekran görüntüsü 2024-09-06 210907](https://github.com/user-attachments/assets/a4cec304-d480-42d6-9213-b9465d8db585)

![Ekran görüntüsü 2024-09-06 210916](https://github.com/user-attachments/assets/3af6c25c-a959-4895-bd3e-c4a749911eab)

![Ekran görüntüsü 2024-09-06 210935](https://github.com/user-attachments/assets/6c10ab04-3778-4cd8-8607-2059a309a101)

![Ekran görüntüsü 2024-09-06 210956](https://github.com/user-attachments/assets/28304b3a-9fd8-46e3-90eb-8962c7bc7e61)

![Ekran görüntüsü 2024-09-06 211009](https://github.com/user-attachments/assets/f3f1d363-f9ee-4147-9dd3-458053872264)

![Ekran görüntüsü 2024-09-06 211029](https://github.com/user-attachments/assets/fff75e24-cde9-499f-83f0-af4fbb4e8a1c)

![Ekran görüntüsü 2024-09-06 211042](https://github.com/user-attachments/assets/c23eb125-c32a-4230-85ec-a0eac17eea60)

![Ekran görüntüsü 2024-09-06 211111](https://github.com/user-attachments/assets/75a844b1-4293-462d-8d19-982d1d6c790a)

![Ekran görüntüsü 2024-09-06 211621](https://github.com/user-attachments/assets/d6f874f1-5c79-43a8-b400-b144f29f124b)

![Ekran görüntüsü 2024-09-17 142428](https://github.com/user-attachments/assets/6d3c3042-82e1-465e-b8b4-d86a7663df00)






















