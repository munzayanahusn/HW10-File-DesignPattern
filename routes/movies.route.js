const router = require('express').Router();
const multer = require('../middlewares/multer');

const { getMovies, uploadPhoto } = require('../controllers/movies.controller');

router.get('/', getMovies);
router.patch('/upload/:id', multer, uploadPhoto);

module.exports = router;