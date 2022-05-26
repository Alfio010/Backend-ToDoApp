import express from "express"
import { Todo } from "../models/Todo";


const todoRouter = express.Router()

// curl -H "content-type: Application/json" -XPOST 'http://localhost:8080/todo/create' -d '{ "name": "test", "surname": "test", "email": "test", "password": "test" }'
todoRouter.post('/create', async (req, res) => {

    const body: { name: string; description?: string; done: number; priority: string; date_add: Date; date_done?: Date } = req.body

    if (!body.name) {
        console.log("name not given! " + body.name)
        return res.status(401).json({ error: 'name not given!' })
    }
    if (!body.priority) {
        console.log("priority not given!")
        return res.status(401).json({ error: 'priority not given!' })
    }
    if (!body.date_add) {
        console.log("date_add not given!")
        return res.status(401).json({ error: 'date_add not given!' })
    }


    try {

        const todo = await Todo.create({
            name: body.name,
            description: body.description,
            done: body.done,
            priority: body.priority,
            date_add: body.date_add,
            date_done: body.date_done
        });

        res.json(todo)
    } catch (err) {
        res.status(500).json(err)
    }
})


export default todoRouter