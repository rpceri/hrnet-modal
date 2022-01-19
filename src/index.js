import React from 'react'
import styles from './styles.module.css'

export const HrnetModal = (props) => {
  return ( 
    <div className={styles.modalrpb}>
        {props.isModalVisible ? 
        <div className={styles.modalrp}>
            <p className={styles.modalrp__text}>{props.message}</p>
            <button className={styles.modalrp__button} onClick={() => props.handleModalResponse()}>{props.buttonLabel}</button>
            <button className={styles.modalrp__close}  onClick={() => props.handleModalResponse()}>X</button>
        </div> : ''}
    </div>
      );
}