const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const express = require("express");
const cors = require("cors");

const port = process.env.SERVER_PORT || 90;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes

// Server
app.listen(port, () => {
  console.log(`Express Analyzer server running on port ${port}`);
});
