const express = require('express');
const router = express.Router();
const Client = require('../model/ClientModel');
const upload = require('../middleware/upload');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const auth = require('../middleware/auth');

//register for client
router.post('/client/register', upload.fields([{ name: 'citizenship', maxCount: 1 }]), function (req, res) {
    if (req.files == undefined) {
        return res.status(400).json({ message: "Invalid field format" });
    }

    const fullname = req.body.fullname;
    const branchName = req.body.branchName;
    const email = req.body.email;
    const password = req.body.password;
    const contact = req.body.contact;
    const citizenship = req.body.citizenship;
    const clientType = req.body.clientType;

    console.log(req.body)

    bcryptjs.hash(password, 10, function (err, hash) {
        const clientData = new Client({
            fullname: fullname, branchName:branchName, email: email, password: hash, contact: contact, 
            citizenship: req.files.citizenship[0].filename, clientType: clientType
        });
        clientData.save().then(function (result) {
            res.status(201).json({ success: true, message: "Client has been successfully registered!!" });
        }).catch(function (e) {
            res.status(500).json({ success: false, message: e });
        });
    });
});

module.exports = router;