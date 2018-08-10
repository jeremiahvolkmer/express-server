
'use strict'
let surfboard = require('./lib/surf_fun.js')
let bodyParser = require("body-parser");
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use('/api', require('cors')());
let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");


//send static file as a responce 
app.get('/', (req, res) => 
{
    surfboard.getAll().then((items) => {
        console.log(items);
        res.render('home_react', {boards: JSON.stringify(items) }); 
      }).catch((err) =>{
        return next(err);
      });
   
});

// send content of 'home' view
 app.get('/get', (req,res) => {
     surfboard.get(req.query.brand).then((board) =>
     {
        res.render('details', {brand: req.query.brand, result: board });
     }).catch((err) =>{
        return next(err);
      });
    
    });
    
    app.get('/add', (req,res) => {
      surfboard.get(req.query.brand).then((board) =>
      {
         res.render('add');
      }).catch((err) =>{
         return next(err);
       });
     
     });

 app.get('/delete', (req, res) => {
    surfboard.delete(req.query.brand).then((board) =>
    {
        res.render("delete", {brand: req.query.brand, result: board});
    }).catch((err) =>{
       return next(err);
     });
   
   });

//send plain text as a responce 
app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Page')
})

app.post('/get', (req,res) => {
    surfboard.get(req.body.brand).then((board) =>
    {
       res.render('details', {brand: req.body.brand, result: board });
    }).catch((err) =>{
       return next(err);
     });
   
});

   //Return json get all 
   app.get('/api/boards', (req, res) => 
   {
         surfboard.getAll().then((items) => {
           //console.log(items);
           res.json(items); 
         }).catch((err) =>{
          res.status(400).send("unable to getall");
         });
      
   });


   //Return json get one 
   app.get('/api/get', (req,res) => {
    surfboard.get(req.query.brand).then((board) =>
    {
       res.json(board)
    }).catch((err) =>{
      res.status(400).send("unable to get");
     });
   
   });

   //Return json delete
   app.get('/api/delete', (req, res) => {
    surfboard.delete(req.query.brand).then((result) =>
    {
      res.json(result);
    }).catch((err) =>{
      res.status(400).send("unable to delete");
     });
   
   }); 

   app.post("/api/add", (req, res) => {
    surfboard.save(req.body).then(item => {
        res.send("item saved to database");
        
      })
      .catch((err) => {
        res.status(400).send("unable to save to database");
      });
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