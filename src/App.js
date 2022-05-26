import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'; 
import Slide from './Components/Carousel/Slide'; 
import ItemListContainer from './Components/ListaProductos/ItemListContainer';

function App() {
  return (
    <>
    <div className="NavBar">
      
        <NavBar/>
           
    </div>
    <div> 
        <Slide/> 
    
        <div className='contenedor'> 
          <ItemListContainer/>
        </div>   
    </div>
    </>
  );
}

export default App;
