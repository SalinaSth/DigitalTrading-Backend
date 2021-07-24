const jwt = require('jsonwebtoken');

const Client = require('../model/ClientModel');

module.exports.checkClient = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const verifiedData = jwt.verify(token, 'Secretkey');
        Client.findOne({ _id: verifiedData.clientID })
            .then(function (userInfo) {
                req.clientData = userInfo;
                next();
            })
            .catch(function (e) {
                res.status(401).json({ message: "Authorization failed" })
            });
    }
    catch (e) {
        res.status(401).json({ message: "Authorization failed!!" })
    }
}
