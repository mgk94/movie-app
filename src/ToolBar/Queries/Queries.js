import React from 'react';
import TransformationData from './TransformationData';
import Refresh from './Refresh';


function Queries(props) {
    return (
        <div className="toolbar-group">
               <div className="toolbar-content">
            <TransformationData/>
            <Refresh/>
            </div>
      <span className="toolbar-title">Queries</span>
         
            
        </div>
    );
}

export default Queries;