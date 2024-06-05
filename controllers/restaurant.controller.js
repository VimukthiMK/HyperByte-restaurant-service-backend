import Restaurant from '../models/restaurant.model.js'

// Create a new restaurant
export const createRestaurant = async (req, res) => {
    const { name, address, telephone } = req.body
    try {
        const restaurant = new Restaurant({ name, address, telephone })
        await restaurant.save()
        res.status(201).json({message:'Restaurant Created successfully!'})
    } catch (error) {
        res.status(500).json({ message: 'Failed to create restaurant'})
    }
}

// Retrieve restaurant details by ID
export const getRestaurantById = async (req, res) => {
    const id = req.params.id
    try {
        const restaurant = await Restaurant.findById(id)
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' })
        }
        res.status(200).json(restaurant)
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve restaurant' })
    }
}

// Update restaurant information by ID
export const updateRestaurantById = async (req, res) => {
    try {
        const { name, address, telephone } = req.body
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, { name, address, telephone }, { new: true })
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' })
        }
        res.status(200).json({message:'Restaurant Updated successfully!'})
    } catch (error) {
        res.status(500).json({ message: 'Failed to update restaurant' })
    }
}

// Delete a restaurant by ID
export const deleteRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id)
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' })
        }
        res.status(200).json({ message: 'Restaurant deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete restaurant' })
    }
}

// List all restaurants
export const getAllRestaurants = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 8
    const skip = (page - 1) * limit
    try {
        const restaurants = await Restaurant.find().skip(skip).limit(limit)
        const total = await Restaurant.countDocuments()
        res.status(200).json({
            total,
            page,
            limit,
            restaurants
          })
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve restaurants' })
    }
}
