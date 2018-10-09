var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");
var data = require('../companies.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://management-transportation.firebaseio.com"
});

function setCompaniesCollection() {

    return new Promise((resolve, reject) => {
        Object.keys(data).forEach(prop => {
            //prop: Companies
            data[prop].forEach((company, index) => {
                // company: Object item
                admin.firestore().collection(prop).doc().set(company).then(() => { resolve('success'); }).catch(() => { reject('err'); });
            });
        });
    });
};

module.exports = {
    setCompaniesCollection
};