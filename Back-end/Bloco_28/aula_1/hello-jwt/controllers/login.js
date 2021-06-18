const Joi = require('joi');
const userModel = require('../models/userModel');

module.exports = async (req, res, next) => {
  try {
    const { error } = Joi.object({
      username: Joi.string().not().empty().required(),
      password: Joi.string().not().empty().required(),
    }).validate(req.body);

    if (error) return next(error);
    const { username } = req.body;

    const user = await userModel.findUser(username);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'Login efetuado com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
