// # Instructions

// You will create an API that processes a CSV file (users.csv) and turns it into a JSON file upon visiting the endpoint /convert. Additionally, any phone number that is missing should be filled in with the string, "missing data".

// Use the [csvtojson](https://www.npmjs.com/package/csvtojson) node module as a library to do the conversion.

import express from 'express';
import {promises as fsPromises} from 'fs'
import csv from 'csvtojson'

const app = express();
const port = 3000;

const inputFile = './users.csv'
const outputFile = 'users.json'

// define a route handler for the default home page
app.get('/convert', (req, res) => {
    res.send('convrting in process!');
    csv()
    .fromFile(inputFile)
    .then((data) => {
        let newData = data.map( (item: {first_name: string; last_name: string; phone: string;}) => {
            let first = item.first_name;
            let last = item.last_name;
            let phone = item.phone;
            if (item.phone === "") {
                phone = "missing data";
            }
            return {first, last, phone};
        })
        fsPromises.writeFile(outputFile, JSON.stringify(newData));
    })
})

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});