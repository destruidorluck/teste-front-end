import logo from '../assets/Logo.png';
import '../styles/footer.scss';

const institutionalLinks = ['Sobre Nós', 'Movimento', 'Trabalhe conosco'];
const helpLinks = ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'];
const termsLinks = ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'];

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__newsletter" id="newsletter" aria-labelledby="newsletter-title">
        <div className="footer__newsletter-inner">
          <div className="footer__newsletter-copy">
            <h2 id="newsletter-title" className="footer__newsletter-title">
              Inscreva-se na nossa newsletter
            </h2>
            <p className="footer__newsletter-text">
              Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
            </p>
          </div>

          <form className="footer__newsletter-form">
            <div className="footer__newsletter-fields">
              <input className="footer__input" type="text" placeholder="Digite seu nome" aria-label="Digite seu nome" />
              <input className="footer__input" type="email" placeholder="Digite seu e-mail" aria-label="Digite seu e-mail" />
              <button className="footer__submit" type="submit">
                INSCREVER
              </button>
            </div>

            <label className="footer__consent">
              <input type="checkbox" />
              <span>Aceito os termos e condições</span>
            </label>
          </form>
        </div>
      </section>

      <div className="footer__main">
        <div className="footer__main-inner">
          <section className="footer__brand" aria-label="Econverse">
            <a href="#root" className="footer__logo" aria-label="Página inicial da Econverse">
              <img src={logo} alt="Econverse" loading="lazy" />
            </a>

            <p className="footer__brand-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="footer__social" aria-label="Redes sociais">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M13.5 20V12.8H16L16.4 10H13.5V8.2C13.5 7.39 13.73 6.83 14.89 6.83H16.5V4.32C16.22 4.28 15.25 4.2 14.12 4.2C11.77 4.2 10.17 5.63 10.17 8.27V10H7.5V12.8H10.17V20H13.5Z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6.3 8.45C7.34 8.45 8.18 7.61 8.18 6.57C8.18 5.53 7.34 4.69 6.3 4.69C5.26 4.69 4.42 5.53 4.42 6.57C4.42 7.61 5.26 8.45 6.3 8.45ZM4.72 19.3H7.88V9.72H4.72V19.3ZM9.87 19.3H13.03V13.95C13.03 12.54 13.3 11.17 15.04 11.17C16.76 11.17 16.78 12.78 16.78 14.04V19.3H19.95V13.4C19.95 10.5 19.33 8.27 15.94 8.27C14.31 8.27 13.22 9.16 12.78 10.01H12.73V9.72H9.87V19.3Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </section>

          <div className="footer__divider" aria-hidden="true" />

          <nav className="footer__links" aria-label="Links do rodapé">
            <div className="footer__column">
              <h3 className="footer__title">Institucional</h3>
              <ul className="footer__list">
                {institutionalLinks.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__title">Ajuda</h3>
              <ul className="footer__list">
                {helpLinks.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__title">Termos</h3>
              <ul className="footer__list">
                {termsLinks.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};
