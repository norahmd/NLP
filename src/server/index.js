const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');

const app = express()

app.use(express.static('dist'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/get-analysis', function (req, res) {

    getAnalysisFromApi(req.body.formText)
    .then(function(response){
        res.send(response)
    })
})

const getAnalysisFromApi = async (txt)=>{

    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&txt=${txt}&model=general&lang=en`)
    try{
        const analysis = await response.json();
        console.log(analysis)
        return analysis
    }catch(error){
        console.log('error', error);
    }
}

  console.log(`Your API key is ${process.env.API_KEY}`);