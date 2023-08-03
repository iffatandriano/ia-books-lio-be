import express from 'express';
import { categoryBook, searchBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', searchBook);
router.get('/category', categoryBook);

export default router;