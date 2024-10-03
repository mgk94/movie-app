import {  faCut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Cut(props) {
    return (
        <div className='button-content'>
        <button className='button-style'>
        <FontAwesomeIcon icon={faCut} />
        </button>
             <span className='button-title'>Cut</span>
             </div>
       
    );
}

export default Cut;