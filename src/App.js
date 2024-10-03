
import './App.css';
import Calculations from './ToolBar/Calculations/Calculations';
import Clipboard from './ToolBar/ClipBoard/Clipboard';
import Data from './ToolBar/Data/Data';
import Insert from './ToolBar/Insert/Insert';
import Publish from './ToolBar/Publish/Publish';
import Queries from './ToolBar/Queries/Queries';
import Sensitivity from './ToolBar/Sensitivity/Sensitivity';






function App() {
  
  return (

  
<div className="toolbar">

        <Clipboard />
       

        <Data />
     
    
        <Queries />
      
 
        <Insert />
       
     
        <Calculations />
     
  
        < Sensitivity/>

        <Publish/>
    
      
</div>
    




  );
}

export default App;
