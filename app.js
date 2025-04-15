const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true })); // Middleware for form data
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
