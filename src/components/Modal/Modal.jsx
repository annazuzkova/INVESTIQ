import React from 'react';
import styles from "./Modal.module.css"

function Modal(){
    return(
        <>
            {/* <div className={styles.modalMain}>
                <p className={styles.titleModal}>Ви дійсно хочете вийти?</p>
                <button type='button' className={styles.btnExit}>ТАК</button>
                <button type='button' className={styles.btnStay}>НІ</button>
            </div> */}
            <div className={styles.modalMain}>
                <p className={styles.titleModal}>Ви впевнені?</p>
                <button type='button' className={styles.btnExit}>ТАК</button>
                <button type='button' className={styles.btnStay}>НІ</button>
            </div>
        </>
    )
}

export default Modal