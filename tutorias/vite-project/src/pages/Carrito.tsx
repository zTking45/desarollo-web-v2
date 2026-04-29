import type { CarritoItem } from "../types";

function Carrito({ carrito, setCarrito, setReservas }: any) {

  const total = carrito.reduce(
    (acc: number, item: CarritoItem) => acc + item.precio,
    0
  );

  // 🖱 DRAG
  function handleDragStart(e: any, index: number) {
    e.dataTransfer.setData("index", index);
  }

  function handleDrop(e: any, index: number) {
    const from = e.dataTransfer.getData("index");
    const nuevo = [...carrito];
    const item = nuevo.splice(from, 1)[0];
    nuevo.splice(index, 0, item);
    setCarrito(nuevo);
  }

  function eliminar(i: number) {
    setCarrito(carrito.filter((_: any, index: number) => index !== i));
  }

  function finalizarCompra() {
    if (!window.confirm("¿Confirmas la compra?")) return;

    setReservas((prev: CarritoItem[]) => [...prev, ...carrito]);
    setCarrito([]);

    alert("✅ Compra realizada");
  }

  return (
    <div className="container">
      <h2>Carrito 🛒</h2>

      {carrito.length === 0 ? (
        <p>No hay tutorías</p>
      ) : (
        <div className="cart-layout">

          {/* LISTA DE CARRITO */}
          <div className="cart-items">

            {carrito.map((item: CarritoItem, i: number) => (
              <div
                className="card cart-card"
                key={i}
                draggable
                onDragStart={(e) => handleDragStart(e, i)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, i)}
              >
                <h3>{item.nombre}</h3>

                <p>👨‍🏫 {item.tutor}</p>
                <p>📅 {item.fecha}</p>
                <p>⏰ {item.hora}</p>
                <p>📍 {item.modalidad}</p>

                <p className="price">
                  ${item.precio.toLocaleString("es-CO")}
                </p>

                <button onClick={() => eliminar(i)}>
                  Eliminar
                </button>
              </div>
            ))}

          </div>

          {/* RESUMEN */}
          <div className="cart-summary">
            <h3>Resumen de compra</h3>

            <p>Total de clases:</p>
            <h2>{carrito.length}</h2>

            <p>Total a pagar:</p>
            <h2 className="price">
              ${total.toLocaleString("es-CO")} COP
            </h2>

            <button onClick={finalizarCompra}>
              Finalizar compra
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Carrito;