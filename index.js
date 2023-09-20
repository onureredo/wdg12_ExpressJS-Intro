const express = require('express');
const app = express();
const PORT = 8000;

app
  .route('/')
  .get((req, res) => res.send('Hello World!'))
  .post((req, res) => res.send('We create a ressource'))
  .put((req, res) => res.send('We update a ressource'))
  .delete((req, res) => res.send('We delete a ressource'));

// RESPONSE TYPES
app.get('/data', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  };
  res.json(data);
});

app.get('/html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/redirect', (req, res) => {
  res.redirect('/data');
});

app.get('/download', (req, res) => {
  res.download('index.js');
});

// PARAMS & QUERY-STRINGS
// app.get('/users/:id', (req, res) => {
//   console.log(req.params.id); // holt den Route-Parameter
//   console.log(req.query.sort); // holt den Query-String
//   res.send('Check your server console');
// });

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const sort = req.query.sort;
  res.send(`User ID: ${userId}, Sort by: ${sort}`);
});

// TEMPLATE ENGINES *PUG
app.set('view engine', 'ejs');

app.get('/pug', (req, res) => {
  res.render('index');
});

// *EJS
app.get('/ejs', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
