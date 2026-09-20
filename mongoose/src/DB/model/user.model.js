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
        if (value === "admin") {
          return false;
        }

        return true;
      },

      message: function(prop) {
        return `admin is not a valid first name`;
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
  collection:"user_model",
  toJSON:{virtuals:true},
  toObject:{virtuals:true},
  optimisticConcurrency:true
}
);
// setter and getter
userSchema.virtual("userName").set(function(v){  //v holds the value of username
  const[firstName,lastName]=v.split(" ");  // make split on the user name to set the value of the FN and LN 
  this.set({firstName,lastName}) // set the value here this holds the userModel
}).get(function(){
  return `${this.firstName} ${this.lastName}`  // this value will be on userName 
})





// const userSchema = new mongoose.Schema({    //make a message for validate the type string
//   name: {
//     type: String,
//     message: 'Name must be a string'
//   }
// });

    // or use the validate method

    // validate: {
    //   validator: function (value) {
    //     return typeof value === 'string'; // on false value goes to messge
    //   },
    //   message: 'Name must be a string'
    // }

export const userModel = mongoose.model("user", userSchema);
