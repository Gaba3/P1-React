const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-content-center">
          <div className="footer-row">
            <div className="footer-col">
              <div className="footer-col-inner">
                <div className="brand">
                  <a href="index.html" className="logo">
                    <img src="assets/img/logo.png" alt="Logo de la marca" />
                    <a href="index.html" className="eslogan"><p>Just make today awesome</p></a>
                  </a>
                </div>
                <nav className="footer-nav">
                  <ul className="footer-nav-list">
                    <li className="footer-nav-list-item">
                      <a href="terms.html" className="nav-footer-link">Terminos y condiciones</a>
                    </li>
                    <li className="footer-nav-list-item">
                      <a href="guarantee.html" className="nav-footer-link">Políticas de garantía</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <p className="separator-line">|</p>
            <div className="footer-col-social">
              <div className="footer-social">
                <a className="social-icon" href="https://twitter.com/?lang=es">
                  <img src="assets/img/twitter-logo.png" alt="twitter" />
                </a>
                <a className="social-icon" href="https://www.instagram.com/">
                  <img src="assets/img/instagram-logo.png" alt="instagram" />
                </a>
                <a className="social-icon" href="https://www.youtube.com/">
                  <img src="assets/img/youtube-logo.png" alt="youtube" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-row-copyrights">
            <div className="footer-col">
              <div className="copyrigth-section">
                <p className="copyright-text">© 2024 Guman Enterprises. Todos los derechos reservados.</p>
              </div>
              <div className="footer-top-link">
                <a href="#top">Ir al inicio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
