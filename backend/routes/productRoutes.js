import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'

import { getProducts,
   getProductById,
    createProductClaimer }
     from '../controllers/productController.js'


router.route('/').get(getProducts) 
router.route('/:id').get(getProductById)
router.route('/:id/claimers').post(protect, createProductClaimer)


export default router