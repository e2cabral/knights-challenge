import Joi from 'joi'

export const routeParamValidator = Joi.object({
  id: Joi.string().required()
})
