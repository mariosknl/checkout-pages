import cubbit from "../../assets/cubbit.png";

export const getPrice = (price, discount) => {
  const discountVal = discount / 100;
  const totalValue = price - price * discountVal;
  return totalValue;
};

export const cubbitProduct = {
  id: 1,
  name: "Cubbit Cell",
  qty: 1,
  img: cubbit,
  description: "Cubbit Cell 1TB up to 4TB",
  price: 589,
  shipping: "0",
  discount: 44,
};
