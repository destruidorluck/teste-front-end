import { describe, expect, it } from '@jest/globals';
import { buildOriginalPrice, formatPrice } from './format';

describe('format utils', () => {
  it('formata valor em BRL', () => {
    expect(formatPrice(15000)).toBe('R$\u00a0150,00');
  });

  it('calcula preco original com acrescimo de 10%', () => {
    expect(buildOriginalPrice(15000)).toBe(16500);
  });
});
