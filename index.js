const express = require('express')
const app = express()
const port = 3000

/*
app.get('/', (req, res) => {
  res.send('Hello World!ただのスタートじゃないぜ...今日は荒天')
  //res.send('Hello World!ただのスタートじゃないぜ...今日は晴天')
})
*/


// GETリクエスト
app.get('/', (req, res) => {
  res.send({
    msg:'GET request'
  });
});

// POSTリクエスト
app.post('/', (req, res) => {
  res.send({
    msg:'POST request'
  });
});

// PUTリクエスト
app.put('/:id', (req, res) => {
  res.send({
    id: req.params.id,
    msg:'PUT request'
  });
});

// DELETEリクエスト
app.delete('/:id', (req, res) => {
  res.send({
    id: req.params.id,
    msg:'DELETE request'
  });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
