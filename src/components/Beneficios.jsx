const Beneficios = () => {
  return (
    <section className="benefits" id="benefits">
      <h2 className="benefits-title">Beneficios del producto</h2>
      <div className="benefits-container">
        <article className="benefits-left">
          <div className="benefits-left-inner">
            <div className="responsive-image">
              <img src="assets/img/benefits-sunglasses.jpg" alt="Benefits img" />
            </div>
            <div className="benefits-left-content">
              <p className="benefits-title-description">Solo hay que mirar a través de los lentes correctos.</p>
            </div>
          </div>
        </article>
        <article className="benefits-right">
          <ul className="benefits-right-inner">
            {["Protegen tu retina", "Reducen el riesgo de desarrollar cataratas", "Reducen la aparición de arrugas", "Disminuyen los dolores de cabeza o migrañas"].map((benefit, index) => (
              <li className="benefits-li" key={index}>
                <div className="benefits-articulo">
                  <h3 className="benefits-articulo-titulo">{benefit}</h3>
                </div>
                <div className="benefits-articulo-img">
                  <img src={`assets/img/benefits-${index + 1}.jpg`} alt={`benefits-art-${index + 1}-img`} />
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Beneficios;
