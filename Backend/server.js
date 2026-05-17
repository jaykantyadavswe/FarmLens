import express from 'express'
const app = express();
import userRoute from './routers/users.route.js'
import dotenv from 'dotenv';
import mongodb from './config/db.js';

dotenv.config();

app.use(userRoute);

app.listen(8080, () => {
    console.log("Server running on port 8080");
    mongodb();
})