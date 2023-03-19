import Joi from 'joi'

export const validator = Joi.object({
  name: Joi.string().required(),
  nickname: Joi.string().required(),
  birthday: Joi.string().required(),
  class: Joi.string().required(),
  weapons: Joi.array(),
  equippedWeapon: Joi.string().optional(),
  attributes: Joi.object().required(),
  keyAttribute: Joi.string().required()
})

export const routeParamValidator = Joi.object({
  id: Joi.string().required()
})
