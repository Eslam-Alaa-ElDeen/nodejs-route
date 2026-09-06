import { sequelize } from "../connection.db.js";
import { Sequelize, DataTypes } from "sequelize";

export const userModel = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "u_id",
    autoIncrement:true
  },
  fName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "u_first_name",
  },
  lName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "u_last_name",
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "u_age",
  },
  gender: {
    type: DataTypes.ENUM("male", "female"),
    defaultValue: "male",
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    field: "u_email",
    validate:{
        isEmail:{msg:"the email must be in email format like `plaseHolder@gamil.com`"},
    }
  },
  userName:{
    type:DataTypes.VIRTUAL,
    set(value){
      const[fName,lName]=value.split(" ")||[];
      this.setDataValue("fName",fName)
      this.setDataValue("lName",lName)
    },
    // to return userName on result
    get(){
      return `${this.getDataValue("fName")} ${this.getDataValue("lName")}`
    }
  }
});
