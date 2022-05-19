import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'; 
import Slide from './Components/Carousel/Slide'; 
import ListaProductos from './Components/ListaProductos/CardStock';

function App() {
  return (
    <>
    <div className="NavBar">
      
        <NavBar/>
           
    </div>
    <div> 
        <Slide/> 
    
        <div className='contenedor'> 
          <ListaProductos/>
        </div>   
    </div>
    </>
  );
}

export default App;
