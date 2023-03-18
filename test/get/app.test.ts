import { APIGatewayEventRequestContextWithAuthorizer, APIGatewayProxyEvent } from 'aws-lambda'
import { handle } from '../../src/handlers/get/app'

const mockRequest = (page: string | null, itemsPerPage: string | null): APIGatewayProxyEvent => ({
  body: null,
  headers: {},
  multiValueHeaders: {},
  httpMethod: 'post',
  isBase64Encoded: false,
  path: '/books',
  pathParameters: null,
  queryStringParameters: { page, itemsPerPage },
  multiValueQueryStringParameters: null,
  stageVariables: null,
  requestContext: {} as APIGatewayEventRequestContextWithAuthorizer<any>,
  resource: 'create'
} as APIGatewayProxyEvent)

describe('Get Knights', () => {
  test('Should return 400 if no page is not provided', async () => {
    const httpResponse = await handle(mockRequest(null, '10'))
    expect(httpResponse.statusCode).toBe(400)
  })
  test('Should return 400 if no itemsPerPage is not provided', async () => {
    const httpResponse = await handle(mockRequest('1', null))
    expect(httpResponse.statusCode).toBe(400)
  })
})
