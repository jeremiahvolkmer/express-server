
'use strict'

let mod = require('./mod.js');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(require("body-parser").urlencoded({extended: true}));

let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

//send static file as a responce 
app.get('/', (req, res) => 
{
    res.type('text/html');
    res.sendFile(__dirname + '/public/home.html');
});


// send content of 'home' view
app.get('/get', (req,res) => {
    let result = mod.get(req.query.brand);
    res.render('details', {brand: req.query.brand, result: result });
   });

app.get('/delete', (req, res) => 
{
    var test = mod.getAll();
    var deleted = mod.delete(req.query.brand);
    res.render("delete", {brand: req.query.brand, result: deleted, total: test.length});
    
})

//send plain text as a responce 
app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Page')
})

// handle POST
app.post('/get',(req,res) =>{
    var found = mod.get(req.body.brand);
    res.render("details", {brand: req.body.brand, result: found});
});

// define 404 handler
app.use( (req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
   });

app.listen(app.get('port'), () => {
    console.log('Express started'); 
   });