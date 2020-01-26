const csv = require('csv-parser');
const fs = require('fs');
var path = require('path');const bodyParser = require('body-parser');
var express=require('express')
var app=express();
app.use(bodyParser.urlencoded({ extended: true })); 
var pathofjson = path.join(__dirname,'myjsondata')
var mydata = [];


app.get('/https://csvtojsonconverter.herokuapp.com/ ',function(req,res){

  res.sendFile(__dirname+'/pageview.html')
})
app.post('https://csvtojsonconverter.herokuapp.com/csvtojson',function(req,res){

  
        fs.createReadStream(req.body.filename)
        .pipe(csv())
        .on('data', (row) => {
          mydata.push(row)
          

        })
        .on('end', () => {
          res.json(mydata);
          
        });
     
})
 
 
app.listen(8080);
