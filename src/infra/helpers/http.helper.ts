import { BadRequestError, MalformedObjectError } from '../errors'

export default class HttpResponse {
  constructor (public statusCode: number, public body: string) {}
}
export const Ok = (status: number, body: any, message: string): HttpResponse => {
  return new HttpResponse(
    status,
    JSON.stringify(Response<any>(status, body, message))
  )
}

export const MalformedObject = (): HttpResponse => {
  const err = new MalformedObjectError()

  return new HttpResponse(
    400,
    JSON.stringify(Response<MalformedObjectError>(400, err, err.message))
  )
}

export const BadRequest = (err: BadRequestError): HttpResponse => {
  return new HttpResponse(
    400,
    JSON.stringify(Response<BadRequestError>(400, err, err.message))
  )
}

export const Response = <T>(
  status: number,
  body: T,
  message: string
): {
    status: number
    body: T
    message: string
  } => {
  return {
    status,
    body,
    message
  }
}
