import { useState } from "react";
import type { Tutor } from "../types";

interface Props {
  tutores: Tutor[];
  materia: string;
  setPagina: (pagina: string) => void;
  setTutorSeleccionado: (tutor: Tutor) => void;

  // ⭐ NUEVO
  favoritos: Tutor[];
  setFavoritos: (t: Tutor[]) => void;
}

function Materias({
  tutores,
  materia,
  setPagina,
  setTutorSeleccionado,
  favoritos,
  setFavoritos
}: Props) {

  const [busqueda, setBusqueda] = useState("");
  const [filtroPrecio, setFiltroPrecio] = useState("todos");

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

  const filtrados = tutores
    .filter(t => t.materia === materia)
    .filter(t => t.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    .filter(t => {
      if (filtroPrecio === "bajo") return t.precio <= 18000;
      if (filtroPrecio === "medio") return t.precio > 18000 && t.precio <= 22000;
      if (filtroPrecio === "alto") return t.precio > 22000;
      return true;
    });

  // ⭐ DRAG START
  function handleDragStart(e: any, tutor: Tutor) {
    e.dataTransfer.setData("tutor", JSON.stringify(tutor));
  }

  // ⭐ DROP EN FAVORITOS
  function handleDrop(e: any) {
    const data = e.dataTransfer.getData("tutor");
    const tutor: Tutor = JSON.parse(data);

    const existe = favoritos.find(f => f.id === tutor.id);
    if (existe) return;

    setFavoritos([...favoritos, tutor]);
  }

  return (
    <div className="container">

      <h2>Tutores disponibles</h2>

      <div style={{ display: "flex", gap: "20px" }}>

        {/* 🔵 LISTA TUTORES */}
        <div style={{ flex: 2 }}>

          <input
            type="text"
            placeholder="Buscar tutor..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          <select onChange={(e) => setFiltroPrecio(e.target.value)}>
            <option value="todos">Todos</option>
            <option value="bajo">Económicos</option>
            <option value="medio">Medios</option>
            <option value="alto">Premium</option>
          </select>

          <div className="grid">
            {filtrados.map(t => (
              <div
                className="card"
                key={t.id}
                draggable
                onDragStart={(e) => handleDragStart(e, t)}
              >
                <img src={imagenes[t.materia]} className="card-img" />

                <h3>{t.nombre}</h3>
                <p>{t.especialidad}</p>
                <p className="price">
                  {t.precio.toLocaleString("es-CO")}
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

        </div>

        {/* ⭐ FAVORITOS DROP ZONE */}
        <div
          style={{
            flex: 1,
            border: "2px dashed #14b8a6",
            padding: "15px",
            borderRadius: "12px",
            minHeight: "300px"
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <h3>⭐ Selecciona tus docentes favoritos</h3>

          {favoritos.length === 0 ? (
            <p>Arrastra aquí tus tutores favoritos</p>
          ) : (
            favoritos.map(f => (
              <div key={f.id} className="card" style={{ marginBottom: "10px" }}>
                <strong>{f.nombre}</strong>
                <p>{f.especialidad}</p>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default Materias;