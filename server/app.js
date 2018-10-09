var express = require('express');
var app = express();
var companiesCollection = require('./firebase-admin/companies.collection');
var setDataAdmin = false;
if (setDataAdmin) {
    companiesCollection.setCompaniesCollection().then((response) => {
        console.log('setCompanies: ', response)
    });
};

app.get('/', function (req, res) {
    res.send({
        "name": "xxx"
    });
});


app.listen(3001, () => {
    console.log('server: http://localhost:3001');
})
