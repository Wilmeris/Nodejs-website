 const express = require('express');

 const app = express();
 const path = require('path');
//static files
app.use(express.static(path.join(__dirname,'public')))

 //setting
 app.set('view engine','ejs');
 app.set('views',path.join(__dirname, 'views'));
 app.engine('html', require('ejs').renderFile);
 //routes

 app.use(require('./routes/index')),

 //listening the server 
 app.set('port',3000);

 app.listen(3000, () => {
     console.log('Server on port',app.get('port'));
  });
