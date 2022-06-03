import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pestañas/Inicio';
import Indumentaria from './Pestañas/Indumentaria';
import Performance from './Pestañas/Performance';
import Detalle from './Pestañas/Detalle';
import ListaProductos from './Pestañas/ListaProductos';
import NoEncontrado from './Pestañas/NoEncontrado';


function App() {
  return (
    <div className='Container'>
  <BrowserRouter>
      <ToastContainer /> 
      <NavBar/>
        <Routes>
          <Route path='/' element= { <Inicio/ >} />
          <Route path='/indumentaria' element= { <Indumentaria /> }/>
          <Route path='/performance' element= { <Performance /> }/>
          <Route path='/producto/:id' element= { <Detalle /> }/>
          <Route path='/accesorios/:categoria' element= { <ListaProductos />} />
          <Route path='*' element= { <NoEncontrado /> }/>

        </Routes>
  
  </BrowserRouter>
    </div>
  );
}

export default App;
