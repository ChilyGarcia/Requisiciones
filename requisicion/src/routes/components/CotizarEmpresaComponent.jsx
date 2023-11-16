import React, { useState } from "react";
import styles from "../../styles/empleadosStyle.module.css";

export const CotizarEmpresaComponent = ({ estadoSideBar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = [
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
    {
      Código: "Empresa",
      Programa: "Informacion de la empresa",
    },
  ];

  const tableClass = estadoSideBar ? styles.tableOpen : styles.tableClose;
  const thClass = estadoSideBar ? styles.thOpen : styles.thClose;
  const inputContainerClass = estadoSideBar
    ? styles.inputContainerOpen
    : styles.inputContainerClose;

  const paginationClass = estadoSideBar
    ? styles.paginationOpen
    : styles.paginationClose;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNuevaEmpresa = () => {
    window.location.href = "nueva-empresa";
  };
  return (
    <>
      <div className={inputContainerClass}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Nombre empresa"
            className="form-control"
          />
          <div className={styles.buttonGroup}>
            <button className="btn btn-outline-danger">Buscar</button>
            <button
              className="btn btn-outline-success"
              onClick={handleNuevaEmpresa}
            >
              Nuevo
            </button>
          </div>
        </div>
      </div>
      <table className={tableClass}>
        <thead>
          <tr>
            <th className={thClass}>Empresa</th>
            <th className={thClass}>Informacion de la empresa</th>
            <th className={thClass}>Cotizar</th>
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
                <button>Cotizacion</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={paginationClass}>
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
