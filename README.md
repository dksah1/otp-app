# OTP Verification Application

A simple yet robust application for handling 6-digit OTP (One-Time Password) verification flows. This application includes both frontend and backend components that work together to provide a seamless verification experience.

![OTP Verification Interface](https://via.placeholder.com/600x300)

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

### Backend

- Express.js
- Node.js
- RESTful API architecture

## Project Structure

```
project/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── ...
│   └── ...
└── backend/
    ├── config/
    │   └── config.js
    ├── controllers/
    │   └── otpController.js
    ├── middleware/
    │   ├── errorHandler.js
    │   └── validator.js
    ├── routes/
    │   └── otpRoutes.js
    ├── services/
    │   └── otpService.js
    ├── utils/
    │   └── responseFormatter.js
    ├── server.js
    └── package.json
```

## Setup Instructions

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
   FRONTEND_URL=http://localhost:3000
   ```

4. Start the server:
   ```bash
   npm start
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
   npm start
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

## Testing

### Running Tests

```bash
cd frontend
npm run test

cd ../backend
npm run test
```

## Deployment

The application is designed to be easily deployable to various hosting environments:

### Backend

- Can be deployed to services like Heroku, AWS, or DigitalOcean
- Make sure to set the appropriate environment variables

### Frontend

- Can be deployed to Netlify, Vercel, or GitHub Pages
- Update the API URL in production builds to point to your deployed backend

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This project was created as a demonstration of a complete full-stack verification flow
- Special thanks to all contributors
