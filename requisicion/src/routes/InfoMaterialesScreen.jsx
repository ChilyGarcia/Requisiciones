import React, { useState } from "react";
import { PanelComponent } from "./components/PanelComponent";
import { InfoMaterialesComponent } from "./components/InfoMaterialesComponent";

export const InfoMaterialesScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };

  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <InfoMaterialesComponent estadoSideBar={isOpen}></InfoMaterialesComponent>
      
    </>
  );
};
