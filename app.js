const express = require('express')

const {PORT} = require('./config/index')



const app = express();

app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`)
})
