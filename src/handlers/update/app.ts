import { type APIGatewayEvent, type APIGatewayProxyResult } from 'aws-lambda'
import { Ok } from '../../infra/helpers/http.helper'

export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  return Ok(200, [])
}
