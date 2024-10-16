const Header = () => {
  return (
    <header className="encabezado" id="encabezado">
      <nav className="nav-main">
        <div className="brand">
          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" alt="Logo de la marca" />
          </a>
          <a href="index.html" className="eslogan">
            <p>Just make today awesome</p>
          </a>
        </div>
        <div className="menu">
          <img className="menu-icon" src="assets/img/menu-icon.png" alt="Menu icon" />
          <div className="nav-dropdown">
            <p className="dropdown-title">Menu</p>
            <div className="nav-links">
              <a href="#encabezado" className="nav-list-link">Inicio</a>
              <a href="#benefits" className="nav-list-link">Beneficios</a>
              <a href="#characteristics" className="nav-list-link">Características</a>
              <a href="#testimonios" className="nav-list-link">Testimonios</a>
              <a href="#suscribete" className="nav-list-link">Suscribete</a>
              <a href="#footer" className="nav-list-link">Sobre nosotros</a>
            </div>
          </div>
        </div>
      </nav>
      <video autoPlay muted loop id="background-video">
        <source src="assets/videos/promocional-lentes-sol.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
    </header>
  );
};

export default Header;
