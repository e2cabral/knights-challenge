import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { validator } from './schema.validator'
import { Weapons } from '../../../domain/entities/weapon.entity'
import { isNullOrUndefined } from '../../../infra/helpers/verification.helper'
import { BadRequest, MalformedObject, Ok } from '../../../infra/helpers/http.helper'
import { Connect } from '../../../main/config/database.config'

// This method was created just to create new Weapons,
// so it won't follow any best practices
// I hope you guys understand
export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  try {
    await Connect()

    const weapon = JSON.parse(event.body ? event.body : '{}')
    const isValid = validator.validate(weapon).error

    if (!isNullOrUndefined(isValid)) {
      return MalformedObject()
    }

    const schema = new Weapons({
      name: weapon.name,
      mod: weapon.mod,
      attr: weapon.attr,
      knights: weapon.knights
    })

    await schema.save()

    return Ok(204, null, 'Weapon successfully created!')
  } catch (err) {
    return BadRequest()
  }
}
