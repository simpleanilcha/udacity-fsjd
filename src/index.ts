// # Instructions

// The Express server is already complete. Create 3 endpoints. Then write middleware that logs the endpoint to the console when visited. Only include the middleware on 2 of the 3 endpoints. Build your TypeScript project and confirm that your logger works on the build.

// Example: "/countries was visited"

import express from 'express'
import logger from './utilities/logger'

const app = express()
const port = 3000

// routes
app.get('/continents', logger, (req, res) => {
    res.send('continents!')
})

app.get('/countries', logger, (req, res) => {
    res.send('countries!')
})

app.get('/oceans', (req, res) => {
    res.send('oceans!')
})

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})