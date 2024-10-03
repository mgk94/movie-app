import React from 'react';
import NewVisuals from './NewVisuals';
import TextBox from './TextBox';
import MoreVisuals from './MoreVisuals';

function Insert(props) {
    return (
        <div className="toolbar-group">
              <div className="toolbar-content">
            <NewVisuals/>
            <TextBox/>
            <MoreVisuals/>
            </div>
            <span className="toolbar-title">Insert</span>
            
        </div>
    );
}

export default Insert;