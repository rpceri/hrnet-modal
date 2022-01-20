import React from 'react'
import styles from './styles.module.css'
import Draggable from 'react-draggable';

/**
* Return template of a modal windows
*
* @component isDraggable
* @summary used in PaIndex
* @param { string } props.isDraggable to set the modal dragable, 0 or 1, ex: '1'
* @param { string } props.handleModalResponse name of handle fonction to hide modal, ex: 1
* @param { boolean } props.isModalVisible ex: true
* @param { string } props.message message to display in the modal
* @param { string } props.buttonLabel label fir tje button
* @return { HTMLElement }
*/
/* ??? another way to condition in render ? */
export const HrnetModal = (props) => {
  return ( 
    <div className={styles.modalrpFrst }>
        {props.isModalVisible && props.isDraggable === '1' &&
          <Draggable>
            <div className={styles.modalrpSd + ` hrnet-modal-rp-div`}  >
            <p className={styles.modalrp__text + ` hrnet-modal-rp-text`}>{props.message}</p>
            <button className={styles.modalrp__button + ` hrnet-modal-rp-bt-1st`} onClick={() => props.handleModalResponse()}>{props.buttonLabel}</button>
            <button className={styles.modalrp__close + ` hrnet-modal-rp-bt-2d`}  onClick={() => props.handleModalResponse()}>X</button>
            </div>
            </Draggable>
        }
        {props.isModalVisible && props.isDraggable !== '1' && 
        <div className={styles.modalrpSd + ` hrnet-modal-rp-div`}  >
            <p className={styles.modalrp__text + ` hrnet-modal-rp-text`}>{props.message}</p>
            <button className={styles.modalrp__button + ` hrnet-modal-rp-bt-1st`} onClick={() => props.handleModalResponse()}>{props.buttonLabel}</button>
            <button className={styles.modalrp__close + ` hrnet-modal-rp-bt-2d`}  onClick={() => props.handleModalResponse()}>X</button>
        </div>
        }
    </div>
      );
}