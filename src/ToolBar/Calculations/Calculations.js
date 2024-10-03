import React from 'react';
import NewMeasure from './NewMeasure';
import QuickMeasure from './QuickMeasure';

function Calculations(props) {
    return (
        <div className="toolbar-group">
<div className='toolbar-content'>           
             <NewMeasure/>
            <QuickMeasure/>
            </div>
      <span className="toolbar-title">Calculation</span>
            
        </div>
    );
}

export default Calculations;