const Caracteristicas = () => {
  return (
    <section className="caracteristicas" id="characteristics">
      <div className="caracteristicas-inner">
        <h2 className="caracteristicas-title">Características de nuestro producto</h2>
        <div className="caracteristicas-inner-container">
          <ul className="caracteristicas-grid">
            {[
              {
                title: "Homologados",
                description: "Lentes de sol homologados mediante la regulación europea EN ISO 12312-1: 2022",
                imgSrc: "assets/img/caracteristicas-homologados.jpg",
              },
              {
                title: "Filtro 100%",
                description: "Nuestros lentes de sol filtran el 100% de la luz ultravioleta. ¡No te conformes con menos!",
                imgSrc: "assets/img/caracteristicas-filtro.jpg",
              },
              {
                title: "Absorción de luz natural",
                description: "Nuestros lentes de sol bloquean el 75% de la luz natural. Reducir la intensidad de la luz siempre favorece a la salud de la vista y la comodidad.",
                imgSrc: "assets/img/caracteristicas-luz.jpg",
              },
              {
                title: "Potencia nula",
                description: "Nuestras lentes son de potencia nula, ópticamente neutras, es decir, sin graduación y no presentan efectos prismáticos (desviaciones ópticas).",
                imgSrc: "assets/img/caracteristicas-potencia.jpg",
              }
            ].map((char, index) => (
              <li className="caracteristicas-grid-item" key={index}>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={char.imgSrc} alt={`char-${index + 1}-img`} />
                  </div>
                </div>
                <div className="product-card-content">
                  <h3 className="product-card-title">{char.title}</h3>
                  <p className="product-card-description">{char.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;
