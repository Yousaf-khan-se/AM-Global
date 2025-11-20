AM Global Website Clone - Backend

📖 Overview

This is the backend API for the AM Global Website Clone project, developed during my internship at Quiad's Ventures.

It is a lightweight server built with Node.js, Express, and MongoDB. It handles data persistence for the frontend application, managing features such as form submissions and dynamic content retrieval.

🌟 Key Features

RESTful API: Provides endpoints for the React frontend to consume.

Database Integration: Uses MongoDB (via Mongoose) for storing application data.

CORS Enabled: Configured to allow requests from the frontend application.

Environment Config: Uses dotenv for secure configuration management.

🛠️ Tech Stack

Runtime: Node.js

Framework: Express.js

Database: MongoDB

ODM: Mongoose

🚀 Getting Started

Prerequisites

Node.js installed.

MongoDB (Local instance or MongoDB Atlas connection string).

Installation

Clone the repository:

git clone [https://github.com/](https://github.com/)[your-username]/[backend-repo-name].git
cd [backend-repo-name]


Install dependencies:

npm install


Configuration

Create a .env file in the root directory and add the following variables:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/myDatabase


Running the Server

Start the server in development mode (using nodemon if installed) or standard node:

# Standard start
npm start

# OR with Nodemon (for auto-restarts during dev)
npm run dev


The server will start on http://localhost:5000 (or your defined PORT).


📄 License

Distributed under the MIT License.

Developed by [Muhammad Yousaf] | Internship Project @ Quiad's Ventures
