import React from 'react';
import styles from './Modal.module.css';

function Modal(){
    return(
        <>
            <div style={styles.modalMain} className='modalMain'>
                <p style={styles.titleModal} className='titleModal'>Ви впевнені?</p>
                <button type='button' style={styles.btnExit} className='btnExit'>ТАК</button>
                <button type='button' style={styles.btnStay} className='btnStay'>НІ</button>
            </div>
        </>
    )
}

export default Modal