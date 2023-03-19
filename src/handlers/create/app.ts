import { type APIGatewayEvent, type APIGatewayProxyResult } from 'aws-lambda'
import { BadRequest, MalformedObject, Ok } from '../../infra/helpers/http.helper'
import { validator } from './schema.validator'
import type Knight from '../../domain/models/knight.model'
import { isNullOrUndefined } from '../../infra/helpers/verification.helper'
import KnightServiceFactory from '../../main/factories/knight-service.factory'

export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const isValid = validator.validate(event.body).error
  if (isNullOrUndefined(isValid)) {
    return MalformedObject()
  }

  try {
    const service = new KnightServiceFactory().getInstance()

    await service.create((JSON.parse((event.body != null) ? event.body : '{}') as unknown) as Knight)

    return Ok(
      201,
      null,
      'Knight successfully created!'
    )
  } catch (err) {
    return BadRequest()
  }
}
