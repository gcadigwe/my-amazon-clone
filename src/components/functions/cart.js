export const getBasketTotal = (basket) =>
  basket?.basket.reduce((amount, item) => item.price + amount, 0);
