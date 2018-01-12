'use strict';

const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/*', cors(),(request, response) => {
  response.sendFile('index.html', { root: './public' });
})

app.use((request, response) => {
  response.status(404).sendFile('404.html', { root: './public' });
});

app.listen(PORT, () => {
  console.log(`listening on PORT:  ${PORT}`);
});