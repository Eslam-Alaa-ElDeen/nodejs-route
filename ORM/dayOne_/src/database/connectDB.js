import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("eslam_", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export const syncFun = async () => {
  try {
    await sequelize.sync(); 
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
