import React, {useState} from "react";
import { PanelComponent } from "./components/PanelComponent";
import { EstadoRequisicionComponent } from "./components/EstadoRequisicionComponent";

export const EstadoRequisicionScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };

  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <EstadoRequisicionComponent estadoSideBar={isOpen}></EstadoRequisicionComponent>
    </>
  );
};
