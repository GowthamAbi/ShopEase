import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    
        name:{
            type:String,
            require:true,
            trim:true
        },
        mail:{
            type:String,
            require:true,
            unique:true,
            trim:true
        },
        phone:{
            type:String,
            require:true,
            trim:true
        },
        password:{
            type:String,
            require:true,
            trim:true
        }
    }
)

const User=mongoose.model('user',userSchema)

export default User