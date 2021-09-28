const Client = require('../model/ClientModel');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/dt_test';
beforeAll(async () => {
    await mongoose.connect(url, {
    useNewUrlParser: true
    });
});
afterAll(async () => {
    await mongoose.connection.close();
});
describe('Client Schema test anything', () => {
// the code below is for client register testing
    it('Add client testing anything', () => {
    const client = {
        fullname: "Michael Scott",
        branchName: "Scranton",
        email: "mike@gmail.com",
        password: "mike123",
        contact: "98273667155",
        citizenship: "citizenship.jpg",
        kyc: "kyc.jpg",
        clientType: "Coorporate"
 };

 return Client.create(client)
    .then((clientInfo) => {
    expect(clientInfo.branchName).toEqual('Scranton');
    });
 });
})