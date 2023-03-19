import { type APIGatewayEvent, type APIGatewayProxyResult } from 'aws-lambda'
import { BadRequest, MalformedObject, Ok } from '../../../infra/helpers/http.helper'
import { routeParamValidator, validator } from './schema.validator'
import { isNullOrUndefined } from '../../../infra/helpers/verification.helper'
import Knight from '../../../domain/models/knight.model'
import KnightServiceFactory from '../../../main/factories/knight-service.factory'

export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const knight = JSON.parse((event.body != null) ? event.body : '{}') as Knight
  const params = event.pathParameters as { id: string }

  const isValid = validator.validate(knight)
  const isIdNotEmpty = routeParamValidator.validate(params)

  if (isNullOrUndefined(isValid) || isNullOrUndefined(isIdNotEmpty)) {
    return MalformedObject()
  }

  try {
    const service = new KnightServiceFactory().getInstance()

    await service.update(knight, params.id)

    return Ok(204, null, 'Knight successfully updated!')
  } catch (err) {
    return BadRequest()
  }
}
