import {  faPieChart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Chart(props) {
    return (
        <div className='button-content'>
        <button className='button-style'>
        <FontAwesomeIcon icon={faPieChart} />
        </button>
             <span className='button-title'>Chart</span>
             </div>
    );
}

export default Chart;