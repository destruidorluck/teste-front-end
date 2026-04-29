/**
 * Formata um valor em centavos para moeda BRL.
 * @param value Valor em centavos (ex.: `15000`).
 * @returns String formatada em real (ex.: `R$ 150,00`).
 */
export const formatPrice = (value: number) =>
  (value / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

/**
 * Calcula o preço original de referência (10% acima do valor atual).
 * @param value Valor atual em centavos.
 * @returns Valor original arredondado em centavos.
 */
export const buildOriginalPrice = (value: number) => Math.round(value * 1.1);
