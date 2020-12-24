import cubbit from "../../assets/cubbit.png";

export const getPrice = (price, discount) => {
  const totalValue = price - price * discount;
  return totalValue;
};

export const cubbitProduct = {
  name: "Cubbit Cell",
  qty: 1,
  img: cubbit,
  description: "Cubbit Cell 1TB up to 4TB",
  price: "589",
  shipping: "0",
};
