const express =  require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');




app.get('/', (req, res) =>{
	res.send('Welcome to the Pokemon App!')
})


app.get('/pokefriends', (req, res) => {
	res.render('index', {pokemon})
})

app.get('/pokemon/:id', (req, res) =>{
	res.render('show', {dud: pokemon[req.params.id]});
})





app.listen(port, () => {
	console.log('this is set up')
})