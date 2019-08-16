const app = require('./app');

const http = require('http');

var app = express();






http.createServer(app).listen(process.env.PORT);
