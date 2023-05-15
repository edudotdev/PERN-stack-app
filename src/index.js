const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const taskRotes = require("./routes/tasks.routes")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use(taskRotes)

app.use((err, req, res, next) => {
    res.status(404).json({
        message: err.message
    })
})

app.listen(3000)
console.log('server on port 3000')