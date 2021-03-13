const express = require('express')
const app = express()
const bodyParser = require('body-parser')




app.use(bodyParser.json())

const roteador = require('./rotas/carteira')
app.use('/getWallet', roteador)


app.listen(3000, '127.0.0.1', () => {
  console.log(`Server running`);
});