const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const QuemSomosRouter = require('./routes/QuemSomosRouter');
const CalendarioEscolarRouter = require('./routes/CalendarioEscolarRouter');
const LoginRouter = require('./routes/LoginRouter');
const ProfessorRouter = require('./routes/ProfessorRouter');
const AlunosRouter = require('./routes/AlunosRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'Roceket School' }));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/quemSomos', QuemSomosRouter);
app.use('/calendarioEscolar', CalendarioEscolarRouter);
app.use('/login', LoginRouter);
app.use('/aluno', AlunosRouter);

app.use('/professor', ProfessorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
