import React from 'react';
import './App.css';

function App() {
  return (
    <div className="infografia-container">
      <header className="header">
        <h1>La Tríada de la Seguridad de la Información</h1>
        <p>El pilar fundamental para la protección de activos digitales y gobierno TI.</p>
      </header>

      <section className="triada-grid">
        <div className="card confidencialidad">
          <div className="icon">🔒</div>
          <h2>Confidencialidad</h2>
          <p>
            Garantiza que los datos solo sean accesibles para entidades, sistemas 
            o usuarios autorizados. Previene la divulgación de información sensible.
          </p>
        </div>

        <div className="card integridad">
          <div className="icon">🛡️</div>
          <h2>Integridad</h2>
          <p>
            Asegura que la información sea precisa, completa y no haya sido 
            alterada de manera no autorizada durante su almacenamiento o tránsito.
          </p>
        </div>

        <div className="card disponibilidad">
          <div className="icon">⏱️</div>
          <h2>Disponibilidad</h2>
          <p>
            Asegura que los sistemas, redes y datos estén operativos y accesibles 
            para los usuarios autorizados exactamente cuando los necesitan.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;