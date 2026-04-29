interface Props {
  setPagina: (p: string) => void;
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

function NavBar({ setPagina, darkMode, setDarkMode }: Props) {
  return (
    <nav>
      <h2>TutorConnect</h2>

      <div>
        <button onClick={() => setPagina("home")}>Inicio</button>
        <button onClick={() => setPagina("catalogo")}>Materias</button>
        <button onClick={() => setPagina("misReservas")}>Reservas</button>

        {/* carrito */}
        <button className="carrito-btn" onClick={() => setPagina("carrito")}>
          🛒
        </button>

        {/* dark mode */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;