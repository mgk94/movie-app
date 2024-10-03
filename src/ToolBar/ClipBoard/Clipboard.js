import React from 'react';
import Copy from './Copy';
import Cut from './Cut';
import Paste from './Paste';

function Clipboard(props) {
    return (
        
<div className='toolbar-group'>
<div className='toolbar-content'>
            <Copy/>
            <Cut/>
            <Paste/>
      </div>
      <span className='toolbar-title'>Clipboard</span>

           
            
        </div>
                   
    );
}

export default Clipboard;