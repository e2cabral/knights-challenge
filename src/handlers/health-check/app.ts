import { type APIGatewayEvent, type APIGatewayProxyResult } from 'aws-lambda'
import { schemaValidator } from './schema.validator'

export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const isSchemaValid = schemaValidator.validate(event.queryStringParameters)

  if (isSchemaValid.error !== undefined) {
    return {
      statusCode: 409,
      body: JSON.stringify(isSchemaValid.error.message)
    }
  }

  try {
    const { message, randomNumber } = (isSchemaValid.value as { message: string, randomNumber: number })
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `${message} - ${randomNumber}`
      })
    }
  } catch (err) {
    return {
      statusCode: 409,
      body: JSON.stringify((err as Error).message)
    }
  }
}
