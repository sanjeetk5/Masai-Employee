const mongoose = require("mongoose")

require('dotenv').config()

const connection = mongoose.connect(process.env.empUrl)

module.exports = {
    connection
}