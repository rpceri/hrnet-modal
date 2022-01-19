import React from 'react'

import { HrnetModal } from 'hrnet-modal'
import { useState } from 'react';
import 'hrnet-modal/dist/index.css'


  
const App = () => {
  /** for modal */
  const [messageInformation, setMessageInformation] = useState('test');

  const [isModalVisible, setModaleVisible] = useState(true);
  const handleModalResponse = () => {
      setModaleVisible(false);
      setMessageInformation('');
  }
  /** end for modal */

  return <HrnetModal isModalVisible={isModalVisible} message={messageInformation} buttonLabel='Ok' handleModalResponse={handleModalResponse} />
}

export default App
