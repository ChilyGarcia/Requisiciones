import React, { useState } from "react";
import { PanelComponent } from "./components/PanelComponent";
import { CotizarEmpresaComponent } from "./components/CotizarEmpresaComponent";

export const CotizarEmpresaScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };

  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <CotizarEmpresaComponent estadoSideBar={isOpen}></CotizarEmpresaComponent>
    </>
  );
};
