import express from 'express';
import { product } from '../controller/ProductController.js';

const router = express.Router();

router.get('/product', product);

export default router