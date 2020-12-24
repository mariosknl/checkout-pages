export const getPrice = (price, discount) => {
  const discountVal = discount / 99.8;
  const totalValue = price - price * discountVal;
  return totalValue;
};
