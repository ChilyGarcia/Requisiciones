import React from "react";
import styles from "../../styles/trasladoStyle.module.css";

export const NuevaEmpresaComponent = () => {
  return (
    <>
      <form className={styles.formNew}>
        <div className={styles.group}>
          <input type="text" />
          <span className={styles.highlight}></span>

          <span className={styles.bar}></span>
          <label className={styles.labelForm}>Empresa</label>
        </div>
        <div className={styles.group}>
          <input type="text" />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.labelForm}>Informacion de la empresa</label>
        </div>

        <button
          type="button"
          className={`${styles["button"]} ${styles["buttonBlue"]}`}
        >
          Nueva empresa
          <div className={`${styles["ripples"]} ${styles["buttonRipples"]}`}>
            <span className="ripplesCircle"></span>
          </div>
        </button>
      </form>
    </>
  );
};
