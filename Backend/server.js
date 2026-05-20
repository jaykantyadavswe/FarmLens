import express from 'express'
import userRoute from './routers/users.route.js'
import dotenv from 'dotenv';
import mongodb from './config/db.js';
dotenv.config();

const app = express();

app.use(express.json());

app.use(userRoute);

mongodb();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})