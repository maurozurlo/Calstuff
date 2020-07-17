const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()

//Handlebars
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'}))
app.set('view engine', '.hbs')

// Static folder
app.use(express.static(path.join(__dirname, '/public/')))

// Routes
app.use('/', require('./routes/index'))
app.use('/', require('./routes/icalgen'))

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  )
