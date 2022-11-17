let express = require('express');
let products = require('./products');
var cors = require('cors')
var http = require('http')
let port = 3000;
const app = express();

http.createServer(app).listen(port ? port : 3000);

app.use(cors())

let router = express.Router();

app.use('/products', cors(), (req, res, next) =>{
    res.send(products.getProductsList())
});
