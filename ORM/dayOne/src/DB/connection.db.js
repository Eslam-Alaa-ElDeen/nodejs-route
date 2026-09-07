import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../config.js";

export const sequelize = new Sequelize(
  DB_NAME || "eslam_",
  DB_USER || "root",
  DB_PASSWORD || "root",
  {
    host: DB_HOST || "localhost",
    port: DB_PORT || 3306,
    dialect: "mysql",
    pool: {
      max: 4,
      min: 0,
    },
  },
);

export const connectionDB = async (app, port) => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: false });
    const [userIdColumns] = await sequelize.query(
      "SHOW COLUMNS FROM `Users` LIKE 'u_id'",
    );
    if (!userIdColumns[0].Extra.includes("auto_increment")) {
      const [foreignKeys] = await sequelize.query(
        "SELECT CONSTRAINT_NAME FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA = DATABASE() AND TABLE_NAME = 'blogs'",
      );
      for (const { CONSTRAINT_NAME: constraintName } of foreignKeys) {
        await sequelize.query(
          `ALTER TABLE \`Blogs\` DROP FOREIGN KEY \`${constraintName}\``,
        );
      }
      await sequelize.query(
        "ALTER TABLE `Users` MODIFY `u_id` INT NOT NULL AUTO_INCREMENT",
      );
      await sequelize.query(
        "ALTER TABLE `Blogs` ADD CONSTRAINT `blogs_author_fk` FOREIGN KEY (`b_author_id`) REFERENCES `Users` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE",
      );
    }
    console.log("connect to db successfully 💯");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("connection to DB failed:", error.message);
    throw error;
  }
};
