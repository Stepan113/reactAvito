const card_wrapper = document.querySelector(".content-main__list");
const searchBtn = document.querySelector(".btn-search");
const searchInput = document.querySelector(".search-box input");

const cards = [
  {
    id: 0,
    title: "Первый товар",
    price: "170 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "/images/card.svg",
  },
  {
    id: 1,
    title: "Второй товар",
    price: "171 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "/images/card.svg",
  },
  {
    id: 2,
    title: "Третий товар",
    price: "172 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "/images/card.svg",
  },
  {
    id: 3,
    title: "Четвертый товар",
    price: "173 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "/images/card.svg",
  },
  {
    id: 4,
    title: "Пятый товар",
    price: "174 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "/images/card.svg",
  },
  {
    id: 5,
    title: "Шестой товар",
    price: "175 ₽",
    place: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "/images/card.svg",
  },
];

const renderArray = (list) => {
  card_wrapper.innerHTML = "";
  list.forEach((item) => {
    card_wrapper.insertAdjacentHTML(
      "beforeend",
      `
    <a href="/product.html" class="content-main__list-item">
                    <div class="contetn-main__list-item__img">
                      <img src="${item.img}" alt="${item.title}" />
                    </div>
                    <h5 class="content-main__list-item__title">
                      ${item.title}
                    </h5>
                    <strong class="content-main__list-item__price"
                      >${item.price}</strong
                    >
                    <div class="content-main__list-item-box-desc">
                      <span class="content-main__list-item__desc"
                        >${item.place}</span
                      >
                      <span class="content-main__list-item__desc"
                        >${item.date}</span
                      >
                    </div>
                  </a>
    `
    );
  });
};

const filterArray = (list, value) => {
  return list.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
};

searchBtn.addEventListener("click", () => {
  renderArray(filterArray(cards, searchInput.value));
});
