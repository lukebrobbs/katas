import { priceItems, IPriceSystem } from "../types";

/**
 * @description Develop a checkout application that calculates the total price of a number of items. In a normal supermarket, things are identified using Stock Keeping Units, or SKUs. In our store, we'll use individual letters of the alphabet (A, B, C, and so on). Our goods are priced individually. In addition, some items are multipriced: buy n of them, and they'll cost you y. For example, item 'A' cost £5 individually, but buy three 'A's and they'll cost you £13.

Our checkout accepts items in any order, so that if we scan a B, an A, and another B, we'll recognize the two B's and price them at £4.50 (for a total price so far of £9.50).

Work towards a basket of 7 As, 3 Bs, 2 Cs and 1 D totaling: £44.
 */
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
