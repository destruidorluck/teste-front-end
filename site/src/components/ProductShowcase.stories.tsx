import type { Meta, StoryObj } from '@storybook/react';
import { ProductShowcase } from './ProductShowcase';

const storyProducts = [
  {
    productName: 'Iphone 11 PRO MAX BRANCO 1',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 1',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 15000,
  },
  {
    productName: 'IPHONE 13 MINI 1',
    descriptionShort: 'IPHONE 13 MINI 1',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 9000,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 2',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 2',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 14990,
  },
  {
    productName: 'IPHONE 13 MINI 2',
    descriptionShort: 'IPHONE 13 MINI 2',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 12000,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 3',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 3',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 4550,
  },
];

const meta: Meta<typeof ProductShowcase> = {
  title: 'Components/ProductShowcase',
  component: ProductShowcase,
  tags: ['autodocs'],
  args: {
    title: 'Produtos relacionados',
    linkLabel: 'Ver todos',
    products: storyProducts,
    onProductSelect: () => undefined,
  },
};

export default meta;

type Story = StoryObj<typeof ProductShowcase>;

export const Default: Story = {};

export const WithTabs: Story = {
  args: {
    showTabs: true,
    sectionId: 'top-products',
  },
};
