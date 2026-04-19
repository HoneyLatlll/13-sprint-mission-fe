import * as article from "./Article/ArticleService.js";
import { ProductService } from "./Product/ProductService.js";
import * as api from "./Product/api.js";

// article.getArticleList({ page: 1, pageSize: 1, keyword: "" });
// article.getArticle(6050);
// article.createArticle();
// article.patchArticle(6052);
// article.deleteArticle(6048);

// product.getProductList({ page: 1, pageSize: 1, keyword: "" });
// product.getProduct(3531);
// product.createProduct();
// product.patchProduct(3533);
// product.deleteProduct(3524);

const products = await ProductService.getProductList();
console.log(products);

const product = await ProductService.getProduct(3531);
console.log(product);

const newProduct = await ProductService.createProduct({
  name: "상품권",
  description: "새 상품",
  price: 30000,
  tags: ["온라인 상품권"],
  images: ["https://example.com"],
});
console.log(newProduct);

const updateProduct = await ProductService.patchProduct(3767, {
  description: "가격상승",
  price: 3000000,
});
console.log(updateProduct);

const deleteProduct = await ProductService.deleteProduct(3760);
console.log(deleteProduct);
