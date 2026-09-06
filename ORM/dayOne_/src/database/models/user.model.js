import { sequelize } from '../connectDB.js'
import { Sequelize,DataTypes } from 'sequelize';

export const userModel=sequelize.define("User",{
    fName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lName:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    phoneNum:{
        type:DataTypes.STRING
    }
}
)