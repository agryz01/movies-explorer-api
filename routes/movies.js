const router = require('express').Router();
const { getMovies, createMovie, deletMovie } = require('../controllers/movies');
const { validatCreateMovie, validatMovieId } = require('../utils/validations');

router.get('/', getMovies);
router.post('/', validatCreateMovie, createMovie);
router.delete('/:movieId', validatMovieId, deletMovie);

module.exports = router;
