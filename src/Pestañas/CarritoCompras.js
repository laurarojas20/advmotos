import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CarritoContexto } from "../Contexto/CarritoContexto";
import Slide from "../Components/Carousel/Slide"

const CarritoCompras = () => {
  const { carritoProductos } = useContext(CarritoContexto)

  return(
  <>
  <div className="contenedor">
  <div className="Nombre">
    <Slide />
  </div>
    <div className="Imagenes">
      <h3> Carrito de compras </h3>
      {carritoProductos.map( (item) => {
        return(
          <>
          <div className="productosCarrito" key={item.id}>
          
            <img src={item.imagen} alt={item.nombre} style={{ width: '10rem'}}/>
          
          <div>  
            <p> {item.nombre} </p>
            <p> ${item.precio} </p>
            <Button variant="dark"> Eliminar </Button>
          </div>
            
          </div>
          </>
        )
      }       
      )}
      <Button variant="dark"> Pagar </Button> 
    </div>
  </div>
  </> 
  )
}

export default CarritoCompras; 