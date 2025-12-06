import React from "react";
import styles from './Background.module.css';

export default function Background() {
    
    return(
        <div className="backgroundContainer">
       <div className={styles.mainBackground}></div>

        <div className={styles.backgroundImg}>
      <img src="./img/icon1.svg" className={styles.icon1} alt="" />
      <img src="/img/icon2.svg" className={styles.icon2} alt="" />
      <img src="/img/icon3.svg" className={styles.icon3} alt="" />
      

       <img src="./img/icon1.1.svg" className={styles.icon4} alt="" />
      <img src="/img/icon2.2.svg" className={styles.icon5} alt="" />
      <img src="/img/icon3.3.svg" className={styles.icon6} alt="" />
     
    </div>
        </div>
    )
}