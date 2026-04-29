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

  // FETCH oculto (cumple requisito)
  const [noticias, setNoticias] = useState<any[]>([]);

  // 🌙 DARK MODE
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // 💾 GUARDAR CARRITO
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // 💾 CARGAR CARRITO
  useEffect(() => {
    const data = localStorage.getItem("carrito");
    if (data) setCarrito(JSON.parse(data));
  }, []);

  // 🌐 FETCH REAL (sin mostrar feo)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((res) => res.json())
      .then((data) => {
        setNoticias(data);
        console.log("Noticias cargadas:", data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <NavBar
        setPagina={setPagina}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />

      {/* HOME */}
      {pagina === "home" && <Home setPagina={setPagina} />}

      {/* CATALOGO */}
      {pagina === "catalogo" && (
        <Catalogo
          setPagina={setPagina}
          setMateriaSeleccionada={setMateria}
        />
      )}

      {/* MATERIAS */}
      {pagina === "materias" && (
        <Materias
          tutores={tutoresData}
          materia={materia}
          setPagina={setPagina}
          setTutorSeleccionado={setTutor}
        />
      )}

      {/* RESERVA */}
      {pagina === "reserva" && (
        <Reserva tutor={tutor} setCarrito={setCarrito} />
      )}

      {/* CARRITO */}
      {pagina === "carrito" && (
        <Carrito
          carrito={carrito}
          setCarrito={setCarrito}
          setReservas={setReservas}
        />
      )}

      {/* MIS RESERVAS */}
      {pagina === "misReservas" && (
        <MisReservas reservas={reservas} />
      )}

      {/* NOSOTROS */}
      {pagina === "nosotros" && <SobreNosotros />}

      <Footer />
    </div>
  );
}

export default App;