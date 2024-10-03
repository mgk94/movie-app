import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Copy(props) {
    return (
      <div className='button-content'>
        <button className='button-style'>
        <FontAwesomeIcon icon={faCopy} />
        </button>
             <span className='button-title'>Copy</span>
             </div>
        
    );
}

export default Copy;