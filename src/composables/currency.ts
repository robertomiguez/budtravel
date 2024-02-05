export const usePounds = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumSignificantDigits: 3,
});

export const useReals = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumSignificantDigits: 3,
});
