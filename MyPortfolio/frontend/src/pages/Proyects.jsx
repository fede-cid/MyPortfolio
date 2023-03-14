import React from "react";
import ContainerCards from "../components/cards/container/ContainerCards";
import Navbar from "../components/navegacion/Navbar";
function Proyects() {
  return (
    <div>
      <Navbar />
      <ContainerCards />

      {/* <div
        style={{
          width: "100%",
          maxWidth: "768px",
          margin: "0 auto",
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <button className="btnprimario width-100">Botón primario</button>
        <button className="btnsecundario">Botón secundario</button>
        <button className="btnicono">Con Icono</button>
      </div> */}
    </div>
  );
}

export default Proyects;
