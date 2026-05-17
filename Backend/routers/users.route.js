import express from 'express';
import { ActiveCheck } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', (ActiveCheck));

/* router.route('/')
    .get(ActiveCheck); */

export default router;