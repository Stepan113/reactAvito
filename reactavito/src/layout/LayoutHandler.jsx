import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const LayoutHandler = () => {
  return (
    <>
      <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input className="input-search" type="text" />
              <button className="btn btn-primary btn-search">
                <img
                  className="search-btn__image"
                  src="/images/search.svg"
                  alt="search"
                />
                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutHandler;
