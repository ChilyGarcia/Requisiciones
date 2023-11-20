import React from "react";
import styles from "../../styles/trasladoStyle.module.css";

export const NewRequisicionComponent = () => {
  return (
    <>
      <>
        <form className={styles.formNew}>
          <div className={styles.group}>
            <input type="text" />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.labelForm}>Nuevo material</label>
          </div>

          <div className={styles.group}>
            {/* Reemplaza el input de texto con un select */}
            <select className="form-select">
              <option value="user">Proyecto 1</option>
              <option value="admin">Proyecto 2</option>
              <option value="director">Proyecto 3</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
          </div>
          <button
            type="button"
            className={`${styles["button"]} ${styles["buttonBlue"]}`}
          >
            Nueva requisicion
            <div className={`${styles["ripples"]} ${styles["buttonRipples"]}`}>
              <span className="ripplesCircle"></span>
            </div>
          </button>
        </form>
      </>
    </>
  );
};
