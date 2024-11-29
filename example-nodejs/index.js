const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    "hello": "world",
    "abhishek":"Choudhary",
    "Mayank": "Gupta",
    "om": "Naladkar",
    "M B": "Puneeth",
    "Mahesh": "Bharti",
    "hello": "world",
    "hello": "world",
    "hello": "world",
    "hello": "world",
    "Gunjan": "Garg"  
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})