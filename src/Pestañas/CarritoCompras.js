import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CarritoContexto } from "../Contexto/CarritoContexto";
import Slide from "../Components/Carousel/Slide"

const CarritoCompras = () => {
  const { carritoProductos, eliminarProducto, vaciarCarrito } = useContext(CarritoContexto)
 
  return(
  <>
  <div className="contenedor">
  <h3> Carrito de compras </h3>
  <br /> 
  <div className="Nombre">
    <Slide />
  </div>
    <div className="Imagenes">
      
      {carritoProductos.map( (item) => {
        return(
          <>
          <div className="contenedorProdCarrito">
          <div className="imagenesCarrito" key={item.id}>
          
            <img src={item.img} alt={item.nombre} style={{ width: '80%'}}/>
          
          </div>
          <div className="prodEnCar">  
            <h4> {item.nombre} </h4>
            <p> ${item.precio} </p>
            <Button 
              onClick= { () => { eliminarProducto() } }
              variant="dark"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg> 
            </Button>
          </div>
          </div>  
          
          </>
        )
      }       
      )}
      <div className="botonPagar">
      <Button
          onClick= { () => { vaciarCarrito() } } 
          variant="danger" 
          style={{marginLeft: '5%'}}> 
          Borrar todo 
      </Button>
      <Button 
          variant="dark" 
          style={{marginLeft: '5%'}}> 
          Pagar 
      </Button> 
      </div>
    </div>
  </div>
  </> 
  )
}

export default CarritoCompras; 