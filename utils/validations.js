const { celebrate, Joi } = require('celebrate');
const { id, url } = require('./regExp');

const validatUpdateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    name: Joi.string().min(2).max(30),
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
    owner: Joi.string().pattern(id).length(24),
    movieId: Joi.string().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validatId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().pattern(id).length(24),
  }),
});

module.exports = {
  validatUpdateUser,
  validatCreateUser,
  validatAuthUsers,
  validatCreateMovie,
  validatId,
};
