const path = require('path');

const express = require('express');
const bosyParser = require('body-parser');

require('./utils/dbconnect');
const { setStatic } = require('./utils/static');
const todoRouter = require('./routes/todoRouter');
const indexRouter = require('./routes/index');

const app = express();

//middlewares
app.use(bosyParser.urlencoded({ extended: false }));
//end middlewares

//ejs.
app.set('view engine', 'ejs');
app.set('views', 'views');
//end ejs.

//static
setStatic(app);
//end static

app.use('/admin', todoRouter);
app.use('/', indexRouter);

app.listen(3000, () => console.log(`server is runing port: 3000`));
