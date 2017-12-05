const express = require("express");
const path = require("path")
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// 错误处理中间件
const httpErrorhandler = require('./middlewares/http_error_handler');
//日志处理
const utilsLogger = require('./utils/loggers/logger');


const index = require('./routes/index');
const users = require('./routes/users');
const subs = require('./routes/subs')


const app = express();
require('./services/mongodb_service');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app
  .use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/user', users);
app.use('/subscription', subs)

app.use(httpErrorhandler());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

process.on('uncaugthException', (err) => {
  utilsLogger.error(err.message);
});


process.on('unhandledReject', (reason, p) => {
  utilsLogger.error(err.message);
})

module.exports = app;
