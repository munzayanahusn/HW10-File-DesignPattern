const router = require('express').Router();
const movieRoute = require('./movies.route');

router.use('/movies', movieRoute);

module.exports = router;