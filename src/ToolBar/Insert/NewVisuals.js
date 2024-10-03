import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function NewVisuals(props) {
    return (
<div className='button-content'>
<button className='button-style'>
        <FontAwesomeIcon icon={faChartBar} />
        </button>
             <span className='button-title'>New Visual</span>
             </div>
    );
}

export default NewVisuals;