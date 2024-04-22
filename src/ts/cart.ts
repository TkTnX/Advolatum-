import { CardData } from "./actual";
const cartPrice = document.querySelector("#cartPrice");
setTimeout(() => {
  const cartMinus = document.querySelectorAll("#cartMinus");
  const cartPlus = document.querySelectorAll("#cartPlus");
  const cartItemValue = document.querySelectorAll("#cartItemValue");

  for (let i = 0; i < cartMinus.length; i++) {
    cartMinus[i].addEventListener("click", () => {
      Number(cartItemValue[i].textContent) !== 1
        ? (cartItemValue[i].textContent = String(
            Number(cartItemValue[i].textContent) - 1
          ))
        : 0;
    });
    cartPlus[i].addEventListener("click", () => {
      cartItemValue[i].textContent = String(
        Number(cartItemValue[i].textContent) + 1
      );
    });
  }
}, 0);
let totalPrice = 0;
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
          <p>кол-во: <button id="cartMinus">-</button><span id="cartItemValue">1</span><button id="cartPlus">+</button></p>
          <p>стоимость: <span>${item.price}</span> ₽</p>
        </div>
      </div>`;
    cartItems?.append(li);
    totalPrice = totalPrice + item.price;
  });
  cartPrice !== null
    ? (cartPrice.textContent = String(totalPrice + 500))
    : null;
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
