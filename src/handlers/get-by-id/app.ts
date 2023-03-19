import { type APIGatewayEvent, type APIGatewayProxyResult } from 'aws-lambda'
import { BadRequest, MalformedObject, Ok } from '../../infra/helpers/http.helper'
import { routeParamValidator } from './schema.validator'
import { isNullOrUndefined } from '../../infra/helpers/verification.helper'
import { KnightsService } from '../../domain/services/knights.service'

export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  try {
    const params = event.pathParameters as { id: string }
    const isIdNotEmpty = routeParamValidator.validate(params)

    if (isNullOrUndefined(isIdNotEmpty)) {
      return MalformedObject()
    }

    const service = new KnightsService()
    const data = await service.findById(params.id)

    return Ok(200, data)
  } catch (err) {
    return BadRequest((err as Error))
  }
}
