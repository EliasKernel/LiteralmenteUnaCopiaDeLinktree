const express = require('express');
const app = express();
const path = require('path');


//Settings
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(require('./routes/'));

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});