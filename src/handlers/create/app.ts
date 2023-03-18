import { type APIGatewayEvent, type APIGatewayProxyResult } from 'aws-lambda'
import { BadRequest, MalformedObject, Ok } from '../../infra/helpers/http.helper'
import { validator } from './schema.validator'
import { KnightsService } from '../../domain/services/knights.service'
import type Knight from '../../domain/models/knight.model'
import { isNullOrUndefined } from '../../infra/helpers/verification.helper'

export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const isValid = validator.validate(event.body).error
  if (isNullOrUndefined(isValid)) {
    return MalformedObject()
  }

  try {
    const service = new KnightsService()
    await service.create((JSON.parse((event.body != null) ? event.body : '{}') as unknown) as Knight)

    return Ok(200, 'Knight successfully created!')
  } catch (err) {
    return BadRequest((err as Error))
  }
}
