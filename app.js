import mongoose from 'mongoose';
import express from 'express';
import restaurantRoutes from './routes/restaurantRoutes.js'; // Ensure the correct path with .js extension

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://erikneon:Erikneon4710@restaurantdata.q1g9y.mongodb.net/?retryWrites=true&w=majority&appName=RestaurantData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.log('Failed to connect to MongoDB', err));

// Use the restaurant routes
app.use('/api/restaurants', restaurantRoutes);

// Start the Express server

//const port = process.env.PORT || 8080;
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));


