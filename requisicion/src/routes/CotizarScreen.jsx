import React, { useState } from "react";
import { PanelComponent } from "./components/PanelComponent";
import { CotizarComponent } from "./components/CotizarComponent";
export const CotizarScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };

  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <CotizarComponent estadoSideBar={isOpen}></CotizarComponent>
    </>
  );
};
