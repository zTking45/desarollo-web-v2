import { useState } from "react";

function Home({ setPagina }: any) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [modalidad, setModalidad] = useState("");

  function validarEmail(email: string) {
    return email.includes("@") && email.includes(".");
  }

  function enviarFormulario() {
    if (!nombre.trim()) {
      alert("⚠️ Ingresa tu nombre completo");
      return;
    }

    if (!correo.trim()) {
      alert("⚠️ Ingresa tu correo electrónico");
      return;
    }

    if (!validarEmail(correo)) {
      alert("⚠️ Correo inválido");
      return;
    }

    if (!modalidad) {
      alert("⚠️ Selecciona modalidad");
      return;
    }

    if (mensaje.trim().length < 10) {
      alert("⚠️ Escribe un mensaje mínimo de 10 caracteres");
      return;
    }

    alert(
      `✅ Solicitud enviada correctamente\n\nNombre: ${nombre}\nModalidad: ${modalidad}`
    );

    setNombre("");
    setCorreo("");
    setMensaje("");
    setModalidad("");
  }

  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Aprende con Tutores Profesionales 🚀</h1>

          <p>
            Educación personalizada en programación,
            idiomas, matemáticas, diseño y mucho más.
          </p>

          <div className="hero-buttons">
            <button onClick={() => setPagina("catalogo")}>
              Ver Materias
            </button>

            <button
              className="secondary-btn"
              onClick={() => setPagina("nosotros")}
            >
              Sobre Nosotros
            </button>
          </div>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="Tutor"
          width="260"
        />
      </section>

      {/* BENEFICIOS */}
      <section className="beneficios">
        <div className="card mini">
          <h3>+100 Tutores</h3>
          <p>Profesionales verificados.</p>
        </div>

        <div className="card mini">
          <h3>Horarios Flexibles</h3>
          <p>Reserva cuando quieras.</p>
        </div>

        <div className="card mini">
          <h3>Virtual o Presencial</h3>
          <p>Aprende a tu manera.</p>
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section className="card">
        <h2>¿Quiénes Somos?</h2>

        <p>
          TutorConnect conecta estudiantes con tutores expertos,
          facilitando clases personalizadas, seguimiento y mejores resultados.
        </p>
      </section>

      {/* NOVEDADES DESDE SERVIDOR */}
      <section className="card" style={{ marginTop: "30px" }}>
        <h2>Novedades 📢</h2>

        <p>
          Descubre noticias, recursos educativos y novedades para estudiantes.
        </p>

        <button
          style={{ marginTop: "15px" }}
          onClick={() =>
            window.open(
              "https://jsonplaceholder.typicode.com/posts?_limit=3",
              "_blank"
            )
          }
        >
          Ver novedades
        </button>
      </section>

      {/* CONTACTO */}
      <section className="card" style={{ marginTop: "35px" }}>
        <h2>Contáctanos 📩</h2>

        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <h3 style={{ marginTop: "20px" }}>
          Modalidad Preferida
        </h3>

        <label className="radio-box">
          <input
            type="radio"
            name="modalidad"
            value="Virtual"
            checked={modalidad === "Virtual"}
            onChange={(e) => setModalidad(e.target.value)}
          />
          Virtual 💻
        </label>

        <label className="radio-box">
          <input
            type="radio"
            name="modalidad"
            value="Presencial"
            checked={modalidad === "Presencial"}
            onChange={(e) => setModalidad(e.target.value)}
          />
          Presencial 📍
        </label>

        <textarea
          rows={5}
          placeholder="Cuéntanos qué deseas aprender..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />

        <button
          style={{ marginTop: "15px" }}
          onClick={enviarFormulario}
        >
          Enviar Solicitud
        </button>
      </section>
    </div>
  );
}

export default Home;