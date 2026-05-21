import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            })
        }

        const result = await cloudinary.uploader.upload(file.path);

        res.status(200).json({
            success: true,
            imageUrl: result.secure_url
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}