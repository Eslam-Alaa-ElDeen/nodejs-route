import { sequelize } from "../connection.db.js";
import { DataTypes } from "sequelize";
import { userModel } from "./user.model.js";

export const blogModel = sequelize.define(
  "Blog",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contant: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  },
);

blogModel.belongsTo(userModel, {
  as: "author",
  foreignKey: {
    name: "b_author_id",
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

userModel.hasMany(blogModel, {
  as: "blogs",
  foreignKey: "b_author_id",
});
