import { useState } from "react";
import type { Tutor } from "../types";

interface Props {
  tutores: Tutor[];
  materia: string;
  setPagina: (pagina: string) => void;
  setTutorSeleccionado: (tutor: Tutor) => void;
}

function Materias({ tutores, materia, setPagina, setTutorSeleccionado }: Props) {

  // 🔥 estados (requisito)
  const [busqueda, setBusqueda] = useState("");
  const [filtroPrecio, setFiltroPrecio] = useState("todos");

  // 🔥 imágenes por materia
  const imagenes: Record<string, string> = {
    programacion: "/imagenes/programacion1.png",
    ingles: "/imagenes/ingles.png",
    matematicas: "/imagenes/matematicas.png",
    fisica: "/imagenes/fisica.png",
    quimica: "/imagenes/quimica.png",
    biologia: "/imagenes/biologia.png",
    marketing: "/imagenes/marketing.png",
    diseno: "/imagenes/diseño1.png",
    musica: "/imagenes/musica.png",
    finanzas: "/imagenes/finanzas.png",
    historia: "/imagenes/historia.png",
  };

  // 🔥 filtros combinados
  const filtrados = tutores
    .filter(t => t.materia === materia)
    .filter(t => t.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    .filter(t => {
      if (filtroPrecio === "bajo") return t.precio <= 18000;
      if (filtroPrecio === "medio") return t.precio > 18000 && t.precio <= 22000;
      if (filtroPrecio === "alto") return t.precio > 22000;
      return true;
    });

  return (
    <div className="container">

      <h2 className="title">Tutores disponibles</h2>

      {/* 🔥 FILTROS */}
      <div className="filters">

        <input
          type="text"
          placeholder="Buscar tutor..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select onChange={(e) => setFiltroPrecio(e.target.value)}>
          <option value="todos">Todos los precios</option>
          <option value="bajo">Económicos</option>
          <option value="medio">Intermedios</option>
          <option value="alto">Premium</option>
        </select>

      </div>

      {/* 🔥 GRID */}
      <div className="grid">

        {filtrados.map(t => (
          <div className="card" key={t.id}>

            {/* 🔥 IMAGEN */}
            <img
              src={imagenes[t.materia]}
              alt={t.materia}
              className="card-img"
            />

            <h3>{t.nombre}</h3>

            <p className="subtitle">{t.especialidad}</p>

            <p className="descripcion">{t.descripcion}</p>

            <p className="extra">
              📚 Tutoría enfocada en resultados reales, con práctica,
              ejercicios guiados y seguimiento personalizado.
            </p>

            <p className="price">
              {t.precio.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })}
            </p>

            <button
              onClick={() => {
                setTutorSeleccionado(t);
                setPagina("reserva");
              }}
            >
              Agendar clase
            </button>

          </div>
        ))}

      </div>

      {/* 🔥 MENSAJE SI NO HAY RESULTADOS */}
      {filtrados.length === 0 && (
        <p className="empty">
          ❌ No se encontraron tutores con esos filtros
        </p>
      )}

    </div>
  );
}

export default Materias;