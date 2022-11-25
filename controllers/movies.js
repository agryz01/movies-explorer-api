const mongoose = require('mongoose');
const Movie = require('../models/movie');
const BadRequestErr = require('../errors/BadRequestErr');
const NotFoundErr = require('../errors/NotFoundErr');
const ForbiddenErr = require('../errors/ForbiddenErr');

const getMovies = (req, res, next) => {
  const { _id } = req.user;
  Movie.find({ owner: _id })
    .then((movie) => res.send(movie))
    .catch(next);
};

const createMovie = (req, res, next) => {
  req.body.owner = req.user._id;
  Movie.create(req.body)
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        next(new BadRequestErr('Ошибка валидации'));
        return;
      }
      next(err);
    });
};

const deletMovie = (req, res, next) => {
  Movie.findById(req.params.movieId).orFail(new NotFoundErr('Запись с указанным _id не найдена'))
    .then((movie) => {
      if (movie.owner.toHexString() === req.user._id) {
        movie.delete()
          .then(() => {
            res.send({ message: 'Запись удалена' });
          })
          .catch(next);
        return;
      }
      throw new ForbiddenErr('Вы не можете удалить запись другого пользователя');
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError) {
        next(new BadRequestErr('Указан не корректный _id'));
        return;
      }
      next(err);
    });
};

module.exports = {
  getMovies,
  createMovie,
  deletMovie,
};
