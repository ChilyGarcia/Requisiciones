import React, { useState } from "react";
import { NuevaEmpresaComponent } from "./components/NuevaEmpresaComponent";
import { PanelComponent } from "./components/PanelComponent";

export const NuevaEmpresaScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };

  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <NuevaEmpresaComponent estadoSideBar={isOpen}></NuevaEmpresaComponent>
    </>
  );
};
