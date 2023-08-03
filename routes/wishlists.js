import express from 'express';
import { createWishlist, deleteWishlist, getWishlist } from '../controllers/wishlistController.js';

const router = express.Router();

router.get('/', getWishlist);
router.post('/', createWishlist);
router.delete('/:id', deleteWishlist);

export default router