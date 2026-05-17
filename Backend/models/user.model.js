import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    Name: {
        Type: String,
        required: true
    },
    email: {
        Type: String,
        required: true
    },
    password: {
        Type: String,
        required: true
    }
})