const express = require('express');
const app = express();
const PORT = process.env.PORT | 5000;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // res.send('welcome in my Area Calculator')
});

app.get('/circle', (req, res) => {
  res.sendFile(__dirname + "/circle.html")
});

app.get('/triangle', (req, res) => {
  res.sendFile(__dirname + '/triangle.html')
});

// post methods =-============
app.post('/triangle', (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const area = 0.5 * base * height;
  res.send(`<h2> Area of Triangle is : ${area} </h2> `);
});

app.post('/circle', (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`<h2> Area of Circle is : ${area} </h2>`)
})


app.listen(PORT, () => {
  console.log(`server is runnig at http://localhost:${PORT}`)
})