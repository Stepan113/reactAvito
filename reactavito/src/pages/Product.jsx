import { useOutletContext, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const { products } = useOutletContext();
  const product = products.find((product) => product.id === +id);
  return (
    <>
      <section className="content">
        <div className="container">
          <div className="content-box">
            {product ? (
              <div className="content-product">
                <div className="content-product__left">
                  <h3 className="content-product__title">{product.title}</h3>
                  <img
                    src={product.img}
                    alt="product"
                    className="content-product__img"
                  />
                  <p className="content-product__text">{product.desription}</p>
                </div>
                <div className="content-product__right">
                  <h3 className="content-product__price">{product.price}</h3>
                  <button className="btn btn-primary btn-find-phone">
                    Показать телефон
                  </button>
                </div>
              </div>
            ) : (
              <h1>Такого товара не нашлось</h1>
            )}
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
export default Product;
