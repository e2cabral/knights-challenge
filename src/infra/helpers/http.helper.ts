export default class HttpResponse {
  constructor (public statusCode: number, public body: string) {}
}
export const Ok = (status: number, body: any): HttpResponse => {
  return new HttpResponse(status, JSON.stringify(body))
}

export const MalformedObject = (): HttpResponse => {
  return new HttpResponse(
    400,
    JSON.stringify(new Error('Parameters error'))
  )
}

export const BadRequest = (err: Error): HttpResponse => {
  return new HttpResponse(
    400,
    JSON.stringify(new Error(err.message))
  )
}
