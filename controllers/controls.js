const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon.js');





router.get('/new', (req, res) => {
	res.render('new', {})
})

router.get('/', (req, res) => {
	res.render('index', {pokemon})
})


router.post('/create', (req, res) => {

	console.log(req.body);
	pokemon.push(req.body)

	res.redirect('/pokemon')
})


router.get('/:index', (req, res) =>{
	res.render('show', {dud: pokemon[req.params.index], index: req.params.index})
		console.log(dud)

})


router.get('/:index/edit', (req, res) => {
	res.render('edit', {dud: pokemon[req.params.index], index: req.params.index})
})


router.delete('/:index', (req, res) =>{
	pokemon.splice(req.params.index, 1)
	res.redirect('/pokemon')
})

router.put('/:index/edit', (req, res) => {
	pokemon[req.params.index] = req.body
	res.redirect('/pokemon')
})





module.exports = router;





