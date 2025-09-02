const request = async ({ url, method = "GET", headers = {}, body }) => {
  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(url, options);
  return response.json();
};

request.get = (url, headers) => request({ url, method: "GET", headers });

request.post = (url, headers, body) =>
  request({ url, method: "POST", body, headers });

request.put = (url, headers, body) =>
  request({ url, method: "PUT", body, headers });

request.delete = (url, headers) => request({ url, method: "DELETE", headers });

export default request;
