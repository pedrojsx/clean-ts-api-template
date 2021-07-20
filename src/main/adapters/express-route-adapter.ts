import { Request, Response } from 'express'
import { Controller, HttpRequest } from '@/presentation/protocols'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      headers: request.headers,
      pathParams: request.path,
      queryParams: request.query,
      body: request.body,
      authentication: request.authentication
    }

    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.body?.error instanceof Error) {
      response.status(httpResponse.statusCode).json({ error: httpResponse.body.error.message })
    } else {
      response.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
