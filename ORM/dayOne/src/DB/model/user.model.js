import { sequelize } from "../connection.db.js";
import { Sequelize, DataTypes } from "sequelize";

export const userModel = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: "u_id",
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
        checkLastName(value){
            if (value=="eslam@gamil.com") {
                throw new Error("pls enter a email expet : eslam@gamil.com")
            }
        }
    }
  },
});
