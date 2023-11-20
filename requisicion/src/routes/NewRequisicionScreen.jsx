import React, { useState } from "react";
import { PanelComponent } from "./components/PanelComponent";
import { NewRequisicionComponent } from "./components/NewRequisicionComponent";

export const NewRequisicionScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };
  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <NewRequisicionComponent estadoSideBar={isOpen}></NewRequisicionComponent>
    </>
  );
};
