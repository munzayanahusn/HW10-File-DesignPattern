const express = require('express');
const router = require('express').Router();

const { getMovies, uploadPhoto, getMoviesById, addMovies, deleteMovie, updateMovie } = require('../controllers/movies.controller');
const multer = require('../middlewares/multer');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', getMovies);
router.patch('/upload/:id', multer, uploadPhoto);
router.get('/:id', getMoviesById);
router.post('/', addMovies);
router.delete('/:id', deleteMovie);
router.put('/:id', updateMovie);

module.exports = router;