import express from 'express';
import { uploadImage } from '../controllers/crop.controller.js';
import { upload } from '../middleware/upload.middleware.js';
import { protect } from '../middleware/auth.middleware.js';
import { analyzeCrop } from '../controllers/ai.controller.js';

const router = express.Router();

router.get('/test', (req, res) => {
    console.log("TEST HIT");
    res.send("Working");
})

// router.route('/crop/upload')
//   .post(protect, upload.single('media'), uploadImage);

router.post(
  "/crop/analyze",
  protect,
  upload.single("media"),
  analyzeCrop
);
export default router;
