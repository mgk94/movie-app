import React from 'react';
import Share from './Share';



function Publish(props) {
    return (
        <div className="toolbar-group">
               <div className="toolbar-content">
                <Share/>
          
            </div>
      <span className="toolbar-title">Publish</span>
         
            
        </div>
    );
}

export default Publish;