import React from "react";
import styles from "../../styles/estadoRequisicionStyle.module.css";

export const EstadoRequisicionComponent = ({ estadoSideBar }) => {
  const containerClass = estadoSideBar
    ? styles.containerOpen
    : styles.containerClosed;

  const handleCotizar = () => {
    window.location.href = "cotizar";
  };
  return (
    <>
      <div className={containerClass}>
        <div
          className={styles.card}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>
            <strong>Titulo requisicion</strong>
          </p>
          <p>Informacion requisicion</p>
          <p>Cotizacion: 50%</p>
          <p>Aprobado: 20%</p>
          <p>Comprado: 5%</p>

          <button onClick={handleCotizar}>Cotizar</button>
        </div>

        <div
          className={styles.card}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>
            <strong>Titulo requisicion</strong>
          </p>
          <p>Informacion requisicion</p>
          <p>Cotizacion: 50%</p>
          <p>Aprobado: 20%</p>
          <p>Comprado: 5%</p>

          <button onClick={handleCotizar}>Cotizar</button>
        </div>
      </div>
    </>
  );
};
