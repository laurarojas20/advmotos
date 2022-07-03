import './EstilosPestañas/EstilosPestañas.css'
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CarritoContexto } from "../Contexto/CarritoContexto";
import Slide from "../Components/Carousel/Slide"
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom"
import ModalPagar from "../Components/ModalPagar/ModalPagar";

const CarritoCompras = () => {
  const { carritoProductos, eliminarProducto, vaciarCarrito, precioTotal } = useContext(CarritoContexto)

  return(
  <>
    <div className="contenedor">
      <h3> Carrito de compras </h3>
      <br /> 
    <div className="Nombre">
      <Slide />
    </div>
      
    <div className="tablaCarrito">        
      <Table striped bordered hover variant="dark">
        <thead>
        <tr>
          <th>  </th>
          <th> Producto </th>
          <th> Precio </th>
          <th> Cant. </th>
          <th> Subtotal </th>
          <th> </th>
        </tr>
        </thead>
        
        <tbody>
          {carritoProductos.length === 0 && (
            <> 
            <tr>
            <td colSpan={6}> Aún no tienes productos agregados a tu carrito </td>
            </tr>
            <tr> <td colSpan={6}> 
            Puedes encontrar el accesorio que buscas aquí -  
            <Link to="/accesorios/portaequipaje" > Portaequipajes y baules </Link>
            </td> </tr>
            <tr> <td colSpan={6}> <img src="./img/esperandoAndo.jpg" alt="Esperando ando" className="container-centrar-carrito" /> </td>  </tr>
            
            </>  
          )}

         {carritoProductos.map( (item) => {
          return(
              <tr key={item.id}>
                <td> <img src={item.img} alt={item.nombre} style={{ width: '3rem'}}/> </td>
                <td> { item.nombre } </td>
                <td> $ { item.precio } </td>
                <td> { item.contador } </td>
                <td> $ { item.precio * item.contador } </td>
                <td> 
                  <Button 
                  onClick= { () => { eliminarProducto(item) } }
                  variant="dark"> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg> 
                  </Button> 
                </td>
              </tr>
          )} )} 
        {carritoProductos.length > 0 && (
          <> 
          <tr>
            <td>  </td>
            <td colSpan={3}>Monto total de tu compra </td> 
            <td colSpan={2}>$ { precioTotal() } </td>
          </tr>
          </>
        ) }
        </tbody>
        </Table>

      { carritoProductos.length > 0 && (
      <div className="botonPagar">
        <Button
        onClick= { () => { vaciarCarrito() } } 
        variant="danger" 
        style={{marginLeft: '5%'}}> 
        Borrar todo 
        </Button>
        <ModalPagar
            variant="dark" 
            style={{marginLeft: '5%'}}
        >
            Pagar 
        </ModalPagar>
      </div>
      ) }
      </div>
    </div>
  </> 
  ) 
}

export default CarritoCompras; 