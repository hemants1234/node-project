require('dotenv').config();

const express = require('express');
const app = express();
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/nodeTest', (req, res) => {
    res.send('Hello Hemant!')
  })

app.get('/login', (req, res) => {
    res.send('<h1>please login to webapp</h1>')
  }) 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})