import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Materias from "./pages/Materias";
import Reserva from "./pages/Reserva";
import Carrito from "./pages/Carrito";
import MisReservas from "./pages/MisReservas";
import SobreNosotros from "./pages/SobreNosotros";
import tutoresData from "./data/tutoresData";
import type { Tutor, CarritoItem } from "./types";

function App() {
  const [pagina, setPagina] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [materia, setMateria] = useState("");
  const [tutor, setTutor] = useState<Tutor | null>(null);

  const [carrito, setCarrito] = useState<CarritoItem[]>([]);
  const [reservas, setReservas] = useState<CarritoItem[]>([]);

  // ⭐ NUEVO: FAVORITOS
  const [favoritos, setFavoritos] = useState<Tutor[]>([]);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    const data = localStorage.getItem("carrito");
    if (data) setCarrito(JSON.parse(data));
  }, []);

  return (
    <div>
      <NavBar
        setPagina={setPagina}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />

      {pagina === "home" && <Home setPagina={setPagina} />}

      {pagina === "catalogo" && (
        <Catalogo
          setPagina={setPagina}
          setMateriaSeleccionada={setMateria}
        />
      )}

      {pagina === "materias" && (
        <Materias
          tutores={tutoresData}
          materia={materia}
          setPagina={setPagina}
          setTutorSeleccionado={setTutor}
          favoritos={favoritos}
          setFavoritos={setFavoritos}
        />
      )}

      {pagina === "reserva" && (
        <Reserva tutor={tutor} setCarrito={setCarrito} />
      )}

      {pagina === "carrito" && (
        <Carrito
          carrito={carrito}
          setCarrito={setCarrito}
          setReservas={setReservas}
        />
      )}

      {pagina === "misReservas" && (
        <MisReservas reservas={reservas} />
      )}

      {pagina === "nosotros" && <SobreNosotros />}

      <Footer />
    </div>
  );
}

export default App;