import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './home'; 
import Link1 from './link1';
function App() {
  
  return (
    
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path= {'link1'} element={<Link1/>}/>
      </Routes>
    
  );
}

export default App;
