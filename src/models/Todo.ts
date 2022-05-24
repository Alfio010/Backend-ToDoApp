import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'
import sequlize from '../database';
import sequelizeConnection from '../database'

type Todo = Model<{
    ID_Todo: number
    name: string
    description?: string
    done: number
    priority: string
    date_add: Date
    date_done?: Date
}, {
    name: string
    description?: string
    done: number
    priority: string
    date_add: Date
    date_done?: Date
}>

export const Todo = sequlize.define<Todo>("Todo", {
    ID_Todo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.INTEGER
    },
    priority: {
        type: DataTypes.INTEGER
    },
    date_add: {
        type: DataTypes.DATE
    },
    date_done: {
        type: DataTypes.DATE,
        allowNull: true
    },
});