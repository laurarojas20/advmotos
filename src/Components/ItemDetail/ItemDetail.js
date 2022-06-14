import { Container, Button } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CarritoContexto } from "../../Contexto/CarritoContexto";


const ItemDetail = ({producto}) => {
    const [mostrarBoton, setMostrarBoton ] = useState(false)
    const { agregarAlCarrito } = useContext(CarritoContexto)
    

    const agregarCarrito = (contador) =>{        
        toast(`Agregaste ${contador} ${producto.nombre}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
        agregarAlCarrito({...producto, contador})
}

    return (
    <Container>
        <div className="ContenedorDetalle">
            <div className="Imagenes">
            <img src= {` ${producto.img} ` } alt = {` ${producto.nombre} ` } className="anchoTotal" />
            </div>
            <div className="Nombre">
                <h3> {producto.nombre} </h3>
                <hr/> 
                <h4> ${producto.precio} </h4>
            
        {mostrarBoton === false ? 
            <div>
            <ItemCount  
            agregarCarrito={ agregarCarrito } 
            cantidad={10}
            setMostrarBoton={ setMostrarBoton }
            />
            </div>
        :
            <Button variant="dark"><Link to={`/carrito`}> Pagar </Link></Button>            
        }

            <hr /> 
                <h3> Descripción </h3>
        <p>
            {producto.descripcion}
        </p>    
        <div>
        
                 
            
        </div>

            </div>
        </div>
    </Container>
    )
}

export default ItemDetail