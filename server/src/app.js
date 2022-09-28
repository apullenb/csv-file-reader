const express = require("express");
const fs = require('fs');
const { parse } = require('csv-parse');
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const { NODE_ENV } = require('../config')
const app = express();

const morganOption = (NODE_ENV === "production") ? "tiny" : "common";

const parser = parse({columns: true}, function (err, records) {
  console.log(records)
})

fs.createReadStream(__dirname+'/directory.csv').pipe(parser);

app.use(morgan(morganOption));
app.use(helmet());
app.get('/', (req, res) => {
    res.send('Hello, world!')
})
app.use(function errorHandler(error, req, res, next) {
      let response
       if (NODE_ENV === 'production') {
         response = { error: { message: 'server error' } }
       } else {
         console.error(error)
         response = { message: error.message, error }
       }
       res.status(500).json(response)
     })
app.use(cors());



module.exports = app;
