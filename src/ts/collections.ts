import { CardData } from "./actual";

export function collections() {
  const categories = document.querySelectorAll(".collections__category");
  const list = document.querySelector(".collections__list");
  function clearList() {
    if (list) {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    }
  }
  let currentCategory = "штаны";
  for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", () => {
      categories.forEach((category) => {
        category.classList.remove("collections__category--active");
      });
      categories[i].classList.add("collections__category--active");
      categories[i].classList.contains("collections__category--active")
        ? (currentCategory = categories[i].textContent!)
        : "";

      try {
        fetch(
          `https://3e780da8dac3e524.mokky.dev/collections?${
            currentCategory.toLowerCase() === "все"
              ? ""
              : `category=${currentCategory.toLowerCase()}`
          }`
        )
          .then((res) => res.json())
          .then((json) => {
            clearList();
            renderData(json);
          });
      } catch (error) {
        console.log(error);
      }
    });
  }
  try {
    fetch(
      `https://3e780da8dac3e524.mokky.dev/collections?category=${currentCategory.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((json) => renderData(json));
  } catch (error) {
    console.log(error);
  }
  function renderData(data: CardData[]) {
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
      list?.append(li);
    });
  }
}
