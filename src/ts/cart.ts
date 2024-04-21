import { CardData } from "./actual";

function getCartListFromStorage() {
  const cartListStorage = localStorage.getItem("cartList");
  return cartListStorage ? JSON.parse(cartListStorage) : [];
}

function updateCartView(cartItems: CardData, cartList: CardData[]) {
  cartList.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("cart__item");
    li.innerHTML = `
      <img src="/images/actual/${item.img}" alt="${item.title}" />
      <div class="cart__text">
        <h6 class="cart__item-title">${item.title}</h6>
        <div class="cart__item-info">
          <p>Размер: <span>M</span></p>
          <p>кол-во: <button>-</button><span>1</span><button>+</button></p>
          <p>стоимость: <span>${item.price}</span> ₽</p>
        </div>
      </div>`;
    cartItems?.append(li);
  });
}

const cartItems = document.querySelector("#cartItems");

let cartList = getCartListFromStorage();

// @ts-ignore
updateCartView(cartItems, cartList);

export function getData(data: CardData) {
  cartList.push(data);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    // @ts-ignore
  updateCartView(cartItems, cartList);
}
