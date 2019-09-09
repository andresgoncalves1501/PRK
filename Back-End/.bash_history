cd tcoding
npm init
npm install -y
npm install body-parser --save
npm install express --save
npm install mongoose --save
npm install express-sanitizer --save
npm install express-validator --save
const express = require('express');
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
//carregar bibliotecas globais
const cors = require('cors');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const expressValidator = require('express-validator');
//iniciar a aplicação
var app = express();
app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(expressValidator());
app.listen(port, function (err) {
console.log('Your app is listening on ' + host + ' and port ' + port);
} else {console.log(err);}
});
//forçar utilização das bibliotecas
app.use(cors());
//colocar aqui código para express-sessions
module.exports = app;
npm install mysql --save
cd teste
npm init -y
npm install -save
npm install --save
npm install body-parser --save
npm install express --save
npm install mongo --save
npm install mongodb --save
npm install mongoose --save
