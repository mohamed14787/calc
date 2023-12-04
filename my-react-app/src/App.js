import logo from './logo.svg';
import './App.css';
import Row from './row'; 
import Box from './box';

const itema=[[1,2,3,"+"],[4,5,6,"-"],[7,8,9,"*"],[10,11,12,"/"], [13,14,15,"="]];

function App() {
  return (<div >

<h1>hello</h1>
<div className="row-posters">
  <div className='boxy'>
  <Box  title={1}/>
  </div>
  
  <Box className="box" title={2}/>
  <Box className="box" title={3}/>
  </div>
{itema.map(item => (
              <Row items={item}  />
            ))};

 
    
    
   
  </div>
   
  );
}

export default App;
