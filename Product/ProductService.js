const productURL = "https://panda-market-api-crud.vercel.app/products";

async function getProductList(params) {
  const searchParams = new URLSearchParams(params);
  const url = `${productURL}?${searchParams}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }

    const posts = await response.json();

    console.log(posts);
    return posts;
  } catch (error) {
    console.error("요청 실패:", error.message);
  }
}

// getProductList(1, 10, ""); //page 음수로 에러 확인

async function getProduct(id) {
  try {
    const response = await fetch(`${productURL}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }
    const posts = await response.json();

    console.log(`${id}번 상품`, posts);
    return posts;
  } catch (error) {
    console.error("요청 실패:", error.message);
  }
}

// getProduct(3372); //id 음수로 에러체크

async function createProduct() {
  const newPost = {
    name: "새 상품",
    description: "설명",
    price: 3000,
    tags: ["상품권"],
    images: "https://example.com/...",
  };

  try {
    //url id부분 음수 넣어서 에러 확인
    const response = await fetch(`${productURL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }
    const data = await response.json();
    console.log("생성된 상품", data);
    return data;
  } catch (error) {
    console.error("요청 실패:", error.message);
  }
}

// createProduct();

async function patchProduct(id) {
  const updates = {
    description: "가격상승",
    price: 3000000,
  };

  try {
    const response = await fetch(`${productURL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }
    const data = await response.json();
    console.log(`${id}번 상품 업데이트`, data);
    return data;
  } catch (error) {
    console.error("요청 실패:", error.message);
  }
}

// patchProduct(3390); //음수로 오류 체크

async function deleteProduct(id) {
  //에러처리 할 때는 const response 붙여야할듯 !response.ok써야해서
  // await fetch(`https://panda-market-api-crud.vercel.app/products/${id}`, {
  //   method: "DELETE",
  // });

  try {
    const response = await fetch(`${productURL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태: ${response.status}`);
    }

    console.log(`상품 id ${id}번 삭제 완료`);
    return true;
  } catch (error) {
    console.error("요청 실패:", error.message);
  }
}

// deleteProduct(3417); //음수로 에러 확인

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
