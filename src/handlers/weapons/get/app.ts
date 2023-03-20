import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { isNullOrUndefined } from '../../../infra/helpers/verification.helper'
import { BadRequest, MalformedObject, Ok } from '../../../infra/helpers/http.helper'
import { Weapons } from '../../../domain/entities/weapon.entity'
import { validator } from './schema.validator'
import { Connect } from '../../../main/config/database.config'

// This method was created just to get Weapons,
// so it won't follow any best practices
// I hope you guys understand
export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  try {
    await Connect()

    const query = event.queryStringParameters as { page: string, itemsPerPage: string }
    const isValid = validator.validate(query).error

    if (!isNullOrUndefined(isValid)) {
      return MalformedObject()
    }

    const data = await Weapons
      .find()
      .skip((Number(query.page) - 1) * Number(query.itemsPerPage))
      .limit(Number(query.itemsPerPage))
      .exec()

    return Ok(204, data, `${data.length} weapons retrieved!`)
  } catch (err) {
    return BadRequest()
  }
}
