const express = require('express');
const router = express.Router();
const Models = require('../dbserver/models');

const Blog = Models['Blog'];

// router.get('/', (req, res, next) => {
// 	res.send();
// });

router.route('/')
	.get(async (req, res) => {
		res.send('blog get');
	})
	.post(async (req, res) => {
		res.send('blog post')
	})
	.put(async (req, res) => {
		res.send('blog put')
	})
	.delete(async (req, res) => {
		res.send('blog delete')
	})

module.exports = router;