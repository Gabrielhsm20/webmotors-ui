class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request({
    path, method, headers, body,
  }, readResponseBody = true) {
    const response = await fetch(
      this.baseURL + path,
      {
        headers,
        method,
        body: JSON.stringify(body),
      },
    );

    if (!readResponseBody) {
      return response.ok;
    }

    const contentType = response.headers.get('Content-Type');

    const responseBody = contentType.includes('application/json')
      ? await response.json()
      : null;

    if (response.ok) {
      return responseBody;
    }

    throw new Error(response, responseBody);
  }

  async get(path, params) {
    const urlSearchParams = params && new URLSearchParams(params).toString();
    return this.request({
      path: urlSearchParams
        ? `${path}?${urlSearchParams}`
        : path,
      method: 'GET',
    });
  }
}

export default HttpClient;
