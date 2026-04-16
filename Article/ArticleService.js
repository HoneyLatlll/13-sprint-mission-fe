const articleURL = "https://panda-market-api-crud.vercel.app/articles";

function getArticleList(params) {
  // try {
  //   fetch(
  //     `https://panda-market-api-crud.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP 에러! 상태:${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // } catch (error) {
  //   console.error("에러:", error.message);
  // }
  //잘못된 try catch 문임 catch부분 실행 되지도 않음 ㅇㅇ

  const searchParams = new URLSearchParams(params);
  const url = `${articleURL}?${searchParams}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러! 상태:${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      (error) => console.error(error);
    });
}
// getArticleList(1, 11, "");
//에러확인 page에 말도 안되는거 입력

function getArticle(id) {
  fetch(`${articleURL}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러! 상태:${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`${id}번 게시물`, data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// getArticle(5802);
//에러확인 -1입력

function createArticle() {
  const newPost = {
    title: "게시글 제목입니다.",
    content: "게시글 내용입니다.",
    image: "https://example.com/...",
  };

  fetch(`${articleURL}/`, {
    //이미 있는 ID 넣어서 에러 확인
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러! 상태:${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("생성 된 게시물", data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// createArticle();

function patchArticle(id) {
  const updates = {
    title: "업데이트 제목",
    content: "업데이트 내용",
  };

  fetch(`${articleURL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러! 상태:${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("업데이트 된 게시물", data);
    })
    .catch((error) => {
      console.log(error);
    });
}
// patchArticle(5843);
//-100같은 말도 안되는 숫자 넣어서 에러 확인

function deleteArticle(id) {
  fetch(`${articleURL}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러! 상태:${response.status}`);
      }
      console.log(`${id}번 데이터 삭제 완료`);
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

// deleteArticle(5802);
//음수 넣어서 에러 확인

export {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};
