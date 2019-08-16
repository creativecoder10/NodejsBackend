var express = require('express');
var router = express.Router();
var app = express();
const cors = require('cors')

app.use(cors())

order = {
  meat:0,
  cheese:0,
  salad:0,
  bacon:0
}


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'welcome to the backend of burger menu' });

  var sql = require("mssql");

  // config for your database
  var config = {
      user: 'sa',
      password: 'password',
      server: 'localhost', 
      database: 'BurgerProject' 
  };
  
  
  
  sql.connect(config, function (err) {
      
    if (err) console.log(err);
  
    // create Request object
    var request = new sql.Request();
       
    // query to the database and get the records
    request.query('select * from Agents', function (err, recordset) {
        
        if (err) console.log(err)

        // res.send(JSON.stringify(recordset));
  
        console.log(recordset);
        res.send(JSON.stringify(order));
  
        // send records as a response

          // res.render('index', { title: recordset });
        // res.send(recordset);
        
    });
  });

  


next();
  
});

// Configure database


// app.use(function(req,res,next){

// })


module.exports = router;
