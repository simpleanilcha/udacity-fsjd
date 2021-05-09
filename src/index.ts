import express from 'express'
import routes from './routes/index'

const app = express()
const port = 3000

app.use('/api', routes)

// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Connected!')
})

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})