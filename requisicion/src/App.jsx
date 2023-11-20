import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginSignInScreen } from "./routes/LoginSignInScreen";
import { CotizacionesScreen } from "./routes/CotizacionesScreen";
import { EstadoRequisicionScreen } from "./routes/EstadoRequisicionScreen";
import { CotizarScreen } from "./routes/CotizarScreen";
import { CotizarEmpresaScreen } from "./routes/CotizarEmpresaScreen";
import { NuevaEmpresaScreen } from "./routes/NuevaEmpresaScreen";
import { InfoMaterialesScreen } from "./routes/InfoMaterialesScreen";

import { NewRequisicionScreen } from "./routes/NewRequisicionScreen";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginSignInScreen />} />
        <Route path="/cotizar" element={<CotizarScreen/>}></Route>
        <Route path="/estado-requisicion" element={<EstadoRequisicionScreen/>}></Route>
        <Route path="/new-requisicion" element={<NewRequisicionScreen/>}></Route>
        <Route path="/cotizaciones" element={<CotizacionesScreen />}></Route>
        <Route path="/cotizar-empresa" element={<CotizarEmpresaScreen/>}></Route>
        <Route path="/nueva-empresa" element={<NuevaEmpresaScreen/>}></Route>
        <Route path="/info-materiales" element={<InfoMaterialesScreen/>}></Route>
      </Routes>
    </>
  );
};
