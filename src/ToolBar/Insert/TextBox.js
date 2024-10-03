import { faTextWidth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function TextBox(props) {
    return (
      <div className='button-content'>
        <button className='button-style'>
        <FontAwesomeIcon icon={faTextWidth} /> 
        </button>
             <span className='button-title'>Text Box</span>
             </div>
    );
}

export default TextBox;