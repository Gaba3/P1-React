import { useState } from 'react';

const Suscripcion = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const validacion = (e) => {
    e.preventDefault(); // Previene el envío del formulario

    if (name.trim().length === 0) {
      alert('[ERROR] El campo del formulario no debe estar vacío');
      return false;
    } else if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)?/.test(email)) {
      alert('[ERROR] Se espera una dirección de correo');
      return false;
    } else {
      console.log(name);
      console.log(email);
      alert('Datos guardados exitosamente');
      return true;
    }
  };

  return (
    <section className="subscribe" id="suscribete">
      <form onSubmit={validacion}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Suscripcion;
