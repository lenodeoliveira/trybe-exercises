const Joi = require('joi');
const userModel = require('../models/userModel');

module.exports = async (req, res, next) => {
  const { error } = Joi.object({
    username: Joi.string().min(5).not().empty(),
    password: Joi.string().min(5).not().empty(),
  }).validate(req.body);

  if (error) return next(error);

  const { username, password } = req.body;

  const name = await userModel.registerUser(username, password);

  if (name.err) return next(name.err);
  res.status(201).json({ message: 'Novo usuário', user: username });
};
