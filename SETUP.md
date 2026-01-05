# Setup Guide for Course Selling Platform

## Quick Start

Follow these steps to get the application running:

### 1. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (free tier is fine)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database user password
7. Replace `<dbname>` with `course-platform`

Your connection string should look like:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/course-platform?retryWrites=true&w=majority
```

### 2. Create Environment Files

**Server (.env)**
Create `server/.env` file:
```env
MONGODB_URI=your_mongodb_atlas_connection_string_here
PORT=5000
NODE_ENV=development
```

**Client (.env)**
Already created at `client/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Install Dependencies

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..

# Install server dependencies
cd server
npm install
cd ..
```

### 4. Seed the Database

```bash
cd server
npm run seed
```

You should see: "12 courses added successfully"

### 5. Run the Application

**Option A: Run both servers separately**

Terminal 1 (Backend):
```bash
cd server
npm run dev
```

Terminal 2 (Frontend):
```bash
cd client
npm run dev
```

**Option B: Run both servers concurrently (from root)**
```bash
npm run dev
```

### 6. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api/health

## Testing the Application

### Manual Testing Checklist

1. **Home Page**
   - [ ] Courses load and display correctly
   - [ ] Search functionality works
   - [ ] Price filter works
   - [ ] Category filter works
   - [ ] Animations are smooth

2. **Cart Functionality**
   - [ ] Add course to cart
   - [ ] Cart drawer opens
   - [ ] Cart count updates
   - [ ] Remove course from cart
   - [ ] Cart persists on page refresh

3. **Checkout Flow**
   - [ ] Navigate to checkout
   - [ ] Order summary displays correctly
   - [ ] Payment instructions are visible
   - [ ] Navigate to payment verification

4. **Payment Verification**
   - [ ] Form validation works
   - [ ] File upload works
   - [ ] File preview displays
   - [ ] Form submits successfully
   - [ ] Redirects to confirmation page

5. **Confirmation Page**
   - [ ] Success message displays
   - [ ] Order details are correct
   - [ ] Navigation works

## Troubleshooting

### MongoDB Connection Issues
- Ensure your IP address is whitelisted in MongoDB Atlas
- Check that the connection string is correct
- Verify database user credentials

### Port Already in Use
- Change PORT in server/.env to a different number (e.g., 5001)
- Update VITE_API_URL in client/.env accordingly

### CORS Errors
- Ensure backend is running on port 5000
- Check that VITE_API_URL in client/.env matches backend URL

### File Upload Errors
- Ensure `uploads/` directory exists in server folder
- Check file size (max 5MB)
- Verify file is an image format

## Admin Panel Testing

Use tools like Postman or Thunder Client to test admin endpoints:

**Get All Verifications:**
```
GET http://localhost:5000/api/admin/verifications
```

**Approve Payment:**
```
PUT http://localhost:5000/api/admin/verifications/{id}/approve
```

**Reject Payment:**
```
PUT http://localhost:5000/api/admin/verifications/{id}/reject
```

## Next Steps

After successful testing:
1. Add your MongoDB Atlas connection string
2. Customize course data in `server/utils/seedDatabase.js`
3. Configure email service in `server/services/emailService.js`
4. Add authentication for admin routes
5. Deploy to production

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Check the server terminal for error logs
3. Verify all environment variables are set correctly
4. Ensure MongoDB Atlas connection is working
