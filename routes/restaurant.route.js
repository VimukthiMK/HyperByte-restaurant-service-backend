import express from "express"
import { createRestaurant,
    getRestaurantById,
    updateRestaurantById,
    deleteRestaurantById,
    getAllRestaurants } from '../controllers/restaurant.controller.js'

const router = express.Router()

router.post('/', createRestaurant)
router.get('/:id', getRestaurantById)
router.put('/:id', updateRestaurantById)
router.delete('/:id', deleteRestaurantById)
router.get('/', getAllRestaurants)

export default router
