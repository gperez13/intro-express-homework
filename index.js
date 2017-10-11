const express =  require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js')



app.get('/', (req, res) =>{
	res.send('Welcome to the Pokemon App!')
})


app.get('/pokefriends', (req, res) => {
	res.render('index.ejs', {pokemon})
})

app.get('/pokemon/:id', (req, res) =>{
	res.send(pokemon[req.params.id]);
})





app.listen(port, () => {
	console.log('this is set up')
})