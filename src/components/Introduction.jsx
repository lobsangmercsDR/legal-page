import '../styles/Introduction.css';

function Introduction() {
  return (
    <div className="introduction-content">
      <div className="introduction-titles">
        <p>Servicios Legales Integrales</p>
        <p className="introduction-exp">Confiables y Profesionales</p>
        <p className="introduction-span">Comprometidos con la Defensa de tus Derechos.</p>
      </div>

      <div>
        <a
          href="https://wa.me/553196438846?text=Hola,%20estoy%20interesado(a)%20en%20recibir%20asesoría%20legal%20con%20Soluciones%20GAMD."
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <span>CONTÁCTANOS</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Introduction;
