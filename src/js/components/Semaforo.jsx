import React, { useState } from "react";
import "../../styles/index.css";

function Semaforo() {
  const [color, setColor] = useState("red");

  return (
    <div className="contenedor">
      {/* para establecer los colores de las luces*/}
      <div className="semaforo">
        <div className={`luz ${color === "red" ? "roja" : ""}`}></div>
        <div className={`luz ${color === "yellow" ? "amarilla" : ""}`}></div>
        <div className={`luz ${color === "green" ? "verde" : ""}`}></div>
      </div>

      {/* botones para cambiar el color */}
      <div className="botones">
        <button className="rojo" onClick={() => setColor("red")}>Rojo</button>
        <button className="amarillo" onClick={() => setColor("yellow")}>Amarillo</button>
        <button className="verde" onClick={() => setColor("green")}>Verde</button>
      </div>
    </div>
  );
}

export default Semaforo;

