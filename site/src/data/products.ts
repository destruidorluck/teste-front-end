import { ApiResponse, Product } from '../types/product';

const PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

const fallbackResponse: ApiResponse = {
  success: true,
  products: [
    {
      productName: 'Iphone 11 PRO MAX BRANCO 1',
      descriptionShort: 'Iphone 11 PRO MAX BRANCO 1',
      photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 15000,
    },
    {
      productName: 'IPHONE 13 MINI 1',
      descriptionShort: 'IPHONE 13 MINI 1',
      photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 9000,
    },
    {
      productName: 'Iphone 11 PRO MAX BRANCO 2',
      descriptionShort: 'Iphone 11 PRO MAX BRANCO 2',
      photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 14990,
    },
    {
      productName: 'IPHONE 13 MINI 2',
      descriptionShort: 'IPHONE 13 MINI 2',
      photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 12000,
    },
    {
      productName: 'Iphone 11 PRO MAX BRANCO 3',
      descriptionShort: 'Iphone 11 PRO MAX BRANCO 3',
      photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 4550,
    },
    {
      productName: 'IPHONE 13 MINI 3',
      descriptionShort: 'IPHONE 13 MINI 3',
      photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 38000,
    },
    {
      productName: 'Iphone 11 PRO MAX BRANCO 4',
      descriptionShort: 'Iphone 11 PRO MAX BRANCO 4',
      photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 42000,
    },
    {
      productName: 'IPHONE 13 MINI 4',
      descriptionShort: 'IPHONE 13 MINI 4',
      photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 520,
    },
    {
      productName: 'Iphone 11 PRO MAX BRANCO 5',
      descriptionShort: 'Iphone 11 PRO MAX BRANCO 5',
      photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 149990,
    },
    {
      productName: 'IPHONE 13 MINI 5',
      descriptionShort: 'IPHONE 13 MINI 5',
      photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 100000,
    },
  ],
};

const isApiResponse = (data: unknown): data is ApiResponse => {
  if (!data || typeof data !== 'object') {
    return false;
  }

  const parsed = data as ApiResponse;
  return Boolean(parsed.success) && Array.isArray(parsed.products);
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(PRODUCTS_URL);

    if (!response.ok) {
      throw new Error('Falha ao carregar os produtos');
    }

    const data: unknown = await response.json();

    if (!isApiResponse(data)) {
      throw new Error('Formato de resposta invalido');
    }

    return data.products;
  } catch (error) {
    console.warn('Usando fallback local de produtos.', error);
    return fallbackResponse.products;
  }
};
