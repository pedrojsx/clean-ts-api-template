export interface HttpRequest {
  headers?: any
  pathParams?: any
  queryParams?: any
  body?: any
  authentication?: any
}

export interface HttpResponse {
  statusCode: number,
  body?: any
}
