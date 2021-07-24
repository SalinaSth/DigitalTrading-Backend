const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Client = require("./model/ClientModel");

const port = process.env.SERVER_PORT || 90;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./database/db');
// Routes
const driver_route = require('./route/ClientRoute');

app.use(express.static("images"));
app.use(driver_route);
// Server
app.listen(port, () => {
  console.log(`Digital Trading running on port ${port}`);
});
