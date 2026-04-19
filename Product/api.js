const BASE_URL = "https://panda-market-api-crud.vercel.app";

async function request(endpoint, options = {}) {
  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);
  if (!response.ok) throw new Error(`HTTP 에러 상태: ${response.status}`);

  if (response.status === 204) return null;

  return response.json();
}

const api = {
  // get: async (endpoint) => {
  //   const response = await fetch(`${BASE_URL}${endpoint}`);
  //   if (!response.ok) throw new Error(`GET 실패: ${response.status}`);
  //   return response.json();
  // },
  get: (endpoint) => request(endpoint),

  post: (endpoint, data) =>
    request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  put: (endpoint, data) =>
    request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  patch: (endpoint, data) =>
    request(endpoint, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  delete: (endpoint) =>
    request(endpoint, {
      method: "DELETE",
    }),
};

export { api, BASE_URL };
