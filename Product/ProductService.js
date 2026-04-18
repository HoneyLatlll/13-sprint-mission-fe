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

const getProductList = await api.get("/products");
// console.log(getProductList);

const getProduct = await api.get("/products/3372");
// console.log(getProduct);

const createProduct = await api.post("/products", {
  name: "새 상품",
  description: "설명",
  price: 30000,
  tags: ["상품권"],
  images: "https://example.com/...",
});

// console.log(createProduct);

const patchProduct = await api.patch("/products/3760", {
  description: "가격상승",
  price: 3000000,
});

// console.log(patchProduct);

const deleteProduct = await api.delete("/products/3762");
// console.log(deleteProduct);

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
