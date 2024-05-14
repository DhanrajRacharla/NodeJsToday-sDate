const exp = require('express')
const app = exp()

app.get('/', (req, res) => {
  let date = new Date()
  res.send(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`)
  //console.log(ddmmyy)
})

module.exports = app
app.listen(3000)
