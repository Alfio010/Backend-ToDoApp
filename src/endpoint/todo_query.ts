import express from "express"
import { Todo } from "../models/Todo";


const todoRouter = express.Router()

// curl -H "content-type: Application/json" -XPOST 'http://localhost:8080/auth/register' -d '{ "name": "test", "surname": "test", "email": "test", "password": "test" }'
todoRouter.post('/register', async (req, res) => {

    const body: { name: string; surname: string; email: string; password: string } = req.body

    if (!body.name) {
        return res.status(401).json({ error: 'Name not given!' })
    }
    if (!body.surname) {
        return res.status(401).json({ error: 'Surname not given!' })
    }
    if (!body.email) {
        return res.status(401).json({ error: 'Email not given!' })
    }
    if (!body.password) {
        return res.status(401).json({ error: 'Password not given!' })
    }


    try {

        res.json()
    } catch (err) {
        res.status(500).json(err)
    }
})


export default todoRouter