import { type APIGatewayEvent, type APIGatewayProxyResult } from 'aws-lambda'
import { BadRequest, MalformedObject, Ok } from '../../infra/helpers/http.helper'
import { isNullOrUndefined } from '../../infra/helpers/verification.helper'
import { KnightsService } from '../../domain/services/knights.service'
import { routeParamValidator } from './schema.validator'

export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const params = event.pathParameters as { id: string }
  const isIdNotEmpty = routeParamValidator.validate(params)

  if (isNullOrUndefined(isIdNotEmpty)) {
    return MalformedObject()
  }

  try {
    const service = new KnightsService()

    await service.delete(params.id)

    return Ok(200, 'Knight successfully deleted!')
  } catch (err) {
    return BadRequest((err as Error))
  }
}
