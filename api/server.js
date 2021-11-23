const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
require ("dotenv").config()



const server = express()


server.use(express.json())
server.use(helmet())
server.use(cors())



server.get("/", (req, res) => {
  res.json({kolinSays: "The future is nigh, Server is up and running"})
})

module.exports = server;