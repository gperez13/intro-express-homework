const express =  require('express');
const app = express();
const port = 2000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const pokemonController = require('./controllers/controls')






app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));









app.use('/pokemon', pokemonController);



app.listen(port, () => {
	console.log('this is set up')
});