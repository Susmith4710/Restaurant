//Importing npm modules
import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    dish_name: { type: String, required: false }, // Fixed typo in 'required'
    cost: { type: Number, required: false }, // Use 'Number' instead of 'Float32Array'
    image_url: { type: String, required: false },
    quantity_available: { type: Number, required: false },
    ratings: { type: Number, required: false }
});

// Export the model
const Restaurant = mongoose.model("restaurant", restaurantSchema);
export default Restaurant;
