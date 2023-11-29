import { IUser } from "../models/user.interface";
import { model, Schema } from "mongoose";

const userSchema = new Schema<IUser>({
    name:{type:String, required:true},
    bio:{type:String, required:true},
    email:{type:String, required:true},
    location:{type:String, required:true},
    followers:{type:Number, required:true},

});

export const User =model<IUser>("User", userSchema);
