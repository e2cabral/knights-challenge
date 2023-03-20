import * as handler from '../../../src/handlers/knights/get/app'
import {GetKnightsMock, malformedObjectError, okResponse} from '../../mocks/get-knights.mock'

describe('Get Knights', () => {
  test('Should return 400 if page was not provided', async () => {
    const spy = jest
        .spyOn(handler, 'handle')
        .mockResolvedValue(
            new Promise(
                (resolver) => resolver(
                    {
                      statusCode: 400,
                      body: JSON.stringify(malformedObjectError)
                    }
                )
            )
        )
    const httpResponse = await handler.handle(GetKnightsMock(null, '10'))

    expect(httpResponse.statusCode).toBe(400)
  })

  test('Should return 400 if itemsPerPage is not provided', async () => {
    const spy = jest
        .spyOn(handler, 'handle')
        .mockResolvedValue(
            new Promise(
                (resolver) => resolver(
                    {
                      statusCode: 400,
                      body: JSON.stringify(malformedObjectError)
                    }
                )
            )
        )
    const httpResponse = await handler.handle(GetKnightsMock('1', null))

    const response = JSON.parse(httpResponse.body)

    expect(response.status).toBe(400)
  })

  test('Should return 200 if all parameters is provided', async () => {
    const spy = jest
        .spyOn(handler, 'handle')
        .mockResolvedValue(
            new Promise(
                (resolver) => resolver(
                    {
                      statusCode: 200,
                      body: JSON.stringify(okResponse)
                    }
                )
            )
        )
    const httpResponse = await handler.handle(GetKnightsMock('1', '10'))

    const response = JSON.parse(httpResponse.body)

    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(3)
  })
})
