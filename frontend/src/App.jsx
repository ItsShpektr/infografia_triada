import React from 'react';
import './App.css';

function App() {
  return (
    <div className="infografia-container">
      <header className="header">
        <h1>La Tríada de la Seguridad de la Información</h1>
        <p>El pilar fundamental para la protección de activos digitales.</p>
      </header>

      {/* NUEVA SECCIÓN INTRODUCTORIA */}
      <section className="intro-section">
        <h2>Antes de empezar: ¿Qué es la Seguridad de la Información?</h2>
        <div className="intro-content">
          <p>
            Imagina que la información de una empresa es como el dinero en un banco. No basta con esconderlo; 
            necesitas reglas claras para saber <strong>quién</strong> puede entrar a la bóveda, asegurarte de que 
            los billetes <strong>no sean falsos</strong>, y garantizar que los cajeros <strong>funcionen</strong> 
            cuando los clientes necesitan su dinero.
          </p>
          <p>
            En el mundo digital, los datos (tus contraseñas, fotos, documentos de trabajo) son nuestro activo más valioso. 
            La <strong>Seguridad de la Información</strong> es el conjunto de reglas y medidas que usamos para proteger 
            esos datos de hackers, accidentes o fallas técnicas. Para lograrlo, los expertos se basan en tres pilares 
            fundamentales, conocidos como la <strong>Tríada CIA</strong>.
          </p>
        </div>
      </section>

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