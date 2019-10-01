const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const cors = require('cors')
const {db} = require('../db')


//app.use
//app.use(bodyParser.urlncoded())
app.use(bodyParser.json());
app.use(express.static('public'));



//endpoints
 //get
app.get('/api/cows', (req, res) => {
  console.log(db)
  db.query('select * from cows', (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).send();
    } else {
      console.log(results)
      res.status(200).send(results);
    }
  })
  //red.end();
})


 //post
app.post('/api/cows', (req, res) => {
  let queryStr = `insert into cows(name, description) value ('${req.body.name}', '${req.body.description}')`
  db.query(queryStr, (err, results) => {
    if (err) {
      console.log(err)
      res.status(400).send();
    } else {
      res.status(200).send(results);
    }
  })

});

//app.listen

app.listen(port, function() {
  console.log(`Listening on port ${port}...`);
})

module.exports = app;