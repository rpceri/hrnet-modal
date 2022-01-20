# hrnet-modal-rp

> modal with close button

it can be draggable, and you can customize it whith css

[![NPM](https://img.shields.io/npm/v/hrnet-modal.svg)](https://www.npmjs.com/package/hrnet-modal-rp) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Dependencies

-   "react-draggable": "^4.4.4"

## Install

```bash
npm install --save hrnet-modal-rp or npm i hrnet-modal-rp –save
```

## Usage

See /example/src/App.js, 
if you use get the github repository, you  can test this component like this :
in the main folder, open a terminal and do :
cd example
yarn start

```jsx
import React, { Component } from 'react'

import HrnetModal from 'hrnet-modal-rp'
import 'hrnet-modal-rp/dist/index.css'

import './index.css';


const [isModalVisible, setModaleVisible] = useState(true);
  const handleModalResponse = () => {
      setModaleVisible(false);
}

class Example extends Component {
  render() {
    return <HrnetModal isDraggable='1' isModalVisible={isModalVisible} message='test' buttonLabel='Ok' handleModalResponse={handleModalResponse} />
  }
}
```

```css
/* the root div */
.hrnet-modal-rp-div {
  min-height : 130px;
  min-width : 100px;

  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 900;

  justify-content: center; /* alignement vertical */

  background-color: yellow; /*rgba(139, 161, 26, 0.97); */
  box-shadow : 10px 10px 5px #718121;
  border: 1px dotted rgb(94, 92, 92)
}

/* the text message */
.hrnet-modal-rp-text{
  padding: 0 50px;
}

/* the main close button */
.hrnet-modal-rp-bt-1st {
  background-color: red;
}

/* the second close button */
.hrnet-modal-rp-bt-2d {
  right : -10px;
  top : -8px;
  margin-top: 0;
  font-size: 0.9rem;
  padding: 0 5px;
  border-radius: 20px;
  background-color: orange;
}
```

As you see, you have to :
* explain to the component when it have to be displayed with **isDraggable** props
* explain to the component the message to  display with **message** props
* explain to the component the label of the button with **buttonLabel** props
* use  *useState* to order to the component when it have to be displayed with **isModalVisible** and a handle that let the component hide himself


## License

MIT © [rpceri](https://github.com/rpceri)
