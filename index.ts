import express, { Request, Response } from 'express'
import path from 'path'
import { PrismaClient } from '@prisma/client'
import bodyParser from 'body-parser'

const prisma = new PrismaClient()

const app: express.Application = express()
const PORT = process.env.PORT || 8080

app.use(express.static(`${path.resolve('./')}/client/build`))
app.use(bodyParser.json())

app.post('/exit', async (req: Request, res: Response) => {
    try {
        const data = await req.body
        const exitCase = await prisma.exitCandidates.create({
            data: data
        })
        res.send({
            status: 200,
            message: 'Success'
        })
    } catch (e) {

    }
})

app.post('/submit', async (req: Request, res: Response) => {
    try {
        const data = await req.body
        const participantInfo = await prisma.participants.create({
            data: data
        })
        res.send({
            status: 200,
            message: 'Success'
        })
    } catch (error) {
        throw error
    }
})

app.post('/mode', async (req: Request, res: Response) => {
    try {
        const data = await req.body
        const mode = await prisma.mode.create({
            data: data
        })
        res.send({
            status: 200,
            message: 'Success'
        })

    } catch (error) {
        throw error
    }
})

app.get('/mode', async (req, res) => {
    try {
        const mode = await prisma.mode.findMany()
        res.send(mode)

    } catch (error) {
        throw (error)
    }
})

app.get('*', (req, res) => {
    res.sendFile(`${path.resolve('./')}'/client/build/index.html`)
})


app.listen(PORT, () => `server listening at ${PORT}`)