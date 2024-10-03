import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function NewMeasure(props) {
    return (
      <div className='button-content'>
        <button className='button-style'>
          <FontAwesomeIcon icon={faCalculator} />
          </button>
             <span className='button-title'> New measure</span>
             </div>
    );
}

export default NewMeasure;