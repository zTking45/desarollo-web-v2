import { useState, useEffect } from "react";
import type { CarritoItem } from "../types";

function Reserva({ tutor, setCarrito }: any) {

  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [modalidad, setModalidad] = useState(""); // ✅ ahora es string
  const [minFecha, setMinFecha] = useState("");

  // 🔥 mínimo 5 días
  useEffect(() => {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() + 5);
    setMinFecha(hoy.toISOString().split("T")[0]);
  }, []);

  if (!tutor) return <p>No hay tutor seleccionado</p>;

  function agregar() {
    if (!fecha || !hora || !modalidad) {
      alert("Completa todos los campos");
      return;
    }

    const nueva: CarritoItem = {
      nombre: tutor.especialidad,
      tutor: tutor.nombre,
      fecha,
      hora,
      modalidad, // ✅ ya no es array
      descripcion: tutor.descripcion,
      precio: tutor.precio
    };

    setCarrito((prev: CarritoItem[]) => [...prev, nueva]);

    alert("✅ Clase agregada al carrito");
  }

  return (
    <div className="container">
      <div className="card">

        <h2>{tutor.nombre}</h2>
        <p className="subtitle">{tutor.especialidad}</p>
        <p className="descripcion">{tutor.descripcion}</p>

        <h3>Selecciona fecha</h3>
        <input
          type="date"
          min={minFecha}
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <small className="hint">
          Solo puedes reservar con mínimo 5 días de anticipación
        </small>

        <h3>Selecciona hora</h3>
        <select value={hora} onChange={(e) => setHora(e.target.value)}>
          <option value="">Selecciona hora</option>

          {["10:00","11:00","12:00","13:00","14:00","15:00","16:00"].map((h, i) => (
            <option key={i}>{h}</option>
          ))}
        </select>

        <h3>Modalidad</h3>

        {/* ✅ RADIO (SOLO UNA OPCIÓN) */}
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="modalidad"
              value="Virtual"
              checked={modalidad === "Virtual"}
              onChange={(e) => setModalidad(e.target.value)}
            />
            Virtual 💻
          </label>

          <label>
            <input
              type="radio"
              name="modalidad"
              value="Presencial"
              checked={modalidad === "Presencial"}
              onChange={(e) => setModalidad(e.target.value)}
            />
            Presencial 📍
          </label>
        </div>

        <button onClick={agregar}>
          Agregar al carrito
        </button>

        <p className="warning">
          ⚠️ Si no asistes a la tutoría en la hora acordada,
          no se realizará devolución del dinero.
        </p>

      </div>
    </div>
  );
}

export default Reserva;