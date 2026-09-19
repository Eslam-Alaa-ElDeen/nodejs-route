import mongoose from "mongoose";
import { GenderEnum } from "../../common/enum/user.enum.js";

const userSchema = new mongoose.Schema(
 {
  firstName:{
    type:String,
    required:true,
    minLength:2,
    maxLength:44,
    validate: {
      validator: function(value) {
        if (value === "lana del ray") {
          return false;
        }

        return true;
      },

      message: function(prop) {
        return `lana del ray is not a valid first name`;
      }
    }
  },
    lastName:{
    type:String,
    required:true,
    minLength:2,
    maxLength:44
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
  gender:{
    type:Number,
    enum:Object.values(GenderEnum),
    default:GenderEnum.Male
  },
  DOB:{
    type:Date,
    requird:true
  }
 },{
  timestamps:true,
  strict:true,
  collection:"user_model"
 }
);

export const userModel = mongoose.model("user", userSchema);
