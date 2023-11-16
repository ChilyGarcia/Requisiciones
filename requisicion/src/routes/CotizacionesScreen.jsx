import React, { useState } from "react";
import { PanelComponent } from "./components/PanelComponent";
import { CotizacionesComponent } from "./components/CotizacionesComponent";
export const CotizacionesScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };

  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <CotizacionesComponent estadoSideBar={isOpen} ></CotizacionesComponent>

    </>
  );
};
