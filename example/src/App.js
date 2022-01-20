import React from 'react'
import { useState } from 'react';
import { HrnetModal } from 'hrnet-modal'

import 'hrnet-modal/dist/index.css'

import './index.css';
  
const App = () => {
  /** for modal */
  //const [messageInformation, setMessageInformation] = useState('test');
  const messageInformation = 'test';

  const [isModalVisible, setModaleVisible] = useState(true);
  const handleModalResponse = () => {
      setModaleVisible(false);
     // setMessageInformation('');
  }
  /** end for modal */

  return <HrnetModal isDraggable='1' isModalVisible={isModalVisible} message={messageInformation} buttonLabel='Ok' handleModalResponse={handleModalResponse} />
}

export default App
