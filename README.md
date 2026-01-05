# Course Selling Platform

A premium, full-stack course-selling platform built with React, Node.js, Express, and MongoDB.

## Features

- 🎨 Premium UI/UX with glassmorphism and smooth animations
- 🔍 Advanced search and filtering system
- 🛒 Shopping cart with localStorage persistence
- 💳 Manual payment verification flow (UPI/Bank Transfer)
- 📧 Email notifications (placeholder)
- 📱 Fully responsive design
- 🎯 Admin panel for payment verification

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Axios
- Framer Motion
- React Hook Form
- Custom CSS (no frameworks)

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- Multer (file uploads)
- Nodemailer (email - placeholder)
- Express Validator

## Getting Started

### Prerequisites
- Node.js 16+ installed
- MongoDB Atlas account (or local MongoDB)

### Installation

1. **Clone the repository**
```bash
cd e:\Online_Course
```

2. **Install root dependencies**
```bash
npm install
```

3. **Install client dependencies**
```bash
cd client
npm install
cd ..
```

4. **Install server dependencies**
```bash
cd server
npm install
cd ..
```

5. **Configure environment variables**

Create `server/.env` file:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
NODE_ENV=development
```

6. **Seed the database**
```bash
cd server
npm run seed
cd ..
```

7. **Run the application**

In one terminal (backend):
```bash
cd server
npm run dev
```

In another terminal (frontend):
```bash
cd client
npm run dev
```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:5000`

## Project Structure

```
e:\Online_Course\
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React context (CartContext)
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service layer
│   │   └── styles/        # CSS files
│   └── package.json
├── server/                # Node.js backend
│   ├── config/           # Database configuration
│   ├── models/           # Mongoose schemas
│   ├── routes/           # Express routes
│   ├── middleware/       # Custom middleware
│   ├── services/         # Email service
│   ├── utils/            # Utility scripts
│   ├── uploads/          # Uploaded files
│   └── server.js         # Entry point
└── package.json          # Root package.json
```

## API Endpoints

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/search?q=query` - Search courses
- `GET /api/courses/filter?minPrice=0&maxPrice=500&category=development` - Filter courses
- `GET /api/courses/:id` - Get single course

### Payment Verification
- `POST /api/payment-verification/upload` - Upload payment screenshot
- `POST /api/payment-verification` - Submit payment verification
- `GET /api/payment-verification/:id` - Get verification by ID

### Admin
- `GET /api/admin/verifications` - Get all verifications
- `PUT /api/admin/verifications/:id/approve` - Approve payment
- `PUT /api/admin/verifications/:id/reject` - Reject payment

## Features in Detail

### User Flow
1. Browse courses with search and filter
2. Add courses to cart
3. Proceed to checkout
4. View payment instructions (UPI/Bank Transfer)
5. Submit payment verification form with screenshot
6. Receive confirmation
7. Admin verifies payment
8. User receives course access via email

### Admin Flow
1. View pending payment verifications
2. Review payment details and screenshot
3. Approve or reject payment
4. System sends course access email (placeholder)

## Future Enhancements

- User authentication and authorization
- Actual email integration
- Course content delivery system
- Video streaming
- Progress tracking
- Certificates
- Reviews and ratings
- Wishlist functionality

## License

MIT

## Author

Built with ❤️ for EduLux Academy
