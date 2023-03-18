import Joi from 'joi'

export const validator = Joi.object({
  page: Joi.number().required(),
  itemsPerPage: Joi.number().required(),
  filter: Joi.string().optional()
})
