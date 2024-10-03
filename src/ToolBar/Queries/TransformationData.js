import { faEarth} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function TransformationData(props) {
    return (
      <div className='button-content'>
        <button className='button-style'>
        <FontAwesomeIcon icon={faEarth} />
        </button>
             <span className='button-title'>Visuals</span>
             </div>
    );
}

export default TransformationData;