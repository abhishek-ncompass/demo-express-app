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
    "Gunjan": "Garg",
    "Mrigank": "Mukharjee",
    "Himadri": "Das",
    "Prasanna": "Srivasana"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})