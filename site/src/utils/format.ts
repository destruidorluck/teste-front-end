export const formatPrice = (value: number) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export const buildOriginalPrice = (value: number) => Math.round(value * 1.1);
