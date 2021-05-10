const express = require('express');
const path = require('path');
const PORT = 3000
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
})

// Static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`app started on port http://localhost:${PORT}`))
