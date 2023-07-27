const express = require('express')
const serveIndex = require('serve-index')

const app = express()

app.use(
  '/API',
  express.static('public/API'),
  serveIndex('public/API', { icons: true })
)

app.listen(3000, () => console.log('🚀 is on port 3000...'))
