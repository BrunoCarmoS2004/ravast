const express = require('express');
const bodyParse = require('body-parser');
const pokemonRoutes = require ('./src/routes/PokemonRoutes')

const app = express();
app.set('view engine', 'ejs')
app.set('views','./src/views')
app.use(bodyParse.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/', pokemonRoutes)


const port = 3000;

app.listen(port, () => {
  console.log("Rodando no link http://localhost:"+port);
});