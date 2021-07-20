import { Request, Response, NextFunction } from 'express'
import { HttpRequest, Middleware } from '@/presentation/protocols';

export const adaptMiddleware = (middleware: Middleware) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = { headers: request.headers }
    const { statusCode, body } = await middleware.handle(httpRequest)
    if (statusCode === 200) {
      Object.assign(request, body)
      next()
    } else {
      response.status(statusCode).json({ error: body.error.message })
    }
  }
}
