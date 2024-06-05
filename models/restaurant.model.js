import mongoose from'mongoose'

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    address: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200
    },
    telephone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15
    }
}, 
{
    timestamps: true // To add `createdAt` and `updatedAt`
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export default Restaurant
