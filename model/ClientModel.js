const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const clientSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true
    },
    branchName: {
        type: String,
        required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: value => {
        if (!validator.isEmail(value)) {
          throw new Error({ error: "Invalid email address" });
        }
      }
    },
    password: {
      type: String,
      required: true,
      minLength: 6
    },
    contact: {
        type: String,
        required: true,
    },
    citizenship: {
        type: String,
        required: true
    },
    clientType:{
        type: String,
        required: true
    }
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
