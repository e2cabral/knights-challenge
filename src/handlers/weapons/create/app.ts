import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { validator } from './schema.validator'
import { Weapons } from '../../../domain/entities/weapon.entity'
import { isNullOrUndefined } from '../../../infra/helpers/verification.helper'
import { BadRequest, MalformedObject, Ok } from '../../../infra/helpers/http.helper'
import { Connect } from '../../../main/config/database.config'
import { Types } from 'mongoose'

// This method was created just to create new Weapons,
// so it won't follow any best practices
// I hope you guys understand
export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  try {
    await Connect()

    const weapon = JSON.parse(event.body ? event.body : '{}')
    const isNotValid = validator.validate(weapon).error

    if (!isNullOrUndefined(isNotValid)) {
      return MalformedObject()
    }

    const schema = new Weapons({
      _id: new Types.ObjectId(),
      name: weapon.name,
      mod: weapon.mod,
      attr: weapon.attr,
      knights: weapon.knights
    })

    const data = await schema.save()

    return Ok(200, data, 'Weapon successfully created!')
  } catch (err) {
    return BadRequest()
  }
}
