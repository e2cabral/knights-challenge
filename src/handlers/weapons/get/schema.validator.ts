import Joi from 'joi'

export const validator = Joi.object({
  page: Joi.string().required(),
  itemsPerPage: Joi.string().required()
})
