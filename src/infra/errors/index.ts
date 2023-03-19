export class BadRequestError extends Error {
  constructor () {
    super()
    this.stack = 'Bad Request Error'
    this.message = 'Try again with different params'
  }
}

export class MalformedObjectError extends Error {
  constructor () {
    super()
    this.stack = 'Malformed Object Error'
    this.message = 'The parameters provided didn\'t match the expected'
  }
}
