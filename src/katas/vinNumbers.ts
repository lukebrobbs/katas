const checkDigit = (vin: string) => {
  const newTotals = [];
  for (let i = 0; i < 9; i++) {
    newTotals.push(+vin[i] * i);
  }
  if (
    newTotals.reduce((acc, curr) => acc + curr, 0) % 11 ===
    +vin[vin.length - 1]
  ) {
    return true;
  }
  return false;
};

export const vinNumbers = (vin: string) => {
  return vin.length === 11 && vin[vin.length - 2] ? checkDigit(vin) : false;
};
