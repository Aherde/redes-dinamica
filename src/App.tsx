import "./App.css";

const logos = [
  {
    nombre: "BBROSE",
    src: "/logos/bbrose.png",
  },
  {
    nombre: "Tío Ammi",
    src: "/logos/tio-ammi.png",
  },
  {
    nombre: "WIWU",
    src: "/logos/wiwu.png",
  },
];

const redes = [
  {
    nombre: "Síguenos",
    descripcion: "Para ti, para mí, para todas.",
    url: "https://www.instagram.com/bbrosevzla/",
    etiqueta: "@Bbrosevzla",
    emoji: "✨",
  },
  {
    nombre: "Síguenos",
    descripcion: "Te acompaña siempre.",
    url: "https://www.instagram.com/tioammioficial/",
    etiqueta: "@Tioammioficial",
    emoji: "🛍️",
  },
  {
    nombre: "Síguenos",
    descripcion: "Diseño para un estilo de vida móvil.",
    url: "https://www.instagram.com/wiwuvzla/",
    etiqueta: "@Wiwu",
    emoji: "📱",
  },
];

export default function App() {
  return (
    <main className="app">
      <section className="card">
        <div className="header">
          <h1>Síguenos</h1>

          <div className="title-logos">
            {logos.map((logo) => (
              <div className="title-logo-item" key={logo.nombre}>
                <img src={logo.src} alt={logo.nombre} />
              </div>
            ))}
          </div>

          <p className="subtitle">
            Conoce más de nuestras marcas, productos y próximas dinámicas.
          </p>
        </div>

        <div className="links-list">
          {redes.map((red) => (
            <a
              key={red.url}
              className="social-card"
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon">{red.emoji}</div>

              <div className="social-info">
                <h2>{red.nombre}</h2>
                <span>{red.etiqueta}</span>
                <p>{red.descripcion}</p>
              </div>

              <div className="arrow">›</div>
            </a>
          ))}
        </div>

        <a
          className="ecommerce-card"
          href="https://tioammi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="ecommerce-icon">🛒</div>

          <div className="ecommerce-info">
            <h2>Compra Online</h2>
            <span>Tienda online</span>
            <p>Encuentra todos nuestros productos, en un solo lugar.</p>
          </div>

          <div className="arrow">›</div>
        </a>
      </section>
    </main>
  );
}