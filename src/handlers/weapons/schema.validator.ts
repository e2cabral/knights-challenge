import Joi from 'joi'

export const validator = Joi.object({
  name: Joi.string().required(),
  mod: Joi.number().required(),
  attr: Joi.string().required(),
  knights: Joi.array().required()
})
