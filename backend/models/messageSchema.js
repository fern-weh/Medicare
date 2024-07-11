import mongoose from "mongoose";
import validator from "validator";

const messageSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength: [3,"First Name Must Contain At Least 3 Characters"]
    },
    lastName:{
        type:String,
        required: true,
        minLength: [3,"Last Name Must Contain At Least 3 Characters"]
    },
    email:{
        type:String,
        required: true,
        validate: [validator.isEmail,"Please provide a valid E-mail"]
    },
    phone:{
        type:String,
        required: true,
        minLength: [12,"Phone Number Must Contain Exact 12 Digits"],
        maxLength: [12,"Phone Number Must Contain Exact 12 Digits"]
    },
    message:{
        type:String,
        required: true,
        minLength: [10,"Message Must Contain At Least 10 characters"],
        
    },
});

export const Message = mongoose.model("Message",messageSchema);