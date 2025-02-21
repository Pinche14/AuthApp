import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:
    {
        type: String,
        reuqired: [true, "Please provide a username"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Please provide a password"]
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    isVerfied:{
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgetPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User;