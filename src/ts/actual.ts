type CardData = {
  id: number;
  title: string;
  img: string;
  price: number;
  category: string;
};

export async function fetchActualList() {
  try {
    await fetch("https://3e780da8dac3e524.mokky.dev/actualList")
      .then((res) => res.json())
      .then((json) => {
        renderData(json);
      });
  } catch (error) {
    console.log(error);
  }
}

function renderData(data: CardData[]) {
  const actuallist = document.querySelector("#actuallist");

  data.map((card) => {
    const li = document.createElement("li");
    li.innerHTML = `
                    <img src="/images/actual/${card.img}" alt="Картинка карточки" />
                    <div class="actual__text">
                      <h4>${card.title}</h4>
                      <div class="actual__bottom">
                        <p class="actual__card-price">${card.price} ₽</p>
                        <button class="actual__card-btn">В корзину</button>
                      </div>
                    </div>
                  `;

    li.classList.add("actual__card");

    actuallist?.appendChild(li);
  });
}
