import { api } from "./api.js";

// const PRODUCT_URL = "https://panda-market-api-crud.vercel.app/products";

// async function getProductList(params) {
//   const searchParams = new URLSearchParams(params);
//   const url = `${PRODUCT_URL}?${searchParams}`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP 에러! 상태: ${response.status}`);
//     }

//     const posts = await response.json();

//     console.log(posts);
//     return posts;
//   } catch (error) {
//     console.error("요청 실패:", error.message);
//   }
// }

// getProductList(1, 10, ""); //page 음수로 에러 확인

const ProductService = {
  getProductList: async () => api.get("/products"),
  getProduct: async (id) => api.get(`/products/${id}`),
  createProduct: async (data) => api.post("/products", data),
  patchProduct: async (id, data) => api.patch(`/products/${id}`, data),
  deleteProduct: async (id) => api.delete(`/products/${id}`),
};

export { ProductService };
