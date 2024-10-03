import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Paste(props) {
    return (
      <div className='button-content'>
        <button className='button-style'>
      <FontAwesomeIcon icon={faPaintBrush} />
      </button>
           <span className='button-title'>Paste</span>
           </div>
    );
}

export default Paste;