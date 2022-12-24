import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './home'; 
import Link1 from './link1';
import Link2 from './link2';
import Link3 from './link3';
import Link4 from './link4';

function App() {
  
  return (
    
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path= {'link1'} element={<Link1/>}/>
           <Route path= {'link2'} element={<Link2/>}/>
           <Route path= {'link3'} element={<Link3/>}/>
           <Route path= {'link4'} element={<Link4/>}/>
      </Routes>
    
  );
}

export default App;
