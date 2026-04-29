function Catalogo({ setPagina, setMateriaSeleccionada }: any) {
  const materias = [
    { nombre: "Programación", valor: "programacion" },
    { nombre: "Inglés", valor: "ingles" },
    { nombre: "Matemáticas", valor: "matematicas" },
    { nombre: "Física", valor: "fisica" },
    { nombre: "Química", valor: "quimica" },
    { nombre: "Biología", valor: "biologia" },
    { nombre: "Marketing", valor: "marketing" },
    { nombre: "Diseño Gráfico", valor: "diseno" },
    { nombre: "Música", valor: "musica" },
    { nombre: "Finanzas", valor: "finanzas" },
    { nombre: "Historia", valor: "historia" }
  ];

  return (
    <div className="container">
      <h2>Materias disponibles</h2>

      <div className="grid">
        {materias.map((m: any) => (
          <div className="card" key={m.valor}>
            <h3>{m.nombre}</h3>

            <p style={{ opacity: 0.7 }}>
              Aprende {m.nombre} con expertos certificados
            </p>

            <button
              onClick={() => {
                setMateriaSeleccionada(m.valor);
                setPagina("materias");
              }}
            >
              Ver tutores
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;