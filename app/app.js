const express = require('express')
const bodyParser = require('body-parser')
const createError = require('http-errors')
const favicon = require('serve-favicon')
const path = require('path')
require('hbs')

const router = require('./routes.js')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(favicon(path.join(__dirname, 'public', 'images', 'seahawk.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

/*
 if the request doesn't match a route above,
 create a 404 error
*/

app.use((req, res, next) => {
  next(createError(404))
})

/*
error handler
*/

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  console.error(err.stack)
  res.locals.message = err.message
  // send error details to view only in development
  res.locals.error = app.get('env') === 'development' ? err : {}
  res.render('error')
})

module.exports = app
