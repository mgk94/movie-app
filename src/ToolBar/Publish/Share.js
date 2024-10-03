import { faShare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Share(props) {
    return (
      <div className='button-content'>
        <button className='button-style'>
          <FontAwesomeIcon icon={faShare}  /> 
          </button>
             <span className='button-title'>Share</span>
             </div>
    );
}

export default Share;