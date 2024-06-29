import React from 'react';
import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./style.css"

export default function PopupWindow() {
  return (
    <Popup trigger={<button>Trigger</button>} position="right center">
      <div className='DP'>Popup content here !!</div>
    </Popup>
  );
};