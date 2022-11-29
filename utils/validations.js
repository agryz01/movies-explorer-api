const { celebrate, Joi } = require('celebrate');
const { url } = require('./regExp');

const validatUpdateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required().min(2).max(30),
  }),
});

const validatCreateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().required().min(2).max(30),
  }),
});

const validatAuthUsers = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validatCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(url),
    trailerLink: Joi.string().required().pattern(url),
    thumbnail: Joi.string().required().pattern(url),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validatMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.number(),
  }),
});

module.exports = {
  validatUpdateUser,
  validatCreateUser,
  validatAuthUsers,
  validatCreateMovie,
  validatMovieId,
};
