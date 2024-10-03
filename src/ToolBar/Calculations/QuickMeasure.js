import { faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function QuickMeasure(props) {
    return (
      <div className='button-content'>
        <button className='button-style'>
          <FontAwesomeIcon icon={faTable} />
          </button>
             <span className='button-title'> Quick measure</span>
             </div>
    );
}

export default QuickMeasure;