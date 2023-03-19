import { type APIGatewayEvent, type APIGatewayProxyResult } from 'aws-lambda'
import { BadRequest, MalformedObject, Ok } from '../../infra/helpers/http.helper'
import { routeParamValidator, validator } from './schema.validator'
import { isNullOrUndefined } from '../../infra/helpers/verification.helper'
import { KnightsService } from '../../domain/services/knights.service'
import Knight from '../../domain/models/knight.model'

export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const knight = JSON.parse((event.body != null) ? event.body : '{}') as Knight
  const params = event.pathParameters as { id: string }

  const isValid = validator.validate(knight)
  const isIdNotEmpty = routeParamValidator.validate(params)

  if (isNullOrUndefined(isValid) || isNullOrUndefined(isIdNotEmpty)) {
    return MalformedObject()
  }

  try {
    const service = new KnightsService()

    await service.update(knight, params.id)

    return Ok(200, 'Knight successfully updated!')
  } catch (err) {
    return BadRequest((err as Error))
  }
}
