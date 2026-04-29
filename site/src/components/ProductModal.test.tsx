import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProductModal } from './ProductModal';
import { formatPrice } from '../utils/format';
import type { Product } from '../types/product';

const mockProduct: Product = {
  productName: 'Iphone 11',
  descriptionShort: 'Celular Apple',
  photo: 'https://example.com/iphone.png',
  price: 15000,
};

describe('ProductModal', () => {
  it('nao renderiza quando o modal esta fechado', () => {
    render(<ProductModal product={mockProduct} isOpen={false} onClose={jest.fn()} />);

    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('atualiza quantidade e total corretamente', () => {
    render(<ProductModal product={mockProduct} isOpen onClose={jest.fn()} />);

    const totalElement = screen.getByText(/Total:/i);
    expect(totalElement.textContent).toContain(formatPrice(15000));

    fireEvent.click(screen.getByRole('button', { name: /Aumentar quantidade/i }));
    expect(screen.queryByText('02')).not.toBeNull();
    expect(totalElement.textContent).toContain(formatPrice(30000));

    fireEvent.click(screen.getByRole('button', { name: /Diminuir quantidade/i }));
    fireEvent.click(screen.getByRole('button', { name: /Diminuir quantidade/i }));
    expect(screen.queryByText('01')).not.toBeNull();
    expect(totalElement.textContent).toContain(formatPrice(15000));
  });

  it('chama onClose ao clicar fora e no botao de fechar', () => {
    const onClose = jest.fn();
    const { container } = render(<ProductModal product={mockProduct} isOpen onClose={onClose} />);

    fireEvent.click(container.querySelector('.product-modal') as HTMLElement);
    fireEvent.click(screen.getByRole('button', { name: /Fechar modal/i }));

    expect(onClose).toHaveBeenCalledTimes(2);
  });
});
