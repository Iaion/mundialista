import NavMnd from './componentes/NavMnd.js';
import Crew from './componentes/Crew.js';
import Barra from './componentes/BarraRedes.js';
import Cypher from './componentes/cypher.js';
import Discos from './componentes/Discos.js';
import Eventos from './componentes/Eventos.js';
import Videos from './componentes/Videos.js';


import {Routes, BrowserRouter as Router,  Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="background-image ">
      <NavMnd />
      <Barra/>
      <Routes>
         {/*<Route path='/' element={<Crew/>} ></Route>        
          <Route path='/' element={<Videos/>} ></Route>
  <Route path='/' element={<Discos/>} ></Route> */}
          <Route path='/Cypher' element={<Cypher/>} ></Route>    
          { /*<Route path='/' element={<Eventos/>} >
        </Route>   */} 
        </Routes>
    
    </div>
    </Router>
  );
}

export default App;
