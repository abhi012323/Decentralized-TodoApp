# Decentralized TodoApp

## Overview
This project is a decentralized task management system built using React.js for the frontend, Node.js and Express.js for the backend, and Solidity for the blockchain smart contracts. The application allows users to create, view, and manage tasks with priorities and completion status.

## Table of Contents
- [Overview](#overview)
- [Current Issues](#current-issues)
- [Application Features](#application-features)
- [Installation](#installation)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Contributions](#contributions)
- [License](#license)

## Current Issues
We are currently experiencing issues with verifying the smart contracts for the blockchain component. The deployment process fails with an "invalid opcode" error. We are actively working on resolving this issue and will update the contract address once fixed.

## Application Features
### Frontend
The frontend is built using React.js and styled-components for styling. Key features include:
- **Task Creation**: Users can add new tasks with titles, urgency, and importance.
- **Task List**: Displays all tasks with options to mark them as completed, edit, or delete them.
- **Task Analytics**: Shows analytics about the tasks, such as the number of tasks and their statuses.

### Backend
The backend is built using Node.js and Express.js. It serves as an API to interact with the frontend and stores user data.

### Blockchain
The blockchain component includes smart contracts written in Solidity to handle task creation, storage, and verification. However, this functionality is currently facing deployment issues.

## Installation
### Prerequisites
- Node.js and npm installed on your machine
- Git installed on your machine

### Clone the Repository
```bash
git clone https://github.com/abhi012323/Decentralized-TodoApp.git
cd Decentralized-TodoApp


Install Dependencies
Frontend

Navigate to the frontend directory and install dependencies:
bash

cd frontend
npm install

Backend

Navigate to the backend directory and install dependencies:
bash

cd ../backend
npm install

Blockchain

Navigate to the blockchain directory and install dependencies:
bash

cd ../task-blockchain
npm install

Usage
Running the Frontend

Navigate to the frontend directory and start the development server:
bash

cd frontend
npm start

The frontend will be running on http://localhost:3000.
Running the Backend

Navigate to the backend directory and start the server:
bash

cd ../backend
npm start

The backend will be running on http://localhost:5000.
Running the Blockchain Component

The blockchain component currently has issues with contract verification. Once resolved, you can compile and deploy the contracts as follows:
bash

cd ../task-blockchain
truffle compile
truffle migrate --network development

Future Improvements

    Fix the smart contract deployment issue.
    Enhance the AI model for better task recommendations.
    Improve the frontend UI/UX.
    Implement additional features such as task editing and deletion on the blockchain.

Contributions

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
