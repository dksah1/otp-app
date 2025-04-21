# OTP APP

This application includes both frontend and backend components that work together to provide a seamless verification experience.

## Features

- Secure 6-digit OTP verification system
- User-friendly input interface with auto-focus behavior
- Support for manual entry and paste functionality
- Client-side validation for improved user experience
- Server-side validation and verification logic
- Clear error handling and success redirection

## Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios for API requests
- React-router-dom

### Backend

- Express.js
- Node.js
- RESTful API architecture

## Setup Instructions

Clone the repository to your local machine:
bash

# Clone the repository

git clone https://github.com/dksah1/otp-app.git

# Navigate to the project directory

cd otp-app

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the backend directory with the following content:

   ```
   PORT=8000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

The server will run on http://localhost:8000

### Frontend Setup

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend application will run on http://localhost:5173

## API Endpoints

### Verify OTP

- **URL**: `/api/otp/verify`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "otp": "123456"
  }
  ```
- **Success Response**:
  ```json
  {
    "success": true,
    "data": {
      "verified": true,
      "message": "OTP verified successfully"
    }
  }
  ```
- **Error Response**:
  ```json
  {
    "success": false,
    "error": "Invalid OTP number"
  }
  ```

## Validation Rules

### Client-side Validation

- All 6 digits must be filled
- Only numeric input is allowed
- Empty inputs are highlighted in red

### Server-side Validation

- OTP must be present in the request
- OTP must be exactly 6 digits
- OTP must contain only numeric characters
- OTP's last digit cannot be 7 (example server rule)
