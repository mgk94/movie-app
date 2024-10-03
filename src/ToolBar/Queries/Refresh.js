import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Refresh(props) {
    return (
      <div className='button-content'>
        <button className='button-style'>
          <FontAwesomeIcon icon={faSyncAlt}  /> 
          </button>
             <span className='button-title'>Refresh data</span>
             </div>
    );
}

export default Refresh;