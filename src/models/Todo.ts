import { DataTypes, Model } from "sequelize";
import sequlize from "../database";

type Todo = Model<
  {
    todoId: number;
    name: string;
    description?: string;
    done: number;
    priority: string;
    date_add: Date;
    date_done?: Date | null;
  },
  {
    todoId: number;
    name: string;
    description?: string;
    done: number;
    priority: string;
    date_add: Date;
    date_done?: Date | null;
  }
>;

export const Todo = sequlize.define<Todo>("Todo", {
  todoId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.INTEGER,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  date_add: {
    type: DataTypes.DATE,
  },
  date_done: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});
