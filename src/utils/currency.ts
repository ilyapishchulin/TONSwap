export const getFormattedCurrency = (currency: number): string => {
  return `$${String(currency).split( /(?=(?:...)*$)/).join(',')}`;
};
