import { type APIGatewayEvent, type APIGatewayProxyResult } from 'aws-lambda'
import { BadRequest, MalformedObject, Ok } from '../../infra/helpers/http.helper'
import { isNullOrUndefined } from '../../infra/helpers/verification.helper'
import { routeParamValidator } from './schema.validator'
import KnightServiceFactory from '../../main/factories/knight-service.factory'

export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const params = event.pathParameters as { id: string }
  const isIdNotEmpty = routeParamValidator.validate(params)

  if (isNullOrUndefined(isIdNotEmpty)) {
    return MalformedObject()
  }

  try {
    const service = new KnightServiceFactory().getInstance()

    await service.delete(params.id)

    return Ok(
      204,
      null,
      'Knight successfully deleted!'
    )
  } catch (err) {
    return BadRequest()
  }
}
