import Header from './Header';
import Benefits from './Benefits';
import Characteristics from './Characteristics';
import Testimony from './Testimony';
import Subscribe from './Subscribe';
import Animacion from './Animacion'
import Footer from './Footer';
import './styles/index.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Benefits />
        <Characteristics />
        <Testimony />
        <Subscribe />
        <Animacion />
      </main>
      <Footer />
    </div>
  );
};

export default App;
