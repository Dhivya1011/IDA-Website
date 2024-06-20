import './Style.css';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
function App() {
  return (
    <div className="App">
      <Navbar/>
          <Routes>
              <Route path='home' element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='service' element={<Service/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='signup' element={<Signup/>}/>
          </Routes>
     
    </div>
  );
}

export default App;
