import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

const messages = []    // temporary way to store messages

app.set('view engine', 'ejs');    // tells express to use ejs for rendering html
app.use(express.static('public'))    // serves files from the public folder
app.use(bodyParser.urlencoded({ extended: true }));    // let's us read data from a form
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('layout', { title: "Mini Message Board", messages });    // rendering index.ejs and passing messages array to it
})

app.post('/message', (req, res) => {
  const {name, message} = req.body;
  if(name && message) {
    messages.push({
      name,
      message,
      time: new Date().toLocaleTimeString(),
    })
  }
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})