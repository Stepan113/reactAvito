import Header from "../components/Header/Header";
import "./Home.css";
import { cards } from "../constants";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <>
      <Header></Header>
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
      <section className="content">
        <div className="container">
          <div className="content-box">
            <div className="content-main">
              <h2 className="content-main__title">Рекомендации для вас</h2>
              <div className="content-main__list">
                {cards.map((item) => (
                  <Card key={item.id} card={item} />
                ))}
              </div>
            </div>
            <div className="content-side">
              <h3 className="content-side__title">Сервисы и услуги</h3>
              <div className="content-side__box">
                <div className="content-side__list">
                  <div className="content-side__list-item">
                    <img
                      src="/images/gryz.svg"
                      alt="gryz"
                      className="content-side__list-item__img"
                    />
                    <h5 className="content-side__list-item__title">Доставка</h5>
                    <p className="content-side__list-item__text">
                      Проверка при получении и возможность бесплатно вернуть
                      товар
                    </p>
                  </div>
                  <div className="content-side__list-item">
                    <img
                      src="/images/gryz.svg"
                      alt="gryz"
                      className="content-side__list-item__img"
                    />
                    <h5 className="content-side__list-item__title">Доставка</h5>
                    <p className="content-side__list-item__text">
                      Проверка при получении и возможность бесплатно вернуть
                      товар
                    </p>
                  </div>
                  <div className="content-side__list-item">
                    <img
                      src="/images/gryz.svg"
                      alt="gryz"
                      className="content-side__list-item__img"
                    />
                    <h5 className="content-side__list-item__title">Доставка</h5>
                    <p className="content-side__list-item__text">
                      Проверка при получении и возможность бесплатно вернуть
                      товар
                    </p>
                  </div>
                </div>
                <div className="content-side__footer">
                  <p className="content-side__foooter-item">
                    © ООО «Абито», 2011–2021
                  </p>
                  <a href="#!" className="content-side__foooter-item">
                    Политика конфиденциальности
                  </a>
                  <a href="#!" className="content-side__foooter-item">
                    Обработка данных
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
