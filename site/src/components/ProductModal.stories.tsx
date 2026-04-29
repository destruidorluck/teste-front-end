import type { Meta, StoryObj } from '@storybook/react';
import { ProductModal } from './ProductModal';

const meta: Meta<typeof ProductModal> = {
  title: 'Components/ProductModal',
  component: ProductModal,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    onClose: () => undefined,
    product: {
      productName: 'Iphone 11 PRO MAX BRANCO',
      descriptionShort: 'Iphone 11 PRO MAX BRANCO',
      photo:
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 15000,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductModal>;

export const Open: Story = {};

export const Closed: Story = {
  args: {
    isOpen: false,
  },
};
