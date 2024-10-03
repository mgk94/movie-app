import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function MoreVisuals(props) {
    return (
      <div className='button-content'>
        <button className='button-style'>
          <FontAwesomeIcon icon={faEllipsisH} /> 
          </button>
             <span className='button-title'>More Visuals</span>
             </div>
    );
}

export default MoreVisuals;