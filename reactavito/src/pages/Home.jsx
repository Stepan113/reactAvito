import "./Home.css";
import Card from "../components/Card/Card";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { products } = useOutletContext();
  return (
    <>
      <section className="content">
        <div className="container">
          <div className="content-box">
            <div className="content-main">
              <h2 className="content-main__title">Рекомендации для вас</h2>
              <div className="content-main__list">
                {products ? (
                  products.map((item) => <Card key={item.id} card={item} />)
                ) : (
                  <div>Увы, такого товара нет</div>
                )}
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
