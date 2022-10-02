interface NewsResponseBody<T> {
  code: string
  message: string
  success: boolean
  data: T
}

export interface NewsResponse<T> {
  headers: Headers
  status: number
  body: NewsResponseBody<T>
}

export async function newsFetchRaw<T>(fullUrl: string, init?: RequestInit) {
  const initReqHeaders = init?.headers ?? {}
  const reqHeaders = {
    ...initReqHeaders,
  }
  const res = await fetch(fullUrl, {
    ...init,
    headers: reqHeaders,
    method: init?.method ?? 'GET',
  })
  const json = (await res.json()) as NewsResponseBody<T>
  return {
    headers: res.headers,
    status: res.status,
    body: json,
  }
}

export async function newFetch<T>(path: string, init?: RequestInit) {
  return newsFetchRaw<T>(process.env.API_BASE_URL + path, init)
}
