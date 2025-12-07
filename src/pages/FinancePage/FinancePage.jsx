import React from 'react'
import styles from "./FinancePage.module.css"

function FinancePage() {
    return (
        <>
            <div className={styles.blockBalance}>
                <div className={styles.textBalance}>
                    <p className={styles.titleBalance}>Баланс:</p>
                </div>
                <div className={styles.blockControls}>
                    <span className={styles.moneyTitle}><p className={styles.descrMoney}>00.00 UAH</p></span>
                    <button className={styles.btnConfirm}>Підтвердити</button>
                </div>
            </div>
            <div className={styles.parentCount}>
                <div className={styles.boxCount}>
                    <p className={styles.titleCount}>Перейти до розрахунків</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_146)">
                            <path d="M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z" fill="#52555F" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_146">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default FinancePage