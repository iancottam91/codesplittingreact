const express = require('express');
const path = require('path');

const app = new express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const port = 4001;
app.listen(port, () =>  {
  console.log('Express server listening on port ' + port);
});