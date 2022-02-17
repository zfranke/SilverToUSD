const express = require('express');
const app = express();

const multer = require('multer');
const PORT = 9002;

require('dotenv').config();
const request = require('request');

API_KEY = process.env.API_KEY;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`Metal API Latest - zfranke @: http://localhost:${PORT}`)
)

//Get request that shows all the metal data from metals-api.com and
//sends it to the client
app.get('/', (req, res) => {

    console.log("Entry point hit");

    res.send(`
    <h1>Metal API Latest</h1>
    <p>This is a simple API that returns the latest metal data from metals-api.com</p>
    <p>You can find the API at: http://localhost:${PORT}/api/latest</p>
    `);
    
})

//Create a app.get for the latest api from metals-api.com
app.get('/api/latest', (req, res) => {
    
        console.log("Latest API hit");
    
        request('https://metals-api.com/api/latest?access_key='+API_KEY, (error, response, body) => {
    
            if(error) {
                console.log(error);
            }
    
            res.send(body);
        })
    }
)


