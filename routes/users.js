var express = require('express');
var router = express.Router();
var app = express();
const cors = require('cors')

/* GET users listing. */

order = {
  meat:0,
  cheese:0,
  salad:0,
  bacon:0
}

app.use(cors())



router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.send(JSON.stringify(order));
});

module.exports = router;

