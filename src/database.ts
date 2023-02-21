import { Sequelize } from "sequelize-typescript";

const sequlize = new Sequelize("Todo", "admin", "123", {
  dialect: "sqlite",
  storage: __dirname + "/database.sqlite",
});

export default sequlize;
