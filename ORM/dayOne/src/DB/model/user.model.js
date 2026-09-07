import { sequelize } from "../connection.db.js";
import { DataTypes } from "sequelize";

export const userModel = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: "u_id",
      autoIncrement: true,
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
      validate: {
        isEmail: { msg: "email must be a valid email address" },
      },
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userName: {
      type: DataTypes.VIRTUAL,
      set(value) {
        const [fName, ...lastNameParts] = String(value).trim().split(/\s+/);
        this.setDataValue("fName", fName);
        this.setDataValue("lName", lastNameParts.join(" "));
      },
      get() {
        return `${this.getDataValue("fName")} ${this.getDataValue("lName")}`.trim();
      },
    },
  },
  {
    paranoid: true,
    defaultScope: {
      attributes: { exclude: ["passwordHash"] },
    },
  },
);
