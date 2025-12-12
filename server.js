import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

app.post('/usuarios', async (req, res) => {
    
    await prisma.user.create({
    data: {
        id: req.body.id,
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
    }
})
    res.status(200).json(req.body)
})

app.get('/usuarios', async (req, res) => {
    
    console.log(req)

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({ message: 'Usuário deletado com sucesso!' })
})

app.listen(3000)



/* usuario mongo db: antony / senha do mongo db:CZyspE1FHCeRqKGK */