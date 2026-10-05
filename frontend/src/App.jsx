import './App.css';

function App() {
  return (
    <div className="infografia-container">
      <header className="header">
        <span className="eyebrow">Seguridad de la Información</span>
        <h2 className="header-subtitle">Tres ideas básicas que protegen tus datos</h2>
        <h1>La Tríada de la Seguridad de la Información</h1>
        <p>Cuando hablamos de proteger información, siempre miramos tres cosas: quién puede verla, si está intacta y si está disponible.</p>
      </header>

      <section className="intro-section">
        <h2>Antes de empezar: ¿Qué es la Seguridad de la Información?</h2>
        <div className="intro-content">
          <p>
            Piensa en tus datos como si fueran cosas valiosas en un banco. No basta con guardarlos; también hay que
            decidir <strong>quién puede entrar</strong>, verificar que no hayan sido <strong>cambiados</strong> y asegurarse de
            que estén <strong>siempre disponibles</strong> cuando se necesitan.
          </p>
          <p>
            La <strong>Seguridad de la Información</strong> es el conjunto de prácticas y reglas que usan las personas,
            empresas y sistemas para proteger la información frente a robos, errores, caídas o accesos no autorizados.
            Para entenderlo mejor, se usa la famosa <strong>Tríada CIA</strong>.
          </p>
        </div>
      </section>

      <section className="triada-grid">
        <div className="card confidencialidad">
          <div className="icon">🔒</div>
          <h2>Confidencialidad</h2>
          <p>
            Significa que la información solo debe verse por personas autorizadas. Es como cerrar la puerta de tu
            habitación y no permitir que cualquiera entre.
          </p>
        </div>

        <div className="card integridad">
          <div className="icon">🛡️</div>
          <h2>Integridad</h2>
          <p>
            Significa que los datos deben mantenerse completos y exactos. Si algo cambia sin permiso, no se puede
            confiar en esa información.
          </p>
        </div>

        <div className="card disponibilidad">
          <div className="icon">⏱️</div>
          <h2>Disponibilidad</h2>
          <p>
            Significa que la información y los sistemas deben estar accesibles cuando las personas las necesitan,
            sin interrupciones innecesarias.
          </p>
        </div>
      </section>

      <section className="ejemplos-section">
        <h2>Ejemplos sencillos</h2>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="app-tag whatsapp">WhatsApp</span>
            <h3>Confidencialidad</h3>
            <p>
              Tus mensajes están protegidos para que solo tú y la otra persona puedan leerlos.
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="app-tag banco">App Bancaria</span>
            <h3>Integridad</h3>
            <p>
              Cuando pagas o transfieres dinero, el sistema verifica que la operación no haya sido alterada.
            </p>
          </div>

          <div className="ejemplo-item">
            <span className="app-tag netflix">Netflix / Spotify</span>
            <h3>Disponibilidad</h3>
            <p>
              Los servicios funcionan para que puedas acceder a tu contenido sin interrupciones.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;