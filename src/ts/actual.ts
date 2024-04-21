export type CardData = {
  append(li: HTMLLIElement): unknown;
  appendChild(li: HTMLLIElement): unknown;
  id: number;
  title: string;
  img: string;
  price: number;
  category: string;
};

export async function fetchActualList() {
  const actuallist = document.querySelector("#actuallist");

  try {
    await fetch("https://3e780da8dac3e524.mokky.dev/actualList")
      .then((res) => res.json())
      .then((json) => {
        renderData(json);
      });
  } catch (error) {
    console.log(error);
    const li = document.createElement("li");
    li.textContent =
      "К сожалению, произошла ошибка при получении данных! Зайдите позже :)";
    actuallist?.append(li);
  }
}

function renderData(data: CardData[]) {
  data.map((card) => {
    const actuallist = document.querySelector("#actuallist");

    const li = document.createElement("li");
    li.innerHTML = `
                    <img src="/images/actual/${card.img}" alt="Картинка карточки" />
                    <div class="actual__text">
                      <h4>${card.title}</h4>
                      <div class="actual__bottom">
                        <p class="actual__card-price">${card.price} ₽</p>
                        <button id="addToCart" class="actual__card-btn">В корзину</button>
                      </div>
                    </div>
                  `;

    li.classList.add("actual__card");

    actuallist?.appendChild(li);
  });
}
