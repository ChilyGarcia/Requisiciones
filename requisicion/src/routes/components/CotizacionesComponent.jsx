import React, { useState } from "react";
import styles from "../../styles/hotelStyle.module.css";

export const CotizacionesComponent = ({ estadoSideBar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = [
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
    {
      Acción: "Requisicion",
      Programa: "Descripcion",
    },
  ];
  const tableClassAudits = estadoSideBar ? styles.tableOpen : styles.tableClose;
  const thClassAudits = estadoSideBar ? styles.thOpen : styles.thClose;

  const paginationClassAudits = estadoSideBar
    ? styles.paginationOpen
    : styles.paginationClose;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleInformacion = () => {
    window.location.href = "info-materiales";
  };
  return (
    <>
      <table className={tableClassAudits}>
        <thead>
          <tr>
            <th className={thClassAudits}>Requisicion</th>
            <th className={thClassAudits}>Descripcion</th>
            <th className={thClassAudits}>Accion</th>
          </tr>
        </thead>
        <tbody className={styles["table-hover"]}>
          {currentData.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i} className={styles["text-left"]}>
                  {value}
                </td>
              ))}
              <td>
                <button type="button" onClick={handleInformacion}>
                  Informacion
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={paginationClassAudits}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
};
