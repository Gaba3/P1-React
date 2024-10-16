const Testimonios = () => {
  return (
    <section className="testimony" id="testimonios">
      <div className="testimony-inner">
        <h2 className="testimony-title">Testimonio de clientes</h2>
        <div className="testimony-inner-container" id="slider">
          <ul className="testimony-grid">
            {[
              { name: "Leonardo Mesias", comment: "Muy buen producto, buena calidad de materiales y fabricación; volvería a comprar.", imgSrc: "assets/img/leonardo-mesias.jpg" },
              { name: "Christian Rolando<", comment: "Muy buen producto, buena calidad de materiales y fabricación; volvería a comprar.", imgSrc: "assets/img/leonardo-mesias.jpg" },
              { name: "Roberto Lewis", comment: "Muy buen producto, buena calidad de materiales y fabricación; volvería a comprar.", imgSrc: "assets/img/leonardo-mesias.jpg" },
              { name: "Louis Juarez", comment: "Muy buen producto, buena calidad de materiales y fabricación; volvería a comprar.", imgSrc: "assets/img/leonardo-mesias.jpg" }
            ].map((testimony, index) => (
              <li className="testimony-grid-item" key={index}>
                <div className="testimony-card">
                  <div className="testimony-card-img">
                    <img src={testimony.imgSrc} alt={`person${index + 1}`} />
                    <p className="identity">{testimony.name}</p>
                  </div>
                </div>
                <div className="testimony-card-content">
                  <p className="comments">{testimony.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
