import express from 'express'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    await prisma.participants.create({
        data: {
            survey_mode: 'GAMIFIED',
            result: {
                "q1": "Healthy",
            },
            badges: 8,
        }
    })

    const allParticipants = await prisma.participants.findMany()
    console.log(allParticipants)

}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })




// const app: express.Application = express()
// const PORT = process.env.PORT || 8080

// app.use(express.static(`${path.resolve('./')}/client/build`))

// app.get('/submit', (req, res) => {
//     res.send('Reached API')
// })
// app.get('*', (req, res) => {
//     res.sendFile(`${path.resolve('./')}'/client/build/index.html`)
// })


// app.listen(PORT, () => `server listening at ${PORT}`)