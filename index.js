const path = require('path');
var bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use('/json', express.static('json'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/ping', (req, res) => {
  // Do something with tracking params
  // console.log(req.query);
  res.send(Object.assign({
    status: "success"
  }, req.query));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
