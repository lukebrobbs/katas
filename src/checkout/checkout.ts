import { priceItems, IPriceSystem } from "../types";

export const checkout = (items: priceItems[]): string => {
  let total = 0;
  const priceSystem: IPriceSystem = {
    A: { price: 5, total: 0, offerPrice: 13, numForOffer: 3 },
    B: { price: 3, total: 0, offerPrice: 4.5, numForOffer: 2 },
    C: { price: 2, total: 0, offerPrice: 2, numForOffer: 1 },
    D: { price: 1.5, total: 0, offerPrice: 1.5, numForOffer: 1 }
  };

  items.forEach(item => {
    priceSystem[item].total++;
    if (priceSystem[item].total === priceSystem[item].numForOffer) {
      total += priceSystem[item].offerPrice;
      priceSystem[item].total = 0;
    }
  });

  Object.keys(priceSystem).forEach((item: priceItems) => {
    total += priceSystem[item].total * priceSystem[item].price;
  });

  return `£${total.toFixed(2)}`;
};
