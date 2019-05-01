// export default (req, res) => {
//   res.send('api test ' +  Math.random())
// }

const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send('훌륭해요! ' + Math.random())
})

app.use('/hello', require('./hello'))

module.exports = {
  path: '/api',
  handler: app
}