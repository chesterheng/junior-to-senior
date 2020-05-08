const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();
app.use(cors())
app.use('/static', express.static(
  path.join(__dirname, 'public'), 
  { 'maxage': '2h' }
));

app.get('/hi', (req, res)=> { 
  res.header('Cache-Control', 'public, max-age=86400')
  res.header('Content-Type', 'text/html')
  res.send(new Buffer('<h2>Test String</h2>')) 
})

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
