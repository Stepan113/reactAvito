import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import { cards } from "../constants";

const LayoutHandler = () => {
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(cards);
  }, []);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleButton = (event) => {
    setProducts(
      cards.filter((item) => {
        return item.title.includes(text) || item.price.includes(text);
      })
    );
  };
  return (
    <>
      <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input
                className="input-search"
                type="text"
                value={text}
                onChange={handleChange}
              />
              <button className="btn btn-primary btn-search">
                <img
                  className="search-btn__image"
                  src="/images/search.svg"
                  alt="search"
                />
                <span className="search-btn__text" onClick={handleButton}>
                  Найти
                </span>
              </button>
            </div>
          </div>
        </section>
        <Outlet context={{ products }} />
      </main>
    </>
  );
};

export default LayoutHandler;
