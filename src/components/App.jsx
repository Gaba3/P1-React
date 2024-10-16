import Header from './Header';
import Beneficios from './Beneficios';
import Caracteristicas from './Caracteristicas';
import Testimonios from './Testimonios';
import Suscripcion from './Suscripcion';
import Animacion from './Animacion'
import Footer from './Footer';
import '/home/gabriel/Escritorio/Parcial 2/P1-React/P1-React/src/styles/index.css';


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Beneficios />
        <Caracteristicas />
        <Testimonios />
        <Suscripcion />
        <Animacion />
      </main>
      <Footer />
    </div>
  );
};

export default App;
