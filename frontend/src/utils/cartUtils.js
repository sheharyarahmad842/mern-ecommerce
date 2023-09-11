const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //   Calculate the Items Price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  // Calculate the shipping price | If items price is greater than 100, shipping is free | If not, shipping is 10
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // Calculate the tax price | Tax is 15% of the items price
  state.taxPrice = addDecimals(Number(state.itemsPrice * 0.15));

  //   Calculate the total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.taxPrice) +
    Number(state.shippingPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
