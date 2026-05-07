import React, { useEffect, useState } from "react";
import "./RegisterForm.css";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [formdata, setFormdata] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [taginput, setTaginput] = useState("");

  const handleCreateProduct = () =>
    setFormdata({
      name: name,
      description: description,
      price: price,
      tags: tags,
    });
  console.log(formdata);

  useEffect(() => {
    async function postProduct() {
      try {
        const res = await fetch("https://sprint5-api.onrender.com/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formdata }),
        });
        if (!res.ok) throw new Error("생성 실패");
        return res.json();
      } catch (error) {
        console.error(error.message);
      }
    }
    postProduct();
  }, [formdata]);

  return (
    <form className="register-form">
      <div className="register-title-box">
        <p>상품 등록하기</p>
        <Link to="/">
          <button type="button" onClick={() => handleCreateProduct()}>
            등록
          </button>
        </Link>
      </div>
      <div className="product-input-box">
        <div>
          <p>상품명</p>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="상품명을 입력해주세요"
            value={name}
          />
        </div>
        <div>
          <p>상품 소개</p>
          <textarea
            placeholder="상품 소개를 입력해주세요"
            className="description-textarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
          <p>판매가격</p>
          <input
            placeholder="판매 가격을 입력해주세요"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
          />
        </div>
        <div>
          <p>태그</p>
          <input
            placeholder="태그를 입력해주세요"
            onChange={(e) => setTaginput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              if (!taginput.trim() || taginput.length > 5) return;

              setTags((prev) => [...prev, taginput]);
              setTaginput("");
            }}
            value={taginput}
          />
          <p>등록된 태그</p>
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
    </form>
  );
}
