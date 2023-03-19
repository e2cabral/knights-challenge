import {
  APIGatewayEvent,
  APIGatewayProxyResult
} from 'aws-lambda'
import { validator } from './schema.validator'
import { BadRequest, MalformedObject, Ok } from '../../infra/helpers/http.helper'
import { isNullOrUndefined } from '../../infra/helpers/verification.helper'
import KnightServiceFactory from '../../main/factories/knight-service.factory'

export type KnightsQueryString = {
  page: string
  itemsPerPage: string
  filter: string
}
export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const isValid = validator.validate(event.queryStringParameters).error

  if (!isNullOrUndefined(isValid)) {
    return MalformedObject()
  }

  const { page, itemsPerPage, filter } = event.queryStringParameters as KnightsQueryString

  try {
    const service = new KnightServiceFactory().getInstance()

    const data = await service.find(page, itemsPerPage, filter)

    return Ok(200, data, `${data.length} knights retrieved`)
  } catch (err) {
    return BadRequest()
  }
}
