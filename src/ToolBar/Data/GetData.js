import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function GetData(props) {
    return (
      <div className='button-content'>
        <button className='button-style'>
          <FontAwesomeIcon icon={faDatabase} />
          </button>
             <span className='button-title'>Get Data</span>
             </div>
    );
}

export default GetData;