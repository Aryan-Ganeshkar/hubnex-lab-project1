
import './App.css';
import Home from './Component/Home';
import Card from './Component/Card';
import Customer from './Component/Customer';
import Service from './Component/Service';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accordion from './Component/Accordion';
import Navs from './Component/Navs';
import Brands from './Component/Brands';
import System from './Component/System';
import Succes from './Component/Succes';
import Header from './Component/Header';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Header/>}></Route>
            <Route path='/brands' element={<Brands/>}> </Route>
            <Route path='/system' element={<System/>}> </Route>
            <Route path='/card' element={<Card/>}> </Route>
            <Route path='/customer' element={<Customer/>}> </Route>
            <Route path='/succes' element={<Succes/>}> </Route>
            <Route path='/accordion' element={<Accordion/>}> </Route>
            <Route path='/service' element={<Service/>}> </Route>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
