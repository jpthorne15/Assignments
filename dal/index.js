require('dotenv').config()
const port = process.env.PORT || 4000

const imagesRoutes = require('./Routes/mongoImages')

app.use ('/mongoImages',imagesRoutes)
app.listen(port, () =>console.log(`Example app listening on port ${port}!`))

const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})




