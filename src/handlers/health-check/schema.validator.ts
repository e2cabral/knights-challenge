import Joi from 'joi'

export const schemaValidator = Joi.object({
  message: Joi.string().required(),
  randomNumber: Joi.number().required()
})
