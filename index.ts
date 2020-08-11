import express from 'express'
import path from 'path'

const app: express.Application = express()
const PORT = process.env.PORT || 8080

app.use(express.static(`${path.resolve('./')}/build/client`))

app.get('/submit', (req, res) => {
    res.send('Reached API')
})
app.get('*', (req, res) => {
    res.sendFile(`${path.resolve('./')}'/build/client/index.html`)
})


app.listen(PORT, () => `server listening at ${PORT}`)