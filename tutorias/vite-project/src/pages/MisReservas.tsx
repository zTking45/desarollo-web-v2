import type { CarritoItem } from "../types";

function MisReservas({ reservas }: any) {

  function descargarTXT() {
    if (reservas.length === 0) {
      alert("No hay reservas");
      return;
    }

    let contenido = "📚 RESUMEN DE RESERVAS - TutorConnect\n\n";

    let total = 0;

    reservas.forEach((r: CarritoItem, i: number) => {
      total += r.precio;
      contenido += `Reserva ${i + 1}\n`;
      contenido += `Tutor: ${r.tutor}\n`;
      contenido += `Especialidad: ${r.nombre}\n`;
      contenido += `Descripción: ${r.descripcion}\n`;
      contenido += `Modalidad: ${r.modalidad}\n`;
      contenido += `Fecha: ${r.fecha}\n`;
      contenido += `Hora: ${r.hora}\n`;
      contenido += `Precio: $${r.precio.toLocaleString("es-CO")} COP\n`;
      contenido += `--------------------------------------\n`;
    });

      // 💰 TOTAL FINAL
    contenido += `\n💰 TOTAL A PAGAR: $${total.toLocaleString("es-CO")} COP\n`;    

    contenido += `\n⚠️ IMPORTANTE:\nSi no asiste a la tutoría, no hay devolución de dinero.\n`;

    const blob = new Blob([contenido], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "reservas_tutorconnect.txt";
    a.click();

    URL.revokeObjectURL(url);
  }

  const total = reservas.reduce(
    (acc: number, r: CarritoItem) => acc + r.precio,
    0
  );

  return (
    <div className="container">
      <h2>Mis Reservas 📚</h2>

      {reservas.length === 0 ? (
        <p>No tienes reservas aún</p>
      ) : (
        <>
          <div className="grid">
            {reservas.map((r: CarritoItem, i: number) => (
              <div className="card reserva-card" key={i}>
                <h3>{r.nombre}</h3>

                <p><strong>{r.tutor}</strong></p>
                <p>{r.descripcion}</p>

                <p>📅 {r.fecha}</p>
                <p>⏰ {r.hora}</p>
                <p>📍 {r.modalidad}</p>

                <p className="price">
                  ${r.precio.toLocaleString("es-CO")} COP
                </p>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="total-box">
            <h3>
              Total pagado: ${total.toLocaleString("es-CO")} COP
            </h3>

            <button onClick={descargarTXT}>
              Descargar reserva en TXT
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MisReservas;