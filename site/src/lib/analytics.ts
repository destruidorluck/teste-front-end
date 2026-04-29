type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Inicializa o Google Analytics 4 dinamicamente usando a chave do ambiente.
 */
export const initAnalytics = (): void => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || window.gtag) {
    return;
  }

  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  const inlineScript = document.createElement('script');
  inlineScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
  `;

  document.head.append(gtagScript, inlineScript);
};

/**
 * Dispara um page view manualmente no GA4.
 * @param path Caminho da página que será reportado.
 */
export const trackPageView = (path: string): void => {
  if (!window.gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title,
    send_to: GA_MEASUREMENT_ID,
  });
};

/**
 * Registra eventos de interação do usuário.
 * @param eventName Nome do evento no GA4 (ex.: `select_product`).
 * @param params Metadados opcionais do evento.
 */
export const trackEvent = (eventName: string, params: AnalyticsEventParams = {}): void => {
  if (!window.gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  window.gtag('event', eventName, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  });
};
