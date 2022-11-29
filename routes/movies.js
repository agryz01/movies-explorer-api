const router = require('express').Router();
const { getMovies, createMovie, deletMovie } = require('../controllers/movies');
const { validatCreateMovie, validatId } = require('../utils/validations');

router.get('/', getMovies);
router.post('/', validatCreateMovie, createMovie);
router.delete('/:movieId', validatId, deletMovie);

module.exports = router;
