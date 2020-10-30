import express, { Request, Response } from 'express'
import path from 'path'
import { PrismaClient } from '@prisma/client'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import { config } from './config'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

const myEnv = dotenv.config({ path: './prisma/.env' })
dotenvExpand(myEnv)

const prisma = new PrismaClient()

const app: express.Application = express()
const PORT = process.env.PORT || 8080


app.use(express.static(`${path.resolve("./")}/client/build`))
app.use(bodyParser.json())
app.use(helmet())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", `${process.env.HOST}`); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/exit', async (req: Request, res: Response) => {
    try {
        const data = await req.body
        const exitCase = await prisma.exitCandidates.create({
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
        res.json({
            status: 200,
            message: 'Success',
            body: mode
        })

    } catch (error) {
        throw (error)
    }
})

app.get('*', (req, res) => {
    res.sendFile(`${path.resolve('./')}/client/build/index.html`)
})


app.listen(PORT, () => `server listening at ${PORT}`)