import React from 'react';
import GetData from './GetData';

function Data(props) {
    return (
        <div className="toolbar-group">
              <div className="toolbar-content">
            <GetData/>
            </div>
      <span className="toolbar-title">Data</span>
            
        </div>
    );
}

export default Data;